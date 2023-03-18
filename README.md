<p>Documentação</p>
<p>Este código é um servidor Node.js que utiliza o framework Express.js e o banco de dados PostgreSQL para criar rotas e armazenar dados de uma rede social. As rotas disponíveis permitem cadastrar e autenticar usuários, criar e visualizar posts e visualizar comentários de um post específico.</p>
<p>Dependências</p>
<ul>
    <li>As seguintes dependências são necessárias para executar este código:</li>
    <ul>
        <li>zod</li>
        <li>express</li>
        <li>pg</li>
    </ul>
</ul>
<p>Como executar</p>
<p>Antes de executar este código, certifique-se de ter o PostgreSQL instalado e rodando em sua máquina. Também é necessário criar um banco de dados com o nome "RedeSocial" e uma tabela "users" com as colunas "id", "name", "email" e "password". Além disso, é necessário atualizar as credenciais do banco de dados na criação do objeto client na linha 11.</p>
<p>Para executar este código, siga as etapas abaixo:</p>
<ol>
    <li>Clone este repositório em sua máquina:</li>
    <ul>
        <li>git clone https://github.com/Felipe-Gs/RedeSocialApp.git</li>
    </ul>
    <li>Instale as dependências: cd rede-social npm install</li>
</ol>
<p>POST /cadastrar</p>
<p>Cadastra um novo usuário na base de dados</p>
<p>Parâmetros:</p>
<ul>
    <li>name: string (obrigatório, mínimo de 3 caracteres)</li>
    <li>email: string (obrigatório, formato de email válido)</li>
    <li>password: string (obrigatório, mínimo de 3 caracteres)</li>
</ul>
<p>Retorna:</p>
<ul>
    <li>Status 200 se o usuário foi cadastrado com sucesso</li>
    <li>Status 400 se algum parâmetro inválido foi fornecido ou ocorreu algum erro ao cadastrar o usuário</li>
</ul>
<p>POST /login</p>
<p>Realiza login de um usuário na aplicação</p>
<p>Parâmetros:</p>
<ul>
    <li>email: string (obrigatório, formato de email válido)</li>
    <li>password: string (obrigatório, mínimo de 3 caracteres)</li>
</ul>
<p>Retorna:</p>
<ul>
    <li>Status 200 e um objeto JSON com os dados do usuário se o login foi realizado com sucesso</li>
    <li>Status 401 se o email ou a senha estão incorretos</li>
    <li>Status 500 se ocorreu algum erro durante a operação</li>
</ul>
<p>GET /listar</p>
<p>Retorna uma lista de todos os usuários cadastrados</p>
<p>Retorna:</p>
<ul>
    <li>Status 200 e um array de objetos JSON com os dados de todos os usuários cadastrados</li>
    <li>Status 500 se ocorreu algum erro durante a operação</li>
</ul>
<p>POST /posts</p>
<p>Cria um novo post na base de dados</p>
<p>Parâmetros:</p>
<ul>
    <li>title: string (obrigatório, mínimo de 5 caracteres
 PUT /estudante/volta/:id

Rota para atualizar o status do estudante para volta. URL Parameters:

    id: ID do estudante.

Request Body JSON:

{ "volta": true }

Responses:

    200 OK: Retorna um objeto com a mensagem "Status atualizado com sucesso."
    500 Internal Server Error: Retorna um objeto com a mensagem de erro "Erro ao atualizar status."

<ul>
  <li>
    <strong>POST /posts</strong>
    <p>Cria um novo post na base de dados</p>
    <p>Parâmetros:</p>
    <ul>
      <li>title: string (obrigatório, mínimo de 5 caracteres)</li>
      <li>description: string (obrigatório, mínimo de 5 caracteres)</li>
      <li>image: string (opcional)</li>
      <li>user_id: número (obrigatório)</li>
      <li>user_name: string (opcional)</li>
    </ul>
    <p>Retorna:</p>
    <ul>
      <li>Status 200 se o post foi criado com sucesso</li>
      <li>Status 400 se algum parâmetro inválido foi fornecido ou ocorreu algum erro durante a operação</li>
    </ul>
  </li>
  <li>
    <strong>GET /visualizarPost/:id</strong>
    <p>Retorna um post específico a partir do ID fornecido</p>
    <p>Parâmetros:</p>
    <ul>
      <li>id: número (obrigatório)</li>
    </ul>
    <p>Retorna:</p>
    <ul>
      <li>Status 200 e um objeto JSON com os dados do post encontrado</li>
      <li>Status 500 se ocorreu algum erro durante a operação</li>
    </ul>
  </li>
  <li>
    <strong>GET /visualizarPost</strong>
    <p>Retorna uma lista com todos os posts cadastrados</p>
    <p>Retorna:</p>
    <ul>
      <li>Status 200 e um array de objetos JSON com os dados de todos os posts cadastrados</li>
      <li>Status 500 se ocorreu algum erro durante a operação</li>
    </ul>
  </li>
  <li>
    <strong>GET /comentarios/:id</strong>
    <p>Retorna os comentários de um post específico a partir do ID fornecido</p>
    <p>Parâmetros:</p>
    <ul>
      <li>id: número (obrigatório)</li>
    </ul>
    <p>Retorna:</p>
    <ul>
      <li>Status 200 e um array de objetos JSON com os dados de todos os comentários do post encontrado</li>
      <li>Status 500 se ocorreu algum erro durante a operação</li>
    </ul>
  </li>
</ul>
