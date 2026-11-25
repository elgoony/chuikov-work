// ДАННЫЕ САЙТА — единственное место, где лежат работы и тексты.
// Картинка работы: assets/img/<v>.jpg (v — ID видео на Vimeo).
// Размер плитки на сетке 12 колонок: size:[колонки, ряды] (ряд = 150px).
window.SITE = {

works: [
 {id:'deadmau5',brand:'WoT Blitz × deadmau5',title:{en:'“Familiars” — music video',de:'„Familiars“ — Musikvideo'},kind:'mv',role:{en:'Edit',de:'Schnitt'},credit:{en:'Director Anton Shavkero · VFX AVE, CLAN, PLAYSENSE',de:'Regie Anton Shavkero · VFX AVE, CLAN, PLAYSENSE'},award:{en:'Gold + 3× Silver · Collision Awards 2025',de:'Gold + 3× Silber · Collision Awards 2025'},stat:{en:'1.3M views on YouTube',de:'1,3 Mio. Aufrufe auf YouTube'},v:1035532917,size:[6,4]},
 {id:'mercem',brand:'Nike',title:{en:'Mercurial Superfly — “Merc ’Em”',de:'Mercurial Superfly — „Merc ’Em“'},kind:'com',role:{en:'Edit · Sound',de:'Schnitt · Sound'},credit:{en:'Director Anton Shavkero · Art direction CLAN',de:'Regie Anton Shavkero · Art Direction CLAN'},v:1204149426,vert:1,size:[3,4]},
 {id:'breakem',brand:'Nike',title:{en:'The Break ’Em Pack',de:'The Break ’Em Pack'},kind:'com',role:{en:'Edit · Sound',de:'Schnitt · Sound'},credit:{en:'Director Anton Shavkero · Art direction CLAN',de:'Regie Anton Shavkero · Art Direction CLAN'},v:1213912534,vert:1,size:[3,4]},
 {id:'fc26',brand:'Nike × EA Sports',title:{en:'FC26',de:'FC26'},kind:'com',role:{en:'Edit',de:'Schnitt'},credit:{en:'Director Anton Shavkero · Art direction CLAN',de:'Regie Anton Shavkero · Art Direction CLAN'},v:1123850456,size:[4,3]},
 {id:'puma',brand:'PUMA',title:{en:'“Speedcat”',de:'„Speedcat“'},kind:'com',role:{en:'Edit',de:'Schnitt'},credit:{en:'Director Anton Shavkero · CGI/VFX CLAN × AVE',de:'Regie Anton Shavkero · CGI/VFX CLAN × AVE'},award:{en:'Official Selection · Berlin Commercial 2025',de:'Official Selection · Berlin Commercial 2025'},v:1057589932,size:[5,3]},
 {id:'wnba',brand:'WNBA',title:{en:'Basketball season spot',de:'Basketball-Saisonspot'},kind:'com',role:{en:'Edit',de:'Schnitt'},credit:{en:'Production Mayda · Director Anton Shavkero',de:'Produktion Mayda · Regie Anton Shavkero'},v:834011153,size:[3,3]},
 {id:'milky',brand:'Milky Chance',title:{en:'“Living in a Haze” — music video',de:'„Living in a Haze“ — Musikvideo'},kind:'mv',role:{en:'Edit · VFX',de:'Schnitt · VFX'},credit:{en:'Production Stink Rising · Director Alena Shevchenko',de:'Produktion Stink Rising · Regie Alena Shevchenko'},stat:{en:'18M views on YouTube',de:'18 Mio. Aufrufe auf YouTube'},v:804968976,size:[5,3]},
 {id:'skechers',brand:'Deichmann × Skechers',title:{en:'Campaign film',de:'Kampagnenfilm'},kind:'com',role:{en:'Edit · VFX',de:'Schnitt · VFX'},credit:{en:'Production Represent Film · Director Ilya Cherepitsa',de:'Produktion Represent Film · Regie Ilya Cherepitsa'},v:802661652,size:[4,3]},
 {id:'bumble',brand:'Bumble',title:{en:'Brand film',de:'Markenfilm'},kind:'com',role:{en:'Edit · VFX',de:'Schnitt · VFX'},credit:{en:'Production Studio 11:40 · Director Alena Shevchenko',de:'Produktion Studio 11:40 · Regie Alena Shevchenko'},v:832454688,size:[3,3]},
 {id:'fc25',brand:'Nike × EA Sports',title:{en:'FC25',de:'FC25'},kind:'com',role:{en:'Edit',de:'Schnitt'},credit:{en:'Director Anton Shavkero · Art direction CLAN',de:'Regie Anton Shavkero · Art Direction CLAN'},v:1012496518,size:[12,3]}
],

// Бренды (кремовые) и артисты (лаймовые) в блоке About
brands: ['Nike','Ray-Ban','PUMA','EA Sports','Calvin Klein','Volkswagen','TikTok','Xiaomi'],
artists: ['A$AP Rocky','deadmau5','Milky Chance'],

contacts: {
 email:'chuikoveditor@gmail.com',
 telegram:'https://t.me/qatcha',
 instagram:'https://www.instagram.com/kvadrate/',
 music:'https://onewoten.chuikov.work/'
},

// Карточки наград: стиль orange / dark / lime, big — крупный заголовок
awards: [
 {t:'a1t',s:'a1s',d:'a1d',style:'orange',big:1},
 {t:'a2t',s:'a2s',d:'a2d',style:'dark',big:1},
 {t:'a3t',s:'a3s',d:'a3d',style:'dark'},
 {t:'a4t',s:'a4s',d:'a4d',style:'lime'}
],

text: {
 en:{role:'film editor & composer',work:'Work',about:'About',awards:'Awards',contact:'Contact',music:'I write music ↗',
  bio1:'Film editor and composer based in Berlin. I cut commercials, music videos and films with heavy CGI for production companies and CGI studios.',
  bio2:'My musical background drives the rhythm of every cut — I write the music and design the sound in the same pass as the edit.',
  brandsL:'Brands & artists',watch:'Watch on Vimeo',close:'Close',next:'Next',prev:'Previous',
  com:'Commercial',mv:'Music video',
  a1t:'Gold',a1s:'Collision Awards 2025',a1d:'Campaign — Media & Entertainment · WoT Blitz × deadmau5 “Hits Different”',
  a2t:'3× Silver',a2s:'Collision Awards 2025',a2d:'3D/CG Animation · Use of Music · Promotional Video — “Familiars”',
  a3t:'Official Selection',a3s:'Berlin Commercial 2025',a3d:'PUMA “Speedcat” — VFX/Animation',
  a4t:'Shortlist',a4s:'Berlin Commercial 2024',a4d:'PUMA “Velophasis” — VFX/Animation'},
 de:{role:'Film Editor & Komponist',work:'Arbeiten',about:'Über mich',awards:'Auszeichnungen',contact:'Kontakt',music:'Ich schreibe Musik ↗',
  bio1:'Film Editor und Komponist in Berlin. Ich schneide Werbespots, Musikvideos und Filme mit viel CGI für Produktionsfirmen und CGI-Studios.',
  bio2:'Mein musikalischer Hintergrund bestimmt den Rhythmus jedes Schnitts – Musik und Sounddesign entstehen bei mir im selben Arbeitsgang wie der Schnitt.',
  brandsL:'Marken & Artists',watch:'Auf Vimeo ansehen',close:'Schließen',next:'Weiter',prev:'Zurück',
  com:'Werbespot',mv:'Musikvideo',
  a1t:'Gold',a1s:'Collision Awards 2025',a1d:'Kampagne — Media & Entertainment · WoT Blitz × deadmau5 „Hits Different“',
  a2t:'3× Silber',a2s:'Collision Awards 2025',a2d:'3D/CG Animation · Use of Music · Promotional Video — „Familiars“',
  a3t:'Official Selection',a3s:'Berlin Commercial 2025',a3d:'PUMA „Speedcat“ — VFX/Animation',
  a4t:'Shortlist',a4s:'Berlin Commercial 2024',a4d:'PUMA „Velophasis“ — VFX/Animation'}
}
};
