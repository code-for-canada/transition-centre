<template>
  <div id="view-container">
    <img
      id="screen1"
      src="https://code-for-canada.github.io/transition-centre/sprints/sprint5/img/staff-profile/450897813.png"
      alt="Screen"
      usemap="#screenmap1"
      width="1441px"
    />

    <map name="screenmap1">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../" />
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal" />
      </router-link>
      <router-link to="/schedule">
        <area shape="rect" coords="960,366,1156,394" alt="BookConsultation" />
      </router-link>
      <router-link to="/messages">
        <area shape="rect" coords="960,403,1187,426" alt="SendMessage" />
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
