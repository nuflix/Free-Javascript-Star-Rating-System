
/* myStarCollection.push("className"); */
var mouseClickedStarRating=false;
function rateSystem(className, obj){
    /* window.myStarCollection.push(className); */
for(let i=0; i<obj.length; i++){

    document.getElementsByClassName(className)[i].style.width = (obj[i].rating*obj[i].starSize) + "px";
    document.getElementsByClassName(className)[i].style.height = obj[i].starSize + "px";
    document.getElementsByClassName(className)[i].style.backgroundSize=obj[i].starSize + "px";
    document.getElementsByClassName(className)[i].style.backgroundImage = "url('" + obj[i].starImage + "')" ;
    document.getElementsByClassName(className)[i].style.backgroundRepeat="repeat-x";
    document.getElementsByClassName("starRatingContainer")[i].style.width = obj[i].starSize*obj[i].maxRating + 10 + "px";
    document.getElementsByClassName(className)[i].style.maxWidth = obj[i].starSize*obj[i].maxRating + "px";

    if(obj[i].readOnly==="yes"){
        document.getElementsByClassName(className)[i].classList.add("readOnlyStarRating");
    }
/*     document.getElementsByClassName(className)[i].innerHTML=obj[i].rating; */
document.getElementsByClassName("starRatingContainer")[i].addEventListener("mousemove", zmouseMoveStarRating, false);
document.getElementsByClassName("starRatingContainer")[i].addEventListener("click", zmouseMoveStarRatingClick, false);
document.getElementsByClassName("starRatingContainer")[i].addEventListener("mouseleave", zmouseMoveStarRatingLeave, false);
}

}

function zmouseMoveStarRating(){
    if(mouseClickedStarRating==false){
        if(!event.target.classList.contains("starRatingContainer")){
            if(!event.target.classList.contains("readOnlyStarRating")){
            event.target.style.width=(event.clientX-event.target.getBoundingClientRect().left)+"px";
            }
        }else{
            let myDiv = event.target.getElementsByTagName("DIV")[0];
            if(!myDiv.classList.contains("readOnlyStarRating")){
         myDiv.style.width=(event.clientX-myDiv.getBoundingClientRect().left)+"px";
         console.log(myDiv.clientX-myDiv.getBoundingClientRect().left);
            }
        }
    }
    }


    function zmouseMoveStarRatingClick(){
        if(!event.target.classList.contains("starRatingContainer")){
            if(!event.target.classList.contains("readOnlyStarRating")){
                console.log(parseInt(event.target.style.width)/parseInt(event.target.style.backgroundSize));
            mouseClickedStarRating=true;
            event.target.dataset.rating=parseInt(event.target.style.width)/parseInt(event.target.style.backgroundSize);
            }
        }else{
            let myDiv = event.target.getElementsByTagName("DIV")[0];
            if(!myDiv.classList.contains("readOnlyStarRating")){
                console.log(parseInt(myDiv.style.width)/parseInt(myDiv.style.backgroundSize));
            mouseClickedStarRating=true;
            myDiv.dataset.rating=parseInt(myDiv.style.width)/parseInt(myDiv.style.backgroundSize);
            }
        }
}


function zmouseMoveStarRatingLeave(){
    if(!event.target.classList.contains("starRatingContainer")){
        if(!event.target.classList.contains("readOnlyStarRating")){
    event.target.style.width=event.target.dataset.rating*parseInt(event.target.style.backgroundSize)+"px";
    mouseClickedStarRating=false;
        }
    }else{
        let myDiv = event.target.getElementsByTagName("DIV")[0];
            if(!myDiv.classList.contains("readOnlyStarRating")){
                myDiv.style.width=myDiv.dataset.rating*parseInt(myDiv.style.backgroundSize)+"px";
                mouseClickedStarRating=false;
            }
        }
    }
    