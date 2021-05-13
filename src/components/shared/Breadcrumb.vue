<template>
  <nav id="wb-bc" property="breadcrumb" aria-labelledby="breadcrumb-title">
    <h2 id="breadcrumb-title" class="wb-inv">You are here:</h2>
    <div class="container">
    <ol class="breadcrumb">
      <li v-for="(breadcrumbItem, itemIndex) in $route.meta.breadcrumb" :key="itemIndex">
        <router-link :to="breadcrumbItem.link">
            {{breadcrumbItem.name}}
        </router-link>
      </li>
    </ol>
    </div>
  </nav>
</template>
