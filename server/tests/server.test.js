var expect = require('expect');
var request = require('supertest');

const {app} = require('./../server.js');
const {ToDo} = require('./../models/todo');

const todo = [{
  text: 'First test ToDo'
}, {
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
