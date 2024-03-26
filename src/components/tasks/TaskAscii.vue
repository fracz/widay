<script setup>

import TheTask from "@/components/tasks/TheTask.vue";
</script>

<template>
  <div>
    <h1>ASCII</h1>
    <p class="mb-3">
      Siedmiobitowy system kodowania znaków, używany we współczesnych komputerach oraz sieciach komputerowych, a także
      innych urządzeniach wyposażonych w mikroprocesor. Przyporządkowuje liczbom z zakresu 0−127: litery alfabetu
      łacińskiego języka angielskiego, cyfry, znaki przestankowe i inne symbole oraz polecenia sterujące. Na przykład
      litera „a” jest kodowana jako liczba 97, a znak spacji jest kodowany jako 32. Większość współczesnych systemów
      kodowania znaków jest rozszerzeniem standardu ASCII.
    </p>
    <img alt="Vue logo" src="@/assets/ascii.png" class="mb-3"/>
    <TheTask code="1234" answer="komputer" task="ascii">
      <template #task>
        <pre class="taskcode"><code>75 79 77 80 85 84 69 82</code></pre>
      </template>
    </TheTask>
  </div>
</template>

<style scoped>

</style>
