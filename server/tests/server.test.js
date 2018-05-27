var expect = require('expect');
var request = require('supertest');

const {app} = require('./../server.js');
const {ToDo} = require('./../models/todo');
const {ObjectID} = require('mongodb');

const todo = [{
  _id: new ObjectID(),
  text: 'First test ToDo'
}, {
  _id: new ObjectID(),
  text: 'Second test ToDo'
}];

beforeEach((done) => {
  ToDo.remove({}).then(() => {
    ToDo.insertMany(todo);
  }).then(() => done())
});

describe('POST /todo', () => {
  it('should create a new todo', (done) => {
    var text = 'Test todo text'

    request(app)
    .post('/todo')
    .send({text})
    .expect(200)
    .expect((res) => {
      expect(res.body.text).toBe(text);
    })
    .end((err, res) => {
      if (err) {
        return done(err);
      }
      ToDo.find({text}).then((todo) => {
        expect(todo.length).toBe(1);
        expect(todo[0].text).toBe(text);
        done();
      }).catch((e) => done(e));
    });
  })

  it('Should not create a todo with a invalid body data', (done) => {
    request(app)
    .post('/todo')
    .send('')
    .expect(400)
    .end((err, res) => {
      if (err) {
        return done(err);
      }
      ToDo.find().then((todo) => {
        expect(todo.length).toBe(2);
        done();
      }).catch((e) => done(e));
    });
  });
});

describe('GET /todos', () => {
  it('Should get all ToDo', (done) => {
    request(app)
    .get('/todo')
    .expect(200)
    .expect((res) => {
      expect(res.body.todo.length).toBe(2);
    })
    .end(done)
  });
});
describe('GET /todo/:id', () => {
  it('Should return ToDo doc', (done) => {
    request(app)
    .get(`/todo/${todo[0]._id.toHexString()}`)
    .expect(200)
    .expect((res) => {
      //result debido a que en server.js en /todo/:id hago send({result}),es decir la propiedad result
      expect(res.body.result.text).toBe(todo[0].text)
    })
    .end(done)
  });

  it('Should return 404 if ToDo not found', (done) => {
    var newID = new ObjectID()
    request(app)
    .get(`/todo/${newID.toHexString()}`)
    .expect(404)
    .end(done);
  })
  it('Should return 404 if ToDo not found', (done) => {
    var newID = new ObjectID()
    request(app)
    .get(`/todo/123`)
    .expect(404)
    .end(done);
  })
});
