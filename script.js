function DropBox() {
    var x = document.getElementById("drop-down");
    var y = document.getElementById("btn");
    if (x.style.display === "block") {
        y.innerHTML = "<i class='material-icons' id='btn' onclick='DropBox()'>menu</i>";
        x.style.display = "none";
    } 
    else {

        y.innerHTML = "<i class='material-icons' id='btn' onclick='DropBox()'>close</i>";
        x.style.display = "block";
    }
}