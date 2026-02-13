import {test as base,expect} from "@playwright/test"
import {LoginPage} from "../pages/LoginPage.js"
import {readJson} from "../utils/ReadJson.js"
export const test=base.extend({

loginUser:async({page},use)=>{

    console.log("Fixture is running....");
    
    const loginpage=new LoginPage(page);
    await loginpage.gotoUrl();
    await loginpage.fillUserName("standard_user");
    await loginpage.fillPassword("secret_sauce");
    await loginpage.clickLogin();
    use(loginpage);

    console.log("Login fixture complted!");
    
    },
    loginUserJson:async({page},use)=>{

    console.log("Fixture is running....");
    const data=readJson("./testdata/auth.json");
    const loginpage=new LoginPage(page);
    await loginpage.gotoUrl();
    await loginpage.fillUserName(data.username);
    await loginpage.fillPassword(data.password);
    await loginpage.clickLogin();
    use(loginpage);

    console.log("Login fixture complted!");
    
    },
    loginUserWithMetaData:async({page,baseURL},use,testInfo)=>{

        const loginpage=new LoginPage(page);
        await loginpage.openUrl(baseURL);
        const un=testInfo.project.metadata.appUserName;
        const psw=testInfo.project.metadata.appPassword;
        await loginpage.doLogin(un,psw);
        use(loginpage);
    }


})

export {expect};