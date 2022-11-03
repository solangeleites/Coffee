const products = [
    {
        id: 1,
        name: "Café Colombia x 250gr",
        price: 25,
        category: "colombia",
        img: "/assets/img/beans.jpg",
        description: "This coffee stands out for its smoothness, body and notes of nuts."
    },
    {
        id: 2,
        name: "Café Colombia x 500gr",
        price: 35,
        category: "colombia",
        img: "/assets/img/beans.jpg",
        description: "This coffee stands out for its smoothness, body and notes of nuts."
    },
    {
        id: 3,
        name: "Café Colombia x 1kg",
        price: 45,
        category: "colombia",
        img: "/assets/img/beans.jpg",
        description: "This coffee stands out for its smoothness, body and notes of nuts."
    },
    {
        id: 4,
        name: "Café Brasil x 250gr",
        price: 30,
        category: "brasil",
        img: "/assets/img/beans.jpg",
        description: "This coffee stands out for its smoothness, body and notes of nuts."
    },
    {
        id: 5,
        name: "Café Brasil x 500gr",
        price: 40,
        category: "brasil",
        img: "/assets/img/beans.jpg",
        description: "This coffee stands out for its smoothness, body and notes of nuts."
    },
    {
        id: 6,
        name: "Café Brasil x 1gr",
        price: 50,
        category: "brasil",
        img: "/assets/img/beans.jpg",
        description: "This coffee stands out for its smoothness, body and notes of nuts."
    },
    {
        id: 7,
        name: "Café Italiano x 250gr",
        price: 40,
        category: "italiano",
        img: "/assets/img/beans.jpg",
        description: "This coffee stands out for its smoothness, body and notes of nuts."
    },
    {
        id: 8,
        name: "Café Italiano x 500gr",
        price: 45,
        category: "italiano",
        img: "/assets/img/beans.jpg",
        description: "This coffee stands out for its smoothness, body and notes of nuts."
    },
    {
        id: 9,
        name: "Café Italiano x 1gr",
        price: 55,
        category: "italiano",
        img: "/assets/img/beans.jpg",
        description: "This coffee stands out for its smoothness, body and notes of nuts."
    }
    
]

//? Función para dividir el array.
const splitProducts = (size) => {
    let dividedProducts = [];
    for (let i = 0; i < products.length; i += size)
    dividedProducts.push(products.slice(i, i + size))
    return dividedProducts;
}
// ? Función para la paginación.
const productsController = {
    dividedProducts: splitProducts(3),
    nextProductsIndex: 1,
    productsLimit: splitProducts(3).length,
}
