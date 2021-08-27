const router = require('express').Router();
const request = require('request');

const POKEMON_API_BASE_PATH = process.env.POKEMON_API_BASE_PATH || "";

/**
 * This API returns a list of pokemon references and names 
 * @route GET /pokemons
 * @group pokemon - Operations about the pokemon api
 * @returns {object} 200 - A List of pokemon references
 * @returns {Error}  default - Unexpected error
 */
router.get('/pokemons',(req,res,next)=>{
    let url = `${POKEMON_API_BASE_PATH}/pokemon?limit=100&offset=0`;

    request(url, { json: true }, (err, result, body) => {
        if (err) return next(err);
        return res.status(200).json(body.results);
    });
});

/**
 * This API returns a list of pokemon references and names 
 * @route GET /pokemon/{name}
 * @group pokemon - Operations about the pokemon api
 * @param {string} name.path.required-  name of the pokemon
 * @returns {object} 200 - A Single Pokemon Detailed object
 * @returns {Error}  default - Unexpected error
 */
 router.get('/pokemon/:name',(req,res,next)=>{

    let url = `${POKEMON_API_BASE_PATH}/pokemon/${req.params.name}`;

    request(url, { json: true }, (err, result, body) => {
        if (err) return next(err);
        return res.status(200).json(body);
    });
});


module.exports = router;