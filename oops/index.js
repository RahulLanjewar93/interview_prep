let arr =[]

class Animal {
    constructor(name) {
        this.name = name;
        arr.push(this)
    }

    getName(){
        return this.name;
    }

    setName() {
        this.name = name
    }

    bark(){
        console.log("this is from animal class barking now")
    }

}

class Dog extends Animal{
    constructor(name,breed){
        super(name)
        this.breed = breed
    }

    bark(){
        return console.log('Whoo whoo')
    }

    bark(sound){
        return console.log(sound)
    }

    bark(sound,times){
        console.log(times)
        for(let i=0;i<times;i++){
            console.log(sound)
        }
    }
}


let a1 = new Animal("Suzan")
let d1 = new Dog("Tom","Lab")

a1.bark()

d1.bark()

d1.bark("asidkoasnda")

d1.bark('asjkdhnajksdnkasndjkasndjkas',3)

