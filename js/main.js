var elem = document.getElementById("qrcode");
var anoDiv = document.getElementById("data");
var qrcode = new QRCode(elem, {
    width: 180,
    height: 180,
 });

function makeCode() {
    var elText = document.getElementById("input");
    qrcode.makeCode(elText.value);
}
makeCode();

document.getElementById("input").onkeyup = function (e) {
    makeCode();
}
var ano = new Date().getFullYear();
 anoDiv.innerText = ano;