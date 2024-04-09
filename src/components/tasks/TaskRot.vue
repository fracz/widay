<script setup>

import TheTask from "@/components/tasks/TheTask.vue";
</script>

<template>
  <div>
    <h1 id="taskTitle">ROT-13</h1>
    <p class="mb-3">
      Prosty szyfr przesuwający, którego działanie polega na zamianie każdego znaku alfabetu łacińskiego na znak
      występujący 13 pozycji po nim, przy czym wielkość liter nie ma przy przekształcaniu znaczenia. ROT13 jest
      przykładem szyfru Cezara, opracowanego w starożytnym Rzymie.
    </p>
    <img alt="Vue logo" src="@/assets/rot.png" class="mb-3" style="max-width: 100%"/>
    <TheTask code="4444" answer="programowanie" task="rot">
      <template #task>
        <pre class="taskcode"><code>C E B T E N Z B J N A V R</code></pre>
      </template>
    </TheTask>
  </div>
</template>

<style scoped>

</style>
