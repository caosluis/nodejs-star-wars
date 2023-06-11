const translationStarWars = require('../src/translationStarWars');

test('correct response is generated', async () => {
    const response = await translationStarWars.translationStarWars();
    expect(response.statusCode).toBe(200);
});