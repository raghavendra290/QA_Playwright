const {test,expect}=require('@playwright/test');

test('calculator',async({page})=>{
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
const month = "6";
const date="15"
const year="2026";
const expectedlist=[month,date,year];

await page.locator(".react-date-picker__calendar-button__icon").click();
await page.locator(".react-calendar__navigation__label__labelText--from").click();
await page.locator(".react-calendar__navigation__label__labelText").click();
await page.getByText(year).click();
await page.locator(".react-calendar__tile").nth(Number(month)-1).click();
await page.locator("//abbr[text()='"+date+"']").click();
const input = page.locator(".react-date-picker__inputGroup__input");
for(let i =0;i<expectedlist;i++){
    const value= await input.nth(i).inputValue();
    expect(value).toEqual(expectedlist[i]);
}


});