const fetch = require('node-fetch');
const translationMap = {
    name: 'nombre',
    height: 'altura',
    mass: 'masa',
    hair_color: 'color_cabello',
    skin_color: 'piel_color',
    eye_color: 'ojos_color',
    birth_year: 'anio_nacimiento',
    gender: 'genero',
    homeworld: 'planeta_origen',
    films: 'peliculas',
    species: 'especies',
    vehicles: 'vehiculos',
    starships:'naves_espaciales',
    created:'creado',
    edited:'editado',
    url:'url'
};

const translationStarWars = async (event) => {
    try {
        const response = await fetch('https://swapi.py4e.com/api/people/');
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