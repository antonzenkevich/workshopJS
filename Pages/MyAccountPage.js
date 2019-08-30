let MyAccountPage = function() {
    let signOutButton = element(by.css('[title = "Log me out"]'))

    this.checkSignOutButtonIsDisplayed = function() {
        expect(signOutButton.isDisplayed()).toBeTruthy()
    }
}

module.exports = new MyAccountPage()