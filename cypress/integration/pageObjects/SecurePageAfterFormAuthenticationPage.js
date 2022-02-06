class SecurePageAfterFormAuthenticationPage{

    msgAfterLogin(){
        return cy.get('#flash');
    }

    logoutButton(){
        return cy.get('a[href="/logout"]');
    }
}
export default SecurePageAfterFormAuthenticationPage;