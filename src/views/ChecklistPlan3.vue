<template>
  <div id="view-container">
    <img id="screen1" src="https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/checklist-plan/447603054.png"
      alt="Screen" usemap="#screenmap1" width="1441px" v-show="showScreen1">

    <map name="screenmap1">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal">
      </router-link>
      <router-link to="/goals">
        <area shape="rect" coords="147,839,501,894" alt="SmartGoal">
      </router-link>
      <router-link to="/plan">
        <area shape="rect" coords="240,921,433,960" alt="DomainsView">
      </router-link>
      <router-link to="/calendar">
        <area shape="rect" coords="910,915,1045,958" alt="CalView">
      </router-link>
      <area shape="rect" coords="151,985,1287,1042" alt="SecUnExpand" @click="clickSecUnExpand">
      <area shape="rect" coords="312,1112,466,1138" alt="CalExpand" @click="clickCalExpand">
      <area shape="rect" coords="205,1167,1270,1208" alt="VACExpand" @click="clickVACExpand">
    </map>

    <img id="screen2" src="https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/checklist-plan/448514593.png"
      alt="Screen" usemap="#screenmap2" width="1441px" v-show="showScreen2">

    <map name="screenmap2">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal">
      </router-link>
      <router-link to="/goals">
        <area shape="rect" coords="147,839,501,894" alt="SmartGoal">
      </router-link>
      <router-link to="/plan">
        <area shape="rect" coords="240,921,433,960" alt="DomainsView">
      </router-link>
      <router-link to="/calendar">
        <area shape="rect" coords="910,915,1045,958" alt="CalView">
      </router-link>
      <area shape="rect" coords="151,985,1287,1042" alt="SecUnExpand" @click="clickSecUnExpand">
      <area shape="rect" coords="312,1112,466,1138" alt="CalCollaps" @click="clickUnExpand">
      <area shape="rect" coords="319,1161,664,1578" alt="CalCollaps" @click="clickUnExpand">
    </map>

    <img id="screen3" src="https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/checklist-plan/447782685.png"
      alt="Screen" usemap="#screenmap3" width="1441px" v-show="showScreen3">

    <map name="screenmap3">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal">
      </router-link>
      <router-link to="/goals">
        <area shape="rect" coords="147,839,501,894" alt="SmartGoal">
      </router-link>
      <router-link to="/plan">
        <area shape="rect" coords="240,921,433,960" alt="DomainsView">
      </router-link>
      <router-link to="/calendar">
        <area shape="rect" coords="910,915,1045,958" alt="CalView">
      </router-link>
      <area shape="rect" coords="151,985,1287,1042" alt="SecUnExpand" @click="clickSecUnExpand">
      <area shape="rect" coords="205,1167,1270,1208" alt="VACCollaps" @click="clickUnExpand">
      <area shape="rect" coords="221,1507,1239,2415" alt="VACFill" @click="clickVACFill">
    </map>

    <img id="screen4" src="https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/checklist-plan/447782684.png"
      alt="Screen" usemap="#screenmap4" width="1441px" v-show="showScreen4">

    <map name="screenmap4">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal">
      </router-link>
      <router-link to="/goals">
        <area shape="rect" coords="147,839,501,894" alt="SmartGoal">
      </router-link>
      <router-link to="/plan">
        <area shape="rect" coords="240,921,433,960" alt="DomainsView">
      </router-link>
      <router-link to="/calendar">
        <area shape="rect" coords="910,915,1045,958" alt="CalView">
      </router-link>
      <area shape="rect" coords="151,985,1287,1042" alt="SecUnExpand" @click="clickSecUnExpand">
      <area shape="rect" coords="205,1167,1270,1208" alt="VACCollaps" @click="clickUnExpand">
      <area shape="rect" coords="229,2428,331,2470" alt="VACSave" @click="clickVACSave">
    </map>

    <img id="screen5" src="https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/checklist-plan/447794926.png"
      alt="Screen" usemap="#screenmap5" width="1441px" v-show="showScreen5">

    <map name="screenmap5">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal">
      </router-link>
      <router-link to="/goals">
        <area shape="rect" coords="147,839,501,894" alt="SmartGoal">
      </router-link>
      <router-link to="/plan">
        <area shape="rect" coords="240,921,433,960" alt="DomainsView">
      </router-link>
      <router-link to="/calendar">
        <area shape="rect" coords="910,915,1045,958" alt="CalView">
      </router-link>
      <area shape="rect" coords="151,985,1287,1042" alt="SecUnExpand" @click="clickSecUnExpand">
    </map>

    <img id="screen6" src="https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/checklist-plan/450215395.png"
      alt="Screen" usemap="#screenmap6" width="1441px" v-show="showScreen6">

    <map name="screenmap6">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal">
      </router-link>
      <router-link to="/goals">
        <area shape="rect" coords="147,839,501,894" alt="SmartGoal">
      </router-link>
      <router-link to="/plan">
        <area shape="rect" coords="240,921,433,960" alt="DomainsView">
      </router-link>
      <router-link to="/calendar">
        <area shape="rect" coords="910,915,1045,958" alt="CalView">
      </router-link>
      <area shape="rect" coords="151,985,1287,1042" alt="SecExpand" @click="clickUnExpand">
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
          showScreen5: false,
          showScreen6: false,
        }
    },
    methods: {
      hideAll() {
        this.showScreen1 = false;
        this.showScreen2 = false;
        this.showScreen3 = false;
        this.showScreen4 = false;
        this.showScreen5 = false;
        this.showScreen6 = false;
      },
      switchScreen(is_screen_element_visible) {
        this.hideAll();
        this[is_screen_element_visible] = true;
      },
      clickUnExpand() {
        this.switchScreen('showScreen1');
      },
      clickCalExpand() {
        this.switchScreen('showScreen2');
      },
      clickVACExpand() {
        this.switchScreen('showScreen3');
      },
      clickVACFill() {
        this.switchScreen('showScreen4');
      },
      clickVACSave() {
        this.switchScreen('showScreen5');
      },
      clickSecUnExpand() {
        this.switchScreen('showScreen6');
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
