<template>
  <div id="view-container">
    <img
      id="screen1"
      src="https://code-for-canada.github.io/transition-centre/sprints/sprint6/img/contact-us/450725610.png"
      alt="Screen"
      usemap="#screenmap1"
      width="1441px"
    />

    <map name="screenmap1">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../" />
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal" />
      </router-link>
      <router-link to="/staff">
        <area shape="rect" coords="164,738,330,772" alt="GoStaff" />
      </router-link>
      <router-link to="/messages?screenNum=2">
        <area shape="rect" coords="142,984,500,1052" alt="SendMessage" />
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
