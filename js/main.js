
let HeaderTxts = document.getElementsByClassName("HeaderText");
let Radions1 = document.getElementsByClassName("radios1");
let bgText = document.getElementById("BGtext");
let shadow = "";
let ScrollID;

let scrollVal = 0;
let scrollHeigth = '1000px';
let scrollHeigthInt = 1000;




document.body.style.setProperty('--scrollHeigth',scrollHeigth);
GetScrollAndApplyTransform();
function GetScrollAndApplyTransform(){
    
   
    scrollVal = (window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  
    if(scrollVal <= 1){
    
        document.body.style.setProperty('--scroll',scrollVal);
    shadow = '';
    for (let i = 0; i < 30; i++) {
        shadow += (shadow ? "," : "") + -i * scrollVal + "px " + i * scrollVal + "px 0 #363457";
      }
      bgText.style.textShadow = shadow;
      console.log("1");
    }
    else{
        
        document.body.style.setProperty('--scroll',1);
        shadow = '';
        for (let i = 0; i < 30; i++) {
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
    for (let i = 0; i < 30; i++) {
        shadow += (shadow ? "," : "") + -i * scrollVal + "px " + i * scrollVal + "px 0 #363457";
      }
      
      bgText.style.textShadow = shadow;
    }
    //TEXT_END
    
    //OURGAMES_BEGIN

    //OURGAMES_END

    //HEADER_BEGIN
    if(scrollVal > 0.01){
      for(let i = 0; i < HeaderTxts.length; i++){
        HeaderTxts[i].classList.remove("None");
        HeaderTxts[i].classList.remove("FadeIn");
        HeaderTxts[i].classList.remove("FadeOut");
        HeaderTxts[i].classList.add("FadeIn");   
      }
    }
    else if(scrollVal < 0.001){
      for(let i = 0; i < HeaderTxts.length; i++){
        HeaderTxts[i].classList.remove("None");
        HeaderTxts[i].classList.remove("FadeIn");
        HeaderTxts[i].classList.remove("FadeOut");
        HeaderTxts[i].classList.add("FadeOut");
      }
    }
    console.log(scrollVal);
    //HEADER_END
  }, false);

  