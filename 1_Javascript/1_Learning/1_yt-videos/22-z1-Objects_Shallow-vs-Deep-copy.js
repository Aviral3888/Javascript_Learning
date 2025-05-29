console.log("22 - Objects - shallow vs deep copy");

/*     -------------------           Shallow Copy           ------------------     */

// Shallow Copy - when only the first level properties are copied and the nested objects are referenced and not copied. 
// updating the nested object in the shallow copy objects will change the original nested object values - because they are referenced and not copied.

let hotel = {
    name: "Taj", 
    owner: "Tata", 
    activities: ["Pool", "Gym", "Club House"],
    rooms: {
        total: 180,
        singleBedRooms: 50,
        doubleBedRooms: 80,
        tripleBedRooms: 25,
        pentaHouseRooms: 25 
    }
}

let hotel1 = {...hotel};
hotel1.name = "Leela";
hotel1.activities.push("Spa");
hotel1.rooms.singleBedRooms = 100;
hotel1.rooms.doubleBedRooms = 150;

console.log("Shallow copy - updated \n", hotel1);
// {
//     "name": "Leela",
//     "owner": "Tata",
//     "activities": [
//         "Pool",
//         "Gym",
//         "Club House",
//         "Spa",
//     ],
//     "rooms": {
//         "total": 180,
//         "singleBedRooms": 100,
//         "doubleBedRooms": 150,
//         "tripleBedRooms": 25,
//         "pentaHouseRooms": 25
//     }
// }
console.log("original - updated \n", hotel);
// {
//     "name": "Taj",
//     "owner": "Tata",
//     "activities": [
//         "Pool",
//         "Gym",
//         "Club House",
//         "Spa",
//     ],
//     "rooms": {
//         "total": 180,
//         "singleBedRooms": 100,
//         "doubleBedRooms": 150,
//         "tripleBedRooms": 25,
//         "pentaHouseRooms": 25
//     }
// }

// Nested Properties got updated 


/*     -------------------           Deep Copy           ------------------     */

// Deep Copy - creates a complete independent clone, including all nested objects
// updating the nested object in the deep copy objects does not change the original nested object values - because they are fully copied.

let hotel2 = {
    name: "Taj", 
    owner: "Tata", 
    activities: ["Pool", "Gym", "Club House"],
    rooms: {
        total: 180,
        singleBedRooms: 50,
        doubleBedRooms: 80,
        tripleBedRooms: 25,
        pentaHouseRooms: 25 
    }
}

let hotel3 = JSON.parse(JSON.stringify(hotel2));
hotel3.name = "Leela";
hotel3.activities.push("Spa");
hotel3.rooms.singleBedRooms = 100;
hotel3.rooms.doubleBedRooms = 150;

console.log("Deep copy - updated \n", hotel3);
// {
//     "name": "Leela",
//     "owner": "Tata",
//     "activities": [
//         "Pool",
//         "Gym",
//         "Club House",
//         "Spa"
//     ],
//     "rooms": {
//         "total": 180,
//         "singleBedRooms": 100,
//         "doubleBedRooms": 150,
//         "tripleBedRooms": 25,
//         "pentaHouseRooms": 25
//     }
// }

console.log("original - not updated \n", hotel2);
// {
//     "name": "Taj",
//     "owner": "Tata",
//     "activities": [
//         "Pool",
//         "Gym",
//         "Club House"
//     ],
//     "rooms": {
//         "total": 180,
//         "singleBedRooms": 50,
//         "doubleBedRooms": 80,
//         "tripleBedRooms": 25,
//         "pentaHouseRooms": 25
//     }
// }

// Nested Properties remained unchanged.
