"use strict";

console.log("hello");

let col2 = document.getElementById("col2");




function SubmitFood() {
    console.log("in submit");
    let newFoodIcon = document.createElement("div");
    newFoodIcon.setAttribute('class', "foodIcon");
    //let newFoodImage = document.createElement("img");
    //let imageSource = document.getElementById("fileBox").files[0];
    //newFoodImage.src = "./assets/" + imageSource.name;
    //newFoodImage.setAttribute('class', "foodIconElements");
    //newFoodIcon.appendChild(newFoodImage);
    let newFoodName = document.createElement("div")
    let foodName = document.getElementById("nameBox");
    newFoodName.innerHTML = foodName.value;
    newFoodName.setAttribute('class', "foodIconElements");
    newFoodIcon.appendChild(newFoodName);
    let newFoodExpirationDate = document.createElement("div");
    let foodExpirationDate = document.getElementById("expirationDateBox").value
    newFoodExpirationDate.innerHTML = foodExpirationDate;
    newFoodExpirationDate.setAttribute('class', "foodIconElements");
    newFoodIcon.appendChild(newFoodExpirationDate);
    col2.appendChild(newFoodIcon);

    var xhttp = new XMLHttpRequest();
    xhttp.onload = function (content) {
        console.log(content);
    };

    xhttp.open("POST", "/test");
    xhttp.setRequestHeader("Content-Type", "application/json");

    var item = {
        name: "bryce",
        age: 21
    }
    xhttp.send(JSON.stringify(item));
}
