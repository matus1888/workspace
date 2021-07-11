const {createHmac}= require('crypto');
const Hasher=(pass)=>{
    const salt="fuck You It"
    const hash = createHmac('sha256', salt)
        .update(pass)
        .digest('hex');
    return hash
}
module.exports={
    Hasher
}