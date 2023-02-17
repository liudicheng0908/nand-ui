<template>
  <transition name="nand-dropdown-transition" @mouseenter="mouseenter">
    <ul v-if="state.showMenuClick" class="nand-dropdown-menu">
      <slot></slot>
    </ul>
  </transition>
</template>

<script setup lang="ts">
  import '../style';
  import { onMounted, reactive } from 'vue';
  import mitt from './event';

  let state = reactive({
    showMenuClick: false
  });
  const mouseenter = () => {
    state.showMenuClick = true;
  };
  onMounted(() => {
    // 初始化两个值都会传入
    mitt.on('updateShowMenuClick', isOption => {
      // 发生两次
      if (typeof isOption === 'boolean') {
        state.showMenuClick = isOption;
      }
    });

    mitt.on('mouseleave', isOption => {
      if (typeof isOption === 'boolean') {
        state.showMenuClick = isOption;
      }
    });
  });
</script>
