<template>
  <div id="view-container">
    <img id="screen1" src="https://code-for-canada.github.io/transition-centre/sprints/sprint5/img/documents-centre/450711931.png"
      alt="Screen" usemap="#screenmap1" width="1441px" v-show="showScreen1">

    <map name="screenmap1">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal">
      </router-link>
      <area shape="rect" coords="146,585,518,645" alt="AddDocument" @click="addDocument">
      <router-link to="/plan3">
        <area shape="rect" coords="437,763,611,821" alt="GoConnected">
      </router-link>
      <area shape="rect" coords="1193,765,1262,794" alt="DeleteDocument" @click="deleteDocument">
    </map>

    <img id="screen2" src="https://code-for-canada.github.io/transition-centre/sprints/sprint5/img/documents-centre/450711932.png"
      alt="Screen" usemap="#screenmap2" width="1441px" v-show="showScreen2">

    <map name="screenmap2">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal">
      </router-link>
      <area shape="rect" coords="141,339,1148,547" alt="UploadDocument" @click="uploadDocument">
    </map>

    <img id="screen3" src="https://code-for-canada.github.io/transition-centre/sprints/sprint5/img/documents-centre/450711933.png"
      alt="Screen" usemap="#screenmap3" width="1441px" v-show="showScreen3">

    <map name="screenmap3">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal">
      </router-link>
      <area shape="rect" coords="141,603,446,652" alt="SelectConnected" @click="selectConnected">
    </map>
  
    <img id="screen4" src="https://code-for-canada.github.io/transition-centre/sprints/sprint5/img/documents-centre/450711934.png"
      alt="Screen" usemap="#screenmap4" width="1441px" v-show="showScreen4">

    <map name="screenmap4">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal">
      </router-link>
      <area shape="rect" coords="144,605,1154,831" alt="TypeConnected" @click="typeConnected">
    </map>
  
    <img id="screen5" src="https://code-for-canada.github.io/transition-centre/sprints/sprint5/img/documents-centre/450711935.png"
      alt="Screen" usemap="#screenmap5" width="1441px" v-show="showScreen5">

    <map name="screenmap5">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal">
      </router-link>
      <area shape="rect" coords="141,661,1149,731" alt="ClickConnected" @click="clickConnected">
    </map>
  
    <img id="screen6" src="https://code-for-canada.github.io/transition-centre/sprints/sprint5/img/documents-centre/450711936.png"
      alt="Screen" usemap="#screenmap6" width="1441px" v-show="showScreen6">

    <map name="screenmap6">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal">
      </router-link>
      <area shape="rect" coords="144,683,253,726" alt="ClickSave" @click="clickSave">
    </map>

    <img id="screen7" src="https://code-for-canada.github.io/transition-centre/sprints/sprint5/img/documents-centre/450711937.png"
      alt="Screen" usemap="#screenmap7" width="1441px" v-show="showScreen7">

    <map name="screenmap7">
      <area shape="rect" coords="362,821,560,866" alt="ConfirmDelete" @click="confirmDelete">
    </map>

    <img id="screen8" src="https://code-for-canada.github.io/transition-centre/sprints/sprint5/img/documents-centre/450711938.png"
      alt="Screen" usemap="#screenmap8" width="1441px" v-show="showScreen8">

    <map name="screenmap8">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal">
      </router-link>
      <area shape="rect" coords="146,585,518,645" alt="AddDocument" @click="addDocument">
      <router-link to="/plan3">
        <area shape="rect" coords="437,763,611,821" alt="GoConnected">
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
        this.showScreen7 = false;
        this.showScreen8 = false;
      },
      switchScreen(is_screen_element_visible) {
        this.hideAll();
        this[is_screen_element_visible] = true;
      },
      addDocument() {
        this.switchScreen('showScreen2');
      },
      uploadDocument() {
        this.switchScreen('showScreen3');
      },
      selectConnected() {
        this.switchScreen('showScreen4');
      },
      typeConnected() {
        this.switchScreen('showScreen5');
      },
      clickConnected() {
        this.switchScreen('showScreen6');
      },
      clickSave() {
        this.switchScreen('showScreen1');
      },
      deleteDocument() {
        this.switchScreen('showScreen7');
      },
      confirmDelete() {
        this.switchScreen('showScreen8');
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
