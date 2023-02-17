<!--
 * @Descripttion: Spicy chicken
 * @Author: YuShu Xiao
 * @Date: 2023-02-06 11:57:03
 * @LastEditors: YuShu XiaoN
 * @LastEditTime: 2023-02-09 22:04:35
-->
<template>
  <div class="nand-bread-item">
    <a v-if="to" class="nand-breadcrumb-item__link" @click="handleClick">
      <slot />
    </a>
    <span v-else><slot /></span>
  </div>
</template>
<script setup lang="ts" name="NandBreadcrumbItem">
  import '../style/';
  import { getCurrentInstance } from 'vue';
  import type { Router } from 'vue-router';
  const props = defineProps({
    to: {
      type: [String, Object]
    },
    replace: {
      type: Boolean,
      default: false
    }
  });
  const instance = getCurrentInstance()!;
  const router = instance.appContext.config.globalProperties.$router as Router;
  const handleClick = () => {
    if (!props.to || !router) return;
    props.replace ? router.replace(props.to) : router.push(props.to);
  };
</script>
