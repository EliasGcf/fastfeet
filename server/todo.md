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

### Funcionalidades do administrador
- [x] Gestão de entregadores (Deliverymen)
	- [x] Realizar o CRUD completo
		- [x] Validação de dados
</br>
- [] Gestão de encomendas
	- [] Realizar o CRUD completo
		- Falta enviar email no método `store`
		- Falta os métodos: update, destroy
		- [] Validação de dados
</br>

### Funcionalidades do entregador
- [] Visualizar encomendas por meio do ID
	- [] Por padrão encomendas pentendes
	- [] Também encomendas já entregues
- [] Alterar status de encomendas
 - [] Incluir data de retirada (start_date) e entrega (end_date)
 - [] Apenas 5 retiradas por dia
 - [] Funcionalidade de entrega deve permitir envio de uma imagem para preencher o campo `signature_id`
- [] Cadastrar problemas nas entregas
	- [] Rota para a distribuidora listar as entregas com problemas
	- [] Rota para listar todos os problemas de uma encomenda, a partir do ID da encomenda
	- [] Rota para o ENTREGADOR registar um problema, a partir do ID da encomenda
	- [] Rota para a distribuidora cancelar uma entrega, a partir do ID do problema. Quando uma encomenda for cancelada, o entregador deve receber um email.
