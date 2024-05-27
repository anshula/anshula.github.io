#!/opt/homebrew/bin/python3

import os
from shutil import move, rmtree
from bs4 import BeautifulSoup
from PIL import Image 

target_dir = "/Users/anshulagandhi/Library/CloudStorage/OneDrive-Personal/Code/anshula.github.io/compactness/"

soup = BeautifulSoup(open("index.html"), features="html.parser") 
counter = 0

# Create 'img' directory if it doesn't exist
os.makedirs("img", exist_ok=True)

# Find all images in the file
for link in soup.findAll("img"):
  old_file_name = link['src']
  img_extension = os.path.splitext(old_file_name)[-1]

  # Construct new file name and path
  new_file_name = f"{counter}{img_extension}"
  new_file_path = os.path.join("img", new_file_name)

  # Rename and move the image file
  os.rename(old_file_name.replace("%20", " "), new_file_path.replace("%20", " "))

  # Compress the image file
  image = Image.open(new_file_path)
  width, height = image.size
  if width > 700: image = image.resize((700, int(height/width*700)))
  image.save(new_file_path, subsampling=0, quality = 50)

  # Update the link in the <img> tag
  link['src'] = new_file_path

  # Set a blank alt attribute to decorative images, so screen readers skip over it
  if not link.has_attr("alt"): link['alt'] = ""

  # Increment counter for the next image
  counter += 1

# Save the modified HTML file
with open("index.html", "w") as html_file:
  html_file.write(str(soup))

# Clear any unused images
for filename in os.listdir():
  if filename.endswith(('.jpg', '.jpeg', '.png', '.gif')):  # Add more image extensions if needed
      os.remove(filename)

# Clear unused CSS file
rmtree("css")

# Remove old index and img folder from compactness folder
try:
  os.remove(target_dir + "index.html")
  rmtree(target_dir + "img")
except FileNotFoundError: pass

# Move our index and image folder
move("img", target_dir + "img")
move("index.html", target_dir + "index.html")
