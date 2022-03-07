const iPhone11 = {
    name: "iPhone 11",
    manufacturer: "Apple",
    price: 699,
    specs: {
        color: "White",
        memory: {
            value: 128,
            unit: "MB",
        },
        cameras: {
            front: "12 MP Wide",
            rear: "12 MP Ultra Wide",
        },
        availableColors: ["Black", "Green", "Yellow", "Purple", "Red", "White"],
    },
    calculateDiscoutedPrice: function (percentage) {
        return (this.price * (100 - percentage)) / 100;
    },
};

// const {name,manufacturer:brand, specs{memory{value}}: ram, rearCamera: specs{cameras{rear}}, secondColor: availableColors[1] } = iPhone11;
console.log(name,brand,ram,rearCamera,secondColor);
