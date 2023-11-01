class Animal {
    // method on orde to ....
    constructor(name, age, sound){
        this.name = name
        this.age = age
    }

    parentMethod(){
        console.log("Inhertiance parent method")
    }

}

class Dog extends Animal{
    constructor(name, age){
        super(name, age)

    }

    makeSound(){
        console.log("woof")
    }

    getAgeInDogYears(){
        return (this.age * 7)
    }
}

class Cat extends Animal{
    constructor(name, age, gender){
        super(name, age)
        this.gender = gender
    }
    makeSound(){
        console.log("Meow")
    }
    catGender(){
        return this.gender
    }
}



let dog1 = new Dog( "rover", 7 )
let cat1 = new Cat("revenges", 5, "male")

console.log(dog1.name)
            // already has console.log in the formula
dog1.makeSound()
            // console.log is used because you need to output and it does not have that in the formula
console.log(dog1.getAgeInDogYears())

cat1.makeSound()

console.log (cat1.catGender())

dog1.parentMethod()









