import { expect, type Locator, type Page } from '@playwright/test';

let message1: string = "Hello";
message1 = "bye";
console.log(message1);

let age1: number = 20;
console.log(age1);
let isActive: boolean = false;
console.log(isActive);
let numberArray: number[] = [1, 2, 3];
console.log(numberArray[0]);
let data: any = "This could be anything";
console.log(data);
data = 42;
console.log(data);

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(3, 4));

// class CartPage {
//     page: Page;
//     cartProducts: Locator;
//     productsText: Locator;
//     cart: Locator;
//     orders: Locator;
//     checkout: Locator;

//   constructor(page: any) {
//     this.page = page;
//     this.cartProducts = page.locator("div li").first();
//     this.productsText = page.locator(".card-body b");
//     this.cart = page.locator("[routerlink*='cart']");
//     this.orders = page.locator("button[routerlink*='myorders']");
//     this.checkout = page.locator("text=Checkout");
//   }