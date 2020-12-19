import Scene from "scenejs";
import './treejava.js'

const scene = new Scene({
  ".class": {
    0: "left: 0px; top: 0px; transform: translate(0px);",
    1: {
      "left": "100px",
      "top": "0px",
      transform: "translate(50px)",
    },
    2: {
      "left": "200px",
      "top": "100px",
      transform: {
        translate: "100px",
      },
    }
  }
}, {
  selector: true,
  easing: "ease-in-out",
}).play();