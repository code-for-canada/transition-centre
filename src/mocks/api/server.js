import { Server, Response } from "miragejs";
import localforage from "localforage";
import plan_items from "./responses/plan_items";
import account from "./responses/account";

export async function makeServer(callback) {
  new Server({
    routes() {
      this.namespace = "api";

      this.get("/member/plan", async () => {
        const respose = await localforage.getItem("mock-api-plan");
        return new Response(200, {}, respose);
      });

      this.post("/member/plan/item", async (schema, request) => {
        try {
          let plan_data = await localforage.getItem("mock-api-plan");
          const new_item = JSON.parse(request.requestBody);
          if (new_item.smartGoal === true) {
            // Add identifiers for a SMART Goal.
            // These should be translation codes once localization is implemented.
            new_item.name = "GOAL: " + new_item.name;
            new_item.description =
              "Setting goals is instrumental to helping you achieve a successful transition. At the CAF TG, we use the SMART goal framework to help ensure reach your goals.";
            if (new_item.attainable === "no" || new_item.relevant === "no") {
              new_item.taskStatus = "0";
            }
          }
          const new_item_category_index = parseInt(new_item.category);
          plan_data[new_item_category_index].tasks.push(new_item);
          await localforage.setItem("mock-api-plan", plan_data);
          return new Response(200);
        } catch (error) {
          return new Response(400, {}, error);
        }
      });

      this.get(
        "/member/plan/category/:category_id/item/:item_id",
        async (schema, request) => {
          const category_id = parseInt(request.params.category_id);
          const item_id = parseInt(request.params.item_id);
          const plan_data = await localforage.getItem("mock-api-plan");
          const respose = plan_data[category_id].tasks[item_id];
          return new Response(200, {}, respose);
        }
      );

      this.put(
        "/member/plan/category/:category_id/item/:item_id",
        async (schema, request) => {
          try {
            const category_id = parseInt(request.params.category_id);
            const item_id = parseInt(request.params.item_id);
            let plan_data = await localforage.getItem("mock-api-plan");
            const modified_item = JSON.parse(request.requestBody);
            plan_data[category_id].tasks[item_id] = modified_item;
            await localforage.setItem("mock-api-plan", plan_data);
            return new Response(200);
          } catch (error) {
            return new Response(400, {}, error);
          }
        }
      );

      this.get("/member/plan/completion", async () => {
        const plan = await localforage.getItem("mock-api-plan");
        let total_items = 0;
        let completed_items = 0;
        plan.forEach((category) => {
          total_items += category.tasks.length;
          category.tasks.forEach((item) => {
            if (item.taskStatus === "1") {
              completed_items++;
            }
          });
        });
        const percentage_completed = Math.round(
          (completed_items / total_items) * 100
        );
        const respose = { percentageCompleted: percentage_completed };
        return new Response(200, {}, respose);
      });

      this.get("/member/plan/firstvisit", async () => {
        let account_data = await localforage.getItem("mock-api-account");
        const is_plan_first_visit_status = account_data.notifyAboutTA;
        if (is_plan_first_visit_status) {
          account_data.notifyAboutTA = false;
          await localforage.setItem("mock-api-account", account_data);
        }
        const respose = { firstVisit: is_plan_first_visit_status };
        return new Response(200, {}, respose);
      });

      this.get("/member/account", async () => {
        const respose = await localforage.getItem("mock-api-account");
        return new Response(200, {}, respose);
      });

      this.put("/member/account", async (schema, request) => {
        try {
          await localforage.setItem(
            "mock-api-account",
            JSON.parse(request.requestBody)
          );
          return new Response(200);
        } catch (error) {
          return new Response(400, {}, error);
        }
      });
    },
  });

  // Seeding the mock database with the data from the mock responses.
  // Using localforage instead of the miragejs's seed server.create for
  // persistent storage in the browser.
  const keys = await localforage.keys();
  if (!keys.includes("mock-api-account")) {
    await localforage.setItem("mock-api-account", account);
  }
  if (!keys.includes("mock-api-plan")) {
    await localforage.setItem("mock-api-plan", plan_items);
  }

  callback();
}
