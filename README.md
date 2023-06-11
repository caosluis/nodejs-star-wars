## Uso

### Deployment

Esta es una aplicacion de Prueba Usando Serverless Framework, AWS Lambda, DynamoDB y nodeJS en su version 16.17.0.

```
$ serverless deploy --verbose
```
Despues del despliegue y si no existen cambios deberia verse algo similar a:

```Deploying aws-lambda-starwars to stage dev (us-east-1)
Packaging
Excluding development dependencies for service package
Retrieving CloudFormation stack

No changes to deploy. Deployment skipped. (26s)

1 deprecation found: run 'serverless doctor' for more details        

Monitor all your API routes with Serverless Console: run "serverless --console"
```


Para las pruebas unitarias se utilizo Jest.

```
$ npx jest
```

Y si todas las pruebas configuradas son existosas deberia tenerse el siguiente resultado:

```
 PASS  tests/getStarWars.test.js
 PASS  tests/translationStarWars.test.js
 PASS  tests/createStarWars.test.js

Test Suites: 3 passed, 3 total
Tests:       3 passed, 3 total
Snapshots:   0 total
```

### Invocacion

Despues de un despliegue exitoso pueden hacer una llamada a la API HTTP con los campos ya traducidos de SWAPI:

```
`https://xxxxxxxxx.execute-api.xxxxxxxx.amazonaws.com/translationStarWars`
```
