<template>
  <div id="view-container">
    <img id="screen1" src="https://code-for-canada.github.io/transition-centre/sprints/sprint6/img/member-account/450915763.png"
      alt="Screen" usemap="#screenmap1" width="1441px" v-show="showScreen1">

    <map name="screenmap1">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal">
      </router-link>
      <area shape="rect" coords="140,380,1164,1187" alt="FillInfo" @click="fillInfo">
    </map>

    <img id="screen2" src="https://code-for-canada.github.io/transition-centre/sprints/sprint6/img/member-account/450915765.png"
      alt="Screen" usemap="#screenmap2" width="1441px" v-show="showScreen2">

    <map name="screenmap2">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal">
      </router-link>
      <area shape="rect" coords="150,308,251,346" alt="SaveInfo" @click="saveInfo">
      <area shape="rect" coords="149,1249,251,1287" alt="SaveInfo" @click="saveInfo">
    </map>

    <img id="screen3" src="https://code-for-canada.github.io/transition-centre/sprints/sprint6/img/member-account/450915764.png"
      alt="Screen" usemap="#screenmap3" width="1441px" v-show="showScreen3">

    <map name="screenmap3">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal">
      </router-link>
      <area shape="rect" coords="148,307,393,347" alt="EditInfo" @click="editInfo">
      <area shape="rect" coords="146,1081,393,1124" alt="EditInfo" @click="editInfo">
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
        }
    },
    methods: {
      hideAll() {
        this.showScreen1 = false;
        this.showScreen2 = false;
        this.showScreen3 = false;
      },
      switchScreen(is_screen_element_visible) {
        this.hideAll();
        this[is_screen_element_visible] = true;
      },
      fillInfo() {
        this.switchScreen('showScreen2');
      },
      saveInfo() {
        this.switchScreen('showScreen3');
      },
      editInfo() {
        this.switchScreen('showScreen2');
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
