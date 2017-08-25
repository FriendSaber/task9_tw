const Person = require('./person');

module.exports = class Student extends Person {
    constructor(name,age,klass,id){
        super(name,age,id);
        this.klass = klass;
    }
    toString(){
        return this.klass+' '+super.toString();
    }
    introduce(){
        return super.introduce()+' I am a Student. I am at Class '+this.klass.number+'.';
    }

}