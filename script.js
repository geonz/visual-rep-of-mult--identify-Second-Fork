 
var factNum=5;// the starting number to be multiplied by; the 'answer'
var factSet=4;  // the facts you're practicing:   the twos for this.  this is arbitrary right now; I'll figure out how to make this happen in proper sequence later.  
// okay I am going to make this again and hope it doesn't just decide to disappearl.   


 

// to show number chart 1 to 100 with every N div in a different color.  RIght now it's set so it only shows enough for your facts (e.g. for the 2's it would only go to 20).   I wnat both options. 

function createMultImage()
{
  let multPicHTML="";
   let numMax = factSet*10;
  for (let num=1; num<=numMax; num++)
  { 
     //multPicHTML +=' <div class="item"> ' + num + ' </div>'; 
     // oh, let's give them each an ID
     multPicHTML +='  <div class = "item" id="d'+num + '" >' + num + ' </div>'; 
     
  }
 
  multPic.innerHTML=multPicHTML;
    // section > div: nth-child(4n)
    // saying section makes everythin gbreak here. I rhink b/x THAT IS supposed ot be in css.
    {

    } 
}
 // this doesn't work for *item* but it does for button
// changeBackgrounds('.button1','yellow');
// function changeBackgrounds(selectorStr, bgColor) {
//   let newColor=bgColor;
//   let thing=selectorStr;
//  document.querySelectorAll('.button1').forEach(elem=>{elem.style.backgroundColor=newColor;});
//  // document.querySelectorAll('.item').style.color=newColor;;
//   //box.style.color=bgcolor;
//   //document.getElementById("start").style.color=newColor;
    
// }
 

// Following code: so hitting enter is like clicking "check answer."
var input = document.getElementById("factor");
input.addEventListener("keyup", function(event)
 {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("check1").click();
  }
})
var input2 = document.getElementById("multAnswer");
input2.addEventListener("keyup", function(event)
 {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("check2").click();
  }
})


function checkName(picNum)
{
var b = factor.value;
if (b=="")
{
  feedback.innerHTML="please enter an answer";
}
else if (b==factNum)
{
  feedback.innerHTML="Awesome!  That's the right second factor!"
 document.getElementById("A1").style.display = 'inline';
 document.getElementById("check2").style.display = 'inline';
  check1.disabled="true";
 
}
else
{
  feedback.innerHTML="Check your entry; it doesn't seem to be right. I'm just a computer, though..."
}
}
function nextFact()
{
    factSet++;  
  p1.innerHTML="next fact is" + factSet;
  startUp();
  // we *will* if this works ... have it go to the next num in the array that is our sequence ***FUTURE THING HERE ***
  }

function startUp()
{
     A1.style.display="none";
  check2.style.display="none";
  factNum=1;
  check1.disabled=false;
  start.disabled=true;
  reset.disabled=false;
     newFact();
}

function newFact()
{if (factNum>10)
{
  p1.innerHTML= "you're done!" +'<button id="check1" class="button1" onclick="nextFact();">Next Fact</button>'
;
}
// maybe that should be in "check answer" or in both. 
else 
  {p1.innerHTML="fact number  is: " + factNum;
   
  feedback.innerHTML="The picture represents  ";
  factor2.innerHTML= factSet + " x " + '<input type="number" id="factor" size="1" maxlength="2"/>';
   A1.style.display="none";
  check2.style.display="none";
   A1.innerHTML=  factSet + " x " + factNum + " =" + ' <input type="number" id="multAnswer"  size="1" maxlength="2"/>';
 check1.disabled=false;
}

}






function checkAnswer()
{
    var c = multAnswer.value; 
  if (c == factNum*factSet)
  {
    feedback.innerHTML="That's right!";
    // need a "next fact" or 
    factNum++;
newFact();
    // go to the next one.   
  }
  else{
    feedback.innerHTML="That doesn't seem to be right.";
    // do better than this -- make it actually diagnostic. 
  }
 
} 

 createMultImage();
newFact(); 
