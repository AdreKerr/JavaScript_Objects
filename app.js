//learning Objects

//Comparable to arrays just more detalied = short - summary - michael
//syntax for objects
let person ={
    fName: "Bob",
    lName: "Ross",
    hobbies: ["painting","Animal Caring"],
    occupations: ["Drill Sargent","Tv Personality"],
    age: 52,
    currentHealth: "Dead",
    catchphase: function(catchphase){
        console.log(catchphase);
    }
};//end person
//This calls the entire object data
console.log(person);
Space(1);
//Calling one of the property values
console.log(`My Favorite Character's first name is ${person.fName}`);
console.log(`One of my favorite character's hobbies is ${person.hobbies[1]}`);
//uppdating objects
person.currentHealth = "Alive and well in spitit!";
console.log(person.currentHealth);
//adding a new property to the object variable
person.paintingSkills = "HE WAS SO GOOOD!";
console.log(person);

//objects can store funcitons
function quoter(){
    let quote = "There are no mistakes only happy accidents.";
    return quote
}//end funtions quoter
person.catchphase("There are no mistakes only happy accidents.");


//space and line
LineSpace();


//arrays of objeccts
let listOfMusic = [
    {   //0 in array
        title: "Never gonna give you up",
        artist: "Rick Astley",
        year: 1987
    },
    {   //1 in array
        title: "Black Magic Woman",
        artist: "Santana",
        year: 1960
    }
]//end array of list of music
//FORMAT nameOfVar[index's #].var = the whole object in that index
console.log(`${listOfMusic[0].title} will grab the whole object's title`);
console.log(`${listOfMusic[1].artist} will grab the second item in the array`);
//show whole list 
let currentObjectLengh = Object.keys(listOfMusic[0]).length;
console.log(`${currentObjectLengh} is the number of properties`)
//This will return object object.
console.log(`${listOfMusic[1]} will return object object in a templete literal`);



//line of space
LineSpace();


//Practice Questions


//1.
//Personal Contact Book
//Create a simple contact book where you can add, view, and search for contacts by name.
 
//Define a Contact Object: Each contact should be represented as an object with properties like name, phone number, and email.
let contactBook =[
    {
        fullName:"Sam Brown",
        phoneNum:"228-875-8643",
        emalAddres: "sBrown@gmail.com"
    }
]
//Store Contacts in an Array: Use an array to store multiple contact objects.
//Create Functions: Craeate functions to add a contact, view all contacts, and search for a contact by name.
//Funciton to Add a new Contact
function addContact(contactName,contactPhone,contactEmail){
    let contactObject ={
        fullName: contactName,
        phoneNum: contactPhone,
        emalAddres: contactEmail
    }
    contactBook.push(contactObject);
}//end funtion add contact
//Function to View Your Contact List
function viewContact(){
    console.log(contactBook);
}//end function view contact
//Function to Search for Contact Name
function searchForContact(personName){
    for(let i=0;i<contactBook.length;i++){
        const currentContact = contactBook[i];
        if(personName.toUpperCase() == contactBook[i].fullName.toUpperCase()){
            console.log("This person is in your Contact book!");
        } else {
            console.log("This person is NOT in your Contact book!");
        }//end if else tree
    }//end for loop
}//end fucntion search for contact
//Output Results: Use console.log to display the contacts and search results.
console.log("CONTACT LIST");
addContact("Joel Davis","228-098-8754","jDavis@yahoo.com");
viewContact();



//2.
LineSpace();
//Student Grade Management
//Create a program to manage student grades, where you can calculate the average grade for the class and identify students who need to improve.
 
//Predefine Student Objects: Each student should be an object with properties like name and grade, stored inside an array.
let students = [
    { name: "Alice  ", grade: 85 },
    { name: "Bob    ", grade: 76 },
    { name: "Charlie", grade: 92 },
    { name: "David  ", grade: 63 },
    { name: "Eve    ", grade: 78 }
  ];
 let total = 0;
 let avg = 0;
