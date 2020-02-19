## Etapa 01

- [x] Autenticação
	- [x]	Seed para usuário admin
	- [x]	Validação dos dados de entrada (email e senha)
	- [x]	Rotas apenas para usuários logados

</br>

- [x] Gestão de destinatários
	- [x] Cadastro permitido apenas para admin autenticados
	- [x] Cadastrar
		- [x] Validação dados
	- [x] Atualizar
		- [x] Validação dados

## Etapa 02

### Funcinalidades gerais
- [x] Rota para realizar o upload de images
- [ ] Estilizar os emails

### Funcionalidades do administrador
- [x] Gestão de entregadores (Deliverymen)
	- [x] Realizar o CRUD completo
		- [x] Validação de dados
</br>

- [x] Gestão de encomendas
	- [x] Realizar o CRUD completo
		- [x] Validação de dados
</br>

### Funcionalidades do entregador
- [x] Visualizar encomendas por meio do ID
	- [x] Por padrão encomendas pentendes
	- [x] Também encomendas já entregues
- [x] Alterar status de encomendas
 - [x] Incluir data de retirada (start_date) e entrega (end_date)
 - [x] Apenas 5 retiradas por dia
 - [x] Funcionalidade de entrega deve permitir envio de uma imagem para preencher o campo `signature_id`
- [x] Cadastrar problemas nas entregas
	- [x] Rota para a distribuidora listar as entregas com problemas
	- [x] Rota para listar todos os problemas de uma encomenda, a partir do ID da encomenda
	- [x] Rota para o ENTREGADOR registar um problema, a partir do ID da encomenda
	- [x] Rota para a distribuidora cancelar uma entrega, a partir do ID do problema. Quando uma encomenda for cancelada, o entregador deve receber um email.

## Etapa 03

### Novas funcionalidades

- [ ] Filtro na listagem de encomendas pelo nome do produto, `?q=Piano`
- [ ] Filtro na listagem de entregadores pelo nome, `?q=Jonh`
- [ ] Filtro na listagem de destinatários pelo nome, `?q=Ludwig`

_Para todos os casos a cima, utilize o operador `Like`, e caso o parrâmetro nao seja passado, retorne todos os dados_
