var app = require('../additionExm.js');

describe("Addition", function(){
    it("the function should add 2 numbers", function(){
        var value = app.AddNumber(5,6);
        expect(value).toBe(11);
        }
    )
})