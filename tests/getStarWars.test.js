const { getStarWars } = require('../src/getStarWars');

test('correct response is generated', async () => {
    const response = await getStarWars();

    expect(response.status).toBe(200);
    expect(response.headers['Access-Control-Allow-Origin']).toBe('*');
    expect(response.headers['Access-Control-Allow-Credentials']).toBe(true);
    expect(typeof response.body).toBe('object');

    const body = response.body;
    expect(Array.isArray(body.StarWars)).toBe(true);
});