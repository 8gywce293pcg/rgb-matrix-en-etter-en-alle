let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
strip.setBrightness(50)
strip.showRainbow(1, 768)
strip.show()
basic.forever(function () {
	
})
