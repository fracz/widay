<script>
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
    this.enteredCode = localStorage.getItem('taskCode' + this.task) || '';
    this.enteredAnswer = localStorage.getItem('taskDone' + this.task) || '';
    if (this.enteredCode) {
      this.unlockTask();
    }
  },
  methods: {
    unlockTask() {
      this.tried = true;
      if (!this.displayError) {
        localStorage.setItem('taskCode' + this.task, this.enteredCode);
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
        return this.enteredAnswer.toLowerCase() != this.answer;
      } else {
        return this.enteredCode.toLowerCase() != this.code;
      }
    }
  }
}
</script>

<template>
  <div>
    <div v-if="done">
      Yay!
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
