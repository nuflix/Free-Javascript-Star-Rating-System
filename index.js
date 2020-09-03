
/* myStarCollection.push("className"); */
var mouseClickedStarRating=false;
var clientX, clientY;
function rateSystem(className, obj, fnc=function(){}){
    /* window.myStarCollection.push(className); */
for(let i=0; i<obj.length; i++){

    document.getElementsByClassName(className)[i].style.width = (obj[i].rating*obj[i].starSize) + "px";
    document.getElementsByClassName(className)[i].style.height = obj[i].starSize + "px";
    document.getElementsByClassName(className)[i].style.backgroundSize=obj[i].starSize + "px";
    document.getElementsByClassName(className)[i].style.backgroundImage = "url('" + obj[i].starImage + "')" ;
    document.getElementsByClassName(className)[i].style.backgroundRepeat="repeat-x";
    document.getElementsByClassName(className)[i].parentElement.style.width = obj[i].starSize*obj[i].maxRating + 10 + "px";
    document.getElementsByClassName(className)[i].style.maxWidth = obj[i].starSize*obj[i].maxRating + "px";
    document.getElementsByClassName(className)[i].title = obj[i].rating;
    document.getElementsByClassName(className)[i].dataset.rating = obj[i].rating;
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
        if(!event.target.classList.contains("starRatingContainer")){
            if(!event.target.classList.contains("readOnlyStarRating")){
            if((event.clientX-event.target.getBoundingClientRect().left)<=parseInt(event.target.style.maxWidth)){
                event.target.style.width=(event.clientX-event.target.getBoundingClientRect().left)+"px";
            }else{
            /* event.target.style.width =  event.target.style.maxWidth; */
            }
            event.target.title = (parseInt(event.target.style.width)/parseInt(event.target.style.backgroundSize)).toFixed(2);
        }
        }else{
            let myDiv = event.target.getElementsByTagName("DIV")[0];
            if(!myDiv.classList.contains("readOnlyStarRating")){
                if((event.clientX-myDiv.getBoundingClientRect().left)<=parseInt(myDiv.style.maxWidth)){
                myDiv.style.width=(event.clientX-myDiv.getBoundingClientRect().left)+"px";
                }else{
                /* myDiv.style.width= myDiv.style.maxWidth;  */ 
                }
         myDiv.title = (parseInt(myDiv.style.width)/parseInt(myDiv.style.backgroundSize)).toFixed(2);
            }
        }
    }
    }


    function zmouseMoveStarRatingClick(fnc){
        if(!event.target.classList.contains("starRatingContainer")){
            if(!event.target.classList.contains("readOnlyStarRating")){
            mouseClickedStarRating=true;
            event.target.dataset.rating=(parseInt(event.target.style.width)/parseInt(event.target.style.backgroundSize)).toFixed(2);
            fnc(event.target.dataset.rating, event.target);
            }
        }else{
            let myDiv = event.target.getElementsByTagName("DIV")[0];
            if(!myDiv.classList.contains("readOnlyStarRating")){
            mouseClickedStarRating=true;
            myDiv.dataset.rating=(parseInt(myDiv.style.width)/parseInt(myDiv.style.backgroundSize)).toFixed(2);
            fnc(myDiv.dataset.rating, myDiv);
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
       event.preventDefault();
        }

        function zmouseMoveStarRatingLeaveTouch(fnc){
            
            if(!event.target.classList.contains("starRatingContainer")){
                if(!event.target.classList.contains("readOnlyStarRating")){
                if((event.changedTouches[0].clientX-event.target.getBoundingClientRect().left)<=parseInt(event.target.style.maxWidth)){
                event.target.style.width=(event.changedTouches[0].clientX-event.target.getBoundingClientRect().left)+"px";
                }else{
                    event.target.style.width=event.target.style.maxWidth;    
                }
                event.target.dataset.rating=(parseInt(event.target.style.width)/parseInt(event.target.style.backgroundSize)).toFixed(2);
                fnc(event.target.dataset.rating, event.target);
                }
            }else{
                let myDiv = event.target.getElementsByTagName("DIV")[0];
                if(!myDiv.classList.contains("readOnlyStarRating")){
                    if((event.changedTouches[0].clientX-myDiv.getBoundingClientRect().left)<=parseInt(myDiv.style.maxWidth)){
                myDiv.style.width=(event.changedTouches[0].clientX-myDiv.getBoundingClientRect().left)+"px";
                    }else{
                        event.target.style.width=event.target.style.maxWidth;      
                    }
                myDiv.dataset.rating=(parseInt(myDiv.style.width)/parseInt(myDiv.style.backgroundSize)).toFixed(2);
                fnc(myDiv.dataset.rating, myDiv);
                }
            }
        }

        function zmouseMoveStarRatingTouchMove(){
           
            if(!event.target.classList.contains("starRatingContainer")){
                if(!event.target.classList.contains("readOnlyStarRating")){
                if((event.changedTouches[0].clientX-event.target.getBoundingClientRect().left)<=parseInt(event.target.style.maxWidth)){
                event.target.style.width=(event.changedTouches[0].clientX-event.target.getBoundingClientRect().left)+"px";
                }else{
                    event.target.style.width=event.target.style.maxWidth;    
                }
               
                }
            }else{
                let myDiv = event.target.getElementsByTagName("DIV")[0];
                if(!myDiv.classList.contains("readOnlyStarRating")){
                    if((event.changedTouches[0].clientX-myDiv.getBoundingClientRect().left)<=parseInt(myDiv.style.maxWidth)){
                myDiv.style.width=(event.changedTouches[0].clientX-myDiv.getBoundingClientRect().left)+"px";
                    }else{
                        event.target.style.width=event.target.style.maxWidth;      
                    }

                }
            }

             }