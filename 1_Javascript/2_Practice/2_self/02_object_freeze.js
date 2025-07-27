function deepFreeze(obj) {
  Object.freeze(obj);
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] == 'object' && obj[key] != null) {
      deepFreeze(obj[key])
    }
  })
  
  return obj;
}

const obj = {
  a: 10,
  b: {
    c: 20,
    d: {
      e: 30
    }
  }
};

// Object.freeze(obj);
// obj.a = 11; // wont effect because of freeze, deepFreeze doesnt happen in Js directly.
// obj.b.c = 21; // will effect 

deepFreeze(obj);
obj.a = 11; 
obj.b.c = 21;
obj.b.d.e = 31;

console.log(obj);
