<template>
  <div id="view-container">
    <Header />
    <main
      property="mainContentOfPage"
      resource="#wb-main"
      typeof="WebPageElement"
      class="container"
    >
      <h1 property="name" id="wb-cont" dir="ltr">My Transition Plan</h1>
      <div class="row">
        <div class="col-md-6">
          <p>
            Prepare for a successful transition to post-service life by
            completing the below plan and setting transition goals.
          </p>
          <p>
            Your Transition Advisor will help you with your transition journey.
            They will see updates that you make here and can send you messages.
            If you have any questions, your
            <router-link to="/staff">Transition Advisor</router-link> is
            available to help you.
          </p>
        </div>
        <div class="col-sm-6 col-md-3" v-if="percentageCompletion >= 0">
          <div class="text-center well blue-section-background">
            <p>
              You are
              <span class="lead"
                ><strong>{{ percentageCompletion }}% complete</strong></span
              >
              your plan!
            </p>
            <div class="progress">
              <div
                class="progress-bar progress-bar-success"
                role="progressbar"
                :aria-valuenow="percentageCompletion"
                aria-valuemin="0"
                aria-valuemax="100"
                :style="'width: ' + percentageCompletion + '%'"
              ></div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-3">
          <div class="text-center well blue-section-background">
            <p>
              <span class="lead"
                ><strong>{{ releaseDate }}</strong></span
              ><br />
              day until your transition
            </p>
          </div>
        </div>
      </div>
      <section>
        <h2>Transition Plan tasks</h2>
        <div class="row">
          <div class="col-xs-12">
            <div class="row">
              <div class="col-xs-12">
                <fieldset class="provisional gc-chckbxrdio">
                  <ul class="list-unstyled lst-spcd-2">
                    <li class="checkbox">
                      <input
                        type="checkbox"
                        id="hide-completed-checkbox"
                        v-model="hideCompletedChecked"
                        @change="hide_all_completed()"
                      />
                      <label for="hide-completed-checkbox"
                        >Hide completed tasks</label
                      >
                    </li>
                  </ul>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <router-link to="/goals">
              <button type="button" class="btn btn-call-to-action">
                + Add new transition task or goal
              </button>
            </router-link>
          </div>
        </div>
        <div class="row bottom-buffer">
          <div class="col-xs-12">
            <div class="row">
              <div class="col-xs-6">
                <span><b>Sort by: </b></span>
                <button
                  type="button"
                  ref="sort-by-domains-of-well-being"
                  class="btn btn-default btn-do-not-round-right-corner btn-selected-dark"
                  @click="sort_by_domains_of_well_being"
                >
                  Domains of Well-Being
                </button>
                <button
                  type="button"
                  ref="sort-by-due-date"
                  class="btn btn-default btn-do-not-round-left-corner"
                  @click="sort_by_date"
                >
                  Due Date
                </button>
              </div>
              <div class="col-xs-6">
                <div class="pull-right">
                  <router-link to="/calendar">
                    <button type="button" class="btn btn-default">
                      Calendar View
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <div
              class="row"
              v-for="(item, categoryIndex) in plan"
              v-bind:key="categoryIndex"
            >
              <div class="col-xs-12">
                <div name="nrdDetails" class="section">
                  <details>
                    <summary>
                      <strong style="font-size: 24px">{{
                        item.category
                      }}</strong>
                    </summary>
                    <div
                      class="row section-striped"
                      v-for="(task, taskIndex) in item.tasks"
                      v-bind:key="taskIndex"
                    >
                      <fieldset
                        style="border-top: 1px solid #e5e5e5"
                        :ref="'task-' + categoryIndex + '-' + taskIndex"
                      >
                        <div class="col-xs-12">
                          <fieldset
                            class="provisional gc-chckbxrdio"
                            style="border-top: 0"
                          >
                            <ul class="list-unstyled lst-spcd-2">
                              <li
                                class="checkbox"
                                :ref="
                                  'checkbox-title-' +
                                  categoryIndex +
                                  '-' +
                                  taskIndex
                                "
                              >
                                <input
                                  type="checkbox"
                                  :id="
                                    'complete-' +
                                    categoryIndex +
                                    '-' +
                                    taskIndex
                                  "
                                  :ref="
                                    'complete-' +
                                    categoryIndex +
                                    '-' +
                                    taskIndex
                                  "
                                  :checked="task.taskStatus === '1'"
                                  @change="save_task(categoryIndex, taskIndex)"
                                />
                                <label
                                  style="font-size: 22px"
                                  :for="
                                    'complete-' +
                                    categoryIndex +
                                    '-' +
                                    taskIndex
                                  "
                                  ><strong>{{ task.name }}</strong></label
                                >
                                <span
                                  :ref="
                                    'checkbox-title-label' +
                                    categoryIndex +
                                    '-' +
                                    taskIndex
                                  "
                                >
                                  <span
                                    class="label label-danger"
                                    style="margin-left: 16px"
                                    v-if="task.taskStatus === '0'"
                                  >
                                    <small>Need Help</small>
                                  </span>
                                  <span
                                    class="label label-info"
                                    style="margin-left: 16px"
                                    v-if="task.priority === '0'"
                                  >
                                    <small>Low Priority</small>
                                  </span>
                                  <span
                                    class="label label-primary"
                                    style="margin-left: 16px"
                                    v-if="task.priority === '1'"
                                  >
                                    <small>Medium Priority</small>
                                  </span>
                                  <span
                                    class="label label-warning"
                                    style="margin-left: 16px"
                                    v-if="task.priority === '2'"
                                  >
                                    <small>High Priority</small>
                                  </span>
                                </span>
                              </li>
                            </ul>
                            <div style="position: relative; top: -20px">
                              <label
                                :for="
                                  'due-date-' + categoryIndex + '-' + taskIndex
                                "
                                style="
                                  display: inline-block;
                                  margin-left: 36px;
                                  padding-left: 20px;
                                  font-weight: normal;
                                "
                              >
                                Due date:
                              </label>
                              &nbsp;
                              <input
                                type="date"
                                :id="
                                  'due-date-' + categoryIndex + '-' + taskIndex
                                "
                                :value="task.dueDate"
                              />
                            </div>
                          </fieldset>
                          <div name="nrdDetails" class="section">
                            <details
                              :ref="
                                'details-' + categoryIndex + '-' + taskIndex
                              "
                            >
                              <summary>More details: {{ task.name }}</summary>
                              <fieldset style="border-top: 0">
                                <p>
                                  {{ task.description }}
                                </p>
                                <p>
                                  <a
                                    href="https://www.canada.ca/en/department-national-defence/corporate/reports-publications/transition-guide/well-being-framework.html"
                                  >
                                    <b>Domain of well-being:</b>
                                  </a>
                                  &nbsp;{{ item.description }}
                                </p>
                              </fieldset>
                              <fieldset class="provisional gc-chckbxrdio">
                                <legend
                                  style="margin-bottom: 0px; font-size: 20px"
                                >
                                  Task status:
                                </legend>
                                <ul class="list-unstyled lst-spcd-2">
                                  <li class="radio">
                                    <input
                                      type="radio"
                                      :id="
                                        'mark-need-help-' +
                                        categoryIndex +
                                        '-' +
                                        taskIndex
                                      "
                                      :ref="
                                        'mark-need-help-' +
                                        categoryIndex +
                                        '-' +
                                        taskIndex
                                      "
                                      :name="
                                        'task-status-' +
                                        categoryIndex +
                                        '-' +
                                        taskIndex
                                      "
                                      value="0"
                                      v-model="task.taskStatus"
                                    />
                                    <label
                                      :for="
                                        'mark-need-help-' +
                                        categoryIndex +
                                        '-' +
                                        taskIndex
                                      "
                                      >I need help (your Transition Advisor will
                                      be notified)</label
                                    >
                                  </li>
                                  <li class="radio">
                                    <input
                                      type="radio"
                                      :id="
                                        'mark-complete-' +
                                        categoryIndex +
                                        '-' +
                                        taskIndex
                                      "
                                      :ref="
                                        'mark-complete-' +
                                        categoryIndex +
                                        '-' +
                                        taskIndex
                                      "
                                      :name="
                                        'task-status-' +
                                        categoryIndex +
                                        '-' +
                                        taskIndex
                                      "
                                      value="1"
                                      v-model="task.taskStatus"
                                    />
                                    <label
                                      :for="
                                        'mark-complete-' +
                                        categoryIndex +
                                        '-' +
                                        taskIndex
                                      "
                                      >Complete</label
                                    >
                                  </li>
                                </ul>
                              </fieldset>
                              <div v-if="task.smartGoal">
                                <fieldset style="border-top: 0">
                                  <span><b>Specific:</b></span>
                                  <span>
                                    &nbsp;What do you want to achieve? What
                                    actions will you take to get there?
                                  </span>
                                  <textarea
                                    class="form-control min-width-100-percent"
                                    v-model="task.specification"
                                  ></textarea>
                                </fieldset>
                                <fieldset style="border-top: 0">
                                  <span><b>Measureable:</b></span>
                                  <span>
                                    &nbsp;How will you track your goal? How will
                                    you know you have succeeded?
                                  </span>
                                  <textarea
                                    class="form-control min-width-100-percent"
                                    v-model="task.measurement"
                                  ></textarea>
                                </fieldset>
                                <fieldset style="border-top: 0">
                                  <span><b>Attainable:</b></span>
                                  <span>
                                    &nbsp;Are you confident that you will be
                                    able accomplish this goal?
                                  </span>
                                  <div class="provisional gc-chckbxrdio">
                                    <ul class="list-unstyled lst-spcd-2">
                                      <li class="radio">
                                        <input
                                          type="radio"
                                          id="attainability-yes"
                                          name="attainability"
                                          value="yes"
                                          v-model="task.attainable"
                                        />
                                        <label for="attainability-yes">
                                          Yes
                                        </label>
                                      </li>
                                      <li class="radio">
                                        <input
                                          type="radio"
                                          id="attainability-no"
                                          name="attainability"
                                          value="no"
                                          v-model="task.attainable"
                                        />
                                        <label for="attainability-no">
                                          No - If you select “no,” how can you
                                          make it attainable? (Note: if you
                                          select “no,” your Transition Advisor
                                          will be notified, to provide you with
                                          additional support setting this goal)
                                        </label>
                                      </li>
                                    </ul>
                                  </div>
                                </fieldset>
                                <fieldset style="border-top: 0">
                                  <span><b>Relevant:</b></span>
                                  <span>
                                    &nbsp;Is the goal worthwhile? Will it
                                    accomplish what you need to accomplish?
                                  </span>
                                  <div class="provisional gc-chckbxrdio">
                                    <ul class="list-unstyled lst-spcd-2">
                                      <li class="radio">
                                        <input
                                          type="radio"
                                          id="relevance-yes"
                                          name="relevance"
                                          value="yes"
                                          v-model="task.relevant"
                                        />
                                        <label for="relevance-yes"> Yes </label>
                                      </li>
                                      <li class="radio">
                                        <input
                                          type="radio"
                                          id="relevance-no"
                                          name="relevance"
                                          value="no"
                                          v-model="task.relevant"
                                        />
                                        <label for="relevance-no">
                                          No - If you select “no,” how can you
                                          make it relevant to what you need to
                                          accomplish? (Note: if you select “no,”
                                          your Transition Advisor will be
                                          notified, to provide you with
                                          additional support setting this goal)
                                        </label>
                                      </li>
                                    </ul>
                                  </div>
                                </fieldset>
                              </div>
                              <fieldset class="provisional gc-chckbxrdio">
                                <legend
                                  style="margin-bottom: 0px; font-size: 20px"
                                >
                                  Priority:
                                </legend>
                                <ul class="list-unstyled lst-spcd-2">
                                  <li class="radio">
                                    <input
                                      type="radio"
                                      :id="
                                        'low-' + categoryIndex + '-' + taskIndex
                                      "
                                      :ref="
                                        'low-' + categoryIndex + '-' + taskIndex
                                      "
                                      :name="
                                        'priority-' +
                                        categoryIndex +
                                        '-' +
                                        taskIndex
                                      "
                                      value="0"
                                      v-model="task.priority"
                                    />
                                    <label
                                      :for="
                                        'low-' + categoryIndex + '-' + taskIndex
                                      "
                                      >Low</label
                                    >
                                  </li>
                                  <li class="radio">
                                    <input
                                      type="radio"
                                      :id="
                                        'medium-' +
                                        categoryIndex +
                                        '-' +
                                        taskIndex
                                      "
                                      :ref="
                                        'medium-' +
                                        categoryIndex +
                                        '-' +
                                        taskIndex
                                      "
                                      :name="
                                        'priority-' +
                                        categoryIndex +
                                        '-' +
                                        taskIndex
                                      "
                                      value="1"
                                      v-model="task.priority"
                                    />
                                    <label
                                      :for="
                                        'medium-' +
                                        categoryIndex +
                                        '-' +
                                        taskIndex
                                      "
                                      >Medium</label
                                    >
                                  </li>
                                  <li class="radio">
                                    <input
                                      type="radio"
                                      :id="
                                        'high-' +
                                        categoryIndex +
                                        '-' +
                                        taskIndex
                                      "
                                      :ref="
                                        'high-' +
                                        categoryIndex +
                                        '-' +
                                        taskIndex
                                      "
                                      :name="
                                        'priority-' +
                                        categoryIndex +
                                        '-' +
                                        taskIndex
                                      "
                                      value="2"
                                      v-model="task.priority"
                                    />
                                    <label
                                      :for="
                                        'high-' +
                                        categoryIndex +
                                        '-' +
                                        taskIndex
                                      "
                                      >High</label
                                    >
                                  </li>
                                </ul>
                              </fieldset>
                              <fieldset style="border-top: 0">
                                <span><b>My notes:</b></span>
                                <span
                                  >&nbsp;<i
                                    >(Note: these notes will be visible to your
                                    transition advisor)</i
                                  ></span
                                >
                                <textarea
                                  class="form-control"
                                  style="min-width: 100%"
                                  v-model="task.memberNotes"
                                ></textarea>
                              </fieldset>
                              <fieldset style="border-top: 0">
                                <span
                                  ><b
                                    >Notes from your Transition Advisor:</b
                                  ></span
                                >
                                <p>
                                  You are doing great, keep up the good work! -
                                  Your Transition Advisor
                                </p>
                              </fieldset>
                              <fieldset>
                                <button
                                  type="button"
                                  class="btn btn-primary min-width-100 margin-right-16"
                                  @click="save_task(categoryIndex, taskIndex)"
                                >
                                  Save
                                </button>
                                <button
                                  type="button"
                                  class="btn btn-default min-width-100"
                                  @click="cancel_task(categoryIndex, taskIndex)"
                                >
                                  Cancel
                                </button>
                              </fieldset>
                            </details>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/shared/Header.vue";
