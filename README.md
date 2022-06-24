# 🍺 O que é a aplicação
Projeto em grupo desenvolvido enquanto estudante da trybe no módulo de Back-End, é uma plataforma de delivery para compra e venda de cervejas.

Integrantes:
Adadezer Iwazaki: https://github.com/Adadezer
Douglas Oliveira: https://github.com/Doug77
Pedro Muniz: https://github.com/kariluss
Thiago Lordêllo: https://github.com/thiagolordello/thiagolordello
Victor Varges: https://github.com/VictorVarges

# 🍻 Detalhes da aplicação
Responsável por criar e integrar tanto o back-end quanto o front-end, criando uma plataforma de delivery para bebidas. A aplicação:

-   Tem acesso via login: tanto clientes como vendedores, tem acesso ao aplicativo via login, porém para funções diferentes: 
(1) O cliente, que compra da lista de produtos; 
(2) O vendedor, que aprova, prepara e entrega;

-   Faz a comunicação entre clientes e vendedores: o cliente faz o pedido via "carrinho de compras" o vendedor aprova, prepara e envia esse pedido. Quando o produto é recebido por quem comprou, essa pessoa marca o pedido como "recebido". Ambos devem possuem detalhes sobre seus pedidos;
-   Se o cliente faz o pedido, o mesmo deve aparecer para o vendedor em seu dash de pedidos após a atualização da página. A pessoa cliente, por sua vez, deve ter as informações sobre seu pedido quando sua página for atualizada, ou seja, ter informações se o pedido está sendo preparado ou se já saiu pra entrega;

Ps: Como grupo, foi dividido 2 equipes para o desenvolvimento, as equipes foram constituídas por:
(1) **Equipe fluxo de cliente**: Adadezer e Douglas
(2) **Equipe fluxo do vendedor**: Thiago, Victor e Pedro
(3) **CSS**: Adadezer e Thiago

Ps²: O projeto não está 100% concluído e necessita de algumas melhorias, mas está todo funcional e com o mínimo de desenvolvimento já implementado

# 💻 Tecnologias Utilizadas
	
Nesse projeto, foram utilizados as tecnologias:

 - React
 - Context API
 - JavaScript
 - CSS
 - Bootstrap
 - Node.Js
 - Express
 - Sequelize
 - MySQL

# 🖥️ Aplicação
	
Essa é uma demonstração do projeto
Caso queira logar na aplicação utilize os seguintes usuários:
(1) cliente:
```
login: zebirita@email.com
senha: $#zebirita#$ 
```
(2) vendedor:
```
login: fulana@deliveryapp.com
senha: fulana@123 
```
# 🤷🏽‍♀️ Como Instalar e Utilizar

## ⚠️ Informações importantes
 
- O projeto foi desenvolvido usando o MySQL como banco de dados, caso queira rodar a aplicação localmente certifique-se de tê-lo em sua máquina, e esteja iniciado.

- O ORM usado é o Sequelize, garanta q ele também esteja em sua máquina. O comando `npm run db:reset` restaura o banco e cria as migrations e os seeders.

- Caso deseje, você pode criar o banco manualmente usando o exemplo em `db.example.sql` 

- Para haver a comunicação do banco e entre os endpoints é preciso criar um arquivo `.env` nas pastas back-end e front-end, para preenchê-los temos um exemplo em cada pasta no arquivo `.env.example`

### 🪛 Scripts relevantes do  `package.json`  principal

São os scripts da raiz do projeto (`./package.json`) e não das aplicações individuais  `./front-end/package.json`  e  `./back-end/package.json`:

-   `start`: Limpa as portas  `3000`  e  `3001`  e simula a inicialização no avaliador. Também prepara o campo rodando o  `Sequelize`  para restaurar o  **banco de dados de testes**  (final  `-test`) e sobe a aplicação com  `pm2`  em modo  `fork`  (uma instância para cada aplicação). Nesse modo, as alterações não são assistidas;
    
    -   _uso (na raiz do projeto):  `npm start`_
-   `stop`: Para e deleta as aplicações rodando no  `pm2`;
    
    -   _uso (na raiz do projeto):  `npm stop`_
-   `dev`: Limpa as portas  `3000`  e  `3001`  e sobe a aplicação com  `pm2`  em modo  `fork`  (uma instância pra cada aplicação). Nesse modo, as atualizações são assistidas (modo  `watch`);
    
    -   _uso (na raiz do projeto):  `npm run dev`_
-   `dev:prestart`: A partir da raiz, esse comando faz o processo de instalação de dependências (`npm i`) nos dois projetos (`./front-end`  e  `./back-end`) e roda o  `Sequelize`  no  `./back-end`  (lembrar de configurar o  `.env`  no mesmo);
    
    -   _uso (na raiz do projeto):  `npm run dev:prestart`_
-   `db:reset`: Roda os scripts do  `Sequelize`  restaurando o  **banco de dados de desenvolvimento**  (final  `-dev`). Utilize esse script caso ocorra algum problema no seu banco local;
    
    -   _uso (na raiz do projeto):  `npm run db:reset`_

## ▶️ Instalando e executando

1- Abra o terminal, e clone o repositório 
 
 - `git clone git@github.com:Adadezer/app-delivery.git`.

2- Entre na pasta do repositório que você acabou de clonar:
 - `cd app-delivery`

 3- Instale as dependências:
 - `npm run dev:prestart`
  
 4- Em uma nova guia do terminal, entre na pasta back-end
 - `cd back-end`
 
5-Instale as dependências:
 
 - `npm install`.

6- Execute a aplicação do back:
 - `npm run dev`
	 - Irá aparecer uma mensagem como essa: "Api rodando na porta 3001"

 7- Em uma nova guia do terminal, entre na pasta front-end
 - `cd front-end` (a partir da raiz)
 
8-Instale as dependências:
 
 - `npm install`.
  
 9- Execute a aplicação do front:
 - `npm start` 