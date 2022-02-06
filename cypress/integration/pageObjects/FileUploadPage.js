class FileUploadPage{

    chooseFileButton(){
        return cy.get('#file-upload');
    }

    uploadButton(){
        return cy.get('#file-submit');
    }

    fileUploadSuccessfulMessage(){
        return cy.get('h3');
    }
}
export default FileUploadPage;