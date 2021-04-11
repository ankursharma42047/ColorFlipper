//setting --vh value for height
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

//refresh on resize
window.onresize = () => {
    location.reload();
}

//centering .color & button horizontaly
let cWidth =  window.innerWidth;
let classColor = document.querySelector(".color");
let button = document.querySelector("button");
classColor.style.left = `${(cWidth - classColor.offsetWidth) / 2}px`;
button.style.left = `${(cWidth - button.offsetWidth) / 2}px`;

//storing simple or hex clicking in an object
let selected = {simple:true, hex:false};
let simple = document.querySelector(".simple");
let hex = document.querySelector(".hex");

simple.onclick = () => {
    selected.simple = true;
    selected.hex = false;
    simple.style.backgroundColor = "black";
    simple.style.color = "lightblue";
    hex.style.backgroundColor = "grey";
    hex.style.color = "white";
}

hex.onclick = () => {
    selected.hex = true;
    selected.simple = false;
    simple.style.backgroundColor = "grey";
    simple.style.color = "white";
    hex.style.backgroundColor = "black";
    hex.style.color = "lightblue";
}

//button function
let colorNames = ["AliceBlue",
"AntiqueWhite",
"Aqua",
"Aquamarine",
"Azure",
"Beige",
"Bisque",
"Black",
"BlanchedAlmond",
"Blue",
"BlueViolet",
"Brown",
"BurlyWood",
"CadetBlue",
"Chartreuse",
"Chocolate",
"Coral",
"CornflowerBlue",
"Cornsilk",
"Crimson",
"Cyan",
"DarkBlue",
"DarkCyan",
"DarkGoldenRod",
"DarkGray",
"DarkGrey",
"DarkGreen",
"DarkKhaki",
"DarkMagenta",
"DarkOliveGreen",
"DarkOrange",
"DarkOrchid",
"DarkRed",
"DarkSalmon",
"DarkSeaGreen",
"DarkSlateBlue",
"DarkSlateGray",
"DarkSlateGrey",
"DarkTurquoise",
"DarkViolet",
"DeepPink",
"DeepSkyBlue",
"DimGray",
"DimGrey",
"DodgerBlue",
"FireBrick",
"FloralWhite",
"ForestGreen",
"Fuchsia",
"Gainsboro",
"GhostWhite",
"Gold",
"GoldenRod",
"Gray",
"Grey",
"Green",
"GreenYellow",
"HoneyDew",
"HotPink",
"IndianRed",
"Indigo",
"Ivory",
"Khaki",
"Lavender",
"LavenderBlush",
"LawnGreen",
"LemonChiffon",
"LightBlue",
"LightCoral",
"LightCyan",
"LightGoldenRodYellow",
"LightGray",
"LightGrey",
"LightGreen",
"LightPink",
"LightSalmon",
"LightSeaGreen",
"LightSkyBlue",
"LightSlateGray",
"LightSlateGrey",
"LightSteelBlue",
"LightYellow",
"Lime",
"LimeGreen",
"Linen",
"Magenta",
"Maroon",
"MediumAquaMarine",
"MediumBlue",
"MediumOrchid",
"MediumPurple",
"MediumSeaGreen",
"MediumSlateBlue",
"MediumSpringGreen",
"MediumTurquoise",
"MediumVioletRed",
"MidnightBlue",
"MintCream",
"MistyRose",
"Moccasin",
"NavajoWhite",
"Navy",
"OldLace",
"Olive",
"OliveDrab",
"Orange",
"OrangeRed",
"Orchid",
"PaleGoldenRod",
"PaleGreen",
"PaleTurquoise",
"PaleVioletRed",
"PapayaWhip",
"PeachPuff",
"Peru",
"Pink",
"Plum",
"PowderBlue",
"Purple",
"RebeccaPurple",
"Red",
"RosyBrown",
"RoyalBlue",
"SaddleBrown",
"Salmon",
"SandyBrown",
"SeaGreen",
"SeaShell",
"Sienna",
"Silver",
"SkyBlue",
"SlateBlue",
"SlateGray",
"SlateGrey",
"Snow",
"SpringGreen",
"SteelBlue",
"Tan",
"Teal",
"Thistle",
"Tomato",
"Turquoise",
"Violet",
"Wheat",
"White",
"WhiteSmoke",
"Yellow",
"YellowGreen"];

let colorHex = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];

let section = document.querySelector("section");
let classColorName = document.querySelector(".colorname");
button.onclick = () => {
    if (selected.simple) {
        let rdmn = random(0,148);
        section.style.backgroundColor = `${colorNames[rdmn]}`;
        classColorName.innerHTML = `${colorNames[rdmn]}`;
    }

    if (selected.hex) {
        let rdmn;
        let rdmnhex = "#";
        for (let i=0; i<6; i++) {
            rdmn = rdm(0,16);
            rdmnhex += `${colorHex[rdmn]}`;
        }
        section.style.backgroundColor = rdmnhex;
        classColorName.innerHTML = rdmnhex;
    }
}

//for random no.
let arr = [];

//function rdm giving random b/w min and max, including min
function rdm(min,max) {
    let a = Math.floor((Math.random()*(max-min)));
    return (min + a)
}

//checking random no. should not be repeated at least (max-min) times
function random(min,max) {
    if (arr.length == (max-min)) {
        arr =[];
    }

    let b = rdm(min,max);
    if (arr.includes(b)) {
        return random(min,max)
    }
    else {
        arr.push(b);
        return b
    }
}