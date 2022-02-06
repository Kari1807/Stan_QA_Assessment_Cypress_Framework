class NavigationPage{

    navigateToHerokuappWebsite(){
        cy.visit('');
        
    }

    navigateToexample(example){
        this.exampleType(example).click();

    }

    exampleType(example){
        //return cy.get('a[href="/' + example + '"]');
        return cy.contains('a',example);
    }
}
export default NavigationPage;