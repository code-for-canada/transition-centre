<template>
  <div id="view-container">
    <img id="screen1" src="https://code-for-canada.github.io/transition-centre/sprints/sprint6/img/message-centre/450806584.png"
      alt="Screen" usemap="#screenmap1" width="1441px" v-show="showScreen1">

    <map name="screenmap1">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal">
      </router-link>
      <area shape="rect" coords="149,365,506,429" alt="GoSendMessage" @click="goSendMessage">
      <area shape="rect" coords="1098,383,1295,429" alt="GoSentMessages" @click="goSentMessages">
      <area shape="rect" coords="138,594,599,630" alt="GoMessage" @click="goMessage">
      <router-link to="/staff">
        <area shape="rect" coords="900,600,1070,627" alt="GoStaff">
      </router-link>
      <area shape="rect" coords="1193,597,1265,627" alt="DeleteMessage" @click="deleteMessage">
    </map>

    <img id="screen2" src="https://code-for-canada.github.io/transition-centre/sprints/sprint6/img/message-centre/450806586.png"
      alt="Screen" usemap="#screenmap2" width="1441px" v-show="showScreen2">

    <map name="screenmap2">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal">
      </router-link>
      <area shape="rect" coords="398,172,512,190" alt="GoMessages" @click="goMessages">
      <area shape="rect" coords="138,305,1164,848" alt="EnterMessage" @click="enterMessage">
    </map>

    <img id="screen3" src="https://code-for-canada.github.io/transition-centre/sprints/sprint6/img/message-centre/450806587.png"
      alt="Screen" usemap="#screenmap3" width="1441px" v-show="showScreen3">

    <map name="screenmap3">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal">
      </router-link>
      <area shape="rect" coords="398,172,512,190" alt="GoMessages" @click="goMessages">
      <area shape="rect" coords="144,888,254,938" alt="SendMessage" @click="sendMessage">
    </map>
  
    <img id="screen4" src="https://code-for-canada.github.io/transition-centre/sprints/sprint6/img/message-centre/450806588.png"
      alt="Screen" usemap="#screenmap4" width="1441px" v-show="showScreen4">

    <map name="screenmap4">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal">
      </router-link>
      <area shape="rect" coords="146,365,507,428" alt="SendMessage" @click="goSendMessage">
      <router-link to="/staff">
        <area shape="rect" coords="900,600,1070,627" alt="GoStaff">
      </router-link>
      <area shape="rect" coords="147,860,368,912" alt="GoMessages" @click="goMessages">
    </map>
  
    <img id="screen5" src="https://code-for-canada.github.io/transition-centre/sprints/sprint6/img/message-centre/450806585.png"
      alt="Screen" usemap="#screenmap5" width="1441px" v-show="showScreen5">

    <map name="screenmap5">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal">
      </router-link>
      <area shape="rect" coords="150,758,251,800" alt="SendMessage" @click="goSendMessage">
      <area shape="rect" coords="265,760,369,801" alt="DeleteMessage" @click="deleteMessage">
      <area shape="rect" coords="149,855,368,898" alt="GoMessages" @click="goMessages">
    </map>
  
    <img id="screen6" src="https://code-for-canada.github.io/transition-centre/sprints/sprint6/img/message-centre/450809985.png"
      alt="Screen" usemap="#screenmap6" width="1441px" v-show="showScreen6">

    <map name="screenmap6">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal">
      </router-link>
      <area shape="rect" coords="363,823,557,865" alt="GoMessages" @click="goMessages">
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
        }
    },
    mounted: function () {
      // Check if direct send message.
      if(this.$route.query.screenNum === "2") {
        this.goSendMessage();
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
      goSendMessage() {
        this.switchScreen('showScreen2');
      },
      enterMessage() {
        this.switchScreen('showScreen3');
      },
      sendMessage() {
        this.switchScreen('showScreen1');
      },
      goMessages() {
        this.switchScreen('showScreen1');
      },
      goSentMessages() {
        this.switchScreen('showScreen4');
      },
      goMessage() {
        this.switchScreen('showScreen5');
      },
      deleteMessage() {
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
