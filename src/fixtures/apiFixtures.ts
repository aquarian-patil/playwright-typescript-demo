import { test as base } from "@playwright/test";
import { ReqResClient } from "../api/clients/ReqResClient";
import { PetstoreClient } from "../api/clients/PetstoreClient";
import { DummyJsonClient } from "../api/clients/DummyJsonClient";
import { JsonPlaceholderClient } from "../api/clients/JsonPlaceholderClient";

type APIFixtures = {
  reqResClient: ReqResClient;
  petstoreClient: PetstoreClient;
  dummyJsonClient: DummyJsonClient;
  jsonPlaceholderClient: JsonPlaceholderClient;
};

export const test = base.extend<APIFixtures>({
  reqResClient: async ({}, use) => {
    await use(new ReqResClient());
  },
  petstoreClient: async ({}, use) => {
    await use(new PetstoreClient());
  },
  dummyJsonClient: async ({}, use) => {
    await use(new DummyJsonClient());
  },
  jsonPlaceholderClient: async ({}, use) => {
    await use(new JsonPlaceholderClient());
  }
});
export { expect } from "@playwright/test";
