<template>
  <div class="home">
    <h1>Мои турниры</h1>
    <template v-if="tournaments.length > 0">
      <div v-for="tournament in tournaments" :key="tournament.link">
        <router-link :to="`/tournament/${tournament.link}`">
          {{ tournament.link }}
        </router-link>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  get tournaments(): any {
    return this.$store.state.tournaments;
  }
}
</script>
