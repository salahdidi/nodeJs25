function log(req,res,next){
   
    var time = new Date().toISOString() ;
    console.log(`[${time}] - ${req.method} ${req.url}`);
    next();
}

module.exports = { log }