const request = require('supertest')('https://dummyjson.com')
const chai = require('chai')
const chaiJsonSchema = require('chai-json-schema')
const main = require ('./apitest');

chai.use(chaiJsonSchema)
const expect = chai.expect

const todoSchema = main.todoSchema();

describe('TODOS', async function  () {
    it('Get All Todos', async function(){   
        const res = await request.get('/todos')
        // console.log(res.body)
        
        expect(res.body).have.jsonSchema(todoSchema)     
    }), 
    it('Get a single todo', async function (){
        const res = await request.get('/todos/1')
        //console.log(res.body)

        expect(res.body).have.jsonSchema(todoSchema)
    }),   
    it('Get a random todo', async function (){
        const res = await request.get('/todos/random')
        //console.log(res.body)

        expect(res.body).have.jsonSchema(todoSchema)
    }),
    it('Limit and skip todos', async function(){
        const res = await request.get('/todos?limit=3&skip=10')
        //console.log(res.body)

        expect(res.body).have.jsonSchema(todoSchema)
    }),
    it('Get all todos by user id', async function(){
        const res = await request.get('/todos/user/5')
        //console.log(res.body)

        expect(res.body).have.jsonSchema(todoSchema)
    }),
    it('Add a new todo', async function(){
        const payload = {
            todo: 'Use DummyJSON in the project',
            completed: false,
            userId: 5,
        }
        const res = await request.post('/todos/add').send(payload)
        // console.log(res.body)

        expect(res.body).have.jsonSchema(todoSchema)
    }),
    it('Update a todo', async function(){
        const payload = {
            complete: true,
        }
        const res = await request.put('/todos/1').send(payload)
        // console.log(res.body)

        expect(res.body).have.jsonSchema(todoSchema)
    }),
    it('Delete a todo', async function(){
        const res = await request.delete('/todos/150')
        // console.log(res.body)

        expect(res.body).have.jsonSchema(todoSchema)
    })
})