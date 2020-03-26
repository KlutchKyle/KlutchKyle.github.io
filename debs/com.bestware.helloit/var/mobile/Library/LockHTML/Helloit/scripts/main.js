function mainUpdate(type) {
    if (type == "weather") {
        document.getElementById('city').innerHTML = weather.city;
        document.getElementById('temp').innerHTML = weather.temperature + "&deg;";
    }

    if (type == "battery") {
        document.getElementById('batterylevel').innerHTML = batteryPercent + " %";
        document.getElementById('status').innerHTML = (batteryCharging) ? "" : "";

        if(batteryCharging == true){
            document.getElementById('bolt').style.visibility = "visible";
        }
        else{
            document.getElementById('bolt').style.visibility = "hidden";
        }
    }
}


document.getElementById('pri').innerHTML = pri;
document.getElementById('sec').innerHTML = sec;
document.getElementsById('pri').style.color = ct;