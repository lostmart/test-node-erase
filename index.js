"use-strict"

const firstName = "bob"

const age = 34

// typeof

// objects
const userOne = {
	firstName: "Test user one",
	age: 40,
	admin: false,
}

userOne.age = 41

const userTwo = {
	firstName: "Test Two",
	age: 34,
	admin: true,
}

// tableu  -  array
const users = [userOne, userTwo]

const userThree = {
	firstName: "Test 3",
	age: 21,
	admin: true,
}

// ajouter un utilisateur
users.push(userThree)

// trouver un utilizateur
const userPosition = users.find((user) => user.firstName === "Test user one")

// trouver ss position
const userIndexPosition = users.findIndex(
	(user) => user.firstName === "Test user one"
)

console.log(userIndexPosition)
