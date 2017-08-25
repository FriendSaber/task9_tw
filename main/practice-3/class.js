// Write your code here
module.exports = class Class {
    constructor(number){
        this.number = number;
        this.hasStudent = 0;
        this.leader = 0;
    }
    assignLeader(student){
        this.leader = 1;
        student.__proto__.introduce = function(){
            return "My name is " + student.name +". I am " + student.age + " years old."+ " I am a Student. I am Leader of Class " + student.clazz.number +".";
        }
        if(this.hasStudent !== 0){
            return "Assign team leader successfully.";
        }if(this.hasStudent === 0){
            return "It is not one of us.";
        }
    }
    appendMember(student){
       this.hasStudent += 1;
    }

}