//laman product
function search_product(){

    let input = document.getElementById('searchProduct').value
    input = input.toLowerCase();
    
    let list = []
    list = document.getElementsByClassName('produk')
    contain = document.getElementById('list_produk').querySelectorAll(".col")

    for(let i=0; i<list.length; i++){
        if(!list[i].textContent.toLowerCase().includes(input)){
            contain[i].setAttribute('style', 'display: none;')
        }else{
            contain[i].setAttribute('style', 'display: unset;')
        }
    }
}