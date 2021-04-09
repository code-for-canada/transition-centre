<template>
  <div id="view-container">
    <img id="screen1" src="https://code-for-canada.github.io/transition-centre/sprints/sprint3/img/members-portal/448515108.png"
      alt="Screen" usemap="#screenmap1" width="1441px">

    <map name="screenmap1">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../">
      <router-link to="/plan">
        <area shape="rect" coords="146,710,421,770" alt="ChecklistPlan">
      </router-link>
    </map>
  </div>
</template>

<style scoped>
  #view-container {
    text-align: center;
  }

  area {
    cursor: pointer;
  }
</style>
