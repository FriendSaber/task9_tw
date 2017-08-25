// Write your code here
module.exports = class Person {
    constructor(name ,age){
        this.name = name;
        this.age = age;
    }

    toString(){
        return '('+this.name+','+this.age+')';
    }
    introduce(){
        return 'My name is '+this.name+'. I am '+this.age+' years old.';
    }
}