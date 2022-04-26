<script setup>
import VehicleInfo from './VehicleInfo.vue';
</script>
<template>
  <div class="min-w-[48rem] h-screen overflow-auto flex flex-col flex-nowrap">
    <div class="flex basis-43/48">
      <div class="basis-2/5">
        <VehicleInfo />
      </div>
      <div class="w-full h-full bg-red-200 basis-3/5"></div>
    </div>
    <div class="w-full h-full bg-green-200 basis-5/48"></div>
  </div>
</template>
