<template>
  <div id="view-container">
    <Header/>
    <main property="mainContentOfPage" resource="#wb-main" typeof="WebPageElement" class="container">
      <h1 property="name" id="wb-cont" dir="ltr">Book an Appointment with a Transition Advisor</h1>
      <section>
        <h2>WHAT IS A TRANSITION ADVISOR?</h2>
        <div class="row">
          <div class="col-md-7">
            <p>
              Our Transition Advisors will help you connect to
              the right resources, services, and supports you
              need, every step of the way into civilian life. Based
              on your personal circumstances, an advisor will
              help you make informed decisions, guide, and
              advocate on your behalf throughout your
              transition.
            </p>
          </div>
          <div class="col-md-5">
            <img class="img-responsive" src="https://code-for-canada.github.io/transition-centre/sprints/sprint8/img/narratives/what_is_ta_image.png" alt="">
          </div>
        </div>
      </section>
      <section>
        <h2>WHAT HAPPENS NEXT?</h2>
        <div class="row">
          <section class="col-xs-12">
            <h2>Step 1: Get a personal consultation with a Transition Advisor</h2>
            <p>
              A Transition Advisor will meet with you in person or virtually and give you a personalized assessment
              to explore retention options. They will thoroughly explain the process, implications, and benefits
              should you decide to continue with transition.
            </p>
          </section>
          <section class="col-xs-12">
            <h2>Step 2: Receive your personalized transition plan</h2>
            <p>
              Your advisor will create and help you refine a Transition Plan, then ensure you are well connected
              with other service providers and consultants who will help you achieve a successful transition. They
              will add notes/comments to your plan and respond to requests for assistance when you need it.
            </p>
          </section>
          <section class="col-xs-12">
            <h2>Step 3: Get the right guidance at every step of transition</h2>
            <p>
              Your advisor will review your progress while executing your Transition Plan and intervene if necessary
              to ensure that your benefits and/or services will be in place well before your release or component
              transfer date.
            </p>
          </section>
          <section class="col-xs-12">
            <h3>Benefits To Having a Transition Advisor</h3>
            <ul>
              <li>
                Explore career options if you wish to remain part of CAF.
              </li>
              <li>
                Have someone to intervene on your behalf when dealing with your CoC and/or with service
                providers such as VAC, SISIP, etc.
              </li>
              <li>
                They are professional, knowledgeable, and understand the value of a team approach to supporting
                members and family through their personalized transition.
              </li>
            </ul>
            <p>
              Learn more about Transition Centres and Transition Advisors
              <a href="https://www.canada.ca/content/dam/dnd-mdn/documents/reports/transition-materials/guides/my-transition-guide.pdf#page=30">
                here
              </a>.
            </p>
          </section>
        </div>
      </section>
      <div class="row">
        <div class="col-xs-12 text-center">
          <router-link to="/schedule">
            <button type="button" class="btn btn-call-to-action">Book Consultation</button>
          </router-link>
        </div>
        <div class="col-xs-12 text-center">
          <router-link to="/plan">
            Go to plan
          </router-link>
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
    name: "notify-book-ta",
    components: {
      Header,
      Footer
    }
  }
</script>
