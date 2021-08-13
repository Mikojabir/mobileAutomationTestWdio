describe('Learning webdriverIO API',function(){

    //Selector with Set Value
    it('getValue Element', function(){

        //Declare element selector value
        const FORM_ICON_HOME_SCREEN = '~Forms';
        const INPUT_TXT = '~text-input';
        const INPUT_TXT_DISPLAY = '~input-text-result';


        //0. Click on Form on from home screen
        $(FORM_ICON_HOME_SCREEN).click();

        //1. Try to input some values in text field
        $(INPUT_TXT).setValue('asd');

        //2. Get the value the field [you have typed]
        let displayed_text = $(INPUT_TXT_DISPLAY).getText();

        //3. Print out that value 
        console.log('displayed_text');

    });

});