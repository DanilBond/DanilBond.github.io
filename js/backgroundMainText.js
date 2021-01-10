var Windows = document.getElementsByClassName("Window");
var HeaderTxts = document.getElementsByClassName("HeaderText");
var Radions1 = document.getElementsByClassName("radios1");
var bgText = document.getElementById("BGtext");
var mover = document.getElementById("mover");
var shadow = "";

var scrollVal = 0;
var scrollHeigth = '1000px';
var scrollHeigthInt = 1000;

function Scroll(id){
 switch(id){
   case 0:
   for(var i = 0; i < Radions1.length; i++){
     if(i != 0){
       Radions1[i].checked = false;
     }
     else{
      Radions1[i].checked = true;
     }
   }
   mover.style.transform = "translateX(100px)";
   break;

   case 1:
   for(var i = 0; i < Radions1.length; i++){
     if(i != 1){
       Radions1[i].checked = false;
     }
     else{
      Radions1[i].checked = true;
     }
   }
   mover.style.transform = "translateX(-400px)";
   break;

   case 2:
    for(var i = 0; i < Radions1.length; i++){
      if(i != 2){
        Radions1[i].checked = false;
      }
      else{
       Radions1[i].checked = true;
      }
    }
    mover.style.transform = "translateX(-900px)";
    break;
 }
}

document.body.style.setProperty('--scrollHeigth',scrollHeigth);
GetScrollAndApplyTransform();
function GetScrollAndApplyTransform(){
    
    
    scrollVal = (window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  
    if(scrollVal <= 1){
      Windows[0].style.webkitAnimationPlayState = "paused";
        Windows[1].style.webkitAnimationPlayState = "paused";
        document.body.style.setProperty('--scroll',scrollVal);
    shadow = '';
    for (var i = 0; i < 30; i++) {
        shadow += (shadow ? "," : "") + -i * scrollVal + "px " + i * scrollVal + "px 0 #363457";
      }
      bgText.style.textShadow = shadow;
      console.log("1");
    }
    else{
        
        document.body.style.setProperty('--scroll',1);
        shadow = '';
        for (var i = 0; i < 30; i++) {
            shadow += (shadow ? "," : "") + -i * 1 + "px " + i * 1 + "px 0 #363457";
          }
          bgText.style.textShadow = shadow;
          console.log("2");
          bgText.style.transform = "rotate(-28deg) skew(25deg)";
          bgText.style.opacity = "0.3";
         
    }
    
}

window.addEventListener('scroll', () => {
    
    //TEXT_BEGIN
    scrollVal = (window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    if(scrollVal <= 1){
        document.body.style.setProperty('--scroll',scrollVal);
    shadow = '';
    bgText.style = "";
    for (var i = 0; i < 30; i++) {
        shadow += (shadow ? "," : "") + -i * scrollVal + "px " + i * scrollVal + "px 0 #363457";
      }
      
      bgText.style.textShadow = shadow;
    }
    //TEXT_END
    
    //OURGAMES_BEGIN
    if(scrollVal >= 2.1){
      Windows[0].style.webkitAnimationPlayState = "running";
      Windows[1].style.webkitAnimationPlayState = "running";
    }
    console.log(scrollVal);
    //OURGAMES_END

    //HEADER_BEGIN
    if(scrollVal > 0.01){
      for(var i = 0; i < HeaderTxts.length; i++){
        HeaderTxts[i].classList.remove("None");
        HeaderTxts[i].classList.remove("FadeIn");
        HeaderTxts[i].classList.remove("FadeOut");
        HeaderTxts[i].classList.add("FadeIn");   
      }
    }
    else if(scrollVal < 0.001){
      for(var i = 0; i < HeaderTxts.length; i++){
        HeaderTxts[i].classList.remove("None");
        HeaderTxts[i].classList.remove("FadeIn");
        HeaderTxts[i].classList.remove("FadeOut");
        HeaderTxts[i].classList.add("FadeOut");
      }
    }
    console.log(scrollVal);
    //HEADER_END
  }, false);

  