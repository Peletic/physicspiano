const { SoundFont2 } = require("soundfont2")
const fs = require("fs")

const file = fs.readFileSync("./untitled.sf2")
const soundFont = new SoundFont2(file)
soundFont.presetData