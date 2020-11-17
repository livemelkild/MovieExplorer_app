## Movie Explorer app

Movie Explorer er en applikasjon for både iphone og android. 
Her kan brukeren søke i en database med over 62 058 forskjellige 
filmer og filtrere etter ønsket sjanger og utgivelsesår. 
Ved å klikke på “mer info” på en film kan brukeren få opp 
info om utgivelsesår og tilhørende sjanger til filmen. 
Når et søk gir et større resultat kan brukeren bla seg 
videre med knappene nederst på appen. Appen baserer seg på React Native med Redux. 

## Tekonolgi

Mye av teknologien har basert seg på gjenbruk av prosjektet 3.
Backend ble urørt og satt over på vm for å slippe og starte den manuelt . 
Redux logikken brukte vi helt likt som i prosjekt 3 og komponentstrukturen 
ble også svært lik bortsett fra at HTML ble byttet ut med React Native syntax
annet enn HTML ble erstattet med React Native syntax. Fetchkallet vårt ble også 
funpusset for en mer “rikitg” kode.

### TredjepartsKomponenter

Med React Native er det flere muligheter til å benytte seg av mange forskjellige
tredjepartskomponenter. Vi har i dette prosjektet brukt “react-native-elements” 
ettersom det var god dokumentasjon og de hadde rammeverk for alle komponentene 
vi skulle ta i bruk. Derfor valgte vi bare å bruke react-native-elements 
ettersom prosjektet ikke skulle være for komplekst. Om vi hadde hatt mer 
tid at vi tatt i bruk en annen tredjepartskomponent til utformingen av 
selve kortene som filmene holdt seg inne i. Dette fordi vi opplevde at 
Iphone og Android responderte forskjellig til teknologien. Dette oppdaget 
vi dessverre litt for sent og det kunne vært bedre fulgt opp ved å benytte 
seg hyppigere av end-to-end testing. 

### Expo

I utviklingen har vi brukt expo-cli både for å initiere prosjektet gjennom expo 
init og for å manuelt brukerteste applikasjonen ende-til-ende på iOS og Android.

##Typescript

##React Native
Hoppet fra react til react native har ikke vært for stort ettersom oppsettet er nokså likt, bare ny syntax. Den store forskjellen var stylingen. 
I steden for å ha egne CSS filer så stylet vi direkte i komponenten. Dette var uvant, og koden 
bærer preg av lite egendesignet styling. Vi har lent oss mye på react-native-elements sine “stylinger”. 

##Testing
