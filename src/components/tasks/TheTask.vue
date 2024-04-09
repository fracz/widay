<script>
import eventbus from "@/eventbus.js";

export default {
  props: ['task', 'code', 'answer'],
  data() {
    return {
      tried: false,
      unlocked: false,
      done: false,
      enteredCode: '',
      enteredAnswer: '',
    }
  },
  mounted() {
    this.enteredCode = localStorage.getItem('taskCode' + this.task) || this.$route.params.code || '';
    this.enteredAnswer = localStorage.getItem('taskDone' + this.task) || '';
    if (this.enteredCode) {
      this.unlockTask();
    }
    setTimeout(() => document.getElementById('taskTitle')?.scrollIntoView({behavior: 'smooth'}));
  },
  methods: {
    unlockTask() {
      this.tried = true;
      if (!this.displayError) {
        localStorage.setItem('taskCode' + this.task, this.enteredCode);
        eventbus.$emit('taskFound');
        this.unlocked = true;
        this.tried = false;
        if (this.enteredAnswer) {
          this.answerTask();
        }
      }
    },
    answerTask() {
      this.tried = true;
      if (!this.displayError) {
        localStorage.setItem('taskDone' + this.task, this.enteredAnswer);
        eventbus.$emit('taskDone');
        this.done = true;
      }
    }
  },
  computed: {
    displayError() {
      if (!this.tried) {
        return false;
      }
      if (this.unlocked) {
        return this.enteredAnswer.trim().toLowerCase() != this.answer;
      } else {
        return this.enteredCode.trim().toLowerCase() != this.code;
      }
    }
  }
}
</script>

<template>
  <div>
    <div v-if="done">
      <h2 style="text-align: center" class="mb-3">Brawo! Zadanie rozwiązane!</h2>
      <div style="text-align: center">
        <img v-if="task === 'ascii'" src="@/assets/wlepka-ascii.svg" alt="" style="max-width: 200px">
        <img v-if="task === 'morse'" src="@/assets/wlepka-morse.svg" alt="" style="max-width: 200px">
        <img v-if="task === 'rot'" src="@/assets/wlepka-rot.svg" alt="" style="max-width: 200px">
        <img v-if="task === 'vanity'" src="@/assets/wlepka-vanity.svg" alt="" style="max-width: 200px">
        <img v-if="task === 'steganography'" src="@/assets/wlepka-steganography.svg" alt="" style="max-width: 200px">
      </div>
    </div>
    <div v-else-if="unlocked">
      <h2>Twoje zadanie</h2>
      <p>Odkoduj poniższą wiadomość.</p>
      <div class="mb-3">
        <slot name="task"></slot>
      </div>
      <form @submit.prevent="answerTask()">
        <input type="text" class="input" placeholder="Rozwiązanie." v-model="enteredAnswer">
        <div class="error" v-if="displayError">Niepoprawna odpowiedź.</div>
        <button type="submit" class="button">
          Sprawdź rozwiązanie!
        </button>
      </form>
    </div>
    <div v-else>

      <h2>Odblokuj zadanie!</h2>
      <p class="mb-3">Znajdź QR kod i zeskanuj go lub przepisz hasło, by móc rozwiązać zadanie.</p>
      <form @submit.prevent="unlockTask()">
        <input type="text" class="input" placeholder="Kod odblokowania" v-model="enteredCode">
        <div class="error" v-if="displayError">Niepoprawny kod.</div>
        <button type="submit" class="button">
          Pokaż zadanie!
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>
