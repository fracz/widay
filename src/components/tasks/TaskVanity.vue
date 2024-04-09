<script setup>

import TheTask from "@/components/tasks/TheTask.vue";
</script>

<template>
  <div>
    <h1 id="taskTitle">Vanity Code</h1>
    <p class="mb-3">
      Cyfry w kodzie <i>Vanity</i> odpowiadają literom na klawiaturze numerycznej telefonu. Cyfry 1 i 0 nie odpowiadają
      żadnej literze i często będą używane jako spacje. Liczby 2, 3, 4, 5, 6 i 8 są połączone z trzema literami, a 7 i 9
      z czterema literami, jak pokazano na obrazku. Ponieważ jedna liczba odpowiada wielu literom, konwersja nie zawsze
      jest unikalna i z tej samej kombinacji liczb można utworzyć więcej słów (np. <code>3654</code> może oznaczać
      "foki", ale także "emki").
    </p>
    <div style="text-align: center">
      <img alt="Vue logo" src="@/assets/vanity.jpg" class="mb-3" style="max-width: 100%"/>
    </div>
    <TheTask code="0800" answer="akademia" task="vanity">
      <template #task>
        <pre class="taskcode"><code>2 5 2 3 3 6 4 2</code></pre>
      </template>
    </TheTask>
  </div>
</template>

<style scoped>

</style>
