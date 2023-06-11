const AWS = require('aws-sdk')

const getStarWars = async (event) => {

    try {
        const dynamodb = new AWS.DynamoDB.DocumentClient({region:'us-east-1'})
        const result = await dynamodb.scan({
            TableName: 'StarWarsTable'
        }).promise()

        const StarWars = result.Items

        return {
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: { StarWars }
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    getStarWars
}
