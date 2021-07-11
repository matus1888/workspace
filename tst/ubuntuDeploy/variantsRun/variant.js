const runVar=process.argv[process.argv.length-1]

const getVariant=(variant)=>{
    console.log(variant)
return variant==='-dev'?true:false
}
module.exports=getVariant(runVar)
