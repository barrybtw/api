const api = require('express')();
const port = 80;


api.get('/', (_, res) => {
 res.send('Hello World!');
});

api.listen(port, () => {
 console.log(`Example app listening at http://localhost:${port}`);
}); 
