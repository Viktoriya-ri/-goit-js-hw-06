const categories = [
    { item: Animals, li: ["Cat", "Hamster", "Horse", "Parrot"] },
    { item: Products, li: ["Bread", "Prasley", "Cheese"] },
    { item: Technologies, li: ["HTML", "CSS", "JavaScript", "React", "Node.js"] },
];

categories.forEach(function(categorie, index) {
    console.log(`${index}, ${categorie}`)
});