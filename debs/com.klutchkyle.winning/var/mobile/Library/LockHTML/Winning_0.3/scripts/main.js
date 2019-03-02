function mainUpdate(type){
    if(type == "battery"){
        var chargeText = (batteryCharging) ? "Charging" : "Not Charging";
        var State = (batteryCharging);
        var Level = Math.ceil((batteryPercent) / 10) * 10;
        document.getElementById("batteryImg").src = "imgs/" + State + Level + ".png";
    
    } else if (type == "statusbar") {
        var wifiNumber = (wifiBars);
        document.getElementById("wifiMeter").src = "imgs/wifiBars" + wifiBars + ".png";
        var wifiStat = (wifiName)
        
        if (wifiStat == "NA") {
            document.getElementById("wifiMeter").style.visibility = "Hidden";

        } else {
            document.getElementById("wifiMeter").style.visibility = "Visible";

        }
    }
}
