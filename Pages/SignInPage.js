let SignInPage = function() {
    let emailField = element(by.id('email')),
        passwordField = element(by.id('passwd')),
        logInButton = element(by.id('SubmitLogin'))

    this.fillInEmailField = function(username) {
        emailField.sendKeys(username)
    }

    this.fillInPasswordField = function(password) {
        passwordField.sendKeys(password)
    }

    this.clickOnLoginButton = function() {
        logInButton.click()
    }
}

module.exports = new SignInPage()