describe ('cuentas', function(){
var a=11;

it('vamos a ver una falla y su descripcion', function(){
    expect (1==3,"Aca va la descripcion del fallo").to.equal(true);
    
    })


it('vamos a ver una igualdad', function(){
expect (1==1).to.equal(true);

})

it('que no sea igualdad', function(){
    expect (1==2).to.equal(false);

})

it('resta bien echa', function(){
    expect (1-1).to.equal(0);

})

it('resta mal echa', function(){
    expect (1-1).to.not.equal(2);

})

it('tienme que ser verdadero', function(){
    expect (2==2).to.be.true;

})

it('tiene que ser falso', function(){
    expect (2==1).to.be.false;


})

it('la variable existe', function(){
    expect(a).to.exist;

})

it('es menor a 10', function(){
expect(a).to.be.lessThan(100);

})

it('es mayor a 10', function(){
    expect(a).to.be.greaterThan(10);

})


})