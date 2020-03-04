class parent{
    constructor(){
       this.fatherName ="Azad";

    } 
}

class child extends parent{
    constructor(name){
        super();
        this.name = name;   
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }


}
const baby = new child ("Imran");
const baby2 = new child ("Hasmi");
console.log(baby.getFullName());
console.log(baby2.getFullName());