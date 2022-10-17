import fs from 'fs';

function formatComponent(component) {
  return component.split('-').map(name => name.slice(0, 1).toUpperCase() + name.slice(1)).join('');
}

const basePath = process.cwd();
const componentName = process.argv.slice(2).join(' ');
const formatComponentName = formatComponent(componentName);

if (!/^[a-z]+(-[a-z]+){0,}$/.test(componentName)) {
  console.error(`component name is incorrect: ${componentName}\netc:\nbutton\nsome-button\nsome-button-group`);
  process.exit(1);
}
if (fs.existsSync(`${basePath}/src/components/${componentName}`)) {
  console.error(`component name is already exist: ${componentName}`);
  process.exit(1);
}

fs.mkdirSync(`${basePath}/src/components/${componentName}`);

fs.writeFileSync(`${basePath}/src/components/${componentName}/${componentName}.vue`, `<template>
<div :class="\`\${cssPrefix}${componentName}\`">
</div>
</template>

<script>
import { cssPrefix } from '@/defaultConfig';

export default {
  name: '${formatComponentName}',
  setup() {
    return {
      cssPrefix,
    };
  },
};
</script>

<style lang="scss">
@import './${componentName}.scss';
</style>
`);
fs.writeFileSync(`${basePath}/src/components/${componentName}/${componentName}.scss`, `@import '../../styles/var.scss';

.${componentName} {}`);
fs.writeFileSync(`${basePath}/src/components/${componentName}/index.js`, `import ${formatComponentName} from './${componentName}.vue';

export default ${formatComponentName};
`);

// require('./gen-compoents');
