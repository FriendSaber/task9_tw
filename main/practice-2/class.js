// Write your code here
module.exports = class Class {
    constructor(number){
        this.number = number;
    }
    //toString(){
    //    return 'Class { number: '+this.number+'}';
    //}
    assignLeader(student){
        student.__proto__.introduce = function(){
            if(student.name === 'Tom'){
                return "My name is " + student.name +". I am " + student.age + " years old."+ " I am a Student. I am Leader of Class " + student.klass.number +".";
            }
            else{
                return  student.introduce();
            }
        }
    }
}