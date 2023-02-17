<template>
  <nand-button>Default</nand-button>
  <nand-button type="primary">Primary</nand-button>
  <nand-button type="success">Success</nand-button>
  <nand-button type="info">Info</nand-button>
  <nand-button type="warning">Warning</nand-button>
  <nand-button type="danger">Danger</nand-button>
  <br />
  <nand-icon color="pink" :size="33" class="nand-icon-morentouxiang">Hello Icon</nand-icon> <br />
  <nand-icon color="gold" :size="33" class="nand-icon-pingjiazhushou">Hi Icon</nand-icon> <br />
  <nand-icon color="red" :size="33" class="nand-icon-peisongguanlihou">你好 Icon</nand-icon> <br />
  <nand-icon color="green" :size="33" class="nand-icon-shipinhaoguanli">Hallo Icon</nand-icon> <br />
  <nand-icon color="khaki" :size="33" class="nand-icon-erjigongyinglian">Ciao Icona</nand-icon> <br />
  <br />
  <br />
  <br />
  <div class="nand-dropdown-toggle">
    hover触发
    <nand-dropdown :trigger="state.hover">
      <nand-dropdown-menu>
        <nand-dropdown-item>Chelsea</nand-dropdown-item>
        <nand-dropdown-item>Liverpool</nand-dropdown-item>
        <nand-dropdown-item>Manchester United</nand-dropdown-item>
        <nand-dropdown-item>Manchester City</nand-dropdown-item>
      </nand-dropdown-menu>
    </nand-dropdown>
  </div>

  <div class="nand-dropdown-toggle1">
    click触发
    <nand-dropdown :trigger="state.click">
      <nand-dropdown-menu-click>
        <nand-dropdown-item>Chelsea</nand-dropdown-item>
        <nand-dropdown-item>Liverpool</nand-dropdown-item>
        <nand-dropdown-item>Manchester United</nand-dropdown-item>
        <nand-dropdown-item>Manchester City</nand-dropdown-item>
      </nand-dropdown-menu-click>
    </nand-dropdown>
  </div>
  <nand-breadcrumb>
    <nand-breadcrumb-item :to="{ path: '/' }">XXX</nand-breadcrumb-item>
    <nand-breadcrumb-item to="/sp" replace>CCC</nand-breadcrumb-item>
    <nand-breadcrumb-item>ZZZ</nand-breadcrumb-item>
  </nand-breadcrumb>
  <!-- switch默认开关 -->
  <div style="width: 20px">
    <nand-switch v-model="switchtest"></nand-switch>
  </div>
  <br />
  <!-- 禁用状态 -->
  <div style="width: 20px">
    <nand-switch v-model="switchtest" :disabled="disabled"></nand-switch>
  </div>
  <br />
  <!-- 等待状态 -->
  <div style="width: 20px">
    <nand-switch v-model="switchtest1" :loading="loading" disabled></nand-switch>
    <nand-switch v-model="loading" style="margin-left: 10px"></nand-switch>
  </div>
  <br />
  <br />
  <div style="width: 500px; border: 1px solid #ddd; padding: 20px">
    <nand-upload @changeUpload="changeUpload" @deleteUpload="deleteUpload"></nand-upload>
  </div>
  <div style="width: 500px; border: 1px solid #ddd; padding: 20px; margin-top: 20px">
    <nand-upload :drop="true" @dropUpload="dropUpload" @deleteUpload="deleteUpload"></nand-upload>
  </div>
  <br />
  <br />
  <div style="width: 640px; padding: 20px 0">
    <nand-progress color="#e6a23c" :percent="60" select="on"></nand-progress>
    <nand-progress color="#FFAABB" :percent="50" select="on"></nand-progress>
    <nand-progress color="#67c23a" :percent="100" select="on"></nand-progress>
    <nand-progress color="#F0E68C" :percent="80" status="warning" select="on"></nand-progress>
    <nand-progress :percent="40" status="success" select="on"></nand-progress>
  </div>
  <br />
  <br />

  <div style="width: 640px; padding: 20px 0">
    <nand-progress color="#e6a23c" :percent="60" select="on" type="in"></nand-progress>
    <nand-progress color="#67c23a" :percent="100" select="on" type="in"></nand-progress>
    <nand-progress color="#F0E68C" :percent="80" select="on" type="in"></nand-progress>
    <nand-progress color="#FFAABB" :percent="40" select="on" type="in"></nand-progress>
  </div>
  <br />
  <br />
  <div style="width: 640px; padding: 20px 0">
    <nand-progress color="#FFAABB" :percent="50"></nand-progress>
    <nand-progress color="#F0E68C" :percent="90" status="warning"></nand-progress>
    <nand-progress color="#e6a23c" :percent="100" status="success"></nand-progress>
  </div>
  <br />
  <nand-table :options="options" :head-style="headStyle" :row-style="rowStyle" size="mini"></nand-table>
  <br />
  <br />
  <nand-button @click="openModal">打开模态框</nand-button>
  <nand-modal v-model="modalShow" title="模态框标题">
    <template #content> 这是内容区域 </template>
    <template #footer>
      <nand-button size="small" style="margin-right: 15px" @click="modalShow = false">取消</nand-button>
      <nand-button type="primary" size="small" @click="modalShow = false">确认</nand-button>
    </template>
  </nand-modal>
  <br />
  <br />
  <br />
  <button @click="handleCLick">修改</button>
  {{ nowDate }}
  <nand-date-picker v-model="nowDate"></nand-date-picker>
