let products = [];
function displayProduct(){
    let prodList = document.getElementById('listProd');
    prodList.innerHTML = '';//Xoa noi dung hien tai
    products.forEach( (product, index) => {
        prodList.innerHTML +=`
                    <tr>
                        <td>${product}</td>
                        <td>
                            <button class="btn" onclick="editProduct(${index})">Sửa</button>
                            <button class="btn" onclick="deleteProduct(${index})">Xóa</button>
                        </td>
                    </tr>
                `
    } );
}
function addProduct() {
    let prodInput = document.getElementById('newProd');
    let prodName = prodInput.value.trim();
    if (prodName) {
        products.push(prodName);
        prodInput.value = '';
        displayProduct();
    }else {
        alert('Yeu cau nhap ten san pham');
    }
}

function editProduct(index) {
    let newName = prompt(`Nhap ten san pham moi: ${products[index]}`);
    if (newName !== null && newName.trim() !== '') {
        products[index] = newName.trim();
        displayProduct();
    }
}

function deleteProduct(index) {
    if (confirm('Sure to delete?')) {
        products.splice(index, 1);
        displayProduct();
    }
}