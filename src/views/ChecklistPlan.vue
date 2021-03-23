<template>
  <div id="view-container">
    <img id="screen1" src="https://code-for-canada.github.io/transition-centre/sprints/sprint2/img/checklist-plan/447603054.png"
      alt="Screen" usemap="#screenmap1" width="1441px" v-show="showScreen1">

    <map name="screenmap1">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal">
      </router-link>
      <router-link to="/goals">
        <area shape="rect" coords="483,604,674,620" alt="SmartGoal">
      </router-link>
      <area shape="rect" coords="205,1320,1270,1363" alt="VACExpand" @click="clickVACExpand">
    </map>

    <img id="screen2" src="https://code-for-canada.github.io/transition-centre/sprints/sprint2/img/checklist-plan/447782685.png"
      alt="Screen" usemap="#screenmap2" width="1441px" v-show="showScreen2">

    <map name="screenmap2">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal">
      </router-link>
      <router-link to="/goals">
        <area shape="rect" coords="483,604,674,620" alt="SmartGoal">
      </router-link>
      <area shape="rect" coords="205,1320,1270,1363" alt="VACCollaps" @click="clickVACUnExpand">
      <area shape="rect" coords="208,1366,1268,2432" alt="VACFill" @click="clickVACFill">
    </map>

    <img id="screen3" src="https://code-for-canada.github.io/transition-centre/sprints/sprint2/img/checklist-plan/447782684.png"
      alt="Screen" usemap="#screenmap3" width="1441px" v-show="showScreen3">

    <map name="screenmap3">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal">
      </router-link>
      <router-link to="/goals">
        <area shape="rect" coords="483,604,674,620" alt="SmartGoal">
      </router-link>
      <area shape="rect" coords="205,1320,1270,1363" alt="VACCollaps" @click="clickVACUnExpand">
      <area shape="rect" coords="230,2363,330,2403" alt="VACSave" @click="clickVACSave">
    </map>

    <img id="screen4" src="https://code-for-canada.github.io/transition-centre/sprints/sprint2/img/checklist-plan/447794926.png"
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
    name: "checklist-plan",
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
      switchScreen(is_screen_element_visible) {
        this.hideAll();
        this[is_screen_element_visible] = true;
      },
      clickVACUnExpand() {
        this.switchScreen('showScreen1');
      },
      clickVACExpand() {
        this.switchScreen('showScreen2');
      },
      clickVACFill() {
        this.switchScreen('showScreen3');
      },
      clickVACSave() {
        this.switchScreen('showScreen4');
      },      
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
