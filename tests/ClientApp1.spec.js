const {test,expect}=require('@playwright/test');
const { Agent } = require('node:http');

test('hello clientapp',async({browser})=>{
const context= await browser.newContext();
const page= await context.newPage();

await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

const  username="samsarbanda.reddy@gmail.com";
const password="@Himmu6143";
const productname="ZARA COAT 3";
const products = page.locator(".card-body");
await page.locator("#userPassword");
await page.locator("#userEmail").fill(username);
await page.locator("#userPassword").fill(password);

await page.locator("[type='submit']").click();
await page.locator(".card-body b").first().waitFor();
const titles=await page.locator(".card-body b").allTextContents();
console.log(titles);
const count=await products.count();
console.log(count);
for(let i =0;i<count;++i){
    if(await products.nth(i).locator("b").textContent()===productname){
       await console.log("heello");
        await products.nth(i).locator("text= Add To Cart").click();
        break;
    }
}

await page.locator("[routerlink='/dashboard/cart']").click();
await page.locator("div li").first().waitFor();
const bool =await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
expect(bool).toBeTruthy();


await page.locator("text=Checkout").click();
await page.getByPlaceholder("Select Country").pressSequentially("ind",{delay:150});
const dropdown = await page.locator(".ta-results");
console.log(await dropdown.textContent())
   //await dropdown.waitFor();
const coun= await dropdown.locator("button").count();
console.log(coun);

for(let i=0; i<coun;++i){
    const text = await dropdown.locator("button").nth(i).textContent();
    if(text===" India"){
        await dropdown.locator("button").nth(i).click();
        break;
    }
}



 expect(page.locator(".user__name [type='text']").first()).toHaveText(username);
await page.locator(".action__submit").click();

await expect(page.locator(".hero-primary")).toHaveText("Thankyou for the order.");
const OrderID=await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
await page.locator("button[routerlink='/dashboard/myorders']").first().click();
const table =await page.locator("tbody").waitFor();
 
const rows = await page.locator("tbody tr");

for(let i =0; i<await rows.count();++i){
const orderdetails=await rows.nth(i).locator("th").textContent();
if(OrderID.includes(orderdetails)){
await rows.nth(i).locator("button").first().click();
break;
}

}


const order=await page.locator(".col-text").textContent();
expect(OrderID.includes(order)).toBeTruthy();
await page.pause();

});