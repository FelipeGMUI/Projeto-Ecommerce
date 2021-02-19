const BASE_URL = `http://localhost:1337`;

async function carregarDados(colecao) { 
    const resposta = await fetch(BASE_URL + colecao)
    const dados = await resposta.json();
    return dados;
}
async function buscarProdutos(){
    const produtos = await carregarDados('/products');
    return produtos;

}
async function buscarProdutosEspecificos(chave, valor){
    const produtosEmPromocao = await carregarDados(`/products?${chave}=${valor}`);  
    return produtosEmPromocao;
    
}
 async function buscarCategorias(){
     const categorias = await carregarDados('/categories');
     return categorias;

 }
 async function buscarProdutosPorCategoria(categoria) {
    const categorias = await carregarDados(`/categories?slug=${categoria}`);

    return categorias [0].products;
 }
 async function incluirProdutosEmPromocaoNoDOM(){
    const produtos = await buscarProdutosEspecificos('sale','true');
        containerPromocao = document.querySelector(".featured__container");


    for(const produto of produtos) {

        const { name, price, image } = produto,
            preco= price.toLocaleString("pt-br", {style: "currency", currency: "BRL"})

        containerPromocao.innerHTML+= `        
        <article class="juice">
            <div class="juice__sale">Com 40% de desconto</div>
            <img src="${BASE_URL}${image.url}"alt="" class="juice__img" />
            <span class="juice__name">${name}</span>
            <span class="juice__price">${preco}</span>
            <a href="#" class="button-light"
            >Adicionar ao carrinho <i class="bx bx-right-arrow-alt button-icon"></i
            ></a>
       </article> 
    `
    }
 }
 async function incluirProdutosDeBasqueteNoDOM(){
    const produtos = await buscarProdutosPorCategoria('basquete');
        containerBasquete = document.querySelector(".tropicais__container");

        for(const produto of produtos) {

            const { name, price, image } = produto,
                preco= price.toLocaleString("pt-br", {style: "currency", currency: "BRL"})

     containerBasquete.innerHTML+= ` 
       <article class="juice">
            <img src="${BASE_URL}${image.url}" alt="" class="juice__img" />
            <span class="juice__name">${name}</span>
            <span class="juice__price">${preco}</span>
            <a href="#" class="button-light">
            Adicionar ao carrinho
            <i class="bx bx-right-arrow-alt button-icon"></i>
            </a>
        </article>
   `
        
        
 
 
    }
 }
 async function incluirProdutosDeFutebolNoDOM(){
    const produtos = await buscarProdutosPorCategoria('futebol');
        containerFutebol = document.querySelector(".futebol__container");

        for(const produto of produtos) {

            const { name, price, image } = produto,
                preco= price.toLocaleString("pt-br", {style: "currency", currency: "BRL"})

     containerFutebol.innerHTML+= ` 
       <article class="juice">
            <img src="${BASE_URL}${image.url}" alt="" class="juice__img" />
            <span class="juice__name">${name}</span>
            <span class="juice__price">${preco}</span>
            <a href="#" class="button-light">
            Adicionar ao carrinho
            <i class="bx bx-right-arrow-alt button-icon"></i>
            </a>
        </article>
   `
        
        
 
 
    }
 }
 async function incluirProdutosDeVariadosNoDOM(){
    const produtos = await buscarProdutosPorCategoria('esportes-variados');
        containerVariados = document.querySelector(".variados__container");

        for(const produto of produtos) {

            const { name, price, image } = produto,
                preco= price.toLocaleString("pt-br", {style: "currency", currency: "BRL"})

     containerVariados.innerHTML+= ` 
       <article class="juice">
            <img src="${BASE_URL}${image.url}" alt="" class="juice__img" />
            <span class="juice__name">${name}</span>
            <span class="juice__price">${preco}</span>
            <a href="#" class="button-light">
            Adicionar ao carrinho
            <i class="bx bx-right-arrow-alt button-icon"></i>
            </a>
        </article>
   `
        
        
 
 
    }
 }
 async function incluirProdutosNoShop(){
    const produtos = await buscarProdutos();
        containerShop = document.querySelector(".featured1__container");

        for(const produto of produtos) {

            const { name, price, image } = produto,
                preco= price.toLocaleString("pt-br", {style: "currency", currency: "BRL"})

     containerShop.innerHTML+= ` 
       <article class="juice">
            <img src="${BASE_URL}${image.url}" alt="" class="juice__img" />
            <span class="juice__name">${name}</span>
            <span class="juice__price">${preco}</span>
            <a href="#" class="button-light">
            Adicionar ao carrinho
            <i class="bx bx-right-arrow-alt button-icon"></i>
            </a>
        </article>
   `
        
        
 
 
    }
 }
 incluirProdutosNoShop();
 incluirProdutosDeVariadosNoDOM();
 incluirProdutosDeFutebolNoDOM();
 incluirProdutosEmPromocaoNoDOM();
 incluirProdutosDeBasqueteNoDOM();





