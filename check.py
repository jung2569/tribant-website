from pathlib import Path
from html.parser import HTMLParser
class Check(HTMLParser):
    def __init__(self):
        super().__init__(); self.ids=[]; self.links=[]; self.h1=0
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if 'id' in a:self.ids.append(a['id'])
        if tag=='h1':self.h1+=1
        if tag=='a' and a.get('href','').startswith('#'):self.links.append(a['href'][1:])
p=Path(__file__).parent/'dist'
s=(p/'index.html').read_text(encoding='utf-8')
c=Check();c.feed(s)
assert all(x in c.ids for x in c.links)
assert len(c.ids)==len(set(c.ids))
assert c.h1==1 and '{{' not in s and 'noindex' not in s and 'content="index,follow"' in s
assert '94.5' not in s and '36명 대상' in s
assert (p/'app.js').exists() and (p/'style.css').exists()
print('Passed: internal links, unique IDs, single H1, index/follow, survey context, assets.')
