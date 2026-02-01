let btn = document.getElementById("getrandomcolor-btn");

btn.addEventListener("click", getrandomcolor);

function getrandomcolor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let colorCode = `rgb(${red}, ${green}, ${blue})`;
    document.querySelector(".color-display div").innerHTML = colorCode;
    document.querySelector(".color-display").style.backgroundColor = colorCode;
    console.log("Color Generated.");
}