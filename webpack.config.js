module.exports = {
    entry: './app/assets/scripts/App.js',
    mode:'development',
    watch:true,
    module: {
        rules:[
            {
                test:/\.css$/i,
                use: ['css-loader']
            }
        ]
    }
}