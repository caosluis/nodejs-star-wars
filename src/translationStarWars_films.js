const fetch = require('node-fetch');
const translationMap = {
    characters: 'personajes',
    created: 'creado',
    director: 'director',
    edited: 'editado',
    episode_id: 'id_episodio',
    opening_crawl: 'rastreo_apertura',
    planets: 'planetas',
    producer: 'productor',
    release_date: 'fecha_lanzamiento',
    films: 'peliculas',
    species: 'especies',
    starships:'naves_espaciales',
    title:'titulo',
    vehicles:'vehiculos',
    url:'url'
};

const translationStarWars = async (event) => {
    try {
        const response = await fetch('https://swapi.py4e.com/api/films/');
        const data = await response.json();
        const results = data.results;

        const translatedResults = results.map((result) => {
            const translatedResult = {};

            for (const key in result) {
                if (translationMap.hasOwnProperty(key)) {
                    const translatedKey = translationMap[key];
                    translatedResult[translatedKey] = result[key];
                } else {
                    translatedResult[key] = result[key];
                }
            }

            return translatedResult;
        });

        return {
            statusCode: 200,
            body: JSON.stringify(translatedResults)
        };
    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' })
        };
    }
};

module.exports = {
    translationStarWars
};