
/* Formatting the value field */
document.getElementById("txtValue").addEventListener("change", function(){
    this.value = parseFloat(this.value).toFixed(2);
});


async function getContent() {
    try {
        const response = await fetch("/api/launch/:id")
    } catch (error) {
        console.log(error)
    }
}

getContent()
