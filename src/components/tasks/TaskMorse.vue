<script setup>

import TheTask from "@/components/tasks/TheTask.vue";
</script>

<template>
  <div>
    <h1>Vanity Code</h1>
    <p class="mb-3">
      Jest to sposób reprezentacji alfabetu, cyfr i znaków specjalnych za pomocą dźwięków, błysków światła, impulsów
      elektrycznych lub znaków popularnie zwanych kreską i kropką. Wszystkie znaki reprezentowane są przez
      kilkuelementowe serie sygnałów – krótkich (kropek) i długich (kresek). Kreska powinna trwać co najmniej tyle
      czasu, co trzy kropki.
    </p>
    <img alt="Vue logo" src="@/assets/morse.png" class="mb-3" style="max-width: 100%"/>
    <TheTask code="110011" answer="nauka" task="morse">
      <template #task>
        <pre class="taskcode"><code>-. .- ..- -.- .-</code></pre>
      </template>
    </TheTask>
  </div>
</template>

<style scoped>

</style>
