 
changeBackgrounds('section > div','yellow');



function changeBackgrounds(selectorStr, bgColor) {
  
  let d = document.querySelectorAll(selectorStr); 

  for (let n=factSet-1; n<factNum*factSet; n+=factSet)
  
 { d[n].style.backgroundColor=bgColor;}
 
}
  
   
   
    
 