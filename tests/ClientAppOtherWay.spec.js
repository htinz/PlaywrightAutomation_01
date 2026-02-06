// const { test, expect } = require("@playwright/test");

// test("@Web Client App login", async ({ page }) => {
//   const email = "email@example.com";
//   const productName = "ZARA COAT 3";
//   const products = page.locator(".card-body");
//   await page.goto("https://rahulshettyacademy.com/client");
//   await page.getByLabel("#email@example.com").fill(email);
//   await page.getByLabel("#enter your passsword").fill("Studentpractice#5");
//   await page.getByRole("button", { name: "Login" }).click();
//   await page.waitForLoadState("networkidle");
//   await page.locator(".card-body b").first().waitFor();
//   await page.locator(".card-body").fill({ hasTex: "ZARA COAT 3" })
//   .getByRole("button", " Add To Cart").click();
//    await page.getByRole("Listitem").getByRole("button", { name: "Card" }).click();

//   const count = await products.count();
//   for (let i = 0; i < count; ++i) {
//     if ((await products.nth(i).locator("b").textContent()) === productName) {
//       //add to cart
//       await products.nth(i).locator("text= Add To Cart").click();
//       break;
//     }
//   }

// await page.pause();
// await page.locator("div li").first().waitFor();
// await expect(page.getByText("ZARA COAT 3")).isVisible();
// const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
// expect(bool).toBeTruthy();
// await page.getByRole("button", {name: "text=Checkout"}).click();
// await page.getByRole("button", {name: "India"}).nth(1).click();
// await page.getByText("PLACE ORDER").click();
// await expect(page.getByText("Thankyou for the order.")).toBeVisible();

// await page.getByPlaceholder("Select Country").pressSequentially("ind");
// const dropdown = page.locator(".ta-results");
// await dropdown.waitFor();
// const optionsCount = await dropdown.locator("button").count();
// // for (let i = 0; i < optionsCount; ++i) {
//   const text = await dropdown.locator("button").nth(i).textContent();

//   if (text.trim("") === "India") {
//     await dropdown.locator("button").nth(i).click();
//     break;
//   }
// }

// await expect(page.locator(".user__name [type='text']").first()).toHaveText(
//   email
// );
// expect(await page.locator(".user__name label")).toHaveText(email);
// await page.locator(".btnn").click();
// await expect(page.locator(".hero-primary")).toHaveText(
//   "Thankyou for the order. "
// );
// const orderId = await page
//   .locator(".em-spacer-1 .ng-star-inserted")
//   .textContent();
// console.log(orderId);

// await page.locator("button[routerlink*='myorders']").click();
// await page.locator("tbody").waitFor();
// const rows = await page.locator("tbody tr");

// for (let i = 0; i < (await rows.count()); ++i) {
//   const rowOrderId = await rows.nth(i).locator("th").textContent();
//   if (orderId.includes(rowOrderId)) {
//     await rows.nth(i).locator("button").first().click();
//     break;
//   }
// }
// const orderIdDetails = await page.locator(".col-text").textContent();
// expect(orderId.includes(orderIdDetails)).toBeTruthy();
// await page.pause();
// });
//=============================================================================
const { test, expect } = require("@playwright/test");

test("@Web Client App login", async ({ page }) => {
  //js file- Login js, DashboardPage
  const email = "htindev@gmail.com";
  const productName = "ZARA COAT 3";
  const products = page.locator(".card-body");
  await page.goto("https://rahulshettyacademy.com/client");
  await page.getByPlaceholder("email@example.com").fill(email);
  await page.getByPlaceholder("enter your passsword").fill("Studentpractice#5");
  await page.getByRole("button", { name: "Login" }).click();
  // await page.waitForLoadState("networkidle");
  await page.locator(".card-body b").first().waitFor();

  await page
    .locator(".card-body")
    .filter({ hasText: "ZARA COAT 3" })
    .getByRole("button", { name: "Add to Cart" })
    .click();

  await page
    .getByRole("listitem")
    .getByRole("button", { name: "Cart" })
    .click();

  //await page.pause();
  await page.locator("div li").first().waitFor();
  await expect(page.getByText("ZARA COAT 3")).toBeVisible();

  await page.getByRole("button", { name: "Checkout" }).click();

  await page.getByPlaceholder("Select Country").pressSequentially("ind");

  await page.getByRole("button", { name: "India" }).nth(1).click();
  await page.getByText("PLACE ORDER").click();

  await expect(page.getByText("Thankyou for the order.")).toBeVisible();
});
