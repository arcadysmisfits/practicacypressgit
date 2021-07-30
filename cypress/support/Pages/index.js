

/*Page Objects Ejemplo*/


class indexPage{
    constructor(){
        this.searchImput = 'Aca va el selector';
        this.searchBottom = 'Aca va el selector';
    }

    search = (element) =>{

        cy.get(this.searchImput).type(element);
        cy.get(this.searchBottom).click();
    }

}
export default new indexPage();