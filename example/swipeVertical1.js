describe("Learning Swipe Vertially", function () {
  it("should swipe vertially", function () {

    const SWIPE_HOME_ICON = "~Swipe";
    const SWIPE_TXT = ('//android.widget.TextView[@text="FULLY OPEN SOURCE"]')

    //0. 
    $(SWIPE_HOME_ICON).click();
    browser.pause(2000);

    //1. scroll Into view
    // $(SWIPE_TXT).touchAction({
    //     action: 'press', x: 60, y:248
    // })
        
    driver.touchAction([
        {action: 'press', x: 41, y: 554},
        {action: 'moveTo', x: 47, y: 114},
        'release'
      ]);      


  });
});
