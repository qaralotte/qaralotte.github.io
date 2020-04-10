var now = new Date();
var hour = now.getHours();
var minute = now.getMinutes();

function getChromeVersion() {
    var arr = navigator.userAgent.split(' ');
    var version = '';
    for (var i=0; i<arr.length; i++) {
        if (/Chrome/i.test(arr[i])) {
            version = arr[i];
            break;
        }
    }
    if (version) {
        return Number(version.split('/')[1].split('.')[0]);
    }
    else {
        return false;
    }
}

//if (hour >= 20 || hour <= 8) {
    if (navigator.userAgent.indexOf('MSIE 6.0') > -1) {
        document.getElementById('start').style.display = 'block';
    }
    else if (navigator.userAgent.indexOf('MSIE 7.0') > -1) {
        document.getElementById('start').style.display = 'block';
    }
    else if (navigator.userAgent.indexOf('MSIE 8.0') > -1) {
        document.getElementById('start').style.display = 'block';
    }
    else {
        if (getChromeVersion()) {
            if (getChromeVersion() >= 66) {
                document.getElementById('animate').muted = true;
            }
        }
        document.getElementById('fire').style.display = 'block';
        document.getElementById('animate').play();
    }
//} else {
  //document.getElementById('clock').style.display = 'block';
//}

function fire_end() {
    document.getElementById('fire').style.display = 'none';
    document.getElementById('start').style.display = 'block';
}

function last() {
    document.getElementById('start').style.display = 'none';
    document.getElementById('end').style.display = 'block';
    document.body.style.cursor = "default";
}

function input_name() {
    if (hell.nickname.value == '') {
        hell.nickname.focus();
        return false;
    }
    else {
        document.body.style.cursor = "wait";
        document.getElementById('btn_send').style.display = 'none';
        window.setTimeout("last()", 3000);
        return false;
    }
}
