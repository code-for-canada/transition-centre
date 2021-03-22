<template>
  <div>
    <img id="screen1" src="https://code-for-canada.github.io/transition-centre/sprints/sprint2/img/checklist-plan/447782688.png"
      alt="Screen" usemap="#screenmap1" width="1441px" v-show="showScreen1">

    <map name="screenmap1">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal">
      </router-link>
      <router-link to="/goals">
        <area shape="rect" coords="483,604,674,620" alt="SmartGoal">
      </router-link>
      <area shape="rect" coords="205,1522,1270,1565" alt="GoalExpand" @click="clickGoalExpand">
    </map>

    <img id="screen2" src="https://code-for-canada.github.io/transition-centre/sprints/sprint2/img/checklist-plan/447782689.png"
      alt="Screen" usemap="#screenmap2" width="1441px" v-show="showScreen2">

    <map name="screenmap2">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal">
      </router-link>
      <router-link to="/goals">
        <area shape="rect" coords="483,604,674,620" alt="SmartGoal">
      </router-link>
      <area shape="rect" coords="205,1522,1270,1565" alt="GoalExpand" @click="clickGoalExpand">
      <area shape="rect" coords="208,1568,1268,3228" alt="GoalFill" @click="clickGoalFill">
    </map>

    <img id="screen3" src="https://code-for-canada.github.io/transition-centre/sprints/sprint2/img/checklist-plan/447795946.png"
      alt="Screen" usemap="#screenmap3" width="1441px" v-show="showScreen3">

    <map name="screenmap3">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal">
      </router-link>
      <router-link to="/goals">
        <area shape="rect" coords="483,604,674,620" alt="SmartGoal">
      </router-link>
      <area shape="rect" coords="205,1522,1270,1565" alt="GoalExpand" @click="clickGoalUnExpand">
      <area shape="rect" coords="230,3261,331,3299" alt="GoalsSave" @click="clickGoalsSave">
    </map>

    <img id="screen4" src="https://code-for-canada.github.io/transition-centre/sprints/sprint2/img/checklist-plan/447795947.png"
      alt="Screen" usemap="#screenmap4" width="1441px" v-show="showScreen4">

    <map name="screenmap4">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal">
      </router-link>
      <router-link to="/goals">
        <area shape="rect" coords="483,604,674,620" alt="SmartGoal">
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
          showScreen3: false,
          showScreen4: false,
        }
    },
    methods: {
      hideAll() {
        this.showScreen1 = false;
        this.showScreen2 = false;
        this.showScreen3 = false;
        this.showScreen4 = false;
      },
      expand(is_screen_element_visible) {
        this.hideAll();
        this[is_screen_element_visible] = true;
      },
      clickGoalUnExpand() {
        this.expand('showScreen1');
      },
      clickGoalExpand() {
        this.expand('showScreen2');
      },
      clickGoalFill() {
        this.expand('showScreen3');
      },
      clickGoalsSave() {
        this.expand('showScreen4');
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
