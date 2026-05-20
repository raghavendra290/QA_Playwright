const {test}=require('@playwright/test');
class LoginPage{
    constructor(page){
        this.page=page;
        this.userName=page.locator("#userEmail");
        this.password=page.locator("#userPassword");
        this.submitbutton=page.locator("[type='submit']")

    }

async goto(){
    await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login")
}

async ValidLogin(username,pasword){
    await this.userName.fill(username);
    await this.password.fill(pasword);
    await this.submitbutton.click();

}

}
module.exports={LoginPage}