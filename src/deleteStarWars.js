const AWS = require('aws-sdk')

const deleteStarWars = async (event) => {
    try {
        const dynamodb = new AWS.DynamoDB.DocumentClient()
        const { id } = event.pathParameters

        await dynamodb.delete({
            TableName: 'StarWarsTable',
            Key: { id },
        }).promise()
        return {
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({
                message: 'StarWars deleted Succesfully'
            })
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    deleteStarWars
}