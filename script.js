function updateTotalHarga() {
    const harga = parseFloat(document.getElementById('harga').value) || 0;
    const jumlah = parseInt(document.getElementById('jumlah').value) || 0;
    const totalHarga = harga * jumlah;
    const pajak = totalHarga * 0.1; // Pajak 10%

    document.getElementById('totalHarga').value = totalHarga;
    document.getElementById('pajak').value = pajak;
    document.getElementById('bayar').value = totalHarga + pajak; // Mengisi otomatis input bayar
}

function prosesPenjualan() {
    const namaBarang = document.getElementById('namaBarang').value;
    const harga = parseFloat(document.getElementById('harga').value);
    const jumlah = parseInt(document.getElementById('jumlah').value);
    const jenisBarang = document.getElementById('jenisBarang').value;
    const totalHarga = parseFloat(document.getElementById('totalHarga').value);
    const pajak = parseFloat(document.getElementById('pajak').value);
    const bayar = parseFloat(document.getElementById('bayar').value);

    if (isNaN(harga) || isNaN(jumlah) || isNaN(totalHarga) || isNaN(pajak) || isNaN(bayar)) {
        alert('Silakan isi semua bidang dengan benar.');
        return;
    }

    const resultTable = document.getElementById('resultTable').getElementsByTagName('tbody')[0];
    const newRow = resultTable.insertRow();

    newRow.insertCell(0).appendChild(document.createTextNode(namaBarang));
    newRow.insertCell(1).appendChild(document.createTextNode(harga));
    newRow.insertCell(2).appendChild(document.createTextNode(jumlah));
    newRow.insertCell(3).appendChild(document.createTextNode(jenisBarang));
    newRow.insertCell(4).appendChild(document.createTextNode(totalHarga));
    newRow.insertCell(5).appendChild(document.createTextNode(pajak));
    newRow.insertCell(6).appendChild(document.createTextNode(bayar));

    // Reset form after successful submission
    document.getElementById('salesForm').reset();
    document.getElementById('totalHarga').value = '';
    document.getElementById('pajak').value = '';
    document.getElementById('bayar').value = '';
}
