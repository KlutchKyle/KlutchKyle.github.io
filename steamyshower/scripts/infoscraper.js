var sCount = 0;
var parseInfo = function () {
    console.log("'parseInfo' Function called by HTML: Success")
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: "scripts/info.xml",
            dataType: "xml",
            success: function (xml) {
                console.log("Document Readiness: Success")
                console.log("Locating XML File: Success")
                console.log("::::::::::::::> Parsing <::::::::::::::")

                //var xmlDoc = $.parseXML( xml );   <------------------this line

                // ########### GET PACKAGE ICON ###########
                let packageicon = $(xml).find('icon').text();
                console.log("Found Package Icon At: " + packageicon);
                $("#packageiconimg").attr("src", packageicon);

                // ########### GET PACKAGE ID ###########
                let packageId = $(xml).find('id').text();
                console.log("Found Package Id: " + packageId);
                // $("#packageId").append('<li>' + $(this).text()
                //

                // ########### GET PACKAGE NAME ###########
                let packageName = $(xml).find('name').text();
                console.log("Found Package Name: " + packageName);
                $("#packageName").append(packageName);

                // ########### GET DESCRIPTION ###########
                let description = $(xml).find('description').text();
                console.log("Found Description: " + description);
                $("#description").append(description);

                // ########### GET MINIMUM iOS ###########
                let minimumiOS = $(xml).find('miniOS').text();
                console.log("Found MinimumiOS: " + minimumiOS);
                //$("#miniOS").append('<li>' + $(this).text()
                //);

                // ########### GET MAXIMUM iOS ###########
                let maximumiOS = $(xml).find('maxiOS').text();
                console.log("Found MaximumiOS: " + maximumiOS);
                //$("#maxiOS").append('<li>' + $(this).text()
                //);

                // ########### GET DEPENDENCIES ###########
                let dependencies = $(xml).find('dependencies').text();
                console.log("Found Dependencies: " + dependencies);
                //$("#dependencies").append('<li>' + $(this).text()
                //);

                // ########### GET CHANGELOG ###########
                $(xml).find('change').each(function () {
                    $("#changeLog").append('<li>' + $(this).text() + '</li><br>');
                });

                // ########### GET SCREENSHOTS ###########
                $(xml).find('screenshot').each(function () {
                    console.log("Screenshot = " + $(this).text());
                    sCount++;
                    console.log("There are " + sCount + " screenshot(s)");
                    if (sCount == 1) {
                        console.log("Parsing first screenshot")
                        $("#screenshotsHere").append('<div class="carousel-item active"><img class="d-block w-100" src="' + $(this).text() + '" alt="First slide"></div>');
                    } else {
                        console.log("parsing other screenshots")
                        $("#screenshotsHere").append('<div class="carousel-item"><img class="d-block w-100" src="' + $(this).text() + '" alt="First slide"></div>');
                    }
                });

            },
            error: function (data) {
                console.log('Error loading XML data');
            }
        });
    });
}