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
        await localforage.setItem(
          "mock-api-account",
          JSON.parse(request.requestBody)
        );
        return new Response(200);
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
