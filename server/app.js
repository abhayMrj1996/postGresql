
const express = require("express");

const app = express();
const cors = require('cors')
const port = 3000;
const client = require('../db/index');


console.log('--------------------------')
app.use(cors());
app.use((req, res, next) => {
    console.log('midleware')
    next();
})
app.use(express.static('public'));
app.use('/image', express.static(__dirname + '/Image'));




app.listen(port, () => {
    console.log(`Server ready at http:http://localhost:${port}`);
    
    });


    app.get('/', (req, res) => {
        client.query('SELECT * FROM table_data', (err, res) => {
            if (!err) {
                
            } else {
                console.log(err)
            }})

    })


    app.get('/api/resturants',async (req, res) => {
        console.log('yyyy')
        try{
            const results= await client.query('SELECT * FROM table_data LEFT join example on table_data."Id" = example."Id"')
            res.json({
                status: "success",
                data: { resturants: results.rows }
            });
    
        }catch(err){
            console.log(err)
        }
        
    })

    app.get('/api/resturants/:id', (req, res) => {
        console.log(req)
    });






