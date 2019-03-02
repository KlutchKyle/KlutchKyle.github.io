function mainUpdate(type){
    if(type == "battery"){
        var Level = (batteryPercent);
        document.getElementById("batteryImg").src = "imgs/" + "rlb" + Level + ".png";
    
    }
}