</template>
<script setup lang="ts">
  import { ref, reactive } from 'vue';
  let switchtest = ref(false);
  let switchtest1 = ref(false);
  let loading = ref(true);
  let disabled = ref(true);
  // 上传更新文件，第一个参数为当前上传文件，第二个参数为上传之后的文件列表
  const changeUpload = (file: any, fileList: any) => {
    console.log(file, fileList);
  };
  // 拖拽文件，第一个参数为当前上传文件的列表（因为拖拽可能上传多个），第二个参数为上传之后的文件列表
  const dropUpload = (files: any, fileList: any) => {
    console.log(files, fileList);
  };
  // 删除更新文件，第一个参数为当前删除文件，第二个参数为上传之后的文件列表
  const deleteUpload = (file: any, fileList: any) => {
    console.log(file, fileList);
  };
  const nowDate = ref(new Date());
  const handleCLick = () => (nowDate.value = new Date());
  const state = reactive({
    click: 'click',
    hover: 'hover',
    options: {
      fileds: [
        { field: 'id', title: 'ID', align: 'center' },
        { field: 'name', title: '姓名', align: 'center' },
        { field: 'job', title: '职业', align: 'center' },
        { field: 'address', title: '地址', align: 'center' },
        { field: 'from', title: '籍贯', align: 'center' }
      ],
      datas: [
        { id: 10, name: '王小二', job: '放羊娃', address: '在那遥远的小山村', from: '民间流传故事' },
        { id: 13, name: '猪八戒', job: '徒弟', address: '高老庄', from: '西游记神话故事' },
        { id: 2, name: '刘老四', job: '农民', address: '可能在中国', from: '想象出来的' },
        { id: 11, name: '白骨精', job: '妖精', address: '西游记', from: '西游记神话故事' }
      ]
    },
    headStyle: {
      color: '#fff',
      borderColor: '#4c94d1',
      backgroundColor: 'rgba(25,66,120,.9)'
    },
    rowStyle: {
      borderColor: '#4c94d1'
    }
  });
  const { options, headStyle, rowStyle } = state;
  const modalShow = ref(false);
  const openModal = () => {
    modalShow.value = true;
  };
</script>
<style lang="scss">
  .nand-dropdown-toggle {
    display: inline-block;
    border-radius: 5px;
    ::v-deep .dropdown-toggle {
      color: tomato;
      font-size: 25px;
      font-weight: 800;
      height: 40px;
      width: 140px;
    }
    ::v-deep .dropdown-toggle-placeholder {
      color: #c4c4c4;
    }
  }
  .nand-dropdown-toggle1 {
    display: inline-block;
    margin-left: 30px;
  }
</style>
