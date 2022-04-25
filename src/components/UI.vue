<script setup>
  import MainGrid from './MainGrid.vue'
</script>

<template>
  <div class="min-w-[48rem] h-screen overflow-auto">
    <MainGrid>
      <div class="w-full h-full bg-blue-200"></div>
      <div class="w-full h-full bg-red-200"></div>
      <div class="w-full h-full bg-green-200"></div>
    </MainGrid>
  </div>
</template>
