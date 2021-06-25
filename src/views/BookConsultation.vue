<template>
  <div id="view-container">
    <img
      id="screen1"
      src="https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/book-consultation/449998469.png"
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
        coords="140,432,189,564"
        alt="ShowScreen2"
        @click="switchScreen('showScreen2')"
      />
    </map>

    <img
      id="screen2"
      src="https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/book-consultation/449998470.png"
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
        coords="148,689,247,729"
        alt="ShowScreen3"
        @click="switchScreen('showScreen3')"
      />
    </map>

    <img
      id="screen3"
      src="https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/book-consultation/449998471.png"
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
        coords="149,436,293,475"
        alt="ShowScreen4"
        @click="switchScreen('showScreen4')"
      />
    </map>

    <img
      id="screen4"
      src="https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/book-consultation/449998472.png"
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
        coords="151,476,498,929"
        alt="ShowScreen5"
        @click="switchScreen('showScreen5')"
      />
    </map>

    <img
      id="screen5"
      src="https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/book-consultation/449998473.png"
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
        coords="146,435,494,640"
        alt="ShowScreen6"
        @click="switchScreen('showScreen6')"
      />
    </map>

    <img
      id="screen6"
      src="https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/book-consultation/449998474.png"
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
        coords="148,737,250,775"
        alt="ShowScreen7"
        @click="switchScreen('showScreen7')"
      />
    </map>

    <img
      id="screen7"
      src="https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/book-consultation/449998475.png"
      alt="Screen"
      usemap="#screenmap7"
      width="1441px"
      v-show="showScreen7"
    />

    <map name="screenmap7">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../" />
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal" />
      </router-link>
      <area
        shape="rect"
        coords="139,424,1155,808"
        alt="ShowScreen8"
        @click="switchScreen('showScreen8')"
      />
    </map>

    <img
      id="screen8"
      src="https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/book-consultation/449998476.png"
      alt="Screen"
      usemap="#screenmap8"
      width="1441px"
      v-show="showScreen8"
    />

    <map name="screenmap8">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../" />
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal" />
      </router-link>
      <area
        shape="rect"
        coords="147,838,249,880"
        alt="ShowScreen9"
        @click="switchScreen('showScreen9')"
      />
    </map>

    <img
      id="screen9"
      src="https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/book-consultation/449998477.png"
      alt="Screen"
      usemap="#screenmap9"
      width="1441px"
      v-show="showScreen9"
    />

    <map name="screenmap9">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../" />
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal" />
      </router-link>
      <area
        shape="rect"
        coords="1194,696,1264,721"
        alt="ShowScreen10"
        @click="switchScreen('showScreen10')"
      />
    </map>

    <img
      id="screen10"
      src="https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/book-consultation/449998478.png"
      alt="Screen"
      usemap="#screenmap10"
      width="1441px"
      v-show="showScreen10"
    />

    <map name="screenmap10">
      <area
        shape="rect"
        coords="361,822,558,862"
        alt="ShowScreen11"
        @click="switchScreen('showScreen11')"
      />
    </map>

    <img
      id="screen11"
      src="https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/book-consultation/449998479.png"
      alt="Screen"
      usemap="#screenmap11"
      width="1441px"
      v-show="showScreen11"
    />

    <map name="screenmap11">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../" />
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal" />
      </router-link>
      <router-link to="/calendar">
        <area shape="rect" coords="147,456,285,496" alt="CalendarView" />
      </router-link>
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
      showScreen7: false,
      showScreen8: false,
      showScreen9: false,
      showScreen10: false,
      showScreen11: false,
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
      this.showScreen7 = false;
      this.showScreen8 = false;
      this.showScreen9 = false;
      this.showScreen10 = false;
      this.showScreen11 = false;
    },
    switchScreen(is_screen_element_visible) {
      this.hideAll();
      this[is_screen_element_visible] = true;
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
