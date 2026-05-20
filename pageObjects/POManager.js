const {LoginPage}=require('./LoginPage');
const {DashboardPage}=require('./DashboardPage');
const {CartPage}=require('./CartPage');
const {OrderReviewPage}=require('./OrderReviewPage');
const {OrderPage}=require('./OrderPage');

class POManager{
constructor(page){
    this.page=page;
    this.LoginPage=new LoginPage(this.page);
    this.DashboardPage=new DashboardPage(this.page)
    this.CartPage= new CartPage(this.page);
    this.OrderReviewPage=new OrderReviewPage(this.page);
    this.OrderPage=new OrderPage(this.page);
}
getloginpage(){
    return this.LoginPage
}
getdashboardPage(){
    return this.DashboardPage;
}
getcartpage(){
    return this.CartPage;
}
getOrderReviewPage(){
    return this.OrderReviewPage;
}
getOrderpage(){
return this.OrderPage
}
}
module.exports={POManager}