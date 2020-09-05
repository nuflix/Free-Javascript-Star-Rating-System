
/* myStarCollection.push("className"); */
var mouseClickedStarRating=false;
function rateSystem(className, obj, fnc=function(){}){
    /* window.myStarCollection.push(className); */
for(let i=0; i<obj.length; i++){

    document.getElementsByClassName(className)[i].style.width = (obj[i].rating*obj[i].starSize) + "px";
    document.getElementsByClassName(className)[i].style.height = obj[i].starSize + "px";
    document.getElementsByClassName(className)[i].style.backgroundSize=obj[i].starSize + "px";
    document.getElementsByClassName(className)[i].style.backgroundImage = "url('" + obj[i].starImage + "')" ;
    document.getElementsByClassName(className)[i].style.backgroundRepeat="repeat-x";
    document.getElementsByClassName(className)[i].parentElement.style.width = (parseInt(obj[i].starSize)*parseInt(obj[i].maxRating) ) + "px";
    document.getElementsByClassName(className)[i].parentElement.style.height = parseInt(obj[i].starSize)+"px";

    if(obj[i].backgroundStarImage){
        console.log("a");
        document.getElementsByClassName(className)[i].parentElement.style.backgroundSize=obj[i].starSize + "px";
        document.getElementsByClassName(className)[i].parentElement.style.backgroundRepeat="repeat-x";
        document.getElementsByClassName(className)[i].parentElement.style.backgroundImage = "url('" + obj[i].backgroundStarImage + "')" ;
    }

    if(obj[i].emptyStarImage){
    document.getElementsByClassName(className)[i].innerHTML = '<div class="emptyStarRating"></div>';
    document.getElementsByClassName(className)[i].getElementsByClassName("emptyStarRating")[0].style.backgroundSize = parseInt(obj[i].starSize) + "px";
    document.getElementsByClassName(className)[i].getElementsByClassName("emptyStarRating")[0].style.backgroundImage = "url('" + obj[i].emptyStarImage + "')" ;
    document.getElementsByClassName(className)[i].getElementsByClassName("emptyStarRating")[0].style.backgroundRepeat="repeat-x";
    document.getElementsByClassName(className)[i].getElementsByClassName("emptyStarRating")[0].style.width = (parseInt(obj[i].starSize)*parseInt(obj[i].maxRating) ) + "px";
    document.getElementsByClassName(className)[i].getElementsByClassName("emptyStarRating")[0].style.height = parseInt(obj[i].starSize)+"px";
    }

    document.getElementsByClassName(className)[i].style.maxWidth = obj[i].starSize*obj[i].maxRating + "px";
    document.getElementsByClassName(className)[i].title = obj[i].rating;
    document.getElementsByClassName(className)[i].dataset.rating = obj[i].rating;
    document.getElementsByClassName(className)[i].dataset.step = obj[i].step;
    if(obj[i].readOnly==="yes"){
        document.getElementsByClassName(className)[i].classList.add("readOnlyStarRating");
    }
/*     document.getElementsByClassName(className)[i].innerHTML=obj[i].rating; */
document.getElementsByClassName(className)[i].parentElement.addEventListener("mousemove", zmouseMoveStarRating, false);
document.getElementsByClassName(className)[i].parentElement.addEventListener("click", function(){ zmouseMoveStarRatingClick(fnc) }, false);
document.getElementsByClassName(className)[i].parentElement.addEventListener("mouseleave", zmouseMoveStarRatingLeave, false);

document.getElementsByClassName(className)[i].parentElement.addEventListener("touchstart", zmouseMoveStarRatingTouch, false);
document.getElementsByClassName(className)[i].parentElement.addEventListener("touchend", function(){zmouseMoveStarRatingLeaveTouch(fnc)}, false);
document.getElementsByClassName(className)[i].parentElement.addEventListener("touchmove", zmouseMoveStarRatingTouchMove, false);
}

}

