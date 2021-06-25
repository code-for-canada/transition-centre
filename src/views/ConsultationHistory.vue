<template>
  <div id="view-container">
    <img
      id="screen1"
      src="https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/book-consultation/449998976.png"
      alt="Screen"
      usemap="#screenmap1"
      width="1441px"
    />

    <map name="screenmap1">
      <area shape="rect" coords="1165,115,1292,165" alt="Main" href="../../" />
      <router-link to="/">
        <area shape="rect" coords="151,172,356,189" alt="MainPortal" />
      </router-link>
      <router-link to="/calendar">
        <area shape="rect" coords="147,301,285,342" alt="CalendarView" />
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
