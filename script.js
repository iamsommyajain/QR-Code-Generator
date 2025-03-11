function isValidURL(url) {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
}
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
function generateQR() {
    if (qrText.value.length===0 || !isValidURL(qrText.value)) {
        qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove("error");
        },1000);
        return;
    }
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
    imgBox.classList.add("show-img");
}

function downloadQR() {
    let qrImage = document.getElementById("qrImage");

    if (!qrImage.src || qrImage.src === window.location.href) {
        return;
    }

    let link = document.createElement("a");
    link.href = qrImage.src;
    link.download = "QRCode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    alert("QR Code Downloaded Successfully!");
}