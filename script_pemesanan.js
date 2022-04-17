//laman pemesanan
function ambilProdukDanHarga(){
    let produk = sessionStorage.getItem('produk')
    let harga = parseInt(sessionStorage.getItem('hargaProduk'))

    document.getElementById('namaproduk').textContent = produk
    document.getElementById('hargaproduk').textContent = "Rp " + harga

    calculate()
}
document.addEventListener("DOMContentLoaded", ambilProdukDanHarga())

function dec(){
    let count = document.getElementById('quantity').textContent
    count = parseInt(count)
    if(count > 1){
        count --
    }
    document.getElementById('quantity').textContent = count.toString()
}

function inc(){
    let count = document.getElementById('quantity').textContent
    count = parseInt(count) + 1
    document.getElementById('quantity').textContent = count.toString()
}

function calculate(){
    let count = parseInt(document.getElementById('quantity').textContent)
    let harga = parseInt(sessionStorage.getItem('hargaProduk'))
    let subtotal = harga * count
    let ongkir = 10000

    document.getElementById('subtotal').textContent = "Rp " + subtotal
    document.getElementById('total').textContent = "Rp " + (subtotal + ongkir)
}