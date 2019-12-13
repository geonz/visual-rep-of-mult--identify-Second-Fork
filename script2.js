changeBackgrounds('.button1','yellow');
function changeBackgrounds(selectorStr, bgColor) {
  let newColor=bgColor;
  let thing=selectorStr;
 document.querySelectorAll('.button1').forEach(elem=>{elem.style.backgroundColor=newColor;});
 // document.querySelectorAll('.item').style.color=newColor;;
  //box.style.color=bgcolor;
  //document.getElementById("start").style.color=newColor;
    
}