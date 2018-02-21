import json
from bs4 import BeautifulSoup
from pprint import pprint
import requests

# r = requests.get("https://findlaygathering.com/menus/")
# data = r.text
# soup = BeautifulSoup(data, "lxml")
#
# with open('../../fixtures/menus.html', 'w') as file:
#     file.write(str(soup))


with open('../../fixtures/menus.html', 'r') as file:
    soup = BeautifulSoup(file, 'lxml')


lunch_items = soup.find(id="lunch")
dinner_items = soup.find_all(id="lunch")
spirit_items = soup.find_all(id="wine_anvil")


menu_items = lunch_items.find_all(class_='fdm-item-panel')
for item in menu_items:
    title = item.find(class_='fdm-item-title')
    contents = str(item.find(class_='fdm-item-content'))
    # print(contents, '\n')
    description = contents.replace('<div class="fdm-item-content">','')\
                          .replace('</div>', '')\
                          .replace('<p>', '')\
                          .replace('</p>', '')\
                          .replace('<br/>', '').replace('&amp;', '&')
    print(title.string, '\n', description, '\n')
    # print(type(description), '\n')

