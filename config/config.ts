/*
 * @Author: 李家磊
 * @Date: 2022-02-07 10:21:16
 * @LastEditTime: 2022-02-17 17:11:39
 * @LastEditors: 李家磊
 * @Description:
 * @FilePath: /project/config/config.ts
 */
import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  // layout: {},
  mfsu: {},
  dynamicImport: {
    loading: '@/components/PageLoading',
  },
  fastRefresh: {},
  routes: routes,
})
