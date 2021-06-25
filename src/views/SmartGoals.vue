<template>
  <div id="view-container">
    <img
      id="screen1"
      src="https://code-for-canada.github.io/transition-centre/sprints/sprint3/img/smart-goals/449240787.png"
      alt="Screen"
      usemap="#screenmap1"
      width="1441px"
      v-show="showScreen1"
    />

    <map name="screenmap1">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../" />
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal" />
      </router-link>
      <router-link to="/plan">
        <area shape="rect" coords="388,171,530,188" alt="ChecklistPlan" />
      </router-link>
      <area
        shape="rect"
        coords="146,690,192,732"
        alt="CheckSMARTGoal"
        @click="checkSMARTGoal"
      />
    </map>

    <img
      id="screen2"
      src="https://code-for-canada.github.io/transition-centre/sprints/sprint3/img/smart-goals/447782686.png"
      alt="Screen"
      usemap="#screenmap2"
      width="1441px"
      v-show="showScreen2"
    />

    <map name="screenmap2">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../" />
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal" />
      </router-link>
      <router-link to="/plan">
        <area shape="rect" coords="388,171,530,188" alt="ChecklistPlan" />
      </router-link>
      <area
        shape="rect"
        coords="145,379,1191,2952"
        alt="FillGoals"
        @click="fillGoals"
      />
    </map>

    <img
      id="screen3"
      src="https://code-for-canada.github.io/transition-centre/sprints/sprint3/img/smart-goals/447782687.png"
      alt="Screen"
      usemap="#screenmap3"
      width="1441px"
      v-show="showScreen3"
    />

    <map name="screenmap3">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../" />
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal" />
      </router-link>
      <router-link to="/plan">
        <area shape="rect" coords="388,171,530,188" alt="ChecklistPlan" />
      </router-link>
      <router-link to="/plan2">
        <area shape="rect" coords="147,2970,249,3009" alt="SaveGoals" />
      </router-link>
    </map>
  </div>
</template>

<script>
export default {
  name: "smart-goals",
  data() {
    return {
      showScreen1: true,
      showScreen2: false,
      showScreen3: false,
    };
  },
  methods: {
    hideAll() {
      this.showScreen1 = false;
      this.showScreen2 = false;
      this.showScreen3 = false;
    },
    expand(is_screen_element_visible) {
      this.hideAll();
      this[is_screen_element_visible] = true;
    },
    checkSMARTGoal() {
      this.expand("showScreen2");
    },
    fillGoals() {
      this.expand("showScreen3");
    },
  },
};
</script>

<style scoped>
#view-container {
  text-align: center;
}

area {
  cursor: pointer;
}
</style>
