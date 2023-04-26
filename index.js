const Connection = require('./database/Database')

const Person = require('./model/personModel')

Connection()

// add a person

let person = new Person()

// person.nom = 'Touré',
// person.age = 30,
// person.favoriteFoods = ['Burger', 'Foufou']

person.save().then(person =>
        console.log(person)
    )

let listPerson = [
    {
        nom : 'Touré',
        age : 30,
        favoriteFoods : ['Burger', 'Foufou'] 
    },
    {
        nom : 'Fred',
        age : 22,
        favoriteFoods : ['Pizza', 'sauce arachide'] 
    },
    {
        nom : 'Ryan',
        age : 18,
        favoriteFoods : ['Garba', 'Alloco'] 
    }
]

// add several persons 

Person.create(listPerson)

// recover several people 

Person.find({}).then(person => console.log(person))

//recover a person who likes "Alloco"

Person.findOne({ favoriteFoods : "Alloco"}).then(person => console.log(person))

// recovery by _id

Person.findById({ _id : '635fb6dd7ca00a0b20491a2a'}).then(person => console.log(person))

//delete a person 

Person.findOneAndRemove({ _id : '635fb6dd7ca00a0b20491a2a' }).then(person => console.log(person))

//update 

Person.findOneAndUpdate({ nom : 'Touré' }, { age : 33}).then(person => console.log(person))