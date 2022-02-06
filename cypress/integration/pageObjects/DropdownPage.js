class DropdownPage{

    dropdown(){
        return cy.get('#dropdown');
    }

    selectedValue(){
        return this.dropdown().find('option[selected="selected"]');
    }
}
export default DropdownPage;