let HomePage = function() {
    let singInButton = element(by.css('[class = "login"]'))

    this.openSite = function() {
        browser.driver.manage().window().maximize()
        browser.manage().timeouts().implicitlyWait(5000); 
        browser.get("http://automationpractice.com/index.php")
    }

    this.clickOnSignInButton = function() {
        singInButton.click()
    }
}

module.exports = new HomePage()