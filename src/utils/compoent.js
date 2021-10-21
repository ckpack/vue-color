import { prefix } from '@/defaultConfig';

export const install = function (app, options) {
  const { componentPrefix = prefix } = options || {};
  app.component(`${componentPrefix}${this.name}`, this);
};
