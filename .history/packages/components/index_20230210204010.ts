/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-01-21 11:34:40
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-06 12:36:56
 */

import * as components from './components';
import { version } from './package.json';
/* import Message from './message';

const install = function (app: App) {
  Object.entries(components).forEach(([key, value]) => {
    app.component(key, value);
  });
  app.config.globalProperties.$message = Message;
}; */

export default components;

export { version };
