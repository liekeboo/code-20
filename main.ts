let code_9 = 0
let code_0 = 0
let code = 0
basic.showLeds(`
    . # # # .
    # . . . .
    # . . . .
    # . . . .
    . # # # .
    `)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && code == code_0) {
        let code_1 = 0
        basic.clearScreen()
        basic.pause(200)
        code_0 = code_1
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    }
    if (input.buttonIsPressed(Button.B) && code == code_0 || input.logoIsPressed() && code == code_0) {
        basic.clearScreen()
        basic.pause(200)
        code = code_9
    }
})
basic.forever(function () {
    if (code == code_9) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(1000)
        basic.showLeds(`
            . # # # .
            # . . . .
            # . . . .
            # . . . .
            . # # # .
            `)
        code = code_0
    }
})
