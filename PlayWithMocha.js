//Specifying for a test suite
describe('Account Feature', function() {

    // before(function() {
    //     console.log('BEFORE ALL TEST CASES');
    // });

    // after(function() {
    //     console.log('AFTER ALL TEST CASES');
    // });

    beforeEach(function() {
        console.log('Before Each Test Cases');
    });

    // afterEach(function() {
    //     console.log('After Each Test Cases');
    // });
    
    // Specify for a test case
    it('should show error when missing email', function() {
        console.log('first test case');
    });

    it('should create an account successfully', function() {
        console.log('second test case')
    });

});