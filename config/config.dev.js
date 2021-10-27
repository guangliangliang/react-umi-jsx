/*
 * @Description: 
 * @Version: 1.0
 * @Autor: unicom
 * @Date: 2021-01-10 15:48:53
 * @LastEditors: unicom
 * @LastEditTime: 2021-01-14 09:34:34
 */
// https://umijs.org/config/
import { defineConfig } from 'umi';
export default defineConfig({
  plugins: [
    // https://github.com/zthxxx/react-dev-inspector
    'react-dev-inspector/plugins/umi/react-inspector',
  ],
  // https://github.com/zthxxx/react-dev-inspector#inspector-loader-props
  inspectorConfig: {
    exclude: [],
    babelPlugins: [],
    babelOptions: {},
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/react-umi-jsx/' : '/',
  manifest: {
    basePath:'/',
  },
  theme: require('./theme.js'),
});
