<script setup>
import {RouterLink, RouterView} from 'vue-router'
import IconAscii from "@/components/icons/IconAscii.vue";
import IconVanity from "@/components/icons/IconVanity.vue";
import IconRot from "@/components/icons/IconRot.vue";
import IconMorse from "@/components/icons/IconMorse.vue";
import IconCommunity from "@/components/icons/IconSegment.vue";
import IconSegment from "@/components/icons/IconSegment.vue";
import TaskLink from "@/components/tasks/TaskLink.vue";
import TaskStatus from "@/components/tasks/TaskStatus.vue";
</script>

<template>
  <header>
    <div style="display: flex; flex-direction: column; align-items: center">
      <RouterLink to="/" class="logo">
        <img alt="Vue logo" src="@/assets/ki-new-logo.svg" style="max-width: 100%"/>
      </RouterLink>


      <h1 style="margin-bottom: 1em">Dzień otwarty AGH 2024</h1>
      <!--      <HelloWorld msg="You did it!" />-->

      <h3 style="margin-bottom: 10px">Żądny przygód?</h3>
      <p style="text-align: center">
        Zostań odkrywcą na tropie informatyki i kryptografii, grając w grę terenową na Wydziale Informatyki!
      </p>

      <nav class="tasks" style="display: flex; justify-content: center">
        <TaskLink task="ascii">
          <template #icon>
            <IconAscii/>
          </template>
        </TaskLink>
        <TaskLink task="vanity">
          <template #icon>
            <IconVanity/>
          </template>
        </TaskLink>
        <TaskLink task="rot">
          <template #icon>
            <IconRot/>
          </template>
        </TaskLink>
        <TaskLink task="morse">
          <template #icon>
            <IconMorse/>
          </template>
        </TaskLink>
        <TaskLink task="steganography">
          <template #icon>
            <IconSegment/>
          </template>
        </TaskLink>

<!--        <RouterLink to="/task-vanity">-->
<!--        </RouterLink>-->
<!--        <RouterLink to="/task-ascii">-->
<!--          <IconAscii/>-->
<!--        </RouterLink>-->
<!--        <RouterLink to="/task-rot">-->
<!--          <IconRot/>-->
<!--        </RouterLink>-->
<!--        <RouterLink to="/task-morse">-->
<!--          <IconMorse/>-->
<!--        </RouterLink>-->
<!--        <RouterLink to="/task-steganography">-->
<!--          <IconSegment/>-->
<!--          v-->
<!--        </RouterLink>-->
      </nav>
      <TaskStatus/>
    </div>
  </header>

  <router-view v-slot="{ Component }" style="padding: 1em 0">
    <transition name="fade" mode="out-in">
      <component :is="Component"/>
    </transition>
  </router-view>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin-bottom: 2em;
}


.logo:hover {
  background: transparent;
}

.logo img {
  height: 100px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    justify-content: center;
    padding-right: calc(var(--section-gap) / 2);
  }


  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
