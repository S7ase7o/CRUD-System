var ProductName = document.getElementById('ProductName')
var ProductCategory = document.getElementById('ProductCategory')
var ProductPrice = document.getElementById('ProductPrice')
var ProductDescription = document.getElementById('ProductDescription')
var products = []
if (localStorage.getItem('ourProducts') == null) {
    products = []
} else {
    products = JSON.parse(localStorage.getItem('ourProducts'))
}
DisplayProduct(products)
var indexo;

function AddProduct() {
    var btn = document.getElementById('btn').innerHTML
    console.log(btn)
    if (btn == 'Update') {
        products[indexo].name = ProductName.value
        products[indexo].category = ProductCategory.value
        products[indexo].price = ProductPrice.value
        products[indexo].description = ProductDescription.value
        document.getElementById('btn').innerHTML = 'Add Product'


    } else {
        var product = {
            name: ProductName.value,
            category: ProductCategory.value,
            price: ProductPrice.value,
            description: ProductDescription.value,
        }
        products.push(product)

    }
    localStorage.setItem('ourProducts', JSON.stringify(products))


    DisplayProduct(products)
        // ===== 3shan lma adef product gded yrg3 ydefo ======
    clear()

}



function DisplayProduct(anyArray) {
    var kobaya = ''
    for (var i = 0; i < anyArray.length; i++) {
        kobaya += ` <tr>
        <td>${i+1}</td>
        <td>` + anyArray[i].name + `</td>
        <td>` + anyArray[i].category + `</td>
        <td>` + anyArray[i].price + `</td>
        <td>${anyArray[i].name} </td>
        <td>
            <button id="del" onclick="deleteItems(${i})" class="btn btn-danger">delete</button>
        </td>
        <td>
            <button onclick="updateProduct(${i})" class="btn btn-warning">Update</button>

        </td>
    </tr>`
    }
    document.getElementById('kobaya').innerHTML = kobaya
}
DisplayProduct(products)

// var dele = document.getElementById('del')
// dele.addEventListener("click", function() {
//     deleteItems($ { i });
// })

function deleteItems(index) {
    products.splice(index, 1)
    localStorage.setItem('ourProducts', JSON.stringify(products))
    DisplayProduct(products)
};

function search() {
    var search = document.getElementById('search').value
    var myArray = []
    for (i = 0; i < products.length; i++) {
        if (products[i].name.toUpperCase().includes(search.toUpperCase())) {
            myArray.push(products[i])
        }
    }
    DisplayProduct(myArray)

};

function updateProduct(i) {
    indexo = i
    ProductName.value = products[i].name
    ProductCategory.value = products[i].category
    ProductPrice.value = products[i].price
    ProductDescription.value = products[i].description
    console.log(i)
    document.getElementById('btn').innerHTML = 'Update'

    // productname.value de ba3mlha 3shan lw 3awz aset feha value = el value ele 3ayz ana a3mlha set products[i].esmha //






}

function clear() {
    ProductName.value = ''
    ProductCategory.value = ''
    ProductPrice.value = ''
    ProductDescription.value = ''
}