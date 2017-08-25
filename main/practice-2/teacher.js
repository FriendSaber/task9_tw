const Person = require('./person');

module.exports = class Teacher extends Person {
    constructor(name,age,classes,id){
        super(name,age,id);
        this.classes = classes;
        //console.log(this.klasses);
    }
    introduce(){
        var arr = [];

        for(var index in this.classes){
            arr[index] = this.classes[index].number;
        }
            //console.log(arr);
            if(arr.length === 0){
                return super.introduce()+" I am a Teacher. I teach No Class.";
            }else{
                return super.introduce()+" I am a Teacher. I teach Class "+arr[0]+","+arr[1]+".";
            }

    }
}

