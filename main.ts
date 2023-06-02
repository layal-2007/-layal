input.onGesture(Gesture.LogoDown, function () {
    basic.showNumber(num1 - num2)
})
input.onButtonPressed(Button.A, function () {
    num1 += 1
    basic.showNumber(num1)
})
input.onButtonPressed(Button.AB, function () {
    num1 = 0
    num2 = 0
    basic.clearScreen()
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showNumber(num1 + num2)
})
input.onButtonPressed(Button.B, function () {
    num2 += 1
    basic.showNumber(num2)
})
let num2 = 0
let num1 = 0
num1 = 0
num2 = 0