function zmouseMoveStarRating(){
    if(mouseClickedStarRating==false){
        if(event.target.classList.contains("starRatingContainer")){
            let myDiv = event.target.getElementsByTagName("DIV")[0];
            let realStep = parseFloat(myDiv.dataset.step)*parseInt(myDiv.style.backgroundSize);
            realStep=1/realStep;
            /* console.log(realStep); */

            if(!myDiv.classList.contains("readOnlyStarRating")){
                if((event.clientX-myDiv.getBoundingClientRect().left)<=parseInt(myDiv.style.maxWidth)){
                    myDiv.style.width=(Math.round((event.clientX-myDiv.getBoundingClientRect().left)*realStep)/realStep)+"px";
                }else{
                /* myDiv.style.width= myDiv.style.maxWidth;  */ 
                }
         myDiv.title = (parseInt(myDiv.style.width)/parseInt(myDiv.style.backgroundSize)).toFixed(2);
            }

    }else if(event.target.classList.contains("emptyStarRating")){
     
        if(!event.target.parentElement.classList.contains("readOnlyStarRating")){
            if((event.clientX-event.target.parentElement.getBoundingClientRect().left)<=parseInt(event.target.parentElement.style.maxWidth)){
                
                let realStep = parseFloat(event.target.parentElement.dataset.step)*parseInt(event.target.parentElement.style.backgroundSize);
                realStep=1/realStep;
                /* console.log(realStep); */

                event.target.parentElement.style.width=(Math.round((event.clientX-event.target.parentElement.getBoundingClientRect().left)*realStep)/realStep)+"px";
            }else{
            /* event.target.style.width =  event.target.style.maxWidth; */
            }
            event.target.title = (parseInt(event.target.parentElement.style.width)/parseInt(event.target.parentElement.style.backgroundSize)).toFixed(2);
        }

        }else{

         if(!event.target.classList.contains("readOnlyStarRating")){
            if((event.clientX-event.target.getBoundingClientRect().left)<=parseInt(event.target.style.maxWidth)){
                
                let realStep = parseFloat(event.target.dataset.step)*parseInt(event.target.style.backgroundSize);
                realStep=1/realStep;
                /* console.log(realStep); */

                event.target.style.width=(Math.round((event.clientX-event.target.getBoundingClientRect().left)*realStep)/realStep)+"px";
            }else{
            /* event.target.style.width =  event.target.style.maxWidth; */
            }
            event.target.title = (parseInt(event.target.style.width)/parseInt(event.target.style.backgroundSize)).toFixed(2);
        }

            }
        }
    }
    


    function zmouseMoveStarRatingClick(fnc){
        if(event.target.classList.contains("starRatingContainer")){
            let myDiv = event.target.getElementsByTagName("DIV")[0];
            if(!myDiv.classList.contains("readOnlyStarRating")){
            mouseClickedStarRating=true;
           myDiv.dataset.rating=(parseInt(myDiv.style.width)/parseInt(myDiv.style.backgroundSize)).toFixed(2);
            fnc(myDiv.dataset.rating, myDiv);
            }
        }else if(event.target.classList.contains("emptyStarRating")){
            if(!event.target.parentElement.classList.contains("readOnlyStarRating")){
                mouseClickedStarRating=true;
                event.target.parentElement.dataset.rating=(parseInt(event.target.parentElement.style.width)/parseInt(event.target.parentElement.style.backgroundSize)).toFixed(2);
                fnc(event.target.parentElement.dataset.rating, event.target.parentElement);
                }
        }else{
            if(!event.target.classList.contains("readOnlyStarRating")){
                mouseClickedStarRating=true;
                event.target.dataset.rating=(parseInt(event.target.style.width)/parseInt(event.target.style.backgroundSize)).toFixed(2);
                fnc(event.target.dataset.rating, event.target);
                }
        }
}


