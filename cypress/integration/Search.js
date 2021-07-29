describe('search',function(){
    it('search with results',function(){
        cy.visit('https://google.com.ar');
        cy.get('.gLFyf').type('Casa');
        cy.get('.gLFyf').clear();
        cy.get('.gLFyf').type('Casasa');
        cy.get('.o3j99.ikrT4e.om7nvf').click('topLeft');
        cy.get('.FPdoLc > center > .gNO89b').click();
        
    })

    it('Search image', function(){
    
        cy.get('input.gLFyf').clear();
        cy.get('input.gLFyf').type('Loro {enter}');
        cy.get('.MUFPAc > :nth-child(2) > a').click();
    })






})