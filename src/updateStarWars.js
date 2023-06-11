const AWS = require('aws-sdk')

const updateStarWars = async (event) => {
    try {
        const dynamodb = new AWS.DynamoDB.DocumentClient()
        const { id } = event.pathParameters

        const { titulo,
            descripcion,
            done } = JSON.parse(event.body)

        await dynamodb.update({
            TableName: 'StarWarsTable',
            Key: { id },
            UpdateExpression: 'set titulo = :titulo, descripcion = :descripcion, done = :done',
            ExpressionAttributeValues: {
                ':titulo': titulo,
                ':descripcion': descripcion,
                ':done': done,
            },
            ReturnValues: 'ALL_NEW'
        }).promise()
        return {
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({
                message: 'StarWars updated Succesfully'
            })
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    updateStarWars
}