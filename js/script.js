// java script
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

    // setInterval(() => {
    //     plusDivs(1);
    // }, 2000);
}

function tampilkanPesan(event) {

    event.preventDefault();
    // Mendapatkan nilai dari setiap input
    var name = document.getElementById("name").value;
    var birthdate = document.getElementById("birthdate").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var message = document.getElementById("message").value;

    // Memeriksa apakah jenis kelamin sudah dipilih
    if (gender) {
        gender = gender.value;
    } else {
        gender = "Not specified";
    }

    // Mendapatkan waktu saat ini
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var formattedTime = hours + ":" + minutes + ":" + seconds;

    // Membuat pesan yang akan ditampilkan di textarea
    var display =
        "<div style='padding: 5px;'>" +
        "<strong>curent time</strong> " + formattedTime + "<br>,<br>" +
        "<strong>Name:</strong> " + name + "<br>" +
        "<strong>Tanggal Lahir:</strong> " + birthdate + "<br>" +
        "<strong>Jenis Kelamin:</strong> " + gender + "<br>" +
        "<strong>Pesan:</strong> " + message;

    // Menampilkan pesan di textarea
    document.getElementById("formResult").innerHTML = display;
}