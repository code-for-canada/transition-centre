<template>
  <div id="view-container">
    <img id="screen1" src="https://code-for-canada.github.io/transition-centre/sprints/sprint2/img/members-portal/447783646.png"
      alt="Screen" usemap="#screenmap1" width="1441px" v-show="showScreen1">

    <map name="screenmap1">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/plan">
        <area shape="rect" coords="148,631,318,653" alt="ChecklistPlan">
      </router-link>
      <area shape="rect" coords="150,705,899,747" alt="Screen2" @click="expand">
    </map>

    <img id="screen2" src="https://code-for-canada.github.io/transition-centre/sprints/sprint2/img/members-portal/447783647.png"
      alt="Screen" usemap="#screenmap2" width="1441px" v-show="showScreen2">

    <map name="screenmap2">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/plan">
        <area shape="rect" coords="148,631,318,653" alt="ChecklistPlan">
      </router-link>
      <area shape="rect" coords="150,705,899,747" alt="Screen1" @click="expand">
      <router-link to="/plan">
        <area shape="rect" coords="174,879,578,900" alt="ChecklistPlan">
      </router-link>
    </map>
  </div>
</template>

<script>
  export default {
    name: "members-portal",
    data() {
       return {
          showScreen1: true,
          showScreen2: false,
        }
    },
    methods: {
      expand() {
        if (this.showScreen1) {
          this.showScreen1 = false;
          this.showScreen2 = true;
        } else {
          this.showScreen2 = false;
          this.showScreen1 = true;
        }
      }
    }
  }
</script>

<style scoped>
  #view-container {
    text-align: center;
  }

  area {
    cursor: pointer;
  }
</style>
