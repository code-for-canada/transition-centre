<template>
  <div>
    <img id="screen1" src="https://code-for-canada.github.io/transition-centre/sprints/sprint1/screens/446151591.png"
      alt="Screen" usemap="#screenmap1" width="1441px" v-show="showScreen1">

    <map name="screenmap1">
      <area shape="rect" coords="150,705,899,747" alt="Screen2" onfocus="focus();" @click="firstExpandClicked">
      <area shape="rect" coords="150,856,899,899" alt="Screen3" @click="secondExpandClicked">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
    </map>

    <img id="screen2" src="https://code-for-canada.github.io/transition-centre/sprints/sprint1/screens/446151592.png"
      alt="Screen" usemap="#screenmap2" width="1441px" v-show="showScreen2">

    <map name="screenmap2">
      <area shape="rect" coords="150,705,899,747" alt="Screen2" @click="firstExpandClicked">
      <area shape="rect" coords="150,1031,899,1074" alt="Screen3" @click="secondExpandClicked">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
    </map>

    <img id="screen3" src="https://code-for-canada.github.io/transition-centre/sprints/sprint1/screens/446151593.png"
      alt="Screen" usemap="#screenmap3" width="1441px" v-show="showScreen3">

    <map name="screenmap3">
      <area shape="rect" coords="150,705,899,747" alt="Screen2" @click="firstExpandClicked">
      <area shape="rect" coords="150,856,899,899" alt="Screen3" @click="secondExpandClicked">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
    </map>
  </div>
</template>

<script>
  export default {
    name: "members-portal",
    data() {
       return {
          showScreen1: true,
          showScreen2: false,
          showScreen3: false
        }
    },
    methods: {
      hideAll() {
        this.showScreen1 = false;
        this.showScreen2 = false;
        this.showScreen3 = false;
      },
      expand(is_screen_element_visible) {
        const is_visible = this[is_screen_element_visible];
        this.hideAll();
        if (is_visible) {
          this.showScreen1 = true;
        } else {
          this[is_screen_element_visible] = true;
        }
      },
      firstExpandClicked() {
        this.expand('showScreen2');
      },
      secondExpandClicked() {
        this.expand('showScreen3');
      }
    }
  }
</script>

<style scoped>
  body {
    margin: 0;
    text-align: center;
  }

  area {
    cursor: pointer;
  }
</style>
