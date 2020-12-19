import  Scene  from 'scenejs';
import './scene.js'
var sceneTree = new Scene({
    ".tree" : {
      0: {transform:"scale(0)"},
      1.5: {transform:"scale(1)"}
    },
    ".background>.flower": function (i) {
      return {
        0: {opacity: 0, transform: "translateY(0px) rotate(0deg)"},
        1: {opacity: 1},
        4: {opacity: 1},
        5: {opacity: 0, transform: "translateY(300px) rotate(360deg)"},
        options: {
          delay: 7 + i,
          iterationCount: "infinite"
        },
      };
    },
  }, {
    selector: true
  });
  
  
  var branchs = document.querySelectorAll(".tree .branch, .tree .leaf, .tree .flower1");
  var depths = [0, 0, 0];
  
  for (var i = 0; i < branchs.length; ++i) {
    var sceneItem = sceneTree.newItem("item" + i);
    var className = branchs[i].className;
  
    if (~className.indexOf("branch-inner")) {
      ++depths[1];
      depths[2] = 0;
    } else if (~className.indexOf("branch")) {
      ++depths[0];
      depths[1] = 0;
      depths[2] = 0;
    } else if (~className.indexOf("leaf") || ~className.indexOf("flower1")) {
      ++depths[2];
    }
    sceneItem.setElement(branchs[i]);
    sceneItem.setCSS(0, ["transform"]);
  
    var time = 1 + depths[0] * 0.5 + depths[1] * 0.5 + depths[2] * 0.5;
    sceneItem.set(time, "transform", "scale", 0);
    sceneItem.set(time + 1, "transform", "scale", 1);
  }
  
  sceneTree.playCSS();