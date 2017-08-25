const Person = require('./person');

module.exports = class Worker extends Person {
    constructor(name,age){
        super(name,age);
    }

    toString(){
        return super.toString();
    }
    introduce(){
        return super.introduce()+' I am a Worker. I have a job.';
    }
}