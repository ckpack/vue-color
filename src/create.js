import { prefix, size } from '@/defaultConfig';

function create({
  components,
  componentPrefix = prefix,
  componentSize = size,
}) {
  return (app) => {
    // eslint-disable-next-line no-param-reassign
    app.config.globalProperties.$VUI = {
      size: componentSize,
      prefix: componentPrefix,
    };
    (Array.isArray(components) ? components : Object.values(components)).forEach((component) => {
      app.component(`${componentPrefix.toUpperCase()}${component.name}`, component);
    });
  };
}

export default create;
