import os
import shutil
from PIL import Image

real_dir = os.path.join("public", "images", "real")
enh_dir = os.path.join("public", "images", "enhanced")
os.makedirs(enh_dir, exist_ok=True)

# Delete fake hd directory and old download script
hd_dir = os.path.join("public", "images", "hd")
if os.path.exists(hd_dir):
    shutil.rmtree(hd_dir, ignore_errors=True)
    print("Deleted public/images/hd", flush=True)

old_script = os.path.join("scripts", "download_hd.js")
if os.path.exists(old_script):
    os.remove(old_script)
    print("Removed scripts/download_hd.js", flush=True)

# Key mappings from original cconcepts.eu files in real_dir to target files in enh_dir
key_mappings = {
    "kicker-1.jpg": ["pepsi-kicker.jpg", "kicker-1.jpg"],
    "punica-mofa.jpg": ["punica-mofa.jpg"],
    "Retro-coffee-bike1-1.jpg": ["Retro-coffee-bike1-1.jpg"],
    "remundi-krombacher.jpg": ["remundi-krombacher.jpg", "remundi_grill_Stein.jpg"],
    "rockstar-snowboard.jpg": ["rockstar-snowboard.jpg"],
    "barrel.jpg": ["barrel.jpg"],
    "pepsi-becher.jpg": ["pepsi-becher.jpg"],
    "beratung.jpg": ["beratung.jpg"],
    "logistik.jpg": ["logistik.jpg"],
    "konfektion-1.jpg": ["konfektion-1.jpg", "konfektionierung.jpg"],
    "service01.png": ["service01.jpg", "service01.png", "perfect-match.jpg"],
    "team.jpg": ["team.jpg"],
    "CConcepts_Home.jpg": ["CConcepts_Home.jpg", "cconcepts-building.jpg"],
    "Aufblasbare-Torwand.jpg": ["Aufblasbare-Torwand.jpg"],
    "Ninebot-E-IceTea.jpg": ["Ninebot-E-IceTea.jpg"],
    "Lunchbox_mit_Brot_Gemuese_oder-Joghurt-Fach.png": ["Lunchbox_mit_Brot_Gemuese_oder-Joghurt-Fach.png"],
    "ReweCenterMannheim.jpg": ["ReweCenterMannheim.jpg"],
    "Gaming.jpg": ["Gaming.jpg"],
    "Produktion_barrel-2-1.jpg": ["Produktion_barrel-2-1.jpg"],
    "chio.jpg": ["logo-chio.jpg", "chio.jpg"],
    "funny.jpg": ["logo-funny.jpg", "funny.jpg"],
    "lipton.jpg": ["logo-lipton.jpg", "lipton.jpg"],
    "oasis-1.jpg": ["logo-oasis.jpg", "oasis-1.jpg"],
    "pepsi.jpg": ["logo-pepsi.jpg", "pepsi.jpg"],
    "punica.jpg": ["logo-punica.jpg", "punica.jpg"],
    "rockstar.jpg": ["logo-rockstar.jpg", "rockstar.jpg"],
}

for src_name, targets in key_mappings.items():
    src_path = os.path.join(real_dir, src_name)
    if not os.path.exists(src_path):
        print(f"Warning: {src_path} not found!", flush=True)
        continue
    
    try:
        with Image.open(src_path) as im:
            has_alpha = im.mode in ('RGBA', 'LA') or (im.mode == 'P' and 'transparency' in im.info)
            w, h = im.size
            
            # Upscale gracefully if needed
            if max(w, h) < 1200:
                scale = 1200 / max(w, h)
                new_w, new_h = int(w * scale), int(h * scale)
                im = im.resize((new_w, new_h), Image.Resampling.LANCZOS)
            
            for target_name in targets:
                target_path = os.path.join(enh_dir, target_name)
                if has_alpha and target_name.endswith('.png'):
                    im.save(target_path, "PNG", optimize=True)
                else:
                    rgb_im = im.convert("RGB")
                    rgb_im.save(target_path, "JPEG", quality=95, optimize=True)
                print(f"OK: {src_name} -> {target_name}", flush=True)
    except Exception as e:
        print(f"Error processing {src_name}: {e}", flush=True)

print("ALL AUTHENTIC IMAGES SUCCESSFULLY FIXED!", flush=True)
