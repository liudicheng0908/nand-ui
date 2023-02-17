<h1 align="center">
    nand-ui
</h1>




* 💪 Vue 3 Composition API
* 🔥 Written in TypeScript

<p align="center">Kitty UI - A Vue.js 3 UI library</p>

## Install
```
npm i nand-ui
```

## 快速开始

## main.ts
``` ts
import { createApp } from 'vue';
import App from './app.vue';

import NandUI from 'nand-ui';
const app = createApp(App);
app.use(NandUI);
import 'nand-ui/es/style.css';

app.mount('#app');
```vue
<template>
  <nand-icon color="pink" :size="66" class="nand-icon-pingjiazhushou">Hello Icon</nand-icon>
</template>


## 使用仓库相关命令

### 安装 pnpm

npm i pnpm -g

### 安装所有依赖

pnpm install

### 启动本地测试项目

pnpm run exm:dev

### 打包组件库

pnpm run build:kitty

### 发布

pnpm run publish:kitty

### 启动文档

pnpm run docs:dev

### 打包文档

pnpm run docs:build

### 启动打包后文档服务

pnpm run docs:serve

### 单元测试

pnpm run test

### 查看测试覆盖率

pnpm run coverage
