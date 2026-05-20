const {test}=require('@playwright/test');
class OrderPage{
    constructor(page){
        this.page=page;
        this.table = page.locator("tbody");
        this.rows = page.locator("tbody tr")
        this.Orderrid=page.locator(".col-text");


    }
    async getandValidateOrderDetails(orderid){
 this.table.waitFor();
for(let i =0; i<await this.rows.count();++i){
const orderdetails=await this.rows.nth(i).locator("th").textContent();
if(orderid.includes(orderdetails)){
await this.rows.nth(i).locator("button").first().click();
break;
}

}
  }
 async getorderId(){
    return await this.Orderrid.textContent();
  }
}
module.exports={OrderPage}