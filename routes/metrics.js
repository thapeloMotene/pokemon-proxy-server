const router = require('express').Router();


/**
 * This API returns the health of the service
 * @route GET /health
 * @group metrics - Operations about application metrics
 * @returns {object} 200 - A json object with status UP/DOWN
 * @returns {Error}  default - Unexpected error
 */
router.get('/health',(req,res,next)=>{
    return res.status(200).json({status:'UP'});
});




module.exports = router;