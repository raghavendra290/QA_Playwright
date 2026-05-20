const {test, expect }= require('@playwright/test');


test('first async case', async({page})=>{
 await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await page.locator("#userEmail").fill("samsarbanda.reddy@gmail.com");
await page.locator("#userPassword").fill("@Himmu6143");

await page.locator("[type='submit']").click();   

await page.locator(".card-body b").first().waitFor();
console.log(await page.locator(".card-body b").nth(0).textContent());
const titles =  await page.locator(".card-body b").allTextContents();
console.log(titles);


// console.log(await titles.allTextContents);
});