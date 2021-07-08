<template>
  <div id="view-container">
    <Header />
    <main
      property="mainContentOfPage"
      resource="#wb-main"
      typeof="WebPageElement"
      class="container"
    >
      <h1 property="name" id="wb-cont" dir="ltr" ref="page-title">
        My Transition Plan: Add a new task or SMART goal
      </h1>
      <div class="row mrgn-bttm-lg mrgn-tp-lg">
        <div class="col-xs-12">
          <section class="alert alert-danger" v-if="error.show">
            <h3>{{ error.title }}</h3>
            <p>{{ error.body }}</p>
          </section>
          <p>
            Stay on track with your transition by adding tasks and goals to your
            transition plan.
          </p>
        </div>
      </div>
      <div class="row mrgn-bttm-lg">
        <div class="col-xs-12">
          <label for="plan-item-title"> Task/goal title: </label>
          <input
            id="plan-item-title"
            type="text"
            class="form-control input-fields"
            v-model="planItem.name"
          />
        </div>
      </div>
      <section class="alert alert-info">
        <h3>Set personalized goals for a successful transition</h3>
        <p>
          Setting goals is instrumental to helping you achieve a successful
          transition. You can add personalized goals to your checklist, follow
          the SMART goal framework outlined below to help ensure reach your
          goals. Need help with your goals? Your
          <router-link to="/staff">Transition Advisor</router-link> is available
          to help you.
        </p>
      </section>
      <div class="row mrgn-bttm-lg">
        <div class="col-xs-12">
          <fieldset class="provisional gc-chckbxrdio">
            <ul class="list-unstyled lst-spcd-2">
              <li class="checkbox">
                <input
                  type="checkbox"
                  id="smart-goal-checkbox"
                  v-model="planItem.smartGoal"
                />
                <label for="smart-goal-checkbox"> Create SMART Goal </label>
              </li>
            </ul>
          </fieldset>
        </div>
      </div>
      <div v-if="planItem.smartGoal">
        <div class="row mrgn-bttm-lg">
          <div class="col-xs-12">
            <span><b>Specific:</b></span>
            <span>
              &nbsp;What do you want to achieve? What actions will you take to
              get there?
            </span>
            <textarea
              class="form-control input-fields"
              v-model="planItem.specification"
            ></textarea>
          </div>
        </div>
        <div class="row mrgn-bttm-lg">
          <div class="col-xs-12">
            <span><b>Measureable:</b></span>
            <span>
              &nbsp;How will you track your goal? How will you know you have
              succeeded?
            </span>
            <textarea
              class="form-control input-fields"
              v-model="planItem.measurement"
            ></textarea>
          </div>
        </div>
        <div class="row mrgn-bttm-lg">
          <div class="col-xs-12">
            <span><b>Attainable:</b></span>
            <span>
              &nbsp;Are you confident that you will be able accomplish this
              goal?
            </span>
            <div class="provisional gc-chckbxrdio">
              <ul class="list-unstyled lst-spcd-2">
                <li class="radio">
                  <input
                    type="radio"
                    id="attainability-yes"
                    name="attainability"
                    value="yes"
                    v-model="planItem.attainable"
                  />
                  <label for="attainability-yes"> Yes </label>
                </li>
                <li class="radio">
                  <input
                    type="radio"
                    id="attainability-no"
                    name="attainability"
                    value="no"
                    v-model="planItem.attainable"
                  />
                  <label for="attainability-no">
                    No - If you select “no,” how can you make it attainable?
                    (Note: if you select “no,” your Transition Advisor will be
                    notified, to provide you with additional support setting
                    this goal)
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row mrgn-bttm-lg">
          <div class="col-xs-12">
            <span><b>Relevant:</b></span>
            <span>
              &nbsp;Is the goal worthwhile? Will it accomplish what you need to
              accomplish?
            </span>
            <div class="provisional gc-chckbxrdio">
              <ul class="list-unstyled lst-spcd-2">
                <li class="radio">
                  <input
                    type="radio"
                    id="relevance-yes"
                    name="relevance"
                    value="yes"
                    v-model="planItem.relevant"
                  />
                  <label for="relevance-yes"> Yes </label>
                </li>
                <li class="radio">
                  <input
                    type="radio"
                    id="relevance-no"
                    name="relevance"
                    value="no"
                    v-model="planItem.relevant"
                  />
                  <label for="relevance-no">
                    No - If you select “no,” how can you make it relevant to
                    what you need to accomplish? (Note: if you select “no,” your
                    Transition Advisor will be notified, to provide you with
                    additional support setting this goal)
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row mrgn-bttm-lg">
        <div class="col-xs-12">
          <span><b>Complete by/Time Bound:</b></span>
          <span
            >&nbsp;When will it be accomplished? Give yourself a deadline.</span
          >
          <div>
            <input type="date" id="due-date" v-model="planItem.dueDate" />
          </div>
        </div>
      </div>
      <div class="row mrgn-bttm-lg">
        <div class="col-xs-12">
          <span><b>My notes:</b></span>
          <span
            >&nbsp;<i
              >(Note: these notes will be visible to your transition advisor)</i
            ></span
          >
          <textarea
            class="form-control input-fields"
            v-model="planItem.memberNotes"
          ></textarea>
        </div>
      </div>
      <div class="row mrgn-bttm-lg">
        <div class="col-xs-12 provisional gc-chckbxrdio">
          <legend style="margin-bottom: 0px; font-size: 20px">Priority:</legend>
          <ul class="list-unstyled lst-spcd-2">
            <li class="radio">
              <input
                type="radio"
                id="low-priority"
                name="priority"
                value="0"
                v-model="planItem.priority"
              />
              <label for="low-priority">Low</label>
            </li>
            <li class="radio">
              <input
                type="radio"
                id="medium-priority"
                name="priority"
                value="1"
                v-model="planItem.priority"
              />
              <label for="medium-priority">Medium</label>
            </li>
            <li class="radio">
              <input
                type="radio"
                id="high-priority"
                name="priority"
                value="2"
                v-model="planItem.priority"
              />
              <label for="high-priority">High</label>
            </li>
          </ul>
        </div>
      </div>
      <div class="row mrgn-bttm-lg">
        <div class="col-xs-12">
          <label for="domains-of-well-being" class="mrgn-bttm-0"
            ><a
              href="https://www.canada.ca/en/department-national-defence/corporate/reports-publications/transition-guide/well-being-framework.html"
              >Domain of well-being:</a
            ></label
          >
          <div id="domains-of-well-being" class="provisional gc-chckbxrdio">
            <ul class="list-unstyled lst-spcd-2">
              <li class="radio">
                <input
                  type="radio"
                  id="purpose"
                  name="domain-of-well-being"
                  value="2"
                  v-model="planItem.category"
                />
                <label for="purpose"
                  >Purpose (employment or other meaningful activity)</label
                >
              </li>
              <li class="radio">
                <input
                  type="radio"
                  id="finances"
                  name="domain-of-well-being"
                  value="1"
                  v-model="planItem.category"
                />
                <label for="finances">Finances</label>
              </li>
              <li class="radio">
                <input
                  type="radio"
                  id="health"
                  name="domain-of-well-being"
                  value="0"
                  v-model="planItem.category"
                />
                <label for="health">Health</label>
              </li>
              <li class="radio">
                <input
                  type="radio"
                  id="life-skills"
                  name="domain-of-well-being"
                  value="5"
                  v-model="planItem.category"
                />
                <label for="life-skills">Life skills and preparedness</label>
              </li>
              <li class="radio">
                <input
                  type="radio"
                  id="social"
                  name="domain-of-well-being"
                  value="3"
                  v-model="planItem.category"
                />
                <label for="social">Social integration</label>
              </li>
              <li class="radio">
                <input
                  type="radio"
                  id="housing"
                  name="domain-of-well-being"
                  value="4"
                  v-model="planItem.category"
                />
                <label for="housing">Housing and physical environment</label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <div class="row mrgn-tp-lg">
            <div class="col-xs-12">
              <button
                type="button"
                class="btn btn-primary min-width-100 margin-right-16"
                @click="add_item()"
              >
                Save
              </button>
              <button
                type="button"
                class="btn btn-default min-width-100"
                @click="go_plan()"
              >
                Cancel
              </button>
            </div>
          </div>
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
  name: "smart-goals",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      error: {
        show: false,
        title: "",
        body: "",
      },
      planItem: {
        name: "",
        dueDate: "",
        category: "",
      },
    };
  },
  methods: {
    add_item() {
      if (this.validate_entries()) {
        this.axios
          .post("/api/member/plan/item", this.planItem)
          .then(() => {
            this.go_plan();
          })
          .catch((error) => {
            console.log(error);
            this.display_error(
              "There was a problem to save your entry!",
              "Please make a copy of your current entry and try saving again."
            );
          });
      } else {
        this.display_error(
          "Missing mandatory fields!",
          "Please make sure Title, Date and Domain of Well-Being fields are filled."
        );
      }
    },
    go_plan() {
      this.$router.push({
        name: "MembersPlan",
      });
    },
    validate_entries() {
      if (
        this.planItem.name === "" ||
        this.planItem.dueDate === "" ||
        this.planItem.dueDate === ""
      ) {
        // Return false if mandatory fields are not filled.
        return false;
      } else {
        // Return true if all mandatory fields filled.
        return true;
      }
    },
    display_error(title, body) {
      this.error.title = title;
      this.error.body = body;
      this.error.show = true;
      this.$refs["page-title"].scrollIntoView();
    },
  },
};
</script>

<style scoped>
.min-width-100 {
  min-width: 100px;
}

.margin-right-16 {
  margin-right: 16px;
}

.input-fields {
  width: 100%;
  max-width: 994px;
}
</style>
