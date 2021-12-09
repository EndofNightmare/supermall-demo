// 打包的时候会自动合并
module.exports = {
  configureWebpack: {
    resolve: {
      //extensions : [], //后缀名，已经默认配置过
      alias: {
        // '@': 'src' 内部已经配置过了
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}
