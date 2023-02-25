// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//   const arr = message.split(" ");
//     console.log(arr.length * pricePerWord);
// }


// calculateEngravingPrice("JavaScript is in my blood", 10);
// calculateEngravingPrice("JavaScript is in my blood", 20);
// calculateEngravingPrice("Web-development is creative work", 40);
// calculateEngravingPrice("Web-development is creative work", 20);


// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// const keys = Object.keys(feedback);
// console.log(keys);

// for (const key of keys) {
//   console.log(key);
// }
// console.log(feedback[key]);

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
//   console.log(key);
//   console.log(apartment[key]);
// }



// Не ЗНАЮ КАК ДЕЛАТЬ!!!!!! НЕ ПОНИМАЮ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line

//   // Change code above this line
//   return propCount;
// }

// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });


// // =================================================================

// const cars = ["Opel", "Mersedes", "BMW", "Porshe", "Ford", "Audi"];
// cars.push("Volvo");                         // добавили еще 1 елемент в конец - push
// cars.unshift("Таврия", "Жигули");           // добавили первие два елемента - unshift
// cars.shift("Жигули");                       // удаляет первий елемент с массива - shift
// cars.pop("Жигули");                         // удаляет последний елемент с массива - pop

// console.log(cars);                          // видим весь массив
// console.log(cars.length);                   // видим сколько елементов в массиве =6
// console.log(cars.length - 1);               // видим сколько индексов в массиве =5
// console.log(cars[cars.length - 1]);         // видим последний елемент массива =Audi
// console.log(cars[3]);                       // видим 3й индекс массива =Porshe


// //===================================================================
// debugger;

// function getSum(num1, num2) {
//   if (num1 > num2) {
//   console.log(`4f`);
//   }
//   return num1 + num2;
// }


// const sum = getSum(7, 43);
// console.log(sum);
// console.log(sum);
// console.log(sum);

// ============================================================
// const user = {
//   firstName: "Jonny",
//   lastName: "Depp",
//   age: 30,
// };

// console.log(user);

// const newUser = {...user, age: 50, firstName: "Pamella", lastName: "Anderson", color: "red"};
// console.log(newUser);

// ===========================================
// function minNumber(...numbers) {
  
//   return Math.max(...numbers);
// }
// console.log(minNumber(10, 16, -19, 8));
// ============================================

// const user = {
//   firstName: "Jonny",
//   lastName: "Depp",
//   age: 37,
//   hobbies: {
//     cars: "Porshe",
//     rooms: 4,
//     femily: "yes",
//   },
// };

// const {
//   firstName,
//   lastName,
//   hobbies: { cars, rooms },
// } = user;
// console.log(user);
//================================================
// const cars = ["Opel", "Mersedes", "BMW", "Porshe", "Ford", "Audi"];
 
// const [one, , , four, ...newCars] = cars;
// console.log(one, four);
// console.log(newCars);
//===============================================

// function addOverNum(...args) {
//   let total = 0;
//   // console.log(total);
//   for (const arg of args) {
    
//       total += arg;
    
    

//   }
//   console.log(total);
//   return total;

// }

// addOverNum(50, 15, 27);
// addOverNum(10, 12, 4, 11, 48, 10, 8);
// addOverNum(15, 32, 6, 13, 19, 8);
// addOverNum(20, 74, 11, 62, 46, 12, 36);
    // if {args > total}
    //=========================================================== 41/41
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     const { potions } = this;
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const { potions } = this;
//     for (let i = 0; i < potions.length; i += 1) {
//       let name = potions[i].name;
//       if (potionName === name) {
//         potions.splice(i, 1);
//         return `Potion ${potionName} is not in inventory!`;
//       }
//     }
//   },
//   updatePotionName(oldName, newName) {
//     // const {potions}=this;
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//         return;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
// };

