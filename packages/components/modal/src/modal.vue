<template>
  <teleport to="body">
    <transition name="fade">
      <div v-if="modelValue" :class="['nand-modal-default', customClass]" @click="closeModal($event)">
        <div class="nand-modal-contentbox" :style="{ width: width, top: top }">
          <div class="nand-modal-header">
            <p class="nand-modal-title" :style="{ 'text-align': align == 'center' ? align : '' }">
              <slot v-if="$slot['header']" name="header"></slot>
              <span v-else>{{ title }}</span>
            </p>
            <i v-if="showClose" class="nand-modal-close m-icon-close" @click="close"></i>
          </div>
          <div class="nand-modal-content">
            <slot name="content"></slot>
          </div>
          <div class="nand-modal-footer" :style="{ 'text-align': align == 'center' ? align : '' }">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>
<script lang="ts">
  export default {
    name: 'NandModal'
  };
</script>
<script setup lang="ts">
  import '../style/';
  import { useSlots, ref, watchEffect, onMounted } from 'vue';
  const props = defineProps({
    title: {
      type: String,
      default: '标题'
    },
    modelValue: Boolean,
    align: {
      type: String,
      default: ''
    },
    scrollLock: {
      type: Boolean,
      default: true
    },
    width: {
      type: String,
      default: '35%'
    },
    top: {
      type: String,
      default: '15%'
    },
    showClose: {
      type: Boolean,
      default: true
    },
    closeOnModal: {
      type: Boolean,
      default: true
    },
    customClass: String
  });
  const emit = defineEmits(['update:modelValue', 'close']);
  const $slot = useSlots();
  const close = () => {
    emit('close');
    emit('update:modelValue', false);
  };
  onMounted(() => {
    watchEffect(() => {
      if (props.modelValue) {
        if (props.scrollLock) {
          if (typeof document !== 'undefined') {
            document.body.style['overflow'] = 'hidden';
          }
        }
      } else {
        if (typeof document !== 'undefined') {
          document.body.style['overflow'] = 'initial';
        }
      }
    });
  });
  const closeModal = e => {
    if (props.closeOnModal) {
      if (e.target.className == 'nand-modal-default') {
        emit('update:modelValue', false);
        emit('close');
      }
    }
  };
</script>
