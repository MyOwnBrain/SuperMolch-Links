let index = Math.round(Math.random())

let color1 = index ? "#4969EE" : "#F47939"
let color2 = index ? "#0089E3" : "#FD9E4F"

document.documentElement.style.setProperty("--color1", color1)
document.documentElement.style.setProperty("--color2", color2)