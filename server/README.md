<h1 align="center">
  <img alt="FastFeet" title="FastFeet" src="../.github/LogoFastFeetGoStack.png" width="300px" /> <br />
	API
</h1>

Após executar os processos para [instalação e execução](https://github.com/EliasGcf/fastfeet/#computer-instala%C3%A7%C3%A3o-execu%C3%A7%C3%A3o-e-desenvolvimento), vamos utilizar as seguintes rotas em nosso backend.

## Rotas

### Legenda

Body em vermelho: <span style="color:red">REQUIRED</span>

### Sessões

Usada apenas para autenticação do admin:

Método | URI | Parâmetros | Body | Descrição | Retorno |
-------|-----|:----------:|:----:|-----------|:-------:|
POST | /sessions | ❌ | <code><span style="color:red">email</span></code> e <code><span style="color:red">password</span></code> | Gera um token JWT. | `{ user: { id, name }, token }` |

### Files

Rota para envio de arquivo de imagem.

Método | URI | Parâmetros | Body | Descrição | Retorno |
-------|-----|:----------:|:----:|-----------|:-------:|
POST | /files | Via Multipart Form: `file` | ❌ | Rota para enviar uma imagem | `{ id, url, name, path, createdAt, updatedAt }` |

### Rotas do admin: Exige Token JWT

> Em todas as rotas a seguir, **deve** ser enviado o token jwt. No formato <code style="color:red">Bearer TOKEN</code>

### Recipients

Rotas para gerenciamento dos **destinatários**

Método | URI | Parâmetros | Body | Descrição | Retorno |
-------|-----|:----------:|:----:|-----------|:-------:|
POST | /recipients | `token JWT` | <code><span style="color:red">name</span></code>, <code><span style="color:red">street</span></code>, <code><span style="color:red">number</span></code>, <code><span style="color:red">state</span></code>, <code><span style="color:red">city</span></code> e <code><span style="color:red">zip_code</span></code> | Criar um destinatário | `{ id, name, street, number, state, city, zip_code }` |
PUT | /recipients/:id | `token JWT` e `id`: id referente ao destinatário no banco de dados | <code><span style="color:red">name</span></code>, <code><span style="color:red">street</span></code>, <code><span style="color:red">number</span></code>, <code><span style="color:red">state</span></code>, <code><span style="color:red">city</span></code> e <code><span style="color:red">zip_code</span></code> | Criar um destinatário | `{ id, name, street, number, state, city, zip_code }` |


### Deliverymen

Rotas para genrenciamento dos **entregadores**

Método | URI | Parâmetros | Body | Descrição | Retorno |
-------|-----|:----------:|:----:|-----------|:-------:|
POST | /deliverymen | `token JWT` | <code><span style="color:red">name</span></code> e <code><span style="color:red">email</span></code> | Criar um entregador | `{ id, name, email }` |
PUT | /deliverymen/:id | `token JWT` e `id`: id referente ao entregador no banco de dados | <code><span style="color:red">name</span></code> e <code><span style="color:red">email</span></code> | Editar um entregador | `{ id, name, email }` |

