const mod = {
    primaryName: "ω",
    secondaryName: "Engine",
    version: "1.0.0",
    engineVer: "1.0.1", //DO NOT MODIFY
    debugMode: false,
    Infinities: [new Decimal(2).pow(1024), new Decimal("1.79769e30008"), new Decimal("1.79769e300000008"), new Decimal("ee38")],
    themes: [
        ["Dark", "css/themes/dark.css"],
        ["Dark Alt (by Jeehan2561)", "css/themes/darkalt.css"],
        ["Modern", "css/themes/modern.css"],
        ["Light", "css/themes/light.css"],
        ["Neon", "css/themes/neon.css"],
        ["Godot Blue", "css/themes/darkblue.css"],
        ["Halloween", "css/themes/spooky.css"],
        ["eXPerience", "css/themes/experience.css"]
    ],
    layerNames: [
        ["Greek",
        [
            "αβγδεζηθικλμνξοπρστυφχψωΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩψϝϛͱϻϙͳϸ",
            "αβγδεζηθικλμνξοπρστυφχψωΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩψϝϛͱϻϙͳϸ",
            ["<span class='flipped-v'>Ω</span>", "<span class='flipped-v'>Ω</span><sup>2</sup>","<span class='flipped-v'>Ω</span><sup>3</sup>","<span class='flipped-v'>Ω</span><sup>2<sup>2</sup></sup>"]
        ]],
        ["Latin",
        [
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
            "ðþȝƿəŋſÐÞȜǷƏŊ",
            "æœĳǉ"
        ]],
        ["Alphabet",
        [
            "abcdefghijklmnopqrstuvwxyz",
            "123456789",
            "ABCD"
        ]],
        ["Symbols",
        [
            '!"£$%^&*;:@',
            "<,[{}].>",
            "+×÷^"
        ]],
        ["Binary",
        [
            '01',
            "01",
            "2345"
        ]],
        ["Random",
        [
            Utils.createRandomWord(10, new Random(performance.now()).nextInt()),
            Utils.createRandomWord(10, new Random(Math.floor(performance.now()/2)).nextInt()),
            [Utils.createRandomWord(2, new Random(Math.floor(performance.now()/3)).nextInt()),Utils.createRandomWord(3, new Random(Math.floor(performance.now()/4)).nextInt()),Utils.createRandomWord(4, new Random(Math.floor(performance.now()/5)).nextInt()),Utils.createRandomWord(5, new Random(Math.floor(performance.now()/6)).nextInt())]
        ]]
    ],
    layerNamePlaceholder: "𐌒",
    fonts: [
        ["Monospace Typewriter", "css/fonts/typespace.css"],
        ["Source Code Pro", "css/fonts/scp.css"],
        ["Comic Sans", "css/fonts/comic.css"],
        ["Arial", "css/fonts/arial.css"],
        ["Roboto", "css/fonts/roboto.css"],
        ["Ubuntu", "css/fonts/ubuntu.css"],
        ["Comfortaa", "css/fonts/comfortaa.css"],
        ["Minecraft", "css/fonts/minecraft.css"],
    ],
    saves: [
        ["Save 1", ""],
        ["Save 2", "2"],
        ["Save 3", "3"],
        ["Save 4", "4"],
    ],
    debugClasses: []
}

//DO NOT MODIFY CODE PAST THIS POINT AS IT IS NEEDED (unless your a pro coder then do some experimenting)

mod.layerNames.push(["Refresh Names", "refresh"])

document.getElementById("superImportantTitle").innerHTML = "<span class='omega'>"+mod.primaryName+"</span>"+mod.secondaryName
