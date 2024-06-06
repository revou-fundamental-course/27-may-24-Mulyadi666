// DOM name
function replaceName() {
    let name = prompt("Siapakah nama anda?", "");
    document.getElementById("name-hero").innerHTML = name
}

replaceName();

// slide banner
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n));
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("img-banner");
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;

    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    };

    imgList[slideIndex - 1].style.display = "block";

    
}
setInterval(() =>plusDivs(1),3000);

// messages

function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const email = document.forms["message-form"]["email"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (name == "" || email == "" || birthDate == "" || gender == "" || messages == "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    setSenderUi(name, email, birthDate, gender, messages);

    return false;

}

function setSenderUi(name, email, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-email").innerHTML = email;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}