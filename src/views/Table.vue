<template>
  <div
    class="grid"
    :style="{
      gridTemplateColumns: `repeat(${competitionCount + 1}, 1fr)`,
      gridTemplateRows: `repeat(${teams.length * 2 - 1}, 1fr)`,
    }"
  >
    <template v-for="(countTeams, round) in roundes">
      <template v-for="(teamNumber, key) in countTeams">
        <div
          :key="`${round}_${key}`"
          class="team"
          :style="{
            gridColumnStart: round + 1,
            gridRowStart:
              (key + teamNumber) * (2 * round === 0 ? 1 : 2 * round),
          }"
        >
          {{ getWinner(round, key) }}
        </div>
      </template>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

interface ITeam {
  team: string;
  score: number;
}

@Component
export default class Table extends Vue {
  teams: ITeam[] = [
    {
      team: "t1",
      score: 0,
    },
    {
      team: "t2",
      score: 0,
    },
    {
      team: "t3",
      score: 0,
    },
    {
      team: "t4",
      score: 0,
    },
    {
      team: "t5",
      score: 0,
    },
    {
      team: "t6",
      score: 0,
    },
    {
      team: "t7",
      score: 0,
    },
    {
      team: "t8",
      score: 0,
    },
  ];
  countTeams = 8;
  pairs: { [key: number]: ITeam[] } = {};

  get currentTournamet(): any {
    return this.$store.state.tournaments.find(
      (tournament: any) => tournament.link === this.$route.params.id
    );
  }

  get competitionCount(): number {
    return Math.log(this.countTeams) / Math.log(2);
  }

  get roundes(): number[] {
    const roundes = [];
    for (let i = 0; i < this.competitionCount; i++) {
      roundes.push(this.countTeams / Math.pow(2, i));
    }
    return roundes;
  }

  getWinner(round: number, key: number): string {
    if (round === 0) {
      return this.teams[key].team;
    }
    console.log(round, key);
    return `${round} ${key}`;
  }
}
</script>
