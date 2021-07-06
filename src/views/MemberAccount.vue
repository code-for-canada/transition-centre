<template>
  <div id="member-account-container">
    <Header />
    <main
      property="mainContentOfPage"
      resource="#wb-main"
      typeof="WebPageElement"
      class="container"
    >
      <h1 property="name" id="wb-cont" dir="ltr">Preferences</h1>
      <div class="row mrgn-tp-lg mrgn-bttm-lg">
        <div class="col-xs-12">
          <router-link to="/accountedit" class="btn btn-default"
            >Edit preferences</router-link
          >
        </div>
      </div>
      <section>
        <h2>Communications</h2>
        <div class="row mrgn-bttm-lg">
          <div class="col-xs-12">
            <label for="phone-number" class="mrgn-bttm-0">Phone number:</label>
            <div id="phone-number">{{ account.phone }}</div>
          </div>
        </div>
        <div class="row mrgn-bttm-lg">
          <div class="col-xs-12">
            <label for="email-address" class="mrgn-bttm-0"
              >Email address:</label
            >
            <div id="email-address">{{ account.email }}</div>
          </div>
        </div>
        <div class="row mrgn-bttm-lg">
          <div class="col-xs-12">
            <label for="address" class="mrgn-bttm-0">Postal address:</label>
            <div id="address">{{ account.fullAddress }}</div>
          </div>
        </div>
        <div class="row mrgn-bttm-lg">
          <div class="col-xs-12">
            <label for="preferred-language" class="mrgn-bttm-0"
              >Preferred language:</label
            >
            <div id="preferred-language">
              <div>
                Written:
                <span id="preferred-language-written">
                  {{ account.preferredLanguageWritten }}
                </span>
              </div>
              <div>
                Spoken:
                <span id="preferred-language-spoken">
                  {{ account.preferredLanguageSpoken }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="row mrgn-bttm-lg">
          <div class="col-xs-12">
            <label for="communications-preferences" class="mrgn-bttm-0">
              Automated messages:
            </label>
            <div id="communications-preferences">
              <div>
                Email notifications (recommended):
                <span>
                  {{ account.emailNotifications }}
                </span>
              </div>
              <div>
                <i>
                  Note: Email notifications must be turned on to receive a
                  notification that there has been activity on your account.
                </i>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="row">
        <div class="col-xs-12">
          <router-link to="/accountedit" class="btn btn-default"
            >Edit preferences</router-link
          >
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/shared/Header.vue";
import Footer from "@/components/shared/Footer.vue";

export default {
  name: "member-account",
  components: {
    Header,
    Footer,
  },
  computed: {
    account() {
      return {
        ...this.$store.state.account,
      };
    },
  },
};
</script>
