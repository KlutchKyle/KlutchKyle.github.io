if (domatch == "LightVibrant") {
    var colorMatch = function () {
        let v = new Vibrant('/var/mobile/Library/SpringBoard/LockBackgroundThumbnail.jpg')
        wallPalette = palette => wallColor = palette;
        v.getPalette().then(function getColor(palette) {
            var wallColorRGB = this.wallPalette(palette.LightVibrant.getRgb());
            var r = parseInt(wallColorRGB[0]);
            var g = parseInt(wallColorRGB[1]);
            var b = parseInt(wallColorRGB[2]);
            var colorRGB = r + ',' + g + ',' + b;
            document.getElementById('body').style.color = "rgb(" + colorRGB + ")";

        });
    }
} else if (domatch == "Vibrant") {
    var colorMatch = function () {
        let v = new Vibrant('/var/mobile/Library/SpringBoard/LockBackgroundThumbnail.jpg')
        wallPalette = palette => wallColor = palette;
        v.getPalette().then(function getColor(palette) {
            var wallColorRGB = this.wallPalette(palette.Vibrant.getRgb());
            var r = parseInt(wallColorRGB[0]);
            var g = parseInt(wallColorRGB[1]);
            var b = parseInt(wallColorRGB[2]);
            var colorRGB = r + ',' + g + ',' + b;
            document.getElementById('body').style.color = "rgb(" + colorRGB + ")";

        });
    }
} else if (domatch == "DarkVibrant") {
    var colorMatch = function () {
        let v = new Vibrant('/var/mobile/Library/SpringBoard/LockBackgroundThumbnail.jpg')
        wallPalette = palette => wallColor = palette;
        v.getPalette().then(function getColor(palette) {
            var wallColorRGB = this.wallPalette(palette.DarkVibrant.getRgb());
            var r = parseInt(wallColorRGB[0]);
            var g = parseInt(wallColorRGB[1]);
            var b = parseInt(wallColorRGB[2]);
            var colorRGB = r + ',' + g + ',' + b;
            document.getElementById('body').style.color = "rgb(" + colorRGB + ")";

        });
    }
} else if (domatch == "Muted") {
    var colorMatch = function () {
        let v = new Vibrant('/var/mobile/Library/SpringBoard/LockBackgroundThumbnail.jpg')
        wallPalette = palette => wallColor = palette;
        v.getPalette().then(function getColor(palette) {
            var wallColorRGB = this.wallPalette(palette.Muted.getRgb());
            var r = parseInt(wallColorRGB[0]);
            var g = parseInt(wallColorRGB[1]);
            var b = parseInt(wallColorRGB[2]);
            var colorRGB = r + ',' + g + ',' + b;
            document.getElementById('body').style.color = "rgb(" + colorRGB + ")";

        });
    }
} else if (domatch == "DarkMuted") {
    var colorMatch = function () {
        let v = new Vibrant('/var/mobile/Library/SpringBoard/LockBackgroundThumbnail.jpg')
        wallPalette = palette => wallColor = palette;
        v.getPalette().then(function getColor(palette) {
            var wallColorRGB = this.wallPalette(palette.DarkMuted.getRgb());
            var r = parseInt(wallColorRGB[0]);
            var g = parseInt(wallColorRGB[1]);
            var b = parseInt(wallColorRGB[2]);
            var colorRGB = r + ',' + g + ',' + b;
            document.getElementById('body').style.color = "rgb(" + colorRGB + ")";

        });
    }
} else {
    var domatch = function () {
        let v = new Vibrant('/var/mobile/Library/SpringBoard/LockBackgroundThumbnail.jpg')
        wallPalette = palette => wallColor = palette;
        v.getPalette().then(function getColor(palette) {
            var wallColorRGB = this.wallPalette(palette.LightMuted.getRgb());
            var r = parseInt(wallColorRGB[0]);
            var g = parseInt(wallColorRGB[1]);
            var b = parseInt(wallColorRGB[2]);
            var colorRGB = r + ',' + g + ',' + b;
            document.getElementById('body').style.color = "rgb(" + colorRGB + ")";

        });
    }
}
