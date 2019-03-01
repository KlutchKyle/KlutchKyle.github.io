var Level = "";


$.ajaxSetup({
cache: false,
headers: {'Cache-Control': 'no-cache'}
});  

var init = function() {
//var slider = document.getElementById("level");
//var boutput = document.getElementById("demo");

refreshLocationTimer = setTimeout(init, 2*1000);

jQuery.get("/var/mobile/Library/BatteryStats.txt", function(appdata) {

var myvar = appdata;
console.log(myvar)
var substr = appdata.split('\n');
console.log(substr)
var Level=substr[0].split(':')[1];
console.log(Level)
var State=substr[1].split(':')[1];

if (State.localeCompare(" Unplugged") == 0) 
{
    if (Level > 0  && Level <= 10 ){document.getElementById("batteryImage").src="imgs/dbattery10.png";}
    if (Level > 10  && Level <= 20 ){document.getElementById("batteryImage").src="imgs/dbattery20.png";}
    if (Level > 20  && Level <= 30 ) {document.getElementById("batteryImage").src="imgs/dbattery30.png";}
    if (Level > 30  && Level <= 40  ){document.getElementById("batteryImage").src="imgs/dbattery40.png";}
    if (Level > 40  && Level <= 50 ){document.getElementById("batteryImage").src="imgs/dbattery50.png";}
    if (Level > 50  && Level <= 60 ){document.getElementById("batteryImage").src="imgs/dbattery60.png";}
    if (Level > 60  && Level <= 70 ){document.getElementById("batteryImage").src="imgs/dbattery70.png";}
    if (Level > 70  && Level <= 80 ){document.getElementById("batteryImage").src="imgs/dbattery80.png";}
    if (Level > 80  && Level <= 90 ){document.getElementById("batteryImage").src="imgs/dbattery90.png";}
    if (Level > 90  && Level <= 100 ){document.getElementById("batteryImage").src="imgs/dbattery100.png";}     

}
if (State.localeCompare(" Charging") == 0) 
{
    if (Level > 0  && Level <= 10 ){document.getElementById("batteryImage").src="imgs/cbattery10.png";}
    if (Level > 10  && Level <= 20 ){document.getElementById("batteryImage").src="imgs/cbattery20.png";}
    if (Level > 20  && Level <= 30 ) {document.getElementById("batteryImage").src="imgs/cbattery30.png";}
    if (Level > 30  && Level <= 40  ){document.getElementById("batteryImage").src="imgs/cbattery40.png";}
    if (Level > 40  && Level <= 50 ){document.getElementById("batteryImage").src="imgs/cbattery50.png";}
    if (Level > 50  && Level <= 60 ){document.getElementById("batteryImage").src="imgs/cbattery60.png";}
    if (Level > 60  && Level <= 70 ){document.getElementById("batteryImage").src="imgs/cbattery70.png";}
    if (Level > 70  && Level <= 80 ){document.getElementById("batteryImage").src="imgs/cbattery80.png";}
    if (Level > 80  && Level <= 90 ){document.getElementById("batteryImage").src="imgs/cbattery90.png";}
    if (Level > 90  && Level <= 100 ){document.getElementById("batteryImage").src="imgs/cbattery100.png";} 

}

}, 'text');

    

}
