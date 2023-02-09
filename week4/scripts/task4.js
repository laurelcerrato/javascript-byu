/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
const information = {
// Step 2: Inside of the object, add a property named name with a value of your name as a string
name: "Laurel Cerrato",
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
photo: "images/laurel.jpg",
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
favoriteFoods: ["Baleadas", "Fried chicken"],
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
hobbies: ["Read", "Play Videogames"],
// Step 6: Add another property named placesLived with a value of an empty array
placesLived: []
}
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
information.placesLived.push({place:"", length: ""})
// Step 8: For each property, add appropriate values as strings
information.placesLived[0].place = "Honduras, San Pedro Sula";
information.placesLived[0].length = "All life";

// Step 9: Add additional objects with the same properties for each place you've lived


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.getElementById("name").innerHTML = information.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").src = information.photo;
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").alt = information.photo;
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
const foodList = document.getElementById("favorite-foods");
for(let i= 0; i < information.favoriteFoods.length; i++){
    let listItem = document.createElement("li");
    listItem.innerHTML= information.favoriteFoods[i];
    foodList.append(listItem);

}

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// Step 6: Repeat Step 4 for each hobby in the hobbies property

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
const hobbiesList = document.getElementById("hobbies");
for(let i= 0; i < information.hobbies.length; i++){
    let listItem = document.createElement("li");
    listItem.innerHTML= information.hobbies[i];
    hobbiesList.append(listItem);
}

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
const placesList = document.getElementById("places-lived");
for(let i= 0; i < information.placesLived.length; i++){
    let listItem = document.createElement("dt");
    let listItem2 = document.createElement("dd");
    listItem.innerHTML= information.placesLived[i].place;
    listItem2.innerHTML= information.placesLived[i].length;
    placesList.append(listItem);
    placesList.append(listItem2);
}
