import { Server, Response, Model } from "miragejs";
import plan_items from './responses/plan_items'
import account from './responses/account'

export function makeServer(environment = "development") {
  let mock_server = new Server({
    environment,

    models: {
      account: Model,
    },

    routes() {
      this.namespace = "api";

      this.get('/member/plan', () => {
        return new Response(200, {}, plan_items);
      });

      this.get('/member/account', (schema) => {
        return schema.db.accounts[0];
      });

      this.post('/member/account', (schema, request) => {
        schema.accounts.first().update(
          JSON.parse(request.requestBody)
        );
        return new Response(200);
      });
    },

    // Seeding the mock database with the data from the mock responses.
    seeds(server) {
      server.create("account", account);
    }
  });

  return mock_server;
}
