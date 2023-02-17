<template>
  <button
    class="nand-button"
    :class="classList"
    :type="nativeType"
    :autofocus="autoFocus"
    :disabled="disabled || loading"
    @click="handlerClick"
  >
    <i v-if="props.loading" class="nand-icon-loading"></i>
    <i v-if="props.icon && !props.loading" :class="props.icon"></i>
    <slot />
  </button>
</template>

<script lang="ts" setup name="NandButton">
  import '../style/';
  import { computed } from 'vue';
  import { Props, Emits } from './button';
  const props = defineProps(Props);
  const emits = defineEmits(Emits);
  const classList = computed(() => {
    const { type, size, round, plain, circle, disabled, loading } = props;
    return [
      {
        [`nand-button--${type}`]: type,
        [`nand-button--${size}`]: size,
        ['is-disabled']: disabled,
        ['is-loading']: loading,
        ['is-round']: round,
        ['is-plain']: plain,
        ['is-circle']: circle
      }
    ];
  });
  function handlerClick(evt: MouseEvent): void {
    emits('click', evt);
  }
</script>
