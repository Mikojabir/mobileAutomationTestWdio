describe('Learning webdriverIO API',function(){

    //Selector with Set Value
    it('addValue API', function(){

        //Declare element selector value
        const LOGIN_ICON_HOME_SCREEN = '~Login'
        const EMAIL_TEXT_FIELD = '~input-email'
 

       
        //1. Click on login on Home Screen
        $(LOGIN_ICON_HOME_SCREEN).click();

        //2. Fill email text field using addValue
        let email_txt_elem = $(EMAIL_TEXT_FIELD); //return an element
        email_txt_elem.addValue('a@a');
        email_txt_elem.addValue('.com');

        //3. Demonstrate about setValue
        $(EMAIL_TEXT_FIELD).setValue('new@a.com')

        //4. Clear the text field 
        $(EMAIL_TEXT_FIELD).clearValue();

        browser.pause(3000);

    });
});