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
              new_item.taskStatus = 0;
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
