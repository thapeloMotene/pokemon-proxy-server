const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require("path");
const swaggerOptions = require('./configs/swagger.options');



const app = express();
const expressSwagger = require('express-swagger-generator')(app);

const PORT = process.env.PORT || 3000;


const metricRoutes = require('./routes/metrics.js');
const pokemonRoutes = require('./routes/pokemon.routes');

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(morgan("common"));
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

app.use('/v1', [metricRoutes,pokemonRoutes]);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
  });

expressSwagger(swaggerOptions);
app.listen(PORT, ()=>{
    console.log(`Pokemon Proxy API Running on Port: ${PORT}`);
});
