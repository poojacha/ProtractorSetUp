import { browser, element, by, protractor} from 'protractor';



export class googlePage{

//List of elements
GoogleSearchInput = element(by.css('div.sbib_b input'));
SearchResultElements = element.all(by.css('div.g h3 a'));

    goToGoogle(){
        browser.ignoreSynchronization = true;
        browser.get("https://www.google.com/");
        browser.sleep(2000);
    }

    searchInGoogle(searchText:string){
        this.GoogleSearchInput.sendKeys(searchText);
        this.GoogleSearchInput.sendKeys(protractor.Key.ENTER);
        browser.sleep(2000);
    }

    verifySeachElementsDisplay(){
        return this.SearchResultElements.isDisplayed().then(function () {
            return true;
        }, function (err) {
            console.error("Search did not bring up any results");
            return false;
        });
    }

}