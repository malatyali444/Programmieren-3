var clickCount = 0;



function bodyClick(evt){

    console.log("Clicked at X: " + evt.pageX + ", Y: " + evt.pageY);
    
    }
    
    window.onclick = bodyClick;
    
    //This is the same as window.addEventListener("click", bodyClick);