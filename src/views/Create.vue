<template>
  <div class="about">
    <h1>Создание турнира</h1>
    <div class="flex column">
      <div class="flex row" v-for="count in countTeams" :key="count">
        <label>Введите название {{ count }} команды:</label>
        <input v-model="teams[count]" />
      </div>
    </div>
    <div>
      <button @click="createTournament">Создать</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Table extends Vue {
  countTeams = 8;
  availableCountTeams = [2, 4, 8, 16, 32];
  teams: { [key: number]: string } = {};

  createTournament(): void {
    if (Object.keys(this.teams).length === this.countTeams) {
      this.$store.commit("setTournament", this.teams);
      this.teams = {};
      this.$router.push("/");
    } else {
      alert("Заполните все команды!");
    }
  }
}
</script>

<style scoped>
.flex {
  display: flex;
}

.column {
  flex-direction: column;
}
</style>
