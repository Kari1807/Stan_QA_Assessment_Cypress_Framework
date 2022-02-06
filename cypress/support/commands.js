// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';
import AddRemoveElementsPage from "../integration/pageObjects/AddRemoveElementsPage";
import FileUploadPage from '../integration/pageObjects/FileUploadPage';

const addRemoveElementsPage = new AddRemoveElementsPage();
const fileUploadPage = new FileUploadPage();

Cypress.Commands.add('addElements', (count) => { 
    for(var i=1; i<=count; i++){
        addRemoveElementsPage.addButton().click();        
    }  
})

Cypress.Commands.add('deleteElements', (count) => {
    for(var i=count-1; i>=0; i--){
        addRemoveElementsPage.deleteButton().eq(i).click();        
    }  
})

// Reusable method to upload any .png file
Cypress.Commands.add('uploadFile', (fileName) => {
    cy.fixture(fileName + '.png').then(fileContent => {
        fileUploadPage.chooseFileButton().attachFile({
            fileContent: fileContent.toString(),
            fileName: fileName + '.png',
            mimeType: 'image/png'
        });
    });
    fileUploadPage.uploadButton().click();  
})








