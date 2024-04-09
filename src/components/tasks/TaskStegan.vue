<script setup>

import TheTask from "@/components/tasks/TheTask.vue";
</script>

<template>
  <div>
    <h1 id="taskTitle">Steganografia</h1>
    <p class="mb-3">
      Steganografia jest nauką lub praktyką, z która prawdopodobnie spotykamy się na co dzień, zupełnie o tym nie
      wiedząc. Polega ona na ukrywaniu wiadomości, zdjęcia lub pliku w nośniku. Nośnikiem może być zdjęcie lub inna
      wiadomość. Istotny jest fakt, iż samo prowadzanie komunikacji(ukrywanie wiadomości) jest tajne. Głównym celem
      steganografii jest więc ukrycie w nośniku wiadomości, tak aby trzecia strona, czyli atakujący, nie była w stanie
      wykryć jej obecności. Samo słowo steganografia pochodzi z języka greckiego i oznacza „ukryte pisanie”.
    </p>
    <TheTask code="8888" answer="majonez" task="steganography">
      <template #task>
        <p>
          Poniżej znajdziesz obrazek, który na pierwszy rzut oka nie przedstawia tekstu.
          Spróbuj popatrzeć na niego jednym okiem, "z dołu" ekranu (pod dużym kątem) i odnajdź ukryte hasło!
        </p>
        <div style="text-align: center">
          <img alt="Vue logo" src="@/assets/steganografia.png" class="mb-3" style="max-width: 100%"/>
        </div>
      </template>
    </TheTask>
  </div>
</template>

<style scoped>

</style>
