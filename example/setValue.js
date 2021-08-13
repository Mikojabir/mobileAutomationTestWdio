describe('Learning webdriverIO API',function(){

    //Selector with Set Value
    it('should input username and password - success', function(){

        //Declare element selector value
        const LOGIN_ICON_HOME_SCREEN = '~Login'
        const EMAIL_TEXT_FIELD = '~input-email'
        const PASSWORD_TEXT_FIELD = '~input-password'
        const LOGIN_BTN = '~button-LOGIN'

       
        //1. Click on login on Home Screen
        $(LOGIN_ICON_HOME_SCREEN).click();
        //2. Fill email text field
        $(EMAIL_TEXT_FIELD).setValue('tesdev@getnada.com');
        //3. Fill password text field
        $(PASSWORD_TEXT_FIELD).setValue('123123');
        //4. Click on Login button 
        $(LOGIN_BTN).click();

        browser.pause(3000);

    });
});