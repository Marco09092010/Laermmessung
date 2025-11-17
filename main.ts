input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    gemessener_wert = input.soundLevel()
    if (Ort == 1) {
        Ort_1.push(gemessener_wert)
        Messzähler += 1
        if (input.soundLevel() >= 75) {
        	
        }
        if (input.soundLevel() < 75 == input.soundLevel() > 150) {
            basic.setLedColor(0xff8000)
        }
        if (input.soundLevel() <= 150) {
            basic.setLedColor(0xff0000)
        }
    }
    if (Ort == 2) {
        Ort_2.push(gemessener_wert)
        Messzähler += 1
        if (input.soundLevel() >= 75) {
            basic.setLedColor(0x00ff00)
        }
        if (input.soundLevel() < 75 == input.soundLevel() > 150) {
            basic.setLedColor(0xff8000)
            if (input.soundLevel() <= 150) {
                basic.setLedColor(0xff0000)
            }
        }
    }
    if (Ort == 3) {
        Ort_3.push(gemessener_wert)
        Messzähler += 1
        if (input.soundLevel() >= 75) {
            basic.setLedColor(0x00ff00)
        }
        if (input.soundLevel() < 75 == input.soundLevel() > 150) {
            basic.setLedColor(0xff8000)
        }
        if (input.soundLevel() <= 150) {
            basic.setLedColor(0xff0000)
        }
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    if (Ort == 1) {
        for (let gemessener_wert2 of Ort_1) {
            basic.showNumber(gemessener_wert2)
        }
    }
    if (Ort == 2) {
        for (let gemessener_wert2 of Ort_2) {
            basic.showNumber(gemessener_wert2)
        }
    }
    if (Ort == 3) {
        for (let gemessener_wert2 of Ort_3) {
            basic.showNumber(gemessener_wert2)
        }
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Ort += 1
    if (Ort == 4) {
        Ort = 1
    }
})
let Messzähler = 0
let gemessener_wert = 0
let Ort_3: number[] = []
let Ort_2: number[] = []
let Ort_1: number[] = []
let Ort = 0
Ort = 1
Ort_1 = []
Ort_2 = []
Ort_3 = []
