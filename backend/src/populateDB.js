const Store = require('../../database/src/database')
function populateDB() {
    const storeData = {
        name: "IGA Supermarket",
        items: [
            {
                name: "Apple",
                normal_price: 0.75,
                weight_g: 150,
                discount_rate: 10,
                manufacturer: "Local Orchard Farms",
                unit: false,
                tag: "fruit",
                image_url: "https://sbs-prd-cdn-products.azureedge.net/media/image/product/en/medium/0000000003283.jpg"
            },
            {
                name: "Banana",
                normal_price: 0.5,
                weight_g: 120,
                discount_rate: 0,
                manufacturer: "Tropical Fruit Co.",
                unit: false,
                tag: "fruit",
                image_url: "https://sbs-prd-cdn-products.azureedge.net/media/image/product/en/medium/0000000004011.jpg"
            },
            {
                name: "Potato",
                normal_price: 1.25,
                weight_g: 2000,
                discount_rate: 5,
                manufacturer: "Farm Fresh Produce",
                unit: false,
                tag: "vegetable",
                image_url: "https://sbs-prd-cdn-products.azureedge.net/media/image/product/en/medium/0062930712331.jpg"
            },
            {
                name: "Chicken Breast",
                normal_price: 5.99,
                weight_g: 500,
                discount_rate: 0,
                manufacturer: "Poultry Farms Ltd.",
                unit: false,
                tag: "meat",
                image_url: "https://sbs-prd-cdn-products.azureedge.net/media/image/product/en/medium/0021076900000.jpg"
            },
            // Additional items for Fresh Mart
            {
                name: "Salmon Fillet",
                normal_price: 8.49,
                weight_g: 300,
                discount_rate: 0,
                manufacturer: "Seafood Co.",
                unit: false,
                tag: "seafood",
                image_url: "https://sbs-prd-cdn-products.azureedge.net/media/image/product/en/medium/0027061000000.jpg"
            },
            {
                name: "Pasta Sauce",
                normal_price: 2.25,
                weight_g: 500,
                discount_rate: 0,
                manufacturer: "Italian Flavors Inc.",
                unit: true,
                tag: "pantry",
                image_url: "https://sbs-prd-cdn-products.azureedge.net/media/image/product/en/medium/0062845625262.jpg"
            },
            {
                name: "Orange Juice",
                normal_price: 3.99,
                weight_g: 1000,
                discount_rate: 0,
                manufacturer: "Freshly Squeezed Co.",
                unit: true,
                tag: "beverage",
                image_url: "https://example.com/orange.jpg"
            }
            // Continue adding other items for other stores in a similar fashion
        ]
    };

    const store = new Store(storeData);
    store.save().then(doc => {
        console.log('Store saved:', doc);
    }).catch(err => {
        console.error('Error saving store:', err);
    });
}
module.exports = populateDB
