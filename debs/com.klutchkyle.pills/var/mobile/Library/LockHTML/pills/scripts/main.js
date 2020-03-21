function addF() {
    if (cColor == 360) {
        clearInterval(nUp);
        startInterval();
    }
    cColor++
    document.getElementById('behind').style.backgroundColor = 'hsla(' + cColor + ',62.3%,50%, 0.5)';
    //console.log(cColor);
}

function flipSides() {
    if (clockVisible == true) {
        console.log("clicked");
        document.querySelector('#clock').classList.remove('animated', 'cbounceInDown');
        document.querySelector('#clock').classList.add('animated', 'cbounceOutUp');
    
        setTimeout(function () {
            document.querySelector('#pullDown').style.visibility = "visible";
            document.querySelector('#pullDown').classList.add('animated', 'cbounceInDown');
        }, 1000)

        clockVisible = false;
    } else if (clockVisible == false) {
        console.log("clicked");
        document.querySelector('#pullDown').classList.remove('animated', 'cbounceInDown');
        document.querySelector('#pullDown').classList.add('animated', 'cbounceOutUp');
        
        setTimeout(function () {
            document.querySelector('#clock').classList.remove('animated', 'cbounceOutUp');
            document.querySelector('#pullDown').style.visibility = "hidden";
            document.querySelector('#clock').classList.add('animated', 'cbounceInDown');
        }, 1000)
        clockVisible = true;
    }

}