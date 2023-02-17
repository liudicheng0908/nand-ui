<template>
  <i class="nand-icon" :style="style">
    <slot></slot>
  </i>
</template>

<script lang="ts">
  import '../style/';
  import { computed, defineComponent } from 'vue';
  import type { ExtractPropTypes } from 'vue';
  export const iconProps = {
    size: {
      type: Number
    },
    color: {
      type: String
    }
  };

  export type IconProps = ExtractPropTypes<typeof iconProps>;

  export default defineComponent({
    name: 'NIcon',
    props: iconProps,
    setup(props) {
      const style = computed(() => {
        if (!props.size && !props.color) {
          return {};
        }
        return {
          ...(props.size ? { 'font-size': props.size + 'px' } : {}),
          ...(props.color ? { color: props.color } : {})
        };
      });

      return { style };
    }
  });
</script>
