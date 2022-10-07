import app from '../../app';
import * as request from 'supertest';

test('index route works', (done) => {
  request(app)
    .get('/api')
    .expect('Content-Type', /json/)
    .expect({ name: 'frodo' })
    .expect(200, done);
});

test('testing route works', (done) => {
  request(app)
    .post('/api/test')
    .type('form')
    .send({ item: 'hey' })
    .then(() => {
      request(app)
        .get('/api/test')
        .expect({ array: ['hey'] }, done);
    });
});
