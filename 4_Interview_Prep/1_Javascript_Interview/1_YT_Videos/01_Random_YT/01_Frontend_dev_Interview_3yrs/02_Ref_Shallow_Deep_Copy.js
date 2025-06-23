let original = {
    name: "Amit",
    address: {
        city: "Delhi"
    }
};

// 1️⃣ Reference Copy
let refCopy = original;

// 2️⃣ Shallow Copy
let shallowCopy = { ...original }; // or Object.assign({}, original)

// 3️⃣ Deep Copy
let deepCopy = JSON.parse(JSON.stringify(original)); // or structuredClone(original) in modern JS

// Modify all copies
refCopy.name = "Jay";
refCopy.address.city = "Mumbai";

shallowCopy.name = "Karan";
shallowCopy.address.city = "Pune";

deepCopy.name = "Suresh";
deepCopy.address.city = "Bangalore";

// Check original after all changes
console.log("Original:", original);
console.log("Reference Copy:", refCopy);
console.log("Shallow Copy:", shallowCopy);
console.log("Deep Copy:", deepCopy);


// Original     - Jay       | Pune
// Reference    - Jay       | Pune
// Shallow      - Karan     | Pune
// Deep         - Suresh    | Bangalore
