module.exports = {

    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = '宁波阿密格供应链有限公司';
                return args
            })
    }
}