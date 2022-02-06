/// <reference types ="cypress" />
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import AddRemoveElementsPage from "../../integration/pageObjects/AddRemoveElementsPage";
import CheckboxesPage from "../../integration/pageObjects/CheckboxesPage";
import DropdownPage from "../../integration/pageObjects/DropdownPage";
import ContextMenuPage from "../../integration/pageObjects/ContextMenuPage";
import NavigationPage from "../../integration/pageObjects/NavigationPage";
import FormAuthenticationPage from "../../integration/pageObjects/FormAuthenticationPage";
import SecurePageAfterFormAuthenticationPage from "../../integration/pageObjects/SecurePageAfterFormAuthenticationPage";
import ShadowDomPage from "../../integration/pageObjects/ShadowDomPage";
import FileUploadPage from "../../integration/pageObjects/FileUploadPage";
import NotificationPage from "../../integration/pageObjects/NotificationPage";

const navigationPage = new NavigationPage();
const checkboxesPage = new CheckboxesPage();
const dropdownPage = new DropdownPage();
const addRemoveElementsPage = new AddRemoveElementsPage();
const contextMenuPage = new ContextMenuPage();
const formAuthenticationPage = new FormAuthenticationPage();
const securePageAfterFormAuthenticationPage = new SecurePageAfterFormAuthenticationPage();
const shadowDomPage = new ShadowDomPage();
const fileUploadPage = new FileUploadPage();
const notificationPage = new NotificationPage();

Given('I am on the herokuapp website',()=>{
    navigationPage.navigateToHerokuappWebsite();
})

When('I click on {string} link',(example)=>{
    navigationPage.navigateToexample(example);
})

Then('I should be able to check a checkbox',()=>{
    checkboxesPage.checkbox1().check()
        .should('be.checked');
})

Then('I should be able to uncheck a checkbox',()=>{
    checkboxesPage.checkbox2().uncheck()
        .should('not.be.checked');
})

Then('I should be able to select an {string} from the dropdown',(option)=>{
    dropdownPage.dropdown().select(option);
    dropdownPage.selectedValue().should('be.selected')
        .should('have.text', option);
})

Then('I should be able to add {string} elements',(count)=>{   
    cy.addElements(count);
    //Validate the number of buttons added
    addRemoveElementsPage.deleteButton().should('have.length', count);
})

Then('I should be able to delete {string} elements',(count)=>{
    addRemoveElementsPage.deleteButton().then((el)=>{
        const elemCount = el.length - count;
        if(elemCount < 0)
        {
            cy.log('There are not enouge delete buttons available to remove. Please change your deletion count and try again.');
        }
        else{
            cy.deleteElements(count);
            //Validate the number of avaiable delete button after deletion
            addRemoveElementsPage.deleteButton().should('have.length', elemCount);
        }
    })
})

Then('I should see a javascript alert after right-click in the box on the context menu page',()=>{
    contextMenuPage.contextBox().rightclick();
    cy.on('window:alert', (str) => {
        expect(str).to.equal('You selected a context menu')
    cy.on('window:confirm', ()=>true);
    }) 
})

When('I enter a valid username and password',()=>{
    formAuthenticationPage.formAuthenticationLogin();
})

Then('I should be able to login successfully',()=>{
    securePageAfterFormAuthenticationPage.msgAfterLogin().then(obj=>{
        var successfulLogin = obj.text(); 
        var successfulLogin = successfulLogin.split('\n');
        var actualMsg = successfulLogin[1].trim();
        expect(actualMsg).to.equal('You logged into a secure area!')
    })  
})

Then('I should see the login page after successful logout',()=>{
    securePageAfterFormAuthenticationPage.logoutButton().click();
    formAuthenticationPage.msgAfterLogout().then(obj=>{
        var successfulLogout = obj.text();
        var successfulLogout = successfulLogout.split('\n');
        var actualMsg = successfulLogout[1].trim();
        expect(actualMsg).to.equal('You logged out of the secure area!')
    })
})

Then('I should be able to validate the text in first text section',()=>{   
    shadowDomPage.firstTextSection().should('have.text', 'Let\'s have some different text!');
})

Then('I should be able to validate the text in second text section',()=>{   
    shadowDomPage.secondTextSection().eq(0).should('have.text', 'Let\'s have some different text!');
    shadowDomPage.secondTextSection().eq(1).should('have.text', 'In a list!');
})

Then('I should be able to validate the shadow elements',()=>{   
    shadowDomPage.firstShadowElement().should('have.text', 'My default text');
    shadowDomPage.secondShadowElement().should('have.text', 'My default text');
})

When('I select a file to upload - {string}',(fileName)=>{
    cy.uploadFile(fileName);
})

Then('I should be able to upload the file',()=>{
    fileUploadPage.fileUploadSuccessfulMessage().should('have.text', 'File Uploaded!');
}) 

When('I click on button to receive new notification',(fileName)=>{
    notificationPage.clickHereButton();
})
    
Then('I should be able to see valid notification as per user actions',()=>{
    notificationPage.notificationMessage().should('exist');

    notificationPage.notificationMessage().then(message =>{
        var msg = message.text();
        var msg = msg.split('\n');
        var actualMsg = msg[1].trim();
        expect(actualMsg).to.be.oneOf(['Action successful', 'Action unsuccesful, please try again']);
    })
})