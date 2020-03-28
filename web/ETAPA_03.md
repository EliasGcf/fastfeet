<h1 align="center">
  <img alt="FastFeet" height="215" title="FastFeet" src="../.github/logo.svg" />
</h1>

<h3 align="center">
  FastFeet, front-end web
</h3>

<p align="center">Confira em <a href="https://github.com/EliasGcf/fastfeet/blob/master/mobile/ETAPA_04.md">ETAPA 4</a> as instruções para os próximos passos</p>

<h3 align="center">
  :warning: Etapa 3/4 do Desafio Final :warning:
</h3>

<p>Esse desafio faz parte do Desafio Final, que é uma aplicação completa (Back-end, Front-end e Mobile) que é avaliada para emissão do Certificado do Bootcamp GoStack, por isso é fundamental que ele seja feito com muito empenho!</p>

<blockquote align="center">“Mude você e todo o resto mudará naturalmente”!</blockquote>

<p align="center">
  <a href="#-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>
</p>

## 🚀 Sobre o desafio

Durante esse desafio vamos construir o front-end da aplicação FastFeet que criamos o back-end durante os desafios dos módulos 02 e 03 de Node.js.

A versão web do projeto FastFeet representa a visão da distribuidora, ou seja, todas funcionalidades presentes na versão web são para administradores. As funcionalidades para o entregador serão dispostas no aplicativo mobile.

### Novas funcionalidades

Antes de iniciar a parte web, **adicione as seguintes funcionalidades no back-end** da aplicação:

1. Permita que a listagem de encomendas seja filtrada pelo nome do produto, recebendo um Query Parameter `?q=Piano` e buscando no banco encomendas com esse filtro (utilize os operadores `Like` ou `iLike`). Caso o parâmetro não seja passado, retorne todas as encomendas;

2. Permita que a listagem de entregadores seja filtrada pelo nome do entregador, recebendo um Query Parameter `?q=John` e buscando no banco entregadores com esse filtro (utilize os operadores `Like` ou `iLike`). Caso o parâmetro não seja passado, retorne todos os entregadores;

3. Permita que a listagem de destinatários seja filtrada pelo nome do destinatário, recebendo um Query Parameter `?q=Ludwig` e buscando no banco destinatários com esse filtro (utilize os operadores `Like` ou `iLike`). Caso o parâmetro não seja passado, retorne todos os destinatários;

### Informações importantes

1. Antes de cancelar encomendas ou deletar qualquer registro do banco crie uma verificação adicinal usando a função `confirm` do JavaScript;
2. Para formatação de datas utilize sempre a biblioteca `date-fns`;
3. No cadastro/edição de encomendas deve ser possível buscar o entregador e o destinatário pelo nome. Utilize o método `async` da biblioteca [React Select](https://react-select.com/home#async). As encomendas devem ser buscadas da API assim que a página carregar e não devem possuir filtro.

### Opcionais

1. Adicione paginação no front-end e back-end para todas listagens;
2. Utilize máscaras para o input de CEP;
3. Crie um filtro para visualizar apenas as entregas com problemas na listagem de encomendas.

## 🎨 Layout

O layout do desafio está em anexo como um arquivo `.xd`.

Caso esteja usando OS X / Windows você pode abrir esse utilizando o Adobe Xd.

Caso contrário, você pode utilizar a seguinte URL para visualizar todas as telas: [Visualizar](https://xd.adobe.com/view/62e829fc-4f10-4ac8-70d2-d39b429d43ee-14d9/grid/)

---

Feito com ♥ by Rocketseat :wave: [Entre na nossa comunidade!](https://discordapp.com/invite/gCRAFhc)
