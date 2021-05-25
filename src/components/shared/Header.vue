<template>
  <div class="par iparys_inherited">
    <div class="global-header">
      <header>

        <div id="wb-bnr" class="container">
          <div class="row">
            <section id="wb-lng" class="col-xs-3 col-sm-12 pull-right text-right" aria-labelledby="lang-title">
              <h2 id="lang-title" class="wb-inv">Language selection</h2>
              <div class="row">
                <div class="col-md-12">
                  <ul class="list-inline mrgn-bttm-0">
                    <li>
                      <a lang="fr" href="https://translate.google.com/translate?sl=en&tl=fr&u=https://code-for-canada.github.io/transition-centre/sprints/sprint6/">
                        <span class="hidden-xs">Français</span>
                        <abbr title="Français" class="visible-xs h3 mrgn-tp-sm mrgn-bttm-0 text-uppercase">fr</abbr>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <div class="brand col-xs-9 col-sm-5 col-md-4" property="publisher" typeof="GovernmentOrganization">
              <a href="https://www.canada.ca/en.html" property="url">
                <img src="https://code-for-canada.github.io/transition-centre/img/wet-boew/sig-blk-en.svg" alt="Government of Canada" property="logo">
              </a>
            </div>
          </div>
        </div>

        <nav class="gcweb-menu" typeof="SiteNavigationElement" aria-labelledby="logout-title">
          <div class="container">
            <h2 id="logout-title" class="wb-inv">LOG OUT</h2>
            <div class="row">
              <div class="col-xs-12 pull-right text-right">
                <a class="btn btn-dark" href="../../">LOG OUT</a>
              </div>
            </div>
          </div>
        </nav>

        <Breadcrumb/>

      </header>
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/shared/Breadcrumb.vue"

export default {
  name: "Header",
  components: {
    Breadcrumb
  }
}
</script>

<style scoped>
  .btn.btn-dark {
    background-color: #333;
    border: 1px solid #26374a;
    color: #fff;
    margin-left: 0;
    padding: .5em 1em;
    text-transform: uppercase;
    border-radius: 0;
    font-size: 20px;
  }

  .btn.btn-dark:hover {
    background-color: #444;
  }

  .gcweb-menu .container {
    padding-right: 15px;
    padding-left: 15px;
  }
</style>
