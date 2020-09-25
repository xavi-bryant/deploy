module.exports={
    publicPath:process.env.NODE_ENV==='production' ? './' : './',
    ouputDir:'dist',
    indexPath:'index.html',
    filenameHashing:true,
    lintOnSave:process.env.NODE_ENV==='production',
    runtimeCompiler:false,
    productionSourceMap:true
}