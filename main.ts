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
        music.playMelody("G F E D D C - - ", 240)
    }
    if (Alien < 0) {
        basic.clearScreen()
    }
    if (Alien > 0) {
        basic.showIcon(IconNames.Ghost)
        music.playTone(587, music.beat(BeatFraction.Half))
        basic.showIcon(IconNames.House)
        music.playTone(494, music.beat(BeatFraction.Whole))
        Alien += -1
    }
})
