QUnit.test("Test the getAreaCode function.", function (assert) {
    var num = "(415)555-5555";
    var result = getAreaCode(num);
    assert.deepEqual(result, "415", "Valid area code test passed.");
});

QUnit.test("Test the getCOCode function.", function (assert) {
    var num = "(415)261-8554";
    var result = getCOCode(num);
    assert.deepEqual(result, "261", "Valid CO code test passed.");
});

QUnit.test("Test the getLineCode function.", function (assert) {
    var num = "(415)261-8554";
    var result = getLineCode(num);
    assert.deepEqual(result, "8554", "Valid line code test passed.");
});

QUnit.test( "Errors thrown for getAreaCode", function( assert ) {
    assert.throws( function() {
        getAreaCode("415)261-8554");
    }, "Missing '('. An error should have been thrown." );

    assert.throws( function() {
        getAreaCode("(415261-8554");
    }, "Missing ')'. An error should have been thrown." );

    assert.throws( function() {
        getAreaCode("4152618554");
    }, "Missing parentheses around area code. An error should have been thrown." );
});

QUnit.test( "Errors thrown for getCOCode", function( assert ) {
    assert.throws( function() {
        getCOCode("(415)2364-4533");
    }, "Too many digits. An error should have been thrown." );

    assert.throws( function() {
        getCOCode("(415) 345-5647");
    }, "Incorrect formatting. An error should have been thrown.");

    assert.throws( function() {
        getCOCode("(415)2618554");
    }, "Missing dash. An error should have been thrown.");
});

QUnit.test( "Errors thrown for getLineCode", function( assert ) {
    assert.throws( function() {
        getLineCode("(415)245-53333");
    }, "Incorrect formatting. An error should have been thrown." );

    assert.throws( function() {
        getLineCode("(415)345-567");
    }, "Incorrect formatting. An error should have been thrown.");

    assert.throws( function() {
        getLineCode("(415)2618554");
    }, "Missing dash. An error should have been thrown.");
});


