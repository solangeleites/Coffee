const products = [
    {
        id: 1,
        name: "Coffee Colombia x 250gr",
        price: 25,
        category: "colombia",
        img: "/assets/img/colombia.webp",
        description: "It is a coffee with citrus notes and light touches of walnuts. Your body is balanced"
    },
    {
        id: 2,
        name: "Coffee Colombia x 500gr",
        price: 35,
        category: "colombia",
        img: "/assets/img/colombia.webp",
        description: "It is a coffee with citrus notes and light touches of walnuts. Your body is balanced"
    },
    {
        id: 3,
        name: "Coffee Colombia x 1kg",
        price: 45,
        category: "colombia",
        img: "/assets/img/colombia.webp",
        description: "It is a coffee with citrus notes and light touches of walnuts. Your body is balanced"
    },
    {
        id: 4,
        name: "Coffee Brasil x 250gr",
        price: 30,
        category: "brasil",
        img: "/assets/img/brasil.webp",
        description: "Here we are talking coffee with notes of nuts, butter and chocolate with a heavy body."
    },
    {
        id: 5,
        name: "Coffee Brasil x 500gr",
        price: 40,
        category: "brasil",
        img: "/assets/img/brasil.webp",
        description: "Here we are talking coffee with notes of nuts, butter and chocolate with a heavy body."
    },
    {
        id: 6,
        name: "Coffee Brasil x 1gr",
        price: 50,
        category: "brasil",
        img: "/assets/img/brasil.webp",
        description: "Here we are talking coffee with notes of nuts, butter and chocolate with a heavy body."
    },
    {
        id: 7,
        name: "Coffee Italiano x 250gr",
        price: 40,
        category: "italiano",
        img: "/assets/img/italiano.webp",
        description: "It has notes of caramel, vanilla and toasted hazelnut, its body is robust."
    },
    {
        id: 8,
        name: "Coffee Italiano x 500gr",
        price: 45,
        category: "italiano",
        img: "/assets/img/italiano.webp",
        description: "TIt has notes of caramel, vanilla and toasted hazelnut, its body is robust."
    },
    {
        id: 9,
        name: "Coffee Italiano x 1gr",
        price: 55,
        category: "italiano",
        img: "/assets/img/italiano.webp",
        description: "It has notes of caramel, vanilla and toasted hazelnut, its body is robust."
    },
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
