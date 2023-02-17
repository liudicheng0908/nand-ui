<template>
  <div class="nand-input" :class="styleClass">
    <input
      class="nand-input__inner"
      placeholder="请输入内容"
      :value="inputProps.modelValue"
      :disabled="inputProps.disabled"
      @input="changeInputVal"
    />
    <div v-if="inputProps.clearable && isClearAbled" v-show="isEnter" class="nand-input__suffix" @click="clearValue">
      <nand-icon name="cross"></nand-icon>
    </div>
  </div>
</template>
<script setup lang="ts" name="nandInput">
  import '../style/';
  import { computed, ref } from 'vue';

  interface InputProps {
    modelValue?: string | number;
    disabled?: boolean;
    clearable?: boolean;
  }
  const isClearAbled = ref(false);
  interface InputEmits {
    (e: 'update:modelValue', value: string): void;
  }
  const inputProps = withDefaults(defineProps<InputProps>(), {
    modelValue: ''
  });
  const isEnter = ref(true);
  const clearValue = () => {
    inputEmits('update:modelValue', '');
    isClearAbled.value = false;
  };
  const inputEmits = defineEmits<InputEmits>();
  const changeInputVal = (event: Event) => {
    //可清除clearable
    (event.target as HTMLInputElement).value.length ? (isClearAbled.value = true) : (isClearAbled.value = false);

    inputEmits('update:modelValue', (event.target as HTMLInputElement).value);
  };

  const styleClass = computed(() => {
    return {
      'is-disabled': inputProps.disabled
    };
  });
</script>