//Calculate Average Grade: Write a function to calculate the average grade of the class.
//Identify Students Below Average: Write a function to find and list students with grades below the class average.
function ClassGrade(){
    for (let i =0;i<students.length;i++){
        total += students[i].grade;
        avg = total / students.length;
    }//end for loop
    console.log(`Class Avg - ${avg}`);
    //Were you are placed in class
    for(let j =0;j<students.length;j++){
        Space(1);
        if(students[j].grade >= avg){
            console.log(`Name - ${students[j].name}`);
            console.log(`Grade - ${students[j].grade}`);
            console.log(`Above Avrage`);
        } else if(students[j].grade <= avg){
            console.log(`Name - ${students[j].name}`);
            console.log(`Grade - ${students[j].grade}`);
            console.log(`Below Avrage`);
        };//end if else tree
    }//end for loop
}//end class grade
ClassGrade();
 


//line of space
LineSpace();
//3.
//Movie Collection Tracker
//Create a program that allows you to manage a collection of movies, including adding movies, rating them, and viewing your collection.

//Define a Movie Object: Each movie should be represented as an object with properties like title, genre, and rating.
//Store Movies in an Array: Use an array to store multiple movie objects.
let Movie =[
    {
        name:"Dune",
        rateing:"2/10"
    }
]
//Create Functions: Create functions to add a movie, rate a movie, and view your entire collection.
//Funtion to Add a new Movie
function addMovie(Title,Rating){
    let favMovie ={
        name: Title,
        rateing: Rating
    }
    Movie.push(favMovie);
}//end funciton add movie
//Function to View all your Movies
function viewMovie(){
    console.log(Movie);
}//end fucniton view movie
//Output Results: Use console.log to display the movie collection and ratings.
console.log("MOVIE LIST");
addMovie("10 Things I Hate About You","10/10");
addMovie("Lego Movie","9/10");
viewMovie();



//4.
LineSpace();
//Library Book Tracker
//Create a program to manage a small library, where you can check which books are available or borrowed, and filter the books by their status.
 
//Predefine Book Objects: Each book should be an object with properties like title and status (available or borrowed), stored inside an array.
let books = [
    { title: "The Great Gatsby",status: "available" },
    { title: "1984",status: "borrowed" },
    { title: "To Kill a Mockingbird",status: "available" },
    { title: "The Catcher in the Rye",status: "borrowed" },
    { title: "Moby-Dick",status: "available" }
  ];
//Filter Available Books: Write a function to list all available books.
function AvailableBooks(){
    for(let i=0;i<books.length;i++){
        if(books[i].status == "available"){
            console.log(`Book Title -=- ${books[i].title}`);
            console.log(`Status -=- ${books[i].status}`);
            Space(1);
        } else {

        };//end if esle tree
    }//end for loop 
}//end function available
//Filter Borrowed Books: Write a function to list all borrowed books.
function BorrowedBooks(){
    for(let i=0;i<books.length;i++){
        if(books[i].status == "borrowed"){
            console.log(`Book Title -=- ${books[i].title}`);
            console.log(`Status -=- ${books[i].status}`);
            Space(1);    
        } else {

        };//end if esle tree
    }//end for loop 
}//end function available
AvailableBooks();
BorrowedBooks();



//1.
LineSpace();
//Recipe Organizer
//Create a program to manage recipes, where some recipes are predefined, and the user can add or update recipes.

//Each recipe should have properties like title, ingredients (an array of strings), and instructions.
let recipes = [
    { title: "Pancakes", ingredients: ["Flour", "Eggs", "Milk"], instructions: "Mix and cook on a griddle." },
    { title: "Salad", ingredients: ["Lettuce", "Tomatoes", "Cucumbers"], instructions: "Chop and toss with dressing." }
  ];
