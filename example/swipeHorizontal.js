describe('Learing WebdriverIO API',function(){


    it('Swipe Horizontal',function(){

        const SWIPE_HOME_ICON = '~Swipe';

        //0. Click Swipe Icon
        $(SWIPE_HOME_ICON).click();
        browser.pause(1000)

        //1. Swipe 5x to right
        driver.touchAction([
            {action: 'press', x: 56, y: 586},
            {action: 'moveTo', x: 45, y: 135},
            'release'
          ]);
          

        //2. Swipe 5x to right
        // for(let i = 1; i + 1; 1--){
        //     driver.touchAction([
        //         {action: 'press', x: 479, y: 763},
        //         {action: 'moveTo', x: 60, y: 770},
        //         'release'
        //       ]);
        //       browser.pause(1000)
        // }
    });
        
});