function timing (req,res,next){
    var tmp = Date.now();
    res.on('finish', () => { console.log(`${req.method} ${req.url}  completed in ${Date.now() - tmp}ms `); }) 
    next();
}
module.exports = {timing};