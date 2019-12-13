 
changeBackgrounds('section > div','yellow');



function changeBackgrounds(selectorStr, bgColor) {
  
  let d = document.querySelectorAll(selectorStr); 
  d[3].style.backgroundColor="orange";
//  document.querySelectorAll('.item').forEach(elem=>{elem.style.backgroundColor=newColor;});
}
  
  c = document.querySelectorAll('section > div');

  c[0].style.color="pink";
  // document.querySelectorAll('.item').style.color=newColor;;
  //box.style.color=bgcolor;
  //document.getElementById("start").style.color=newColor;
    
 