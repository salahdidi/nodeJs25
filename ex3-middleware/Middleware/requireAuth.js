function auth ( req,res,next){

    const secret = 'secret-tp01-key';
    if(!req.headers['x-api-key']){
        return res.status(401).json( { error: 'Unauthorized: API key missing' } );
    }
    const apiKey = req.headers['x-api-key'] ;
    if(apiKey != secret){
        return res.status(401).json( { error: 'Unauthorized: invalid  API key' } );
    }
    next();
    
}
module.exports = { auth};