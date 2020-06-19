let lum = 0
basic.forever(function () {
    lum = 0
    basic.clearScreen()
    lum = input.lightLevel()
    if (lum <= 100) {
        basic.showIcon(IconNames.Heart)
    }
})
