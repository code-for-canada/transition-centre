<template>
  <div id="view-container">
    <img
      id="screen1"
      src="https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/checklist-plan/447782688.png"
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
      <router-link to="/goals">
        <area shape="rect" coords="147,839,501,894" alt="SmartGoal" />
      </router-link>
      <router-link to="/plan">
        <area shape="rect" coords="240,921,433,960" alt="DomainsView" />
      </router-link>
      <router-link to="/calendar">
        <area shape="rect" coords="910,915,1045,958" alt="CalView" />
      </router-link>
      <area
        shape="rect"
        coords="151,985,1287,1042"
        alt="SecUnExpand"
        @click="clickSecUnExpand"
      />
      <area
        shape="rect"
        coords="206,1370,1270,1420"
        alt="GoalExpand"
        @click="clickGoalExpand"
      />
    </map>

    <img
      id="screen2"
      src="https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/checklist-plan/447782689.png"
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
      <router-link to="/goals">
        <area shape="rect" coords="147,839,501,894" alt="SmartGoal" />
      </router-link>
      <router-link to="/plan">
        <area shape="rect" coords="240,921,433,960" alt="DomainsView" />
      </router-link>
      <router-link to="/calendar">
        <area shape="rect" coords="910,915,1045,958" alt="CalView" />
      </router-link>
      <area
        shape="rect"
        coords="151,985,1287,1042"
        alt="SecUnExpand"
        @click="clickSecUnExpand"
      />
      <area
        shape="rect"
        coords="206,1370,1270,1420"
        alt="GoalExpand"
        @click="clickGoalUnExpand"
      />
      <area
        shape="rect"
        coords="205,1609,1255,3228"
        alt="GoalFill"
        @click="clickGoalFill"
      />
    </map>

    <img
      id="screen3"
      src="https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/checklist-plan/447795946.png"
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
      <router-link to="/goals">
        <area shape="rect" coords="147,839,501,894" alt="SmartGoal" />
      </router-link>
      <router-link to="/plan">
        <area shape="rect" coords="240,921,433,960" alt="DomainsView" />
      </router-link>
      <router-link to="/calendar">
        <area shape="rect" coords="910,915,1045,958" alt="CalView" />
      </router-link>
      <area
        shape="rect"
        coords="151,985,1287,1042"
        alt="SecUnExpand"
        @click="clickSecUnExpand"
      />
      <area
        shape="rect"
        coords="206,1370,1270,1420"
        alt="GoalExpand"
        @click="clickGoalUnExpand"
      />
      <area
        shape="rect"
        coords="229,3238,332,3280"
        alt="GoalsSave"
        @click="clickGoalsSave"
      />
    </map>

    <img
      id="screen4"
      src="https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/checklist-plan/447795947.png"
      alt="Screen"
      usemap="#screenmap4"
      width="1441px"
      v-show="showScreen4"
    />

    <map name="screenmap4">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../" />
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal" />
      </router-link>
      <router-link to="/goals">
        <area shape="rect" coords="147,839,501,894" alt="SmartGoal" />
      </router-link>
      <router-link to="/plan">
        <area shape="rect" coords="240,921,433,960" alt="DomainsView" />
      </router-link>
      <router-link to="/calendar">
        <area shape="rect" coords="910,915,1045,958" alt="CalView" />
      </router-link>
      <area
        shape="rect"
        coords="151,985,1287,1042"
        alt="SecUnExpand"
        @click="clickSecUnExpand"
      />
    </map>

    <img
      id="screen5"
      src="https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/checklist-plan/450215395.png"
      alt="Screen"
      usemap="#screenmap5"
      width="1441px"
      v-show="showScreen5"
    />

    <map name="screenmap5">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../" />
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal" />
      </router-link>
      <router-link to="/goals">
        <area shape="rect" coords="147,839,501,894" alt="SmartGoal" />
      </router-link>
      <router-link to="/plan">
        <area shape="rect" coords="240,921,433,960" alt="DomainsView" />
      </router-link>
      <router-link to="/calendar">
        <area shape="rect" coords="910,915,1045,958" alt="CalView" />
      </router-link>
      <area
        shape="rect"
        coords="151,985,1287,1042"
        alt="SecExpand"
        @click="clickGoalUnExpand"
      />
    </map>
  </div>
</template>

<script>
export default {
  name: "checklist-plan2",
  data() {
    return {
      showScreen1: true,
      showScreen2: false,
      showScreen3: false,
      showScreen4: false,
      showScreen5: false,
    };
  },
  methods: {
    hideAll() {
      this.showScreen1 = false;
      this.showScreen2 = false;
      this.showScreen3 = false;
      this.showScreen4 = false;
      this.showScreen5 = false;
    },
    expand(is_screen_element_visible) {
      this.hideAll();
      this[is_screen_element_visible] = true;
    },
    clickGoalUnExpand() {
      this.expand("showScreen1");
    },
    clickGoalExpand() {
      this.expand("showScreen2");
    },
    clickGoalFill() {
      this.expand("showScreen3");
    },
    clickGoalsSave() {
      this.expand("showScreen4");
    },
    clickSecUnExpand() {
      this.expand("showScreen5");
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
