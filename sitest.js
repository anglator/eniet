let obj = {};  // Create an empty object

obj.setName = function(name) {
    this.name = name;
};

obj.setName('DATE');

console.log(obj.name);  // Output: 'DATE'
