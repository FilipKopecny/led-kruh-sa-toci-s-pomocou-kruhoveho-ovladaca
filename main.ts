pins.onPulsed(DigitalPin.P1, PulseValue.Low, function () {
    if (input.runningTime() - RunTime > 50) {
        Index += 1
        if (Index > 11) {
            Index = 0
        }
        RGB.clear()
        RunTime = input.runningTime()
    }
})
pins.onPulsed(DigitalPin.P2, PulseValue.Low, function () {
    if (input.runningTime() - RunTime > 50) {
        Index += -1
        if (Index < 0) {
            Index = 11
        }
        RGB.clear()
        RunTime = input.runningTime()
    }
})
let RunTime = 0
let Index = 0
let RGB: neopixel.Strip = null
RGB = neopixel.create(DigitalPin.P12, 12, NeoPixelMode.RGB_RGB)
RGB.clear()
Index = 0
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
RunTime = input.runningTime()
basic.forever(function () {
    RGB.setPixelColor(Index, neopixel.rgb(50, pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    1023,
    0,
    255
    ), 0))
    RGB.show()
})
