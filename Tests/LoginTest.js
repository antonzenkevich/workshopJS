let homePage = require("../Pages/HomePage"),
    signInPage = require("../Pages/SignInPage"),
    myAccountPage = require("../Pages/MyAccountPage")

it('Should click sign in button', function() {
    homePage.openSite()
    homePage.clickOnSignInButton()
    signInPage.fillInEmailField("workshop@email.com")
    signInPage.fillInPasswordField("12345678")
    signInPage.clickOnLoginButton()
    myAccountPage.checkSignOutButtonIsDisplayed()
})