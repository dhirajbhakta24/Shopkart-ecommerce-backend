function pingController(req,res){
    return res.json({message:"ok from v1 api"});
}

function pingControllerV2(req,res){
    return res.json({message:"ok from v2 bro"});
}

module.exports = {
    pingController,
    pingControllerV2
}