const Person = require('./person');

module.exports = class Teacher extends Person {
    constructor(name,age,clazzes,id){
        super(name,age,id);
        this.clazzes = clazzes;

    }
    introduce(){
        var arr = [];

        for(var index in this.clazzes){
            arr[index] = this.clazzes[index].number;
        }
        //console.log(arr);
        if(arr.length === 0){
            return super.introduce()+" I am a Teacher. I teach No Class.";
        }else{
            return super.introduce()+" I am a Teacher. I teach Class "+arr[0]+","+arr[1]+".";
        }

    }
    isTeaching(student) {
        if(student.clazz.hasStudent !== 1)return false;
            for(let value in this.clazzes){
                if(student.clazz.number == this.clazzes[value].number){
                    return true;
                }
            }
    }

    notifyLeaderAssigned(student){
        for(let value in this.clazzes){
            if(student.clazz.number == this.clazzes[value].number){
                if(this.clazzes.leader !== ''){
                    return "Jerry become Leader of Class "+student.clazz.number;
                }
                return "Jerry has joined Class "+student.clazz.number;
            }
        }
    }

}