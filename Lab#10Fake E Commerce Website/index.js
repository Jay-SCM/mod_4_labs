//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////      FAKEECOM$HOP    ////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////


let allProducts;  // all products from the API
let categories = new Map(); // map of all categories
axios.get('https://fakestoreapi.com/products') // get all products from the API
    .then(response => {  // handle the response
        allProducts = response.data; // store all products in a global variable
        loadFilterOptions(); // load the filter options
        loadProducts(allProducts);}) // load all products
    .catch(error => console.error('Error fetching data:', error)); // handle errors
function loadProducts(products) { // load the products into the DOM
    const productList = document.getElementById('product-list'); // get the product list
    productList.innerHTML = '';
    products.forEach(product => { // addProducts to the DOM
        addProduct(product);});}
function addProduct(product) {
    const productList = document.getElementById('product-list');
    const card = document.createElement('div'); // create a new card
    card.classList.add('col-md-4', 'mb-4', 'card'); // add classes to the card
    card.innerHTML = ` 
        <div class="card h-100">
            <img src="${product.image}" class="card-img-top" alt="${product.title}"> 
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5> 
                <p class="card-text">${product.description}</p>
                <p class="card-text">$${product.price.toFixed(2)}</p>
            </div>
        </div>
    `;
    productList.appendChild(card);} // add the card to the product list
function loadFilterOptions() { // load the filter options
    const categoryFilter = document.getElementById('category_filter'); // get the category filter
    categories = new Map(); // reset the categories map
    allProducts.forEach(product => { // add all categories to the map
        categories.set(product.category, true);});
    categories.forEach((value, category) => { // add all categories to the filter
        categoryFilter.innerHTML += `<option value="${category}">${category}</option>`;});}
function filterProducts() {
    const selectedCategory = document.getElementById('category_filter').value; // get the selected category
    let filteredProducts; // filter the products
    if (selectedCategory) { // if a category is selected, filter by category
        filteredProducts = allProducts.filter(product => product.category === selectedCategory);
    } else {
        filteredProducts = allProducts;} // otherwise, show all products
    loadProducts(filteredProducts);} // load the filtered products
function searchProducts() {
    const searchInput = document.getElementById('searchText').value.toLowerCase(); // get the search input
    let filteredProducts;
    if (searchInput) {
        filteredProducts = allProducts.filter(product =>
            product.title.toLowerCase().includes(searchInput) || // filter by title
            product.description.toLowerCase().includes(searchInput)); //
    } else {
        filteredProducts = allProducts;} // otherwise, show all products
    loadProducts(filteredProducts);}
