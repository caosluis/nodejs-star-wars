const AWS = require('aws-sdk')

const getOneStarWars = async (event) => {
    try {
        const dynamodb = new AWS.DynamoDB.DocumentClient()
        5
        const result = await dynamodb.get({
            TableName: 'StarWarsTable',
            Key: {
                id: id
            }
        }).promise()
        const StarWars = result.Item

        return {
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: StarWars
        }
    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    getOneStarWars
}