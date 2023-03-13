radio.onReceivedNumber(function (receivedNumber) {
    Alien = receivedNumber
})
input.onButtonPressed(Button.AB, function () {
    Alien = randint(10, 20)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(Alien)
    Alien = -1
})
let Alien = 0
radio.setGroup(1)
Alien = -1
basic.forever(function () {
    if (Alien == 0) {
        basic.showIcon(IconNames.Skull)
    }
    if (Alien < 0) {
        basic.clearScreen()
    }
    if (Alien > 0) {
        basic.showIcon(IconNames.Ghost)
        Alien += -1
    }
})
