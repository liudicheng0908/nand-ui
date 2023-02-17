<template>
  <transition name="nand-dropdown-transition">
    <ul v-if="state.showMenu" class="nand-dropdown-menu">
      <slot></slot>
    </ul>
  </transition>
</template>

<script setup lang="ts">
  import '../style';
  import { onMounted, reactive } from 'vue';
  import mitt from './event';

  let state = reactive({
    showMenu: false
  });

  onMounted(() => {
    // 初始化两个值都会传入
    mitt.on('updateShowMenu', isOption => {
      // 发生两次
      if (typeof isOption === 'boolean') {
        state.showMenu = isOption;
      }
    });
    mitt.on('mouseleave', isOption => {
      if (typeof isOption === 'boolean') {
        state.showMenu = false;
      }
    });
  });
</script>
