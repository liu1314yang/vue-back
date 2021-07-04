let http = require('http')
let users = [
    {id:1, name:'liuyang1'},
    {id:2, name:'liuyang2'}
]
let server = http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*')
    if(req.url === '/api/user'){
        res.end(JSON.stringify(users))
    }else{
        res.end('not found')
    }
     
})
server.listen(3000,()=>{
    console.log("server is running ")
})