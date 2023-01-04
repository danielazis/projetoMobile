const { Given, When, Then } = require('@wdio/cucumber-framework')

const HomePage = require('../pageobjects/HomePage')
const ProductPage = require('../pageobjects/ProductPage')

Given(/^que acesso a pagina inicial do app$/, async () =>{
    // como já abre e acessa automaticamente
    // esperar o carregamento da página
    await HomePage.waitLoading()
})
// espressao regular: extrator ([^"]*)?
When(/^clico em "([^"]*)?"$/, async (produto) =>{
    await HomePage.clickProduct(produto)
})
Then(/^aparece a pagina com o produto "([^"]*)?" por "([^"]*)?"$/, async (produto, preco) =>{
    // validar o nome do produto
    expect(await ProductPage.titulo.getText()).toEqual(produto)
    // arrasta pra cima
    await ProductPage.arrastaParaCima()
    // validar o preço
    expect(await ProductPage.preco.getText()).toEqual(preco)
})

