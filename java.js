const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const QrImage = document.querySelector("#qrImage");
const input = document.querySelector("#inputbox");
const btn = document.querySelector("#button");

function GenerateQR() {
    QrImage.src = url + input.value;
};

btn.addEventListener("click", GenerateQR);

// btn.addEventListener("click", () => {
//     GenerateQR();
// });


// const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
// const qrImage = document.querySelector("#qrImage");
// const input = document.querySelector("#inputbox");
// const btn = document.querySelector("#button");

// function generateQR() {
//     if (input.value.trim() === "") {
//         alert("Please enter text or a URL");
//         return;
//     }
//     qrImage.src = url + encodeURIComponent(input.value);
// }

// btn.addEventListener("click", generateQR);

