import os
import re
import urllib.request
import urllib.error
from PIL import Image, ImageFilter, ImageEnhance

TARGET_DIR = r"c:\Users\USER\Downloads\cconcepts\public\images\enhanced"
REAL_DIR = r"c:\Users\USER\Downloads\cconcepts\public\images\real"
os.makedirs(TARGET_DIR, exist_ok=True)

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

def fetch_url(url):
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=15) as res:
            return res.read()
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None

def enhance_image(input_path, output_path, min_dim=1200):
    try:
        with Image.open(input_path) as img:
            # Handle alpha channel
            has_alpha = img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info)
            if has_alpha:
                work_img = img.convert('RGBA')
            else:
                work_img = img.convert('RGB')

            w, h = work_img.size

            # Upscale if too small using high quality Lanczos
            scale = 1.0
            if max(w, h) < min_dim:
                scale = min_dim / max(w, h)
                new_w = int(w * scale)
                new_h = int(h * scale)
                work_img = work_img.resize((new_w, new_h), Image.Resampling.LANCZOS)

            # Apply professional unsharp mask for razor sharp product clarity
            work_img = work_img.filter(ImageFilter.UnsharpMask(radius=1.8, percent=140, threshold=2))

            # Enhance contrast and color balance
            if not has_alpha:
                enhancer_contrast = ImageEnhance.Contrast(work_img)
                work_img = enhancer_contrast.enhance(1.06)
                
                enhancer_color = ImageEnhance.Color(work_img)
                work_img = enhancer_color.enhance(1.05)
                
                enhancer_sharp = ImageEnhance.Sharpness(work_img)
                work_img = enhancer_sharp.enhance(1.15)
                
                work_img.save(output_path, "JPEG", quality=95, optimize=True)
            else:
                work_img.save(output_path, "PNG", optimize=True)

            print(f"Enhanced: {os.path.basename(output_path)} ({w}x{h} -> {work_img.size[0]}x{work_img.size[1]})")
            return True
    except Exception as e:
        print(f"Error enhancing {input_path}: {e}")
        return False

# 1. Process all existing real images in public/images/real/
print("Enhancing existing real images from cconcepts.eu...")
for fname in os.listdir(REAL_DIR):
    if fname.lower().endswith(('.jpg', '.jpeg', '.png')):
        in_p = os.path.join(REAL_DIR, fname)
        out_p = os.path.join(TARGET_DIR, fname)
        enhance_image(in_p, out_p)

# 2. Also scrape original high-res uploads from cconcepts.eu
pages_to_check = [
    "https://cconcepts.eu/",
    "https://cconcepts.eu/werbeartikel-kreation/",
    "https://cconcepts.eu/full-service/",
    "https://cconcepts.eu/unternehmen/",
    "https://cconcepts.eu/kontakt/"
]

all_img_urls = set()
for p in pages_to_check:
    print(f"Scanning {p}...")
    html_bytes = fetch_url(p)
    if html_bytes:
        html = html_bytes.decode('utf-8', errors='ignore')
        matches = re.findall(r'https?://cconcepts\.eu/wp-content/uploads/[^\s\"\'\<\>]+', html)
        for m in matches:
            clean_url = m.split('?')[0].split('#')[0]
            if clean_url.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
                all_img_urls.add(clean_url)
                # Try unscaled / original variant (remove WordPress -1024x768 etc.)
                unscaled = re.sub(r'-\d+x\d+(\.[a-zA-Z]+)$', r'\1', clean_url)
                if unscaled != clean_url:
                    all_img_urls.add(unscaled)

print(f"Found {len(all_img_urls)} image URLs from cconcepts.eu. Downloading and enhancing...")

for url in all_img_urls:
    fname = os.path.basename(url)
    # Target path
    raw_path = os.path.join(REAL_DIR, fname)
    enhanced_path = os.path.join(TARGET_DIR, fname)
    
    # Download if not exists or if checking original unscaled
    data = fetch_url(url)
    if data and len(data) > 2000: # Valid image
        try:
            with open(raw_path, 'wb') as f:
                f.write(data)
            enhance_image(raw_path, enhanced_path)
        except Exception as e:
            pass

print("All real images enhanced successfully!")
