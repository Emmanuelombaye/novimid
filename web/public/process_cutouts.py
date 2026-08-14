import os
from PIL import Image

def convert_grid_to_transparent(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    new_data = []
    for item in datas:
        r, g, b, a = item
        # Detect white/grey checkerboard pixels (high brightness, r,g,b very close)
        is_grey_or_white = (r > 195 and g > 195 and b > 195 and abs(r - g) < 15 and abs(g - b) < 15)
        if is_grey_or_white:
            new_data.append((255, 255, 255, 0)) # Make fully transparent
        else:
            new_data.append(item)

    img.putdata(new_data)
    
    # Crop tight around non-transparent object to allow maximum scaling inside card
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save(output_path, "PNG")
    print(f"Saved transparent cutout to {output_path}")

base = r"i:\ceo\novimid\web\public"
convert_grid_to_transparent(os.path.join(base, "Metabolic GLP-1.jfif"), os.path.join(base, "images", "novimid-card-glp1.png"))
convert_grid_to_transparent(os.path.join(base, "Peptide Therapy (Single Premium Vial).jfif"), os.path.join(base, "images", "novimid-card-peptide.png"))
convert_grid_to_transparent(os.path.join(base, "TRT.jfif"), os.path.join(base, "images", "novimid-card-trt.png"))
