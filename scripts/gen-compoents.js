import fs from 'fs';

const basePath = process.cwd();

function formatComponent(component) {
  return component.split('-').map(name => name.slice(0, 1).toUpperCase() + name.slice(1)).join('');
}

function getCompoentsJS() {
  const components = fs.readdirSync(`${basePath}/src/components`);
  let componentsJS = '/* Do not modify the automatically generated code */\n';
  componentsJS += components.map(name => `import ${formatComponent(name)} from '@/components/${name}';\n`).join('');
  componentsJS += `\nconst components = [\n${components.map(name => `  ${formatComponent(name)},\n`).join('')}];\n`;
  componentsJS += `\nexport {\n  components,\n${components.map(name => `  ${formatComponent(name)},\n`).join('')}};\n`;
  return componentsJS;
}

fs.writeFileSync(`${basePath}/src/components.js`, getCompoentsJS());
