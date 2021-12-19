function profileMessage() {

    var messageOn = document.getElementById("profileMsg");
    if (messageOn.style.display === "none") {
        messageOn.style.display = "block";
        messageOn.style.color = 'red';
    } else {
        messageOn.style.display = "none";
    }
}