function zmouseMoveStarRatingLeave(){
    if(!event.target.classList.contains("starRatingContainer")){
     /*    if(!event.target.classList.contains("readOnlyStarRating")){
    event.target.style.width=event.target.dataset.rating*parseInt(event.target.style.backgroundSize)+"px";
    mouseClickedStarRating=false;
        } */
    }else{
        let myDiv = event.target.getElementsByTagName("DIV")[0];
            if(!myDiv.classList.contains("readOnlyStarRating")){
                myDiv.style.width=myDiv.dataset.rating*parseInt(myDiv.style.backgroundSize)+"px";
                mouseClickedStarRating=false;
            }
        }
    }
    

    function zmouseMoveStarRatingTouch(){
        try{
       event.preventDefault();
        }catch(err){

        }
        }

        function zmouseMoveStarRatingLeaveTouch(fnc){
            
            if(event.target.classList.contains("starRatingContainer")){
                let myDiv = event.target.getElementsByTagName("DIV")[0];
                if(!myDiv.classList.contains("readOnlyStarRating")){
                    if((event.changedTouches[0].clientX-myDiv.getBoundingClientRect().left)<=parseInt(myDiv.style.maxWidth)){
                        let realStep = parseFloat(myDiv.dataset.step)*parseInt(myDiv.style.backgroundSize);
                        realStep=1/realStep;

                myDiv.style.width=(Math.round((parseInt(event.changedTouches[0].clientX)-parseInt(myDiv.getBoundingClientRect().left))*realStep)/realStep)+"px";
                    }else{
                        myDiv.style.width=myDiv.style.maxWidth;      
                    }
                myDiv.dataset.rating=(parseInt(myDiv.style.width)/parseInt(myDiv.style.backgroundSize)).toFixed(2);
                fnc(myDiv.dataset.rating, myDiv);
                }
            }else if(event.target.classList.contains("emptyStarRating")){
                if(!event.target.parentElement.classList.contains("readOnlyStarRating")){
                    if((event.changedTouches[0].clientX-event.target.parentElement.getBoundingClientRect().left)<=parseInt(event.target.parentElement.style.maxWidth)){
                    
                        let realStep = parseFloat(event.target.parentElement.dataset.step)*parseInt(event.target.parentElement.style.backgroundSize);
                        realStep=1/realStep;

                    event.target.parentElement.style.width=(Math.round((parseInt(event.changedTouches[0].clientX)-parseInt(event.target.parentElement.getBoundingClientRect().left))*realStep)/realStep)+"px";
                    }else{
                        event.target.parentElement.style.width=event.target.parentElement.style.maxWidth;    
                    }
                    event.target.parentElement.dataset.rating=(parseInt(event.target.parentElement.style.width)/parseInt(event.target.parentElement.style.backgroundSize)).toFixed(2);
                    fnc(event.target.parentElement.dataset.rating, event.target.parentElement);
                    }

            }else{

                if(!event.target.classList.contains("readOnlyStarRating")){
                    if((event.changedTouches[0].clientX-event.target.getBoundingClientRect().left)<=parseInt(event.target.style.maxWidth)){

                        let realStep = parseFloat(event.target.dataset.step)*parseInt(event.target.style.backgroundSize);
                        realStep=1/realStep;

                    event.target.style.width=(Math.round((parseInt(event.changedTouches[0].clientX)-parseInt(event.target.getBoundingClientRect().left))*realStep)/realStep)+"px";
                    }else{
                        event.target.style.width=event.target.style.maxWidth;    
                    }
                    event.target.dataset.rating=(parseInt(event.target.style.width)/parseInt(event.target.style.backgroundSize)).toFixed(2);
                    fnc(event.target.dataset.rating, event.target);
                    }

            }
        }

        function zmouseMoveStarRatingTouchMove(){
           
            if(event.target.classList.contains("starRatingContainer")){

                let myDiv = event.target.getElementsByTagName("DIV")[0];
                if(!myDiv.classList.contains("readOnlyStarRating")){
                    if((event.changedTouches[0].clientX-myDiv.getBoundingClientRect().left)<=parseInt(myDiv.style.maxWidth)){
                        let realStep = parseFloat(myDiv.dataset.step)*parseInt(myDiv.style.backgroundSize);
                        realStep=1/realStep;
                myDiv.style.width=(Math.round((parseInt(event.changedTouches[0].clientX)-parseInt(myDiv.getBoundingClientRect().left))*realStep)/realStep)+"px";
                    }else{
                        event.target.style.width=event.target.style.maxWidth;      
                    }

                }

            }else if(event.target.classList.contains("emptyStarRating")){
                if(!event.target.parentElement.classList.contains("readOnlyStarRating")){
                    if((event.changedTouches[0].clientX-event.target.parentElement.getBoundingClientRect().left)<=parseInt(event.target.parentElement.style.maxWidth)){
                        let realStep = parseFloat(event.target.parentElement.dataset.step)*parseInt(event.target.parentElement.style.backgroundSize);
                        realStep=1/realStep;
                        event.target.parentElement.style.width=(Math.round((parseInt(event.changedTouches[0].clientX)-parseInt(event.target.parentElement.getBoundingClientRect().left))*realStep)/realStep)+"px";
                    }else{
                        event.target.parentElement.style.width=event.target.parentElement.style.maxWidth;    
                    }
                   
                    }
            }else{

                if(!event.target.classList.contains("readOnlyStarRating")){
                    if((event.changedTouches[0].clientX-event.target.getBoundingClientRect().left)<=parseInt(event.target.style.maxWidth)){
                        let realStep = parseFloat(event.target.dataset.step)*parseInt(event.target.style.backgroundSize);
                        realStep=1/realStep;
                    event.target.style.width=(Math.round((parseInt(event.changedTouches[0].clientX)-parseInt(event.target.getBoundingClientRect().left))*realStep)/realStep)+"px";
                    }else{
                        event.target.style.width=event.target.style.maxWidth;    
                    }
                   
                    }

            }

             }