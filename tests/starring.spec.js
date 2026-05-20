const  {test,expect}= require("@playwright/test");


// test('first test',async ({browser})=>
//     {
//     const context = await browser.newContext(); 
//     const page = await context.newPage();
//      await page.goto("https://www.amazon.com");
    
//      console.log(await page.title());
//     await expect(page).toHaveTitle("Amazoon");


//     });


// test('third test', async ({page}) => {
//     await page.goto("https://www.paytm.com");
//     let title= await page.title();
// });


test('child window',async({browser})=>{
    const context =await browser.newContext();
    const page= await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentlink= await page.locator("[href*='documents-request']");
    const [age]=await Promise.all([
        context.waitForEvent('page'),
        documentlink.click(),
    ])

    const text =await age.locator("[class='im-para red']").textContent();
    const array = text.split("@");
const tree=array[1].split(" ")[0];
await page.locator("#username").fill(tree);
console.log(await page.locator("#username").inputValue());

age.pause();


});



 

