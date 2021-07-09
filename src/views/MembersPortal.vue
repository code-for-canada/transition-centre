<template>
  <div id="view-container">
    <Header />
    <main
      property="mainContentOfPage"
      resource="#wb-main"
      typeof="WebPageElement"
      class="container"
    >
      <h1 property="name" id="wb-cont" dir="ltr">
        My Digital Transition Portal
      </h1>
      <div class="row">
        <div class="col-md-6">
          <p>
            Welcome to My Digital Transition Portal! This is your central
            location to plan and complete your transition from the military to
            post-service life. Not sure where to start? Book a consultation with
            your <router-link to="/staff">Transition Advisor</router-link>.
          </p>
        </div>
        <div class="col-md-6">
          <img
            class="img-responsive"
            src="https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/narratives/portal_image.png"
            alt=""
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <section>
            <div class="title-with-label-container">
              <h2 class="title-with-label">My Transition Plan</h2>
              <span
                class="title-label-container"
                v-if="this.percentageCompletion >= 0"
              >
                <span class="label label-default"
                  ><small
                    >{{ this.percentageCompletion }}% Complete</small
                  ></span
                >
              </span>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <p>
                  Plan your activities and set goals for a smooth transition
                  with help from your Transition Advisor.
                </p>
                <router-link to="/plan">
                  <button type="button" class="btn btn-call-to-action">
                    See My Transition Plan
                  </button>
                </router-link>
              </div>
            </div>
          </section>
          <section>
            <h2>Transition Tools</h2>
            <div class="row">
              <section class="col-md-6">
                <h3 class="h5">
                  <a
                    href="https://code-for-canada.github.io/transition-centre/mocks/flows/phase1/mcs-portal-main-mock.html"
                    >Apply to Transition</a
                  >
                </h3>
                <p>Submit or view the status of your transition application.</p>
              </section>
              <section class="col-md-6">
                <h3 class="h5">
                  <a href="https://dtc.ongarde.net/en/career"
                    >Find your renewed purpose</a
                  >
                </h3>
                <p>
                  Explore your skills and education options with the MNET and
                  MySet tools.
                </p>
              </section>
              <section class="col-md-6">
                <h3 class="h5">
                  <a
                    href="https://www.canada.ca/en/department-national-defence/services/benefits-military/education-training/professional-development/defence-learning-network.html"
                    >Learn about transition</a
                  >
                </h3>
                <p>
                  Access transition related learnings, including My Transition
                  101 and Second Career Assistance Network seminars.
                </p>
              </section>
            </div>
          </section>
        </div>
        <div class="col-md-4">
          <section class="blue-section-background">
            <h2 class="mrgn-tp-0">Book a consultation</h2>
            <div class="row">
              <div class="col-xs-12">
                <p>
                  Book a consultation for transition feedback, advice and help.
                </p>
              </div>
              <div class="col-xs-12 text-center blue-section-nav-padding">
                <router-link to="/schedule">
                  <button type="button" class="btn btn-default">
                    Book Consultation
                  </button>
                </router-link>
              </div>
              <div class="col-xs-12 text-center blue-section-nav-padding">
                <router-link to="/history">
                  <a href="#">View upcoming appointments</a>
                </router-link>
              </div>
            </div>
          </section>
          <section class="blue-section-background">
            <h2 class="mrgn-tp-0">My transition information centre</h2>
            <div class="row">
              <div class="col-xs-12">
                <ul>
                  <li>
                    <router-link to="/documents">
                      Transition documents
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/notes"> Transition notes </router-link>
                  </li>
                  <li>
                    <router-link to="/messages"> Secure Messaging </router-link>
                  </li>
                  <li>
                    <router-link to="/calendar"> Calendar </router-link>
                  </li>
                  <li>
                    <router-link to="/account"> Preferences </router-link>
                  </li>
                  <li>
                    <router-link to="/contact"> Contact Us </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <div class="col-md-12">
          <section>
            <h2>Featured Resources</h2>
            <div class="row">
              <section class="col-md-4">
                <img
                  class="img-responsive"
                  src="https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/narratives/dtc_image.png"
                  alt=""
                />
                <h3 class="h5">
                  <a
                    href="https://code-for-canada.github.io/transition-centre/mocks/flows/phase2/dtc-main-mock.html"
                    >Digital Transition Centre</a
                  >
                </h3>
                <p>
                  The DTC is a central resource for all transition related
                  information to complement your portal.
                </p>
              </section>
              <section class="col-md-4">
                <img
                  class="img-responsive"
                  src="https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/narratives/vac_image.png"
                  alt=""
                />
                <h3 class="h5">
                  <a
                    href="https://www.veterans.gc.ca/eng/e_services?utm_campaign=MVA"
                    >MyVAC</a
                  >
                </h3>
                <p>
                  MyVAC is a central resource for all benefits and veteran
                  related information.
                </p>
              </section>
              <section class="col-md-4">
                <img
                  class="img-responsive"
                  src="https://code-for-canada.github.io/transition-centre/sprints/sprint4/img/narratives/mfs_image.png"
                  alt=""
                />
                <h3 class="h5">
                  <a
                    href="https://www.cafconnection.ca/National/Programs-Services/For-Transitioning-Veterans-and-their-Families.aspx"
                    >Military Family Services</a
                  >
                </h3>
                <p>
                  Learn how we can help your family through transition to
                  post-service life.
                </p>
              </section>
            </div>
          </section>
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
  name: "members-portal",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      percentageCompletion: 0,
    };
  },
  mounted: function () {
    this.axios
      .get("/api/member/plan/completion")
      .then((response) => {
        this.percentageCompletion = response.data.percentageCompleted;
      })
      .catch((error) => {
        console.log(error);
        this.percentageCompletion = "";
      });
  },
};
</script>

<style scoped>
.title-with-label-container {
  display: table;
}

.title-with-label {
  display: inline-block;
  padding-right: 24px;
}

.title-label-container {
  display: table-cell;
  vertical-align: top;
  padding-top: 38px;
}

.blue-section-background {
  padding: 16px;
  margin-top: 25px;
  background-color: #f7f9fd;
}

.blue-section-nav-padding {
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
