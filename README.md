# Web Design @cmda-minor-web 1819
Echte dingen voor echte mensen.

## Doof en doof
Als iemand doof is dan kan deze niet horen.  
Wanneer iemand doof wordt verklaard verschilt heel erg per land.  
Sommige mensen worden doof geboren en anderen worden doof door een ongeluk, een virus of andere oorzaken.  

Mensen die op latere leeftijd doof worden duiden zichzelf vaak aan als 'doof' met een kleine letter d.  
Deze zien doof zijn vaak als een handicap en zien een gemis in het feit dat zij hun gehoor verloren zijn.  

Mensen die doof geboren worden zien zichzelf vaak als 'Doof' met een hoofdletter d.  
Niet kunnen horen zien zij als een eigenschap, net zoals andere de kleur van hun ogen zouden zien als een eigenschap.  
Zij geven met het woord 'Doof' aan dat ze onderdeel zijn van de dovengemeenschap en cultuur.  
Gebarentaal is hun taal en het niet hebben van gehoor is voor hun niet zo zeer een handicap.  

## Doven en gehoorschade
Verder is er veel informatie op de pagina van de [World Health Organization informatie over Doven en gehoorschade](https://www.who.int/health-topics/news-room/fact-sheets/detail/deafness-and-hearing-loss).  
Zo zijn naar hun schatting ongeveer 466 miljoen mensen op de wereld met een gehoor handicap.  
Zij denken dat dit groeit naar 900 miljoen in de komende 30 jaar.  
Een gigantisch grote groep mensen dus!  

## Onderzoek
Het [meest interssante](https://www.sciencedaily.com/releases/2014/08/140828091247.htm) wat ik vond kwam van de Duitse universiteit Saarland.  
Geanimeerde karakters die content kunnen laten zien door middel van gebarentaal.  
Op deze manier hoeft de gebruiker niet de schrijftaal machtig te zijn.  

[Hearing like me](https://www.hearinglikeme.com/5-ways-to-make-websites-more-accessible-for-deaf-people/) heeft een blog wat gaat over doven en slechthorende.  
Hierin stellen zij 5 verschillende tips om website beter te maken voor doven.  
Helaas staat hier niet direct iets in waar ik wat aan heb, maar ik zou altijd in deze richting kunnen denken.  
Zo zou ik de problemen aan kunnen pakken die zij kunnen hebben bij het kijken van video's, door bijvoorbeeld het verbeteren van de ondertiteling.   
Het verbeteren van artikelen/stukken tekst is ook mogelijk.  
Zo zou ik de verschillende impliciete lagen achter de tekst kunnen weergeven.  
Dit kan door het versimpelen van de tekst of door de context of gevoel te weergeven door middel van beeld.  

## Oplossingsrichtingen
Op het gebied van tekst lijkt het mij interessant om iets zoals [Sentiment analysis](https://en.wikipedia.org/wiki/Sentiment_analysis) te gebruiken.  
Na wat onderzoek heb ik meerdere manieren gevonden.   

De eerste is [IBM Watson](https://www.ibm.com/watson/services/tone-analyzer/) die de toon van teksten analyseert en vervolgens clasifiseert in een of meerdere tonen zoals 'Angstig', 'Boos', 'Blij' of bijvoorbeeld 'Analytisch'.  
Een groot voordeel va IBM Watson is dat deze ook mogelijkheden heeft om [Spraak naar tekst](https://www.ibm.com/watson/services/speech-to-text/) om te zetten.

Verder heb ik ook diverse nodejs manieren gevonden om dit lokaal te draaien. Dit is voor mijn opdracht misschien wat handiger.  
Zo kan dit onder andere gedaan worden door de [Sentiment](https://www.npmjs.com/package/sentiment)-package op Node JS. Wat de tone-of-voice uit een stuk tekst haalt.  
[De manier waarop](https://medium.com/justcodeblog/multilanguage-sentiment-analysis-in-node-js-42464614c97e) dit gebeurd is ook erg interessant om over te lezen.  
Binnen nodejs is ook wat mogelijk qua speech to text al moet ik daar nog goed naar kijken.

Voor video's is het goed mogelijk om de eerder gemelde IBM Watson speech-to-text te gebruiken.  
Dit kan vervolgens gebruikt worden als transcriptie/ondertiteling voor de video.  

Andere mogelijke interessante oplossingen voor nog niet ontdekte problemen kunnen zijn:  
* Notificaties met licht/geluid  
* Tekst naar gebarentaal
* Geluid harder maken of vertragen (voor slechthorende)
* Gevoel van geluid overbrengen (hardheid, tone-of-voice)

## Interessant
[Ava.me](https://www.ava.me/)
[Google Transcribe](https://cloud.google.com/speech-to-text/)
[Convo](https://www.convorelay.com/)
[Ted Talk transcripts](https://www.ted.com/talks/ken_robinson_says_schools_kill_creativity/transcript)
