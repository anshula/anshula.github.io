from bs4 import BeautifulSoup

with open("compactness/index.html", encoding="utf-8") as f:
    soup = BeautifulSoup(f, features="html.parser")

for figcaption in soup.find_all("figcaption"):
    parent = figcaption.parent
    img_tag = None

    if parent and parent.name == "figure":
        img_tag = parent.find("img")
    if img_tag is None:
        img_tag = figcaption.find_previous_sibling("img")
    if img_tag is None:
        continue

    # collapse newlines/tabs/multiple spaces into single spaces
    img_tag["alt"] = " ".join(figcaption.get_text().split())
    figcaption.decompose()

    # unwrap <figure> if it now holds only the image
    if parent and parent.name == "figure":
        remaining = [c for c in parent.children if getattr(c, "name", None) or str(c).strip()]
        if len(remaining) == 1 and remaining[0] is img_tag:
            parent.unwrap()

with open("compactness/index_alt.html", "w", encoding="utf-8") as f:
    f.write(str(soup))