class AddRemoveElementsPage{
    
    addButton(){
        return cy.get('button[onclick="addElement()"]');
    }

    deleteButton(){
        return cy.get('#elements').find("button");
    }
}
export default AddRemoveElementsPage;