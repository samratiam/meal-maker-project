// Meal Maker

//Step 1
let menu = {};

//Step 2
menu.courses = {};

console.log("Menu:", menu);

// Step 3
menu.courses['appetizers'] = [];
menu.courses['mains'] = [];
menu.courses['desserts'] = [];
console.log("Menu courses:", menu.courses);

// // Step 4 and 5
menu.addDishToCourse = function addDishToCourse(courseName, dishName, dishPrice) {
    let dish = { name: dishName, price: dishPrice };

    if (menu.courses.hasOwnProperty(courseName)) {
        return menu.courses[courseName].push(dish);
    }

};

// Step 6 and 7
menu.getRandomDishFromCourse = function getRandomDishFromCourse(courseName) {
    if (menu.courses.hasOwnProperty(courseName)) {
        let dishes = menu.courses[courseName];
        randIndex = Math.random() * Object.keys(dishes).length
        intIndex = Math.floor(randIndex);
        return dishes[intIndex];
    }
}

//Step 8
function generateRandomMeal() {
    let appetizer = menu.getRandomDishFromCourse('appetizers');
    let main = menu.getRandomDishFromCourse('mains');
    let desert = menu.getRandomDishFromCourse('desserts');
    let totalPrice = appetizer.price + main.price + desert.price;
    return `List of dishes: ${appetizer.name},${main.name},${desert.name} \nTotal price: ${totalPrice}`
}

//Step 9
menu.addDishToCourse('mains', 'chicken', 10);
menu.addDishToCourse('mains', 'cheese', 20);
menu.addDishToCourse('mains', 'potatoes', 30);

menu.addDishToCourse('appetizers', 'cakes', 40);
menu.addDishToCourse('appetizers', 'salad', 50);
menu.addDishToCourse('appetizers', 'watermelon', 60);

menu.addDishToCourse('desserts', 'strawberry', 70);
menu.addDishToCourse('desserts', 'curd', 80);
menu.addDishToCourse('desserts', 'icecream', 90);

// Step 10 
let meal = generateRandomMeal();
console.log(meal);

