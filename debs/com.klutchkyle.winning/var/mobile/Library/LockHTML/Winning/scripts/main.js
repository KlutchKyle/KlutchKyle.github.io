function mainUpdate(type){
    if(type == "battery"){ // Get Battery Information
        var chargeText = (batteryCharging) ? "Charging" : "Not Charging";
        var state = (batteryCharging);
        var level = Math.ceil((batteryPercent) / 10) * 10;
        // Set Battery Image and Percent
        document.getElementById("batteryImg").src = "imgs/" + state + level + ".png";
        document.getElementById("bPercent").innerHTML = batteryPercent + "%";

    } else if (type == "statusbar") { // Get Status Bar Information
        var wifiStat = (wifiName)
        var wifiConnect = 0; // Connected to wifi?

        if (signalBarView == true) {
            document.getElementById("sMtr").style.visibility = "Visible";
            document.getElementById("sMtr").src = "imgs/sbar" + signalBars + ".png";
        } 

        if (wifiStat == "NA") { //Not Connected to Wifi
            wifiConnect = 0;
            document.getElementById("wMtr").style.visibility = "hidden";
            document.getElementById('sMtr').style.right = "200px";

        } else { //Connected to Wifi
            wifiConnect = 1
            if (wifiView == true) {
                document.getElementById("wMtr").style.visibility = "Visible";
                document.getElementById('sMtr').style.right = "325px";
                document.getElementById('wMtr').style.right = "200px";
                document.getElementById("wMtr").src = "imgs/wifiBars" + wifiBars + ".png";
            }

        }
    
    } 
}
