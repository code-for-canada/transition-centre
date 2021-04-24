<template>
  <div id="view-container">
    <Header/>
    <main property="mainContentOfPage" resource="#wb-main" typeof="WebPageElement" class="container">
      <h1 property="name" id="wb-cont" dir="ltr">My Digital Transition Portal</h1>
      <div class="row">
        <div class="col-md-6">
          <p>
            Welcome to My Digital Transition Portal! This is your central location to plan and complete your transition from the military to post-service life.  Not sure where to start?  Your <a href="#">Transition Advisor</a> is available to help! 
          </p>
        </div>
        <div class="col-md-6">
          <img class="img-responsive" src="../assets/narratives/portal_image.png" alt="">
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <section>
            <div class="title-with-label-container">
              <h2 class="title-with-label">My Transition Plan</h2>
              <span class="title-label-container">
                <span class="label label-default"><small>44% Complete</small></span>
              </span>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <p>
                  Plan your activities and set goals for a smooth transition with help from your Transition Advisor.
                </p>
                <router-link to="/plan">
                  <button type="button" class="btn btn-call-to-action">See My Transition Plan</button>
                </router-link>
              </div>
            </div>
          </section>
          <section>
            <h2>Transition Tools</h2>
            <div class="row">
              <section class="col-md-6">
                <h3 class="h5">
                  <a href="#">Manage your release</a>
                </h3>
                <p>Submit or update your release memo.</p>
              </section>
              <section class="col-md-6">
                <h3 class="h5">
                  <a href="https://dtc.ongarde.net/en/career">Find your renewed purpose</a>
                </h3>
                <p>Explore your skills and education options with the MNET and MySet tools.</p>
              </section>
              <section class="col-md-6">
                <h3 class="h5">
                  <a href="#">Learn about transition</a>
                </h3>
                <p>Access transition related learnings, including My Transition 101 and Second Career Assistance Network seminars.</p>
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
                <button type="button" class="btn btn-default">Book Consultation</button>
              </div>
              <div class="col-xs-12 text-center blue-section-nav-padding">
                <a href="#">View upcoming appointments</a>
              </div>
            </div>
          </section>
          <section class="blue-section-background">
            <h2 class="mrgn-tp-0">Transition Support</h2>
            <div class="row">
              <div class="col-xs-12">
                <ul>
                  <li>
                    <a href="#">
                      Manage documents
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      My transition notes
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Transition Calendar
                    </a>
                  </li>
                  <li>
                    <a href="https://www.canada.ca/en/department-national-defence/services/benefits-military/transition/understanding-transition/transition-centres.html">
                      Contact Transition Centre
                    </a>
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
                <img class="img-responsive" src="../assets/narratives/dtc_image.png" alt="">
                <h3 class="h5">
                  <a href="https://dtc.ongarde.net">Digital Transition Centre</a>
                </h3>
                <p>The DTC is a central resource for all transition related information to complement your portal.</p>
              </section>
              <section class="col-md-4">
                <img class="img-responsive" src="../assets/narratives/vac_image.png" alt="">
                <h3 class="h5">
                  <a href="https://www.veterans.gc.ca/eng/e_services?utm_campaign=MVA">MyVAC</a>
                </h3>
                <p>MyVAC is a central resource for all benefits and veteran related information.</p>
              </section>
              <section class="col-md-4">
                <img class="img-responsive" src="../assets/narratives/mfs_image.png" alt="">
                <h3 class="h5">
                  <a href="https://www.cafconnection.ca/National/Programs-Services/For-Transitioning-Veterans-and-their-Families.aspx">Military Family Services</a>
                </h3>
                <p>Learn how we can help your family through transition to post-service life.</p>
              </section>
            </div>
          </section>
        </div>
      </div>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/shared/Header.vue"
import Footer from "@/components/shared/Footer.vue"

export default {
  name: "members-portal",
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
  .title-with-label-container {
    display:table;
  }

  .title-with-label {
    display: inline-block;
    padding-right: 24px;
  }

  .title-label-container {
    display:table-cell;
    vertical-align:top;
    padding-top:38px;
  }

  .blue-section-background {
    padding: 16px;
    margin-top: 25px;
    background-color: #F7F9FD;
  }

  .blue-section-nav-padding {
    padding-top: 10px;
    padding-bottom: 10px;
  }
</style>
