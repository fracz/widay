<template>
  <div style="margin: 1em">
    <div class="info" v-if="left > 0">
      Pozostało zadań: {{ left }}
    </div>
    <div class="success" v-else>
      <strong>Brawo!</strong> Udało Ci się rozwiązać wszystkie zadania! Zgłoś się do stoiska przy wejściu po upominek.
    </div>
  </div>
</template>

<script>
import eventbus from "@/eventbus.js";

const tasks = ['rot', 'vanity', 'steganography', 'morse', 'ascii'];

export default {
  data() {
    return {
      left: 5,
    }
  },
  mounted() {
    this.updateLeft();
    eventbus.$on('taskDone', () => this.updateLeft());
  },
  methods: {
    updateLeft() {
      let left = tasks.length;
      for (const task of tasks) {
        if (localStorage.getItem('taskDone' + task)) {
          --left;
        }
      }
      this.left = left > 0 ? left : 0;
    }
  }
}

</script>

<style>
.success {
  background: #00bd7e;
  border-radius: 10px;
  padding: 1em;
  color: white;
  margin: 0 1em;
  text-align: center;
}

.success strong {
  font-weight: bold;
}
</style>
