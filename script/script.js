'speechSynthesis' in window ? console.log("Web Speech API supported!") : console.log("Web Speech API not supported :-(")


const synth = window.speechSynthesis
let ourText = "Destination has arrived"
const utterThis = new SpeechSynthesisUtterance(ourText)

synth.speak(utterThis)