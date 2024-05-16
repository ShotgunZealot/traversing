function timeUpdate() {
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    var formatedTime = hour + ":" + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;


    document.getElementById("current-time").textContent = formatedTime;

}

setInterval(timeUpdate, 1000);
