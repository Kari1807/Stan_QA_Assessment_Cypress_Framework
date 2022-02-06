class ShadowDomPage{

    firstTextSection(){
        return cy.get('my-paragraph').eq(0).find('span');
    }

    secondTextSection(){
        return cy.get('my-paragraph').eq(1).find('ul > li');
    }
    
    firstShadowElement(){
        return cy.get('my-paragraph').eq(0).shadow().find('p');
    }

    secondShadowElement(){
        return cy.get('my-paragraph').eq(1).shadow().find('p');
    }
}
export default ShadowDomPage;