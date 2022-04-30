<template>
  <div class="w-full h-full overflow-auto flex flex-col flex-nowrap">
    <!-- UI is divided into main section and toolbar -->

    <!-- Main section: -->
    <div class="flex basis-43/48">
      <!-- 20% of the main section is for driver's display, rest is for infotainment -->

      <!-- Driver's display -->
      <div class="basis-2/5">
        <VehicleInfo />
      </div>
      <!-- Infotainment -->
      <div class="basis-3/5">
        <Infotainment />
      </div>
    </div>
    <!-- (Toolbar) -->
    <div class="basis-5/48">
      <Toolbar />
    </div>
  </div>
</template>
