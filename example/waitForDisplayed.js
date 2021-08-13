describe('Learing WebdriverIO API', function(){
     
    it('Wait For Displayed', function(){

        //Declare selector
        const FORMS_ICON_HOME_SCREEN = '~Forms';
        const LOGIN_FORM = '~Login';
        const SWITCH_BTN = '~switch';

        //0. go to the forms Login
        $(LOGIN_FORM).click();

        //Wait sometime - 4 seconds --> Try Manualy click on the form screen


        //1. toggle the switch button
        $(SWITCH_BTN).waitForDisplayed({timeout: 5000});
        $(SWITCH_BTN).click(); 

        //2. wait a little to see result
        browser.pause(3000);

     });

});