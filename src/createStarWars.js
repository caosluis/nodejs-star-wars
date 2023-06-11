const { v4 } = require('uuid')
const AWS = require('aws-sdk')

const createStarWars = async (event) => {
    try {
        const dynamodb = new AWS.DynamoDB.DocumentClient({region:'us-east-1'})

        const { titulo, descripcion, done } = JSON.parse(event.body)
        const dateEntered = new Date()
        const id = v4()
        const newStarWars = {
            id,
            titulo,
            descripcion,
            dateEntered,
            done
        }

        await dynamodb.put({
            TableName: 'StarWarsTable',
            Item: newStarWars
        }).promise()

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify(newStarWars)
        }
    } catch (error) {
        console.log(error)
    }



};

module.exports = {
    createStarWars
}