//Add a New Recipe: Allow the user to input a new recipe's title, ingredients, and instructions, then add it to the list.
//Update Recipe Instructions: Enable the user to update the instructions of an existing recipe.
function Recipe(Title,Ingredients,Instructions){
    let newRecipes ={
        title: Title,
        ingredients: Ingredients,
        instructions: Instructions
    }
    recipes.push(newRecipes);
}//end funtion dealership inventory
//Display All Recipes: Write a function to display all recipes with their details.
function ViewRecipes(){
    console.log(recipes);
}//end fucntion view recipe
//Output Results: Use console.log to display all the recipes
console.log("ALL YOUR RECIPES")
Recipe("Tuna Pasta",["tuna","pasta","mayo","mustard","relash"],"Cook Pasta then put tuna and all the other ingredints together");
ViewRecipes();



//2.
LineSpace();
//Car Dealership Inventory
//Create a program to manage a car dealership inventory, where some cars are predefined, and the user can add or update car details.
let cars = [
    { make: "Toyota", model: "Camry", year: 2020, price: 24000 },
    { make: "Honda", model: "Civic", year: 2019, price: 22000 },
  ];
//Each car should have properties like make, model, year, and price.
//Add a New Car: Allow the user to input a new car's make, model, year, and price, then add it to the inventory.
//Update Car Price: Enable the user to update the price of an existing car.
function DealershipInventory(Make,Model,Year,Price){
    let newCar ={
        make: Make,
        model: Model,
        year: Year,
        price: Price
    }
    cars.push(newCar);
}//end funtion dealership inventory
//Display All Cars: Write a function to display all cars in the inventory.
function ViewDealersipInventory(){
    console.log(cars);
}
//Output Results: Use console.log to display the cars
console.log("CAR DEALERSHIP INVENTORY")
DealershipInventory("Kia","Escape",2005,5000);
DealershipInventory("Jeep","Rangler",2022,50000);
ViewDealersipInventory();



//3.
LineSpace();
//Pet Names with Details
//Create a program that manages a list of pet names, where each pet has a name, type (e.g., dog, cat), and age.
let Pet =[
    {
        Name:"Sissy",
        Type:"Chawwawa",
        Age:"8"
    }
];
//Each object should contain name, type, and age.
//Add a New Pet: Allow the user to input a new pet's name, type, and age, then add it to the list.
function AboutPet(name,type,age){
    let NewPet ={
        Name: name,
        Type: type,
        Age: age
    }
    Pet.push(NewPet);
}//end funtion pet
//Display All Pet Names: Write a function to display all pets with their details.
function ViewPets(){
    console.log(Pet);
}//end funtion veiw pet
//Output Results: Use console.log to display the pets 
console.log("PETS")
AboutPet("Fraya","Huskey","5");
AboutPet("Ducky","Mini Rotewile","3");
ViewPets();








/*
LineSpace();
//question zack was doing
class Car{
    constructor(make,model){
        this.make = make;
        this.model = model;
        this.speed = 0;
    }
    accelarate(){
        this.speed += mph;
        console.log(`this car is going ${this.speed} mph`);
    }
    brake(mph){
        this.speed -= mph;
        console.log(`this car is going ${this.speed} mph`);
    }
}
const shitbox = new Car("nissan","pathfinder");
console.log(`Car make - ${Car.make}; Car model - ${Car.model}; Car speed - ${Car.speed}`)
shitbox.accelarate(20);
shitbox.brake(50);


//space
LineSpace();



class Animal{
    speak(){
        console.log("some animal noise");
    }
    nap(){
        console.log("zzz");
    }
}
class Dog extends Animal{
    speak(){
        console.log("bark");
    }
}
class Cat extends Animal{
    speak(){
        console.log("meow");
    }
}
function speak(){
    console.log("speak 1");
}
function speak(){
    console.log("speak override");
}




LineSpace();
//which number is highter
function whichNumberIsHigher(numOne,numTwo){
    if(numOne > numTwo){
        console.log(`${numOne} is Higher than ${numTwo}`);
    } else if (numTwo > numOne){
        console.log(`${numTwo} is higher than ${numOne}`);
    }
}//end funciotn which num is higher
whichNumberIsHigher(14,3);
*/



//funciton Line Space
function LineSpace(){
    console.log(``);
    console.log(`===============================`);
    console.log(``);
}//end funtion space
function Space(num){
    console.log(``);
}//end funtion space