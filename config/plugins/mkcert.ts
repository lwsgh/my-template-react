/**
 * Use mkcert to provide certificate support for vite https development services.
 *
 * When should I use this plugin
 * 1. When you want to use http/2 to solve the concurrency limit of vite http dev server requests, you find that the browser cache is invalid.
 * 2. I have obsessive-compulsive disorder, and I hope that the browser will not show annoying https certificate errors.
 *
 * ----------------------------------------------------------------------------------------------------
 *
 * 使用 mkcert 为 vite https 开发服务提供证书支持。
 *
 * 什么时候应该使用该插件
 * 1. 当你希望使用 http/2 解决 vite http dev server 请求的并发限制时，却发现浏览器缓存无效的情况 #2725。
 * 2. 有强迫症，希望浏览器不要出现烦人的 https 证书错误。
 *
 * https://github.com/liuweiGL/vite-plugin-mkcert
 */
import mkcert from 'vite-plugin-mkcert';

export default function MKCertPlugin() {
  return mkcert({
    /*
      Whether to force generate.
      是否强制重新生成证书。
    */
    // force: true,
    /*
      Whether to automatically upgrade mkcert.
      是否自动升级 mkcert
    */
    // autoUpgrade: true,
    /*
      Specify the download source of mkcert, domestic users can set it to coding to download from the coding.net mirror, or provide a custom BaseSource.
      指定 mkcert 的下载源，国内用户可以设置成 coding 从 coding.net 镜像下载
    */
    source: 'coding',
    /*
      If the network is restricted, you can specify a local mkcert file instead of downloading from the network.
      如果网络受限的话，可以指定一个本地的 mkcert 文件来代替网络下载
    */
    // mkcertPath: '',
    /*
      Custom hosts, default value is localhost + local ip addrs.
      自定义域名，默认使用 localhost + 本地 ip 列表
    */
    // hosts: [],
  });
}
