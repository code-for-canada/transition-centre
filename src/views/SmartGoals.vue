<template>
  <div>
    <img id="screen1" src="https://code-for-canada.github.io/transition-centre/sprints/sprint2/img/smart-goals/447782686.png"
      alt="Screen" usemap="#screenmap1" width="1441px" v-show="showScreen1">

    <map name="screenmap1">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal">
      </router-link>
      <router-link to="/plan">
        <area shape="rect" coords="388,171,530,188" alt="ChecklistPlan">
      </router-link>
      <area shape="rect" coords="145,515,1136,2452" alt="FillGoals" @click="fillGoals">
    </map>

    <img id="screen2" src="https://code-for-canada.github.io/transition-centre/sprints/sprint2/img/smart-goals/447782687.png"
      alt="Screen" usemap="#screenmap2" width="1441px" v-show="showScreen2">

    <map name="screenmap2">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal">
      </router-link>
      <router-link to="/plan">
        <area shape="rect" coords="388,171,530,188" alt="ChecklistPlan">
      </router-link>
      <router-link to="/plan2">
        <area shape="rect" coords="147,2497,249,2541" alt="SaveGoals">
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
      fillGoals() {
        this.showScreen1 = false;
        this.showScreen2 = true;
      }
    }
  }
</script>

<style scoped>
  body {
    margin: 0;
    text-align: center;
  }

  area {
    cursor: pointer;
  }
</style>
