<template>
  <div id="view-container">
    <img
      id="screen1"
      src="https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/calendar-view/449998588.png"
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
      <area
        shape="rect"
        coords="149,377,500,433"
        alt="AddActivity"
        @click="addActivity"
      />
      <area
        shape="rect"
        coords="310,765,472,854"
        alt="SelectDate"
        @click="selectDate"
      />
    </map>

    <img
      id="screen2"
      src="https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/calendar-view/449998589.png"
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
      <area
        shape="rect"
        coords="149,377,500,433"
        alt="AddActivity"
        @click="addActivity"
      />
      <area
        shape="rect"
        coords="310,855,622,976"
        alt="FocusActivities"
        @click="focusActivities"
      />
    </map>

    <img
      id="screen3"
      src="https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/calendar-view/449998590.png"
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
      <area
        shape="rect"
        coords="146,356,191,485"
        alt="SelectType"
        @click="selectType"
      />
    </map>

    <img
      id="screen4"
      src="https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/calendar-view/449998591.png"
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
      <area
        shape="rect"
        coords="150,522,251,561"
        alt="NextItems"
        @click="nextItems"
      />
    </map>

    <img
      id="screen5"
      src="https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/calendar-view/449998592.png"
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
      <area
        shape="rect"
        coords="138,312,1149,1438"
        alt="FillForm"
        @click="fillForm"
      />
    </map>

    <img
      id="screen6"
      src="https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/calendar-view/449998593.png"
      alt="Screen"
      usemap="#screenmap6"
      width="1441px"
      v-show="showScreen6"
    />

    <map name="screenmap6">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../" />
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal" />
      </router-link>
      <area
        shape="rect"
        coords="148,1171,249,1512"
        alt="SaveEvent"
        @click="saveEvent"
      />
    </map>
  </div>
</template>

<script>
export default {
  name: "calendar-view",
  data() {
    return {
      showScreen1: true,
      showScreen2: false,
      showScreen3: false,
      showScreen4: false,
      showScreen5: false,
      showScreen6: false,
    };
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
    selectDate() {
      this.switchScreen("showScreen2");
    },
    addActivity() {
      this.switchScreen("showScreen3");
    },
    focusActivities() {
      window.scrollTo(149, 1156);
    },
    selectType() {
      this.switchScreen("showScreen4");
    },
    nextItems() {
      this.switchScreen("showScreen5");
    },
    fillForm() {
      this.switchScreen("showScreen6");
    },
    saveEvent() {
      this.switchScreen("showScreen1");
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
