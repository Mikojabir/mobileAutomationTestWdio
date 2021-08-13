describe('Learing WebdriverIO API', function(){
     
    it('Should screenshot', function(){
        
        //Declare to selector
        const LOGIN_ICON = '~Login'
        const EMAIL_TEXT_FIELD = '~input-email'
        
        //0. CLick to the login form on home screen
        $(LOGIN_ICON).click();
        browser.pause(1000);
        $(LOGIN_ICON).saveScreenshot("./screenshot/LoginForm.png");
        browser.pause(1000);

        //1. Take a picture - Login Form
        // browser.saveScreenshot("./screenshot/Login_Forms.png");

        //2. Take a picture - Input field Email
        $(EMAIL_TEXT_FIELD).setValue('asd@mail.com');
        browser.pause(1000);
        $(EMAIL_TEXT_FIELD).saveScreenshot("./screenshot/Input_FieldEmail.png");
        browser.pause(1000);

     });

});