const express = require('express')
const app = express()
const port = 8000

// The import line will look different than what is in Faker's documentation
// because we are working with an express application
const { faker } = require('@faker-js/faker');

const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        _id: faker.number.int()
    }
    return newUser;
}

const newFakeUser = createUser();


const createCompany = () => {
    const newCompany = {
        _id: faker.number.int(),
        name: faker.company.name(),
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    }
    return newCompany;
}

const newFakeCompany = createCompany();


app.get("/api/users/new", (req, res) => {
    res.json(newFakeUser)
});

app.get("/api/companies/new", (req,res) => {
    res.json(newFakeCompany)
})

app.get("/api/user/company", (req,res) => {
    res.json({newFakeUser, newFakeCompany})
}) 



app.listen( port, () => console.log('>>SERVER ONLINE') )