<template>
  <div v-if="props.select == 'on'" class="nand-progress">
    <div v-if="props.type == 'in'" class="line">
      <div
        class="colorLine"
        :style="
          'background:' + props.color + ';height:26px;text-align:right;line-height:26px;width:' + props.percent + '%'
        "
      >
        {{ props.percent }}%
      </div>
    </div>

    <div v-else class="line">
      <div class="colorLine" :style="'background:' + props.color + ';width:' + props.percent + '%'"></div>
    </div>
    <div v-if="status" class="status">
      <nand-icon v-if="status == 'warning'" name="warning"></nand-icon>
      <nand-icon v-if="status == 'success'" name="success"></nand-icon>
    </div>
    <div v-else-if="percent == 100" class="percent">满</div>
    <div v-else-if="props.type != 'in'" class="percent">{{ props.percent }}%</div>
  </div>

  <div v-else class="nand-progress-circle" :style="{ width, height }">
    <svg viewBox="0 0 96 96" class="nand-progress-circle__svgCircle" style="width: 96px; height: 96px">
      <circle
        r="40"
        cx="48"
        cy="48"
        fill="none"
        stroke-miterlimit="20"
        stroke-width="10"
        class="svg-progress"
        style="stroke-dasharray: 275, 279.602; stroke: #eee"
      ></circle>
      <circle
        r="40"
        cx="48"
        cy="48"
        fill="none"
        stroke-miterlimit="20"
        stroke-width="10"
        class="svg-progress"
        :style="`stroke-dasharray: ${progressValue}, 279.602;stroke:${color};`"
      ></circle>
    </svg>
    <div v-if="status" class="nand-progress-circle__mask">
      <nand-icon v-if="status == 'warning'" name="warning"></nand-icon>
      <nand-icon v-if="status == 'success'" name="success"></nand-icon>
    </div>
    <div v-else-if="props.type != 'in'" class="nand-progress-circle__mask">{{ props.percent }}%</div>
  </div>
</template>

<script setup lang="ts" name="TassProgress">
  import '../style/';
  import { ref, toRefs, watch, onMounted } from 'vue';

  const props = defineProps({
    select: {
      type: String,
      default: (): String => ''
    },
    type: {
      type: String,
      default: (): String => ''
    },
    color: {
      type: String,
      default: (): String => '#409eff'
    },
    percent: {
      type: Number,
      default: (): Number => 0
    },
    status: {
      type: String,
      default: (): String => ''
    },
    width: {
      type: String,
      default: () => '210px'
    },
    height: {
      type: String,
      default: () => '100px'
    }
  });

  const { height, width, color, percent } = toRefs(props);
  const progressValue = ref((percent.value / 100) * 250);

  watch(percent, newValue => {
    progressValue.value = (newValue / 100) * 250;
  });
</script>
