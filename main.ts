input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.QuarterNote)
    music.playMelody("D E B C A G E C5 ", 221)
})
input.onButtonPressed(Button.B, function () {
    music.playTone(587, music.beat(BeatFraction.Breve))
    basic.showIcon(IconNames.EigthNote)
})
basic.showIcon(IconNames.Skull)
music.playMelody("G E A F G A B C5 ", 120)
