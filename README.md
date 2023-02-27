### @explicitHints false

## Introduksjon @unplugged
Her vil du lære å kode våre kule LED displayer. Målet er å sette på en og en LED!

## Steg 1: Lage en variabel for å få en tilfeldig LED til å lyse
Trykk på ``||Variabler: variabel ||`` fra blokkmenyen og klikk deretter ``||Variabler: lag en variabel ||`` og gi variabelen navnet ``||Variabler: LED NUMMER||``.
Trykk på ``||Variabler: variabel ||``, klikk og dra blokken ``||Variabler: Sett LED NUMMER ||`` og  slipp den inn i ``||basic: ved start ||`` blokken.
Sett verdi til 0. Denne blokken skal brukes for å telle alle LED.

```blocks
let LED_NUMMER = 1
```
## Steg 1: Definer noen neopixler @fullscreen
 Trykk på ``||Neopixel: Neopixel||`` fra blokkmenyen.
 Klikk og dra inn blokken ``||Neopixel: sett strip til ||`` og slipp den inn under ``||Variabler: Sett LED NUMMER ||`` blokken.
 Velg pinne ``||Neopixel: P0||`` og antall LED til ``||Neopixel: 768||`` la format stå som ``||Neopixel: RGB (GRB) ||``.
 Denne blokken brukes for å velge hvilken pinne som er koblet til LED, hvor mange LEDèr det er og hvilken type LED. 

```blocks
let LED_NUMMER = 1
let strip = neopixel.create(DigitalPin.P0, 768, NeoPixelMode.RGB)
```
## Steg 3: Sette lysstyrke så ikke vi trekker for mye strøm
Trykk på ``||Neopixel: Neopixel ||`` fra blokkmenyen.
Klikk og dra inn blokken ``||Neopixel: strip.setBrightness(0) ||`` plasser den under  ``||Neopixel: sett strip til ||``.
Sett verdien til max 50.  Er denne verdien for høyt kan det hende at det ikke vil virke. 
Denne blokken Gjør at vi kan justere lysstyrken.

```blocks
let LED_NUMMER = 1
let strip = neopixel.create(DigitalPin.P0, 768, NeoPixelMode.RGB)
strip.setBrightness(50)
```
## Steg 4: Slette minne i LED
Trykk på ``||Neopixel: Neopixel ||`` fra blokkmenyen.
Klikk og dra inn blokken ``||Neopixel: strip.clear ||`` plasser den under forrige blokk.
Denne blokken sletter tidligere data inni lysdidodene.

```blocks
let LED_NUMMER = 1
let strip = neopixel.create(DigitalPin.P0, 768, NeoPixelMode.RGB)
strip.setBrightness(50)
strip.clear()
```
## Steg 5: Sette opp løkker

Trykk på ``||Loops : Løkker ||`` fra blokkmenyen og klikk deretter ``||Loops: gjenta (4) ganger ||``.
Klikk og dra inn blokken ``||basic: gjenta for alltid ||``. Gjør dette 2 ganger og sett verdi i begge til 768.
Disse blokken brukes for å kunne telle til antall LED som skal lyse eller slukke.

```blocks
let LED_NUMMER = 1
let strip = neopixel.create(DigitalPin.P0, 768, NeoPixelMode.RGB)
strip.setBrightness(50)
strip.clear()
LED_NUMMER += -1
basic.forever(function () {
    for (let index = 0; index < 768; index++) {
}
    for (let index = 0; index < 768; index++) {
}
})
```
## Steg 6: Send informasjon til Neopixlene
Trykk på ``||Neopixel: Neopixel ||`` fra blokkmenyen og klikk deretter ``||Neopixel: mer ||``.
Klikk og dra inn blokken ``||Neopixel: strip set_Pixel_Color at 0 to Red ||`` plasser den inni begge ``||Loops: Gjenta (768) ganger ||`` blokkene.
Trykk på ``||Variabler: Variabler ||`` deretter klikk og dra inn blokken ``||Variabler: LED NUMMER ||`` inn i  blokken ``||Neopixel: strip set_Pixel_Color at 0 to Red ||`` i verdien 0.
Skift farge på den nederste ``||Neopixel: strip set_Pixel_Color at 0 to Red ||`` til svart (black).

```blocks
let LED_NUMMER = 1
let strip = neopixel.create(DigitalPin.P0, 768, NeoPixelMode.RGB)
strip.setBrightness(50)
strip.clear()
LED_NUMMER += -1
basic.forever(function () {
    for (let index = 0; index < 768; index++) {
    strip.setPixelColor(LED_NUMMER, neopixel.colors(NeoPixelColors.Red))
}
    for (let index = 0; index < 768; index++) {
    strip.setPixelColor(LED_NUMMER, neopixel.colors(NeoPixelColors.Black))
}
})
```
## Steg 7: Send informasjon til Neopixlene
Trykk på ``||Neopixel: Neopixel ||`` fra blokkmenyen.
Klikk og dra inn blokken ``||Neopixel: strip.show||`` plasser den nederst.
Denne blokken sender hvilken LED nummer og farge til LEDène som skal lyse.

