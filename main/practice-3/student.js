const Person = require('./person');

module.exports = class Student extends Person {
    constructor(name,age,clazz,id){
        super(name,age,id);
        this.clazz = clazz;
    }

    toString(){
        return this.clazz+' '+super.toString();
    }
    introduce(){

        if(this.clazz.hasStudent !== 0  ){
            return super.introduce()+' I am a Student. I am at Class '+this.clazz.number+'.';
        }
        else
            return super.introduce()+" I am a Student. I haven't been allowed to join Class.";

    }
}