//=========================================================
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > 3) {
//     filteredNumbers.push(numbers[i]);
//   }
// }

// console.log(filteredNumbers);


// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter((value) => value > 3);
// console.log(filteredNumbers);
//============================================

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
//   { name: "Хьюстон", score: 64 },
// ];

// const names = students.map(student => student.name);
// console.log(names); // ['Манго', 'Поли', 'Аякс', 'Киви', 'Хьюстон']
//=================================
// function namesFirma(names) {

//   names.forEach((element, index, array) => {
//     console.log(element);
//     console.log(index);
//     console.log(array);
//   });
// };

// namesFirma(["SONY", "Samsung", "Panasonic"]);
//====================================================== 1/48
// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line


// const result = makePizza();
// console.log(result);
// const pointer = makePizza;
// console.log(pointer);
//======================================================2/48
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
  

// }

// makeMessage("Royal Grand", makePizza);
// makeMessage("Ultracheese", deliverPizza);
//=====================================================4/8 L 1:46:00
// const cars = [
//   { model: "Opel", age: 2006 },
//   { model: "BMW", age: 2018 },
//   { model: "Porshe", age: 2021 },
//   { model: "Audi", age: 2014 },
//   { model: "Reno", age: 2008 },
//   { model: "Peguo", age: 2016 },
//   { model: "Mersedes", age: 2020 },
//   { model: "Mitsubisi", age: 2013 },
// ];

// const carNew = (cars) => cars.filter((auto) => auto.age >= 2015).map((auto) => auto.model);

// console.table(cars);
// console.log(carNew(cars));
//======================================================= 4/8 1:50:50
//======================================================5/9 this
// const book = {
//   names: ["Чак Норис", "Сильвестер Сталоне"],
//   getName() {
//     return this.names;
//   },
//   addName(newName) {
//     this.names.push(newName);
//   },
// };

// console.log(book.getName()); // ["Бернард Корнуэлл", "Роберт Шекли"]
// book.addName("Арнольд Шварценегер");
// console.log(book.getName()); // ["Бернард Корнуэлл", "Роберт Шекли", "Ли Танит"]
//========================================================= 5/9 this
// const hotel = {
//   username: "Resort hotel",
//   showThis() {
//     const foo = () => {
//       // Стрелки запоминают контекст во время объявления,
//       // из родительской области видимости
//       console.log("this in foo: ", this);
//     };

//     foo();
//     console.log("this in showThis: ", this);
//   },
// };

// hotel.showThis();
//========================================================= 5/10
// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };

// employee.getWage();
// console.log(employee);
//=========================================================2/20
// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
//=================================================================8/20

// class Car {
//   // Change code below this line
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
    
//   // Change code above this line
// }

// new Car({ brand: "Audi", model: "Q3", price: 36000 });
// new Car({ brand: "BMW", model: "X5", price: 58900 });
// new Car({ brand: "Nissan", model: "Murano", price: 31700 });
// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 });)
//========__________=============____________==========_________________
// const navItemEl = document.querySelector('.nav');
// console.log(navItemEl);

// const navListEl = navItemEl.querySelectorAll(".nav__list");
// console.log(navListEl);

// const nameEl = document.querySelector('.nav__item');
// console.log(nameEl);

// const nameEl = document.querySelector('.title');
// console.log(nameEl);
// nameEl.classList.add('Samsung');
// nameEl.classList.remove('title')
// nameEl.classList.replace('Samsung', 'SONY');

// const zagolovokEl = document.createElement('h1');
// console.log(zagolovokEl);

// zagolovokEl.classList.add('title');

// zagolovokEl.textContent = 'SONY'

// document.body.appendChild(zagolovokEl);
// const titleEl = document.querySelector('h1');
// console.log(titleEl)
// titleEl.classList.add('test')

// titleEl.style.cssText = 'background-color: yellow; color: red; font-size: 40px'

// titleEl.style.backgroundColor = 'red';
// titleEl.style.color = 'blue';
// titleEl.style.fontSize = '40px';
// titleEl.style.textAlign = 'center';
//===========================================Praktika============== 6/11
// const listEl = document.querySelector('.gallery');
// console.log(listEl);

// const listItemEl = document.createElement('li');
// listItemEl.classList.add('gallery-item');
// // console.log(listItemEl);

// const listItemAnchorEl = document.createElement('a');
// // console.log(listItemAnchorEl);
// listItemAnchorEl.href = '#';

// listItemEl.append(listItemAnchorEl);

// const listImgEl = document.createElement('img');

// listImgEl.src = 'photo1';
// listImgEl.alt = 'Lablador';

// listItemAnchorEl.append(listImgEl);

// // listEl.append(listItemEl);

// listEl.firstElementChild.after(listItemEl);
//==================== ta ze zada4a - legkiy sposob =================
const listEl = document.querySelector(".gallery");

listEl.innerHTML += `<li class="gallery-item">
<a href = "#">
<img src="photo1", alt="lablador"
</a>
</li>`;
console.log(listEl);