import Footer from "@/components/shared/Footer.vue";

export default {
  name: "checklist-plan",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      hideCompletedChecked: false,
      plan: [],
    };
  },
  computed: {
    percentageCompletion() {
      let total_items = 0;
      let completed_items = 0;
      this.plan.forEach((category) => {
        total_items += category.tasks.length;
        category.tasks.forEach((item) => {
          if (item.taskStatus === "1") {
            completed_items++;
          }
        });
      });
      return Math.round((completed_items / total_items) * 100);
    },
    releaseDate() {
      const releaseDate = Date.parse(this.$store.state.account.releaseDate);
      const today = new Date();
      const releaseDays = Math.floor((releaseDate - today) / 86400000);
      return releaseDays;
    },
  },
  mounted: function () {
    this.check_if_first_visit_and_get_plan();
  },
  methods: {
    check_if_first_visit_and_get_plan() {
      this.axios
        .get("/api/member/plan/firstvisit")
        .then((response) => {
          if (response.data.firstVisit) {
            this.$router.push("/notification/bookta");
          } else {
            this.get_plan_items();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    get_plan_items() {
      this.axios
        .get("/api/member/plan")
        .then((response) => {
          this.plan = response.data;
          if (this.hideCompletedChecked) {
            this.hide_all_completed();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    save_task(category_index, task_index) {
      var category_and_task_id = category_index + "-" + task_index;
      if (this.$refs["complete-" + category_and_task_id][0].checked === true) {
        this.plan[category_index].tasks[task_index].taskStatus = "1";
      }
      this.axios
        .put(
          `/api/member/plan/category/${category_index}/item/${task_index}`,
          this.plan[category_index].tasks[task_index]
        )
        .then(() => {
          // Scroll to the top of the task element.
          if (this.$refs["details-" + category_and_task_id][0].open) {
            this.$refs["task-" + category_and_task_id][0].scrollIntoView();
            this.$refs["details-" + category_and_task_id][0].open = false;
          }
          this.complete_task(category_index, task_index);
        })
        .catch((error) => {
          console.log(error);
          // Implement a error display functunality
          // which informs them to take a back up of
          // their data entry and try to save again.
          this.cancel_task(category_index, task_index);
        });
    },
    cancel_task(category_index, task_index) {
      this.get_plan_items();
      const category_and_task_id = category_index + "-" + task_index;
      // Scroll to the top of the task element.
      this.$refs["task-" + category_and_task_id][0].scrollIntoView();
      this.$refs["details-" + category_and_task_id][0].open = false;
    },
    hide_all_completed() {
      this.plan.forEach((category, category_index) => {
        category.tasks.forEach((task, task_index) => {
          this.hide_completed_task(category_index, task_index);
        });
      });
    },
    hide_completed_task(category_index, task_index) {
      const task_element =
        this.$refs["task-" + category_index + "-" + task_index][0];
      if (
        this.hideCompletedChecked === true &&
        this.plan[category_index].tasks[task_index].taskStatus === "1"
      ) {
        task_element.hidden = true;
      } else {
        task_element.hidden = false;
      }
    },
    complete_task(category_index, task_index) {
      const category_and_task_id = category_index + "-" + task_index;
      if (this.$refs["complete-" + category_and_task_id][0].checked === true) {
        this.plan[category_index].tasks[task_index].taskStatus = "1";
      }
      this.hide_completed_task(category_index, task_index);
    },
    clear_task_status(category_index, task_index) {
      this.plan[category_index].tasks[task_index].taskStatus = "";
    },
    sort_by_date() {
      let plan_by_date = [
        {
          category: "Activities due in the next 30 days",
          tasks: [],
        },
        {
          category: "Activities due in 30 - 60 days",
          tasks: [],
        },
        {
          category: "Activities due in 60 - 90 days",
          tasks: [],
        },
        {
          category: "Activities due in more than 90 days",
          tasks: [],
        },
        {
          category: "Activities due after transition",
          tasks: [],
        },
      ];
      this.plan.forEach((category) => {
        category.tasks.forEach((task) => {
          const transfer_task = task;
          const task_date = new Date(transfer_task.dueDate);
          const today_date = new Date();
          const day_difference =
            (task_date.getTime() - today_date.getTime()) / (1000 * 3600 * 24);
          if (day_difference <= 30) {
            plan_by_date[0].tasks.push(transfer_task);
          } else if (day_difference <= 60) {
            plan_by_date[1].tasks.push(transfer_task);
          } else if (day_difference <= 90) {
            plan_by_date[2].tasks.push(transfer_task);
          } else if (day_difference <= 120) {
            plan_by_date[3].tasks.push(transfer_task);
          } else {
            plan_by_date[4].tasks.push(transfer_task);
          }
        });
      });
      this.plan = plan_by_date;
      // Style the sort buttons accordingly.
      this.$refs["sort-by-domains-of-well-being"].classList.remove(
        "btn-selected-dark"
      );
      this.$refs["sort-by-due-date"].classList.add("btn-selected-dark");
    },
    sort_by_domains_of_well_being() {
      this.get_plan_items();
      // Style the sort buttons accordingly.
      this.$refs["sort-by-due-date"].classList.remove("btn-selected-dark");
      this.$refs["sort-by-domains-of-well-being"].classList.add(
        "btn-selected-dark"
      );
    },
  },
};
</script>

<style scoped>
.blue-section-background {
  padding: 16px;
  background-color: #f7f9fd;
}

.btn.btn-selected-dark {
  pointer-events: none;
  background-color: #333;
  color: #fff;
  border-left: 0px;
}

.btn.btn-do-not-round-left-corner {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.btn.btn-do-not-round-right-corner {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.bottom-buffer {
  margin-bottom: 24px;
}

.min-width-100 {
  min-width: 100px;
}

.min-width-100-percent {
  min-width: 100%;
}

.margin-right-16 {
  margin-right: 16px;
}

.section-striped:nth-child(even) {
  background-color: #f7f9fd;
}
</style>
