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
for img_tag in soup.findAll("img"):
  old_file_name = img_tag['src']
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

  # Update the img_tag in the <img> tag
  img_tag['src'] = new_file_path

  # Move the alt text to a figcaption
  # img_parent = img_tag.parent 
  # if img_parent and img_parent.name != 'figure':   # if not already wrapped in a figure
    # fig = soup.new_tag('figure')
    # img_tag.wrap(fig)
  img_parent = img_tag.parent 
  if img_parent and img_parent.name != 'figure':  # if there is not already wrapped in a figure (and therefore has no fig caption)
    if img_tag.has_attr("alt"):                    # ...and there is an alt text ready...
      figcaption = soup.new_tag('figcaption')      # make it the figcaption
      figcaption.string = img_tag['alt']
      img_tag.insert_after(figcaption)

  # Set a alt text to blank, so screenreaders don't repeat the figcaption (if figcaption is there), and skip over it it's decorative (no ficaption)
  img_tag['alt'] = ""

  # Increment counter for the next image
  counter += 1

# Insert screen reader widget
widget = BeautifulSoup('''
    <script src="https://webreader.naturalreaders.com/nr-webreader.js" defer></script>
    <script>
        window.addEventListener("DOMContentLoaded", function() {
            if (typeof NRWebReader != 'undefined') {
                window['NRWebReader'] = new NRWebReader({
                widget_id: "prx8ek8e4z"  // DO NOT REMOVE. This is your widget ID for your WebReader
                });
            }
        }); 
    </script>
    ''', 'html.parser')
soup.body.append(widget)

# Save the modified HTML file
with open("index.html", "w") as html_file:
  html_file.write(str(soup))

# Clear any unused images
for filename in os.listdir():
  if filename.endswith(('.jpg', '.jpeg', '.png', '.gif')):  # Add more image extensions if needed
      os.remove(filename)

# Clear unused CSS file
move("css/style.css", target_dir + "css/style.css")
rmtree("css")

# Remove old index and img folder from compactness folder
try:
  os.remove(target_dir + "index.html")
  rmtree(target_dir + "img")
except FileNotFoundError: pass

# Move our index and image folder
move("img", target_dir + "img")
move("index.html", target_dir + "index.html")
