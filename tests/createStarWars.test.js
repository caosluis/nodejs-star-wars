const AWSMock = require('aws-sdk-mock');
const { createStarWars } = require('../src/createStarWars');

AWSMock.mock('DynamoDB.DocumentClient', 'put', (params, callback) => {
  callback(null, {});
});

test('correct response is generated', async () => {
  const event = {
    body: JSON.stringify({
      titulo: 'Star Wars Episode IV: A New Hope',
      descripcion: 'The first Star Wars movie',
      done: false,
    }),
  };

  const response = await createStarWars(event);
  expect(response.statusCode).toBe(200);
  expect(response.headers['Access-Control-Allow-Origin']).toBe('*');
  expect(response.headers['Access-Control-Allow-Credentials']).toBe(true);
  expect(typeof response.body).toBe('string');

  const body = JSON.parse(response.body);
  expect(body.id).toBeDefined();
  expect(body.titulo).toBe('Star Wars Episode IV: A New Hope');
  expect(body.descripcion).toBe('The first Star Wars movie');
  expect(body.done).toBe(false);
});

AWSMock.restore('DynamoDB.DocumentClient');