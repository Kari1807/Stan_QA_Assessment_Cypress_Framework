class CheckboxesPage{

    checkbox1(){
        return cy.get('#checkboxes > :nth-child(1)');
    }

    checkbox2(){
        return cy.get('#checkboxes > :nth-child(3)');
    }
}
export default CheckboxesPage;