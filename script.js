const inputNama = document.querySelector("#nama");
const inputSabuk = document.querySelector("#sabuk");
const inputBerat = document.querySelector("#berat");
const inputPerguruan = document.querySelector("#perguruan");
const inputStyle = document.querySelector("#style");
const inputPrestasi = document.querySelector("#prestasi");
const inputDeskripsi = document.querySelector("#deskripsi");


const prevNama = document.querySelector("#preview-nama");
const prevSabuk = document.querySelector("#preview-sabuk");
const prevBerat = document.querySelector("#preview-berat");
const prevPerguruan = document.querySelector("#preview-perguruan");
const prevStyle = document.querySelector("#preview-style");
const prevPrestasi = document.querySelector("#preview-prestasi");
const prevDeskripsi = document.querySelector("#preview-deskripsi");

function updatePreview() {
    prevNama.textContent = inputNama.value || "Nama Fighter";
    prevSabuk.textContent = inputSabuk.value || "Sabuk Fighter";
    prevBerat.textContent = inputBerat.value || "Berat Fighter";
    prevPerguruan.textContent = inputPerguruan.value || "Perguruan Fighter";
    prevStyle.textContent = inputStyle.value || "Style Fighter";
    prevPrestasi.textContent = inputPrestasi.value || "Prestasi fighter";
    prevDeskripsi.textContent = inputDeskripsi.value || "Deskripsi fighter akan tampil di sini...";
}

[inputNama, inputSabuk, inputBerat, inputPerguruan, inputStyle, inputPrestasi, inputDeskripsi]
.forEach(input => input.addEventListener("input", updatePreview));


