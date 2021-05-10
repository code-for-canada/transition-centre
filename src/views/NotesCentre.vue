<template>
  <div id="view-container">
    <img id="screen1" src="https://code-for-canada.github.io/transition-centre/sprints/sprint5/img/notes-centre/450711978.png"
      alt="Screen" usemap="#screenmap1" width="1441px" v-show="showScreen1">

    <map name="screenmap1">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal">
      </router-link>
      <area shape="rect" coords="146,585,359,647" alt="AddNote" @click="addNote">
      <router-link to="/plan3">
        <area shape="rect" coords="515,761,702,865" alt="GoConnected">
      </router-link>
      <router-link to="/staff">
        <area shape="rect" coords="737,764,903,791" alt="GoStaff">
      </router-link>
      <router-link to="/plan3">
        <area shape="rect" coords="1194,764,1239,791" alt="EditNote">
      </router-link>
    </map>

    <img id="screen2" src="https://code-for-canada.github.io/transition-centre/sprints/sprint5/img/notes-centre/450711979.png"
      alt="Screen" usemap="#screenmap2" width="1441px" v-show="showScreen2">

    <map name="screenmap2">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal">
      </router-link>
      <area shape="rect" coords="141,348,1148,447" alt="EnterNote" @click="enterNote">
    </map>

    <img id="screen3" src="https://code-for-canada.github.io/transition-centre/sprints/sprint5/img/notes-centre/450711980.png"
      alt="Screen" usemap="#screenmap3" width="1441px" v-show="showScreen3">

    <map name="screenmap3">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal">
      </router-link>
      <area shape="rect" coords="146,500,444,550" alt="SelectConnected" @click="selectConnected">
    </map>
  
    <img id="screen4" src="https://code-for-canada.github.io/transition-centre/sprints/sprint5/img/notes-centre/450711981.png"
      alt="Screen" usemap="#screenmap4" width="1441px" v-show="showScreen4">

    <map name="screenmap4">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal">
      </router-link>
      <area shape="rect" coords="144,501,1145,725" alt="TypeConnected" @click="typeConnected">
    </map>
  
    <img id="screen5" src="https://code-for-canada.github.io/transition-centre/sprints/sprint5/img/notes-centre/450711982.png"
      alt="Screen" usemap="#screenmap5" width="1441px" v-show="showScreen5">

    <map name="screenmap5">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal">
      </router-link>
      <area shape="rect" coords="144,540,1150,628" alt="ClickConnected" @click="clickConnected">
    </map>
  
    <img id="screen6" src="https://code-for-canada.github.io/transition-centre/sprints/sprint5/img/notes-centre/450711983.png"
      alt="Screen" usemap="#screenmap6" width="1441px" v-show="showScreen6">

    <map name="screenmap6">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal">
      </router-link>
      <area shape="rect" coords="144,576,258,626" alt="ClickSave" @click="clickSave">
    </map>

    <img id="screen7" src="https://code-for-canada.github.io/transition-centre/sprints/sprint5/img/notes-centre/450711984.png"
      alt="Screen" usemap="#screenmap7" width="1441px" v-show="showScreen7">

    <map name="screenmap7">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal">
      </router-link>
      <area shape="rect" coords="146,585,518,645" alt="AddNote" @click="addNote">
      <router-link to="/plan3">
        <area shape="rect" coords="502,762,700,892" alt="GoConnected">
      </router-link>
      <router-link to="/staff">
        <area shape="rect" coords="730,912,908,946" alt="GoStaff">
      </router-link>
      <router-link to="/plan3">
        <area shape="rect" coords="1194,764,1239,791" alt="EditNote">
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
      },
      switchScreen(is_screen_element_visible) {
        this.hideAll();
        this[is_screen_element_visible] = true;
      },
      addNote() {
        this.switchScreen('showScreen2');
      },
      enterNote() {
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
        this.switchScreen('showScreen7');
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