```blocks
let LED_NUMMER = 1
let strip = neopixel.create(DigitalPin.P0, 768, NeoPixelMode.RGB)
strip.setBrightness(50)
strip.clear()
LED_NUMMER += -1
basic.forever(function () {
    for (let index = 0; index < 768; index++) {
    strip.setPixelColor(LED_NUMMER, neopixel.colors(NeoPixelColors.Red))
    strip.show()
}
    for (let index = 0; index < 768; index++) {
    strip.setPixelColor(LED_NUMMER, neopixel.colors(NeoPixelColors.Black))
    strip.show()
}
})
```
## Steg 8 Leste ned på microbiten
Trykk på ``||Variabler: variabel ||`` fra blokkmenyen og klikk deretter ``||Variabler: endre (LED_NUMMER med (1)) ||`` og gi sett denne under blokken ``||Neopixel: strip.show||`` i begge ``||Loops: Gjenta (768) ganger ||`` blokkene.

Sett Verdiene +1 ved fargen Rød, og verdien -1 ved fargen svart.

```blocks
let LED_NUMMER = 1
let strip = neopixel.create(DigitalPin.P0, 768, NeoPixelMode.RGB)
strip.setBrightness(50)
strip.clear()
LED_NUMMER += -1
basic.forever(function () {
    for (let index = 0; index < 768; index++) {
    strip.setPixelColor(LED_NUMMER, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    LED_NUMMER += 1
}
    for (let index = 0; index < 768; index++) {
    strip.setPixelColor(LED_NUMMER, neopixel.colors(NeoPixelColors.Black))
    strip.show()
    LED_NUMMER += -1
}
})
```
## Steg 9 justere hastigheten med pause blokken
Trykk på ``||Basic. Basis ||`` og klikk på ``||Basic. pause(100) ||`` blokken. Sett inn 2 stk. En i hver løkke under ``||Variabler: endre [LED_NUMMER] med ||`` blokkene.
Sett verdien til ønsket hastighet. 1000ms = 1 sekund.

```blocks

let LED_NUMMER = 1
let strip = neopixel.create(DigitalPin.P0, 768, NeoPixelMode.RGB)
strip.setBrightness(50)
strip.clear()
LED_NUMMER += -1
basic.forever(function () {
    for (let index = 0; index < 768; index++) {
    strip.setPixelColor(LED_NUMMER, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    LED_NUMMER += 1
    basic.pause(100)
}
    for (let index = 0; index < 768; index++) {
    strip.setPixelColor(LED_NUMMER, neopixel.colors(NeoPixelColors.Black))
    strip.show()
    LED_NUMMER += -1
    basic.pause(100)
}
})
```
## Steg 10 Laste ned på microbiten

hvis du har en @boardname@ tilkoblet, trykk ``|last ned|``!
Prøv nå også endre farge og hvilken LED som skal lyse for så å trykke ``|last ned|`` igjen.
For hver endring vi gjør i koden må det lastes ned på nytt til @boardname@. Dersom du ikke har en @boardname@ tilkoblet, må du gjøre de neste stegene også.

## Steg 11: Koble til micro:biten
For å kunne laste ned koden din til micro:biten med et klikk må du først få MakeCode til å skjønne at alle filer skal lastes ned direkte til den.
Det krever bare noen få, enkle steg.

## Steg 12: Prikkene ved siden av Last Ned-knappen

Start med å sjekke at micro:biten du skal bruke er koblet til PCen. Når den er koblet til, klikker du på de tre prikkene ved siden av ``|last ned|``-knappen

![Connect](https://raw.githubusercontent.com/InspiriaSCC/Superbit/master/static/Connect1.jpg)

## Steg 13: Connect-menyen @unplugged
Når du klikker på de tre prikkene dukker det oppe en liten meny. Dersom det står "Koble Fra" eller "Disconnect" på den øverste linjen, trenger du ikke å gjøre mer.
Da kjenner PCen og MakeCode igjen micro:biten fra tidligere, og du kan klikke ved siden av menyen og laste ned koden din ved å klikke på den store ``|last ned|``-knappen.

![Connect](https://raw.githubusercontent.com/InspiriaSCC/Superbit/master/static/Connect2b.jpg)


## Steg 14: Dersom MakeCode ikke kjenner micro:biten fra før
Dersom MakeCode ikke kjenner micro:biten fra før vil det stå "Connect device" eller "Koble til" på den øverste linjen.
Klikk i så fall på den øverste linjen i menyen.

![Connect](https://raw.githubusercontent.com/InspiriaSCC/Superbit/master/static/Connect2.jpg)


## Steg 15: Veiledningsvindu

Når du klikker på den øverste linjen dukker det opp et par veiledningsvinduer som tar deg gjennom tilkoblingsprosessen. De to første kan du bare trykke "Next" eller "Fortsett" på:

![Connect](https://raw.githubusercontent.com/InspiriaSCC/Superbit/master/static/Connect3.jpg)

![Connect](https://raw.githubusercontent.com/InspiriaSCC/Superbit/master/static/Connect4.jpg)


## Steg 16: Velg micro:biten

Etter at du har klikket "Next" to ganger dukker det opp en liste over tilgjengelige micro:biter. Det skal bare være én micro:bit på lista.
Klikk først på navnet til micro:biten så det blir merket med blått, og så på "Koble til".

![Connect](https://raw.githubusercontent.com/InspiriaSCC/Superbit/master/static/Connect5.jpg)

## Steg 17: Ferdig!

I det siste veiledningsvinduet klikker du på "Done" eller "Ferdig" om det står på norsk.
Etter det kan du laste ned kode direkte til micro:biten ved å klikke på den store, lilla ``|last ned|``-knappen nederst til venstre på skjermen i MakeCode:

![Connect](https://raw.githubusercontent.com/InspiriaSCC/Superbit/master/static/Connect6.jpg)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
