<template>
  <RouterLink :to="`/task-${task}`" class="task-link">
    <div>

      <slot name="icon"></slot>
    </div>
    <div class="done" v-if="done">✓</div>
    <div class="found" v-else-if="found">●</div>
    <div class="todo" v-else>✗</div>
  </RouterLink>
</template>

<script>
import IconSegment from "@/components/icons/IconSegment.vue";
import {RouterLink} from "vue-router";
import eventbus from "@/eventbus.js";

export default {
  components: {RouterLink, IconSegment},
  props: ['task'],
  data() {
    return {
      done: false,
      found: false,
    }
  },
  mounted() {
    this.done = !!localStorage.getItem('taskDone' + this.task);
    this.found = !!localStorage.getItem('taskCode' + this.task);
    eventbus.$on('taskDone', () => this.done = !!localStorage.getItem('taskDone' + this.task));
    eventbus.$on('taskFound', () => this.found = !!localStorage.getItem('taskCode' + this.task));
  }
}

</script>

<style>
.task-link {
  display: flex;
  flex-direction: column;
  border-left: 1px solid var(--color-border);
  width: 80px;
  align-items: center;
  padding: 15px;
}

.task-link:first-child {
  border-left: 0;
}

.task-link svg {
  width: 40px;
  height: 40px;
}


.task-link.router-link-active {
  background-color: var(--color-link-active);
}

.task-link .done {
  font-size: 2em;
  color: #00bd7e;
  font-weight: bold;
}

.task-link .todo {
  font-size: 2em;
  color: #555;
}

.task-link .found {
  font-size: 2em;
  color: coral;
}

</style>
