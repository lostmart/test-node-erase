"use-strict"

const firstName = "bob"

const age = 34

// typeof

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

const users = [userOne, userTwo]

const userThree = {
	firstName: "Test 3",
	age: 21,
	admin: true,
}

users.push(userThree)

// trouver un utilizateur
const userPosition = users.find((user) => user.firstName === "Test user one")

// const foundUser = users.indexOf((user) => {
// 	user.firstName === "Test Two"
// })

console.log(userPosition)
