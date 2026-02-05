from PIL import Image
import os

def create_og_image():
    input_path = "public/images/wedding_couple.png"
    output_path = "public/og-image.jpg"
    
    try:
        # 1. Open source image
        img = Image.open(input_path).convert("RGBA")
        
        # 2. Create standard OG canvas (1200x630) with Oatmeal/Cream background
        # Using the theme color #E5E0D8 to match the site
        bg_color = (229, 224, 216) 
        canvas = Image.new("RGB", (1200, 630), bg_color)
        
        # 3. Calculate resize dimensions to fit nicely in the center
        # We want it to be about 500px high (leaving some padding)
        target_height = 500
        aspect_ratio = img.width / img.height
        new_width = int(target_height * aspect_ratio)
        
        img_resized = img.resize((new_width, target_height), Image.Resampling.LANCZOS)
        
        # 4. Paste centered
        x_offset = (1200 - new_width) // 2
        y_offset = (630 - target_height) // 2
        
        canvas.paste(img_resized, (x_offset, y_offset), img_resized)
        
        # 5. Save as optimized JPG
        canvas.save(output_path, "JPEG", quality=85, optimize=True)
        
        print(f"Successfully created {output_path}")
        print(f"File size: {os.path.getsize(output_path) / 1024:.2f} KB")
        
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    create_og_image()
