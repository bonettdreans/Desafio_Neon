document.getElementById("formDate").onsubmit = function() {
    let formData = document.getElementById("formDate").elements;
    document.getElementById("resultado").innerHTML = formData["data"].value;
    return false;
}