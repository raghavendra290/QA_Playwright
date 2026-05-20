const {test,expect}=require('@playwright/test');
const {POManager}=require('../pageObjects/POManager');
const { Agent } = require('node:http');

test('hello clientapp',async({page})=>{


const PoManager= new POManager(page);
const  username="samsarbanda.reddy@gmail.com";
const password="@Himmu6143";
const productname="ZARA COAT 3";

const loginpage =PoManager.getloginpage();
const dashBoard= PoManager.getdashboardPage();
await loginpage.goto();
await loginpage.ValidLogin(username,password);
await dashBoard.SearchproductAddtoCart(productname);
await dashBoard.navigatetocart();
const cart=PoManager.getcartpage();
await cart.VerifyProductsItemsDisplayed(productname);
await cart.navigatetocheckout();
const orderreviewpage=PoManager.getOrderReviewPage();
await orderreviewpage.searchcountryandSelect("ind","India");
await orderreviewpage.VerifyEmailId(username);
const orderID =await orderreviewpage.placeordergetOrderID();
console.log(orderID);
 
const orderpage=PoManager.getOrderpage();
await dashBoard.navigatetoOrders();
await orderpage.getandValidateOrderDetails(orderID);
expect(orderID.includes(await orderpage.getorderId())).toBeTruthy();
// await page.pause();
});