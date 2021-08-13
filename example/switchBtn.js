describe('Learing WebdriverIO API', function(){
     
    it('Toggle switch button', function(){


        //Declare selector
        const FORMS_ICON_HOME_SCREEN = '~Forms';
        const SWITCH_BTN = '~switch';
        
        //0. go to the forms field 
        $(FORMS_ICON_HOME_SCREEN).click();

        //1. toggle the switch button
        $(SWITCH_BTN).click(); 

        //2. wait a little to see result
        browser.pause(3000);

     });

});