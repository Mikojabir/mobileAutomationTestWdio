describe('Learing WebdriverIO API', function(){
     
    it('Click on Login Icon Successfully', function(){
        const LOGIN_ICON = '~Login'
        
        $(LOGIN_ICON).click();
        browser.pause(3000);
     });

});