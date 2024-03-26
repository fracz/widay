<script setup>
import {RouterLink, RouterView} from 'vue-router'
import IconAscii from "@/components/icons/IconAscii.vue";
import IconVanity from "@/components/icons/IconVanity.vue";
import IconRot from "@/components/icons/IconRot.vue";
import IconMorse from "@/components/icons/IconMorse.vue";
import IconCommunity from "@/components/icons/IconSegment.vue";
import IconSegment from "@/components/icons/IconSegment.vue";
</script>

<template>
  <header>
    <div style="display: flex; flex-direction: column; align-items: center">
      <RouterLink to="/" class="logo">
        <img alt="Vue logo" src="@/assets/ki-new-logo.svg"/>
      </RouterLink>


      <h1 style="margin-bottom: 1em">Dzień otwarty AGH 2024</h1>
      <!--      <HelloWorld msg="You did it!" />-->

      <h3 style="margin-bottom: 10px">Żądny przygód?</h3>
      <p style="text-align: center">
        Znajdź pięć kodów QR na terenie atrium budynku Informatyki (D-17), odszyfruj wiadomości i zgłoś się po upominek
        przy wejściu!
      </p>

      <nav class="tasks" style="display: flex; justify-content: center">
        <RouterLink to="/task-vanity">
          <IconVanity/>
        </RouterLink>
        <RouterLink to="/task-ascii">
          <IconAscii/>
        </RouterLink>
        <RouterLink to="/task-rot">
          <IconRot/>
        </RouterLink>
        <RouterLink to="/task-morse">
          <IconMorse/>
        </RouterLink>
        <RouterLink to="/task-segment">
          <IconSegment/>
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView/>
</template>

<style scoped>
.tasks a {
}

.tasks a svg {
  width: 40px;
  height: 40px;
}

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

nav a.router-link-active {
  background-color: var(--color-link-active);
}

nav a.router-link-exact-active:hover {
  background-color: var(--color-link-active);
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
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
</style>
