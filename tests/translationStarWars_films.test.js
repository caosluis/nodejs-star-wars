const translationStarWars_films = require('../src/translationStarWars_films');

test('correct response is generated', async () => {
    const response = await translationStarWars_films.translationStarWars();
    expect(response.statusCode).toBe(200);
});