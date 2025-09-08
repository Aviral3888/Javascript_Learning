// Flatten Objects 

let obj = {
    name: "John",
    age: 30,
    courses: ["Grad", "MS"],
    address: {
        city: "New York",
        zip: { code: 10001, area: "Downtown" }
    },
    emptyObj: {},
    emptyArr: []
};

obj.self = obj;

function flattenObject(obj) {
    const flattenArray = new Array();
    const flattenObject = new Map();
    const seen = new WeakSet();

    function flat(value, path) {

        const isObject = value !== null && typeof value === 'object';

        // Handle Leaf (primitive value)
        if (!isObject) {
            flattenArray.push({ key: path, value });
            flattenObject.set(path, value);
            return;
        }

        // Handle Circular case
        if (seen.has(value)) {
            flattenArray.push({ key: path, value: "Circular" });
            flattenObject.set(path, "Circular");
            return;
        }
        seen.add(value);

        if (Array.isArray(value)) {
            // Handle for array

            // For empty array
            if (value.length == 0) {
                flattenArray.push({ key: path, value: [] });
                flattenObject.set(path, []);
                return;
            }
            for (let i = 0; i < value.length; i++) {
                let currentPath = path ? `${path}.${i}` : key;
                flat(value[i], currentPath);
            }
        }
        else {
            // Handle for Object

            // For Empty Object
            if (Object.keys(value).length === 0) {
                flattenArray.push({ key: path, value: {} });
                flattenObject.set(path, {});
                return;
            }
            for (const key of Object.keys(value)) {
                let currentPath = path ? `${path}.${key}` : key;
                flat(value[key], currentPath);
            }
        }
    }

    flat(obj, '');

    return { flattenArray, flattenObject }
}

console.log(flattenObject(obj));