const mongoose = require('mongoose')

function validateObjectId(req,res,next){
    if(!mongoose.Types.ObjectId.isValid(req.params.productId)){
            return res.status(404).json({message: 'Page not Found'})
        }
    next()
}

module.exports = validateObjectId