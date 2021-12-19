function pixMessage() {

    var messageOn = document.getElementById("pixMsg");
    if (messageOn.style.display === "none") {
        messageOn.style.display = "block";
        messageOn.style.color = 'red';
    } else {
        messageOn.style.display = "none";
    }
}

function investmentMessage() {

    var messageOn = document.getElementById("investmentMsg");
    if (messageOn.style.display === "none") {
        messageOn.style.display = "block";
        messageOn.style.color = 'red';
    } else {
        messageOn.style.display = "none";
    }
}