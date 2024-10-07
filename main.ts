input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("B A G A G F A C5 ", 120), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(100)
        basic.showLeds(`
            . # . # .
            # . # . #
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.pause(100)
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
    }
})
basic.forever(function () {
	
})
