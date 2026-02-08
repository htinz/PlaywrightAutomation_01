import { test as baseTest} from "@playwright/test";

// const base = require("@playwright/test");
interface TestDataForOrder {
    username: string,
    password: string,
    productName: string,
  }

export const customTest = baseTest.extend<{testDataForOrder: TestDataForOrder}>({
  testDataForOrder: {
    username: "htindev@gmail.com",
    password: "Studentpractice#5",
    productName: "Zara Coat 4",
  },
});
