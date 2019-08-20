function getReverse() {
    let input = document.getElementById("inputVal").value;
    let output = "";
    console.log(input);

    if(input.length > 100) {
        document.getElementById("error").style.display = "block";
    }
    else {
        output = input.split("").reverse().join("");
        document.getElementById("outputVal").innerHTML = output;
        document.getElementsByClassName("output")[0].style.display = "block";
    }
}

function reset() {
    document.getElementById("error").style.display = "none";
    document.getElementById("outputVal").innerHTML = "";
    document.getElementById("inputVal").value = "";
    document.getElementsByClassName("output")[0].style.display = "none";
}