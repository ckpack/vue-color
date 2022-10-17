import { prefix, size } from '@/defaultConfig';

function create(params = {}) {
  return (app) => {
    const { components, componentPrefix = prefix, componentSize = size } = params;

    app.config.globalProperties.$VUI = {
      size: componentSize,
      prefix: componentPrefix,
    };
    (Array.isArray(components) ? components : Object.values(components)).forEach((component) => {
      app.component(`${componentPrefix}${component.name}`, component);
    });
  };
}

export default create;
