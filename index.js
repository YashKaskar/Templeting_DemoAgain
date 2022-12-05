const express = require('express');
const app = express();




app.set('view engine', 'ejs')

app.get('/', (req, res) => {    
res.send('Hii')
})

app.listen(8080, () => {    
    console.log('Listening on port 8080');
})