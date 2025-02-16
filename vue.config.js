module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ?
        '/parrot-world/' // 替换成你的仓库名
        :
        '/',
    outputDir: 'dist'
}