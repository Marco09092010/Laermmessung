input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (Ort == 1) {
        Lautstärke = input.soundLevel()
        Ort_1.push(Lautstärke)
        if (Lautstärke > 0) {
            basic.setLedColor(0x00ff00)
        }
        if (Lautstärke > 100) {
            basic.setLedColor(0xffff00)
        }
        if (Lautstärke > 200) {
            basic.setLedColor(0xff0000)
        }
    }
    if (Ort == 2) {
        Lautstärke = input.soundLevel()
        Ort_2.push(Lautstärke)
        if (Lautstärke > 0) {
            basic.setLedColor(0x00ff00)
        }
        if (Lautstärke > 100) {
            basic.setLedColor(0xffff00)
        }
        if (Lautstärke > 200) {
            basic.setLedColor(0xff0000)
        }
    }
    if (Ort == 3) {
        Lautstärke = input.soundLevel()
        Ort_3.push(Lautstärke)
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    if (Ort == 1) {
        for (let Lautstärke of Ort_1) {
            basic.showNumber(Lautstärke)
        }
    }
    if (Ort == 2) {
        for (let Lautstärke of Ort_2) {
            basic.showNumber(Lautstärke)
        }
    }
    if (Ort == 3) {
        for (let Lautstärke of Ort_3) {
            basic.showNumber(Lautstärke)
        }
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Ort += 1
    if (Ort > 3) {
        Ort = 1
    }
})
let Lautstärke = 0
let Ort_3: number[] = []
let Ort_2: number[] = []
let Ort_1: number[] = []
let Ort = 0
Ort = 1
Ort_1 = []
Ort_2 = []
Ort_3 = []
basic.forever(function () {
    if (Ort == 1) {
        basic.showNumber(1)
    }
    if (Ort == 2) {
        basic.showNumber(2)
    }
    if (Ort == 3) {
        basic.showNumber(3)
    }
})
basic.forever(function () {
    if (Lautstärke > 0) {
        basic.setLedColor(0x00ff00)
    }
    if (Lautstärke > 100) {
        basic.setLedColor(0xffff00)
    }
    if (Lautstärke > 200) {
        basic.setLedColor(0xff0000)
    }
})
