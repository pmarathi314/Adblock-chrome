import requests
from bs4 import BeautifulSoup

URL = "https://raw.githubusercontent.com/anudeepND/blacklist/master/adservers.txt"
page = requests.get(URL)

text = page.text.split('\n')
text = text[10:len(text)]
with open("output.txt", "w") as external_file:
    for i,str in enumerate(text):
        #every url begins with 0.0.0.0
        text[i] = "*://*." + text[i].replace("0.0.0.0 ", "") + "/*"
    output = ", "
    output = output.join(text)
    print(output,file=external_file)