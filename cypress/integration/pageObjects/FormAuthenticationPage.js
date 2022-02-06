class FormAuthenticationPage{
    usernameInput(){
        return cy.get('#username');
    }

    passwordInput(){
        return cy.get('#password');
    }

    loginButton(){
        return cy.get('button[type="submit"]');
    }

    msgAfterLogout(){
        return cy.get('#flash');
    }

    formAuthenticationLogin(){
        // Input Username and Password from Fixture file - LoginUser
        cy.fixture('LoginUser').then((user)=>{
            this.usernameInput().clear()
                .type(user.username);
            this.passwordInput().clear()
                .type(user.password);
        })
        this.loginButton().click({force:true});
    }
}
export default FormAuthenticationPage;