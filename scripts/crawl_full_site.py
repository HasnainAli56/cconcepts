import urllib.request
import re
import os
import json
import ssl
from PIL import Image, ImageEnhance

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

urls = [
    'https://cconcepts.eu/',
    'https://cconcepts.eu/uber-uns/',
    'https://cconcepts.eu/full-service-leistungen/',
    'https://cconcepts.eu/full-service-leistungen/planung-beratung/',
    'https://cconcepts.eu/full-service-leistungen/logistik-lagerung/',
    'https://cconcepts.eu/full-service-leistungen/konfektionierung/',
    'https://cconcepts.eu/full-service-leistungen/full-service-fur-werbeartikel/',
    'https://cconcepts.eu/werbeartikel-produkte/',
    'https://cconcepts.eu/werbeartikel-produkte/konstruktionen-und-sonderanfertigungen/',
    'https://cconcepts.eu/werbeartikel-produkte/messeauftritte/',
    'https://cconcepts.eu/werbeartikel-produkte/promotion-events/',
    'https://cconcepts.eu/werbeartikel-produkte/werbeaktionen/',
    'https://cconcepts.eu/werbeartikel-produkte/streuartikel-give-aways/',
    'https://cconcepts.eu/werbeartikel-produkte/gewinnspiele-verlosung/',
    'https://cconcepts.eu/kontakt/',
    'https://cconcepts.eu/impressum/',
    'https://cconcepts.eu/datenschutzerklarung/',
    'https://cconcepts.eu/agb/'
]

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
all_images = set()
pages_data = {}

os.makedirs('public/images/real', exist_ok=True)
os.makedirs('public/images/enhanced', exist_ok=True)

print("Starting crawl of cconcepts.eu...", flush=True)
for u in urls:
    try:
        req = urllib.request.Request(u, headers=headers)
        with urllib.request.urlopen(req, timeout=8, context=ctx) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
        
        t = re.search(r'<title>(.*?)</title>', html)
        title = t.group(1) if t else u

        headings = re.findall(r'<h[1-3][^>]*>(.*?)</h[1-3]>', html)
        clean_headings = [re.sub(r'<[^>]+>', '', h).strip() for h in headings if h.strip()]

        paragraphs = re.findall(r'<p[^>]*>(.*?)</p>', html)
        clean_p = [re.sub(r'<[^>]+>', '', p).strip() for p in paragraphs if len(p.strip()) > 20]

        imgs = re.findall(r'https?://[^\s\"\'\<\>]+wp-content/uploads/[^\s\"\'\<\>]+', html)
        page_imgs = []
        for img in imgs:
            clean_img = re.sub(r'-\d+x\d+(\.[a-zA-Z]{3,4})$', r'\1', img)
            clean_img = clean_img.split('?')[0]
            clean_img = clean_img.replace('\\', '')
            if clean_img.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')) and not clean_img.endswith(('cropped-logo-1-32x32.png', 'cropped-logo-1-192x192.png')):
                all_images.add(clean_img)
                page_imgs.append(clean_img)
        
        pages_data[u] = {
            'title': title,
            'headings': clean_headings[:8],
            'paragraphs': clean_p[:8],
            'images': list(set(page_imgs))
        }
        print(f"OK: {u} -> {len(page_imgs)} images, {len(clean_headings)} headings", flush=True)
    except Exception as e:
        print(f"Error {u}: {e}", flush=True)

with open('site_content_data.json', 'w', encoding='utf-8') as f:
    json.dump(pages_data, f, ensure_ascii=False, indent=2)

print(f"\nTotal unique images discovered: {len(all_images)}", flush=True)

def enhance_img(in_path, out_path):
    try:
        with Image.open(in_path) as im:
            im = im.convert("RGB")
            w, h = im.size
            if max(w, h) < 1200:
                scale = 1200 / max(w, h)
                new_w, new_h = int(w * scale), int(h * scale)
                im = im.resize((new_w, new_h), Image.Resampling.LANCZOS)
            
            sharp = ImageEnhance.Sharpness(im).enhance(1.4)
            color = ImageEnhance.Color(sharp).enhance(1.08)
            contrast = ImageEnhance.Contrast(color).enhance(1.06)
            contrast.save(out_path, "JPEG", quality=92, optimize=True)
            return True
    except Exception as e:
        print(f"Enhance error for {in_path}: {e}", flush=True)
        return False

for img_url in sorted(all_images):
    filename = os.path.basename(img_url.split('?')[0])
    raw_path = os.path.join('public/images/real', filename)
    enh_path = os.path.join('public/images/enhanced', os.path.splitext(filename)[0] + '.jpg')
    
    if not os.path.exists(raw_path):
        try:
            req = urllib.request.Request(img_url, headers=headers)
            with urllib.request.urlopen(req, timeout=10, context=ctx) as r, open(raw_path, 'wb') as f:
                f.write(r.read())
            print(f"Downloaded: {filename}", flush=True)
        except Exception as e:
            print(f"Failed to download {img_url}: {e}", flush=True)
            continue

    if os.path.exists(raw_path) and not os.path.exists(enh_path):
        enhance_img(raw_path, enh_path)

print("Crawl, download, and enhancement complete!", flush=True)
