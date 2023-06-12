const translationStarWars_people = require('../src/translationStarWars_people');

test('correct response is generated', async () => {
    const response = await translationStarWars_people.translationStarWars();
    expect(response.statusCode).toBe(200);
});