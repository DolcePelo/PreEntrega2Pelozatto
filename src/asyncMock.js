const products = [
    {
        id: '1',
        name: 'Remera basica negra',
        price: 1000,
        category: 'tops',
        img: 'https://www.liceoindustrial.com/wp-content/uploads/2023/08/camiseta-negra-bc3a1sica-mock-camisetas-thinking-mu-mujer.jpg',
        stock: 25,
        description: 'Remera basica negra'
    },
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId  ))
        }, 500)
    })
} 

export const getProductsByCategory = (productCategory) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === productCategory ))
        }, 500)
    })
} 