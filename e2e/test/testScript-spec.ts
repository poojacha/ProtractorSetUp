var util = require('util');
var searchText = require('../../e2e/data/data.json');
const using = require('jasmine-data-provider');
import { googlePage } from '../../e2e/page/GooglePage.po';
import { browser, element, by, protractor } from 'protractor';

let gpage: googlePage;


describe('Dashboard Tests -', function () {

    beforeEach(function () {
        browser.manage().deleteAllCookies();
        gpage = new googlePage();
    });

    function Options() {
        return [
            //reading data from json file
            { option:  searchText["1"]},
            { option:  searchText["2"]}
       
        ];
    }
    using(Options, function (data) {
        it('should load Dashboard', function () {
            // opening browser and seraching in google
            gpage.goToGoogle();
            gpage.searchInGoogle(data.option);
            expect(browser.getCurrentUrl()).toContain(data.option);

            //Selecting each element in the search term and verifying desired element displayed
            gpage.verifySeachElementsDisplay();
            gpage.SearchResultElements.each(function (element, index) {
                element.getText().then(function (text) {
                    if (text.indexOf("Paxos | Bankchain") == 0) {
                        console.log("TEST PASSES at Index :" + index);
                    }
                });
            });

        });
    });

});