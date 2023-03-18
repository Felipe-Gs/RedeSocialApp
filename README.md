Documentação

Este código é um servidor Node.js que utiliza o framework Express.js e o banco de dados PostgreSQL para criar rotas e armazenar dados de uma rede social. As rotas disponíveis permitem cadastrar e autenticar usuários, criar e visualizar posts e visualizar comentários de um post específico.

Dependências
- As seguintes dependências são necessárias para executar este código:

    - zod
    - express
    - pg

Como executar

Antes de executar este código, certifique-se de ter o PostgreSQL instalado e rodando em sua máquina. Também é necessário criar um banco de dados com o nome "RedeSocial" e uma tabela "users" com as colunas "id", "name", "email" e "password". Além disso, é necessário atualizar as credenciais do banco de dados na criação do objeto client na linha 11.

- Para executar este código, siga as etapas abaixo:

    Clone este repositório em sua máquina:

    git clone https://github.com/Felipe-Gs/RedeSocialApp.git

Instale as dependências:
    cd rede-social
    npm install

    POST /cadastrar

    Cadastra um novo usuário na base de dados
    Parâmetros:
        name: string (obrigatório, mínimo de 3 caracteres)
        email: string (obrigatório, formato de email válido)
        password: string (obrigatório, mínimo de 3 caracteres)
    Retorna:
        Status 200 se o usuário foi cadastrado com sucesso
        Status 400 se algum parâmetro inválido foi fornecido ou ocorreu algum erro ao cadastrar o usuário
        
        
        
        
   POST /login

    Realiza login de um usuário na aplicação
    Parâmetros:
        email: string (obrigatório, formato de email válido)
        password: string (obrigatório, mínimo de 3 caracteres)
    Retorna:
        Status 200 e um objeto JSON com os dados do usuário se o login foi realizado com sucesso
        Status 401 se o email ou a senha estão incorretos
        Status 500 se ocorreu algum erro durante a operação
    
    
    
    
    GET /listar
    Retorna uma lista de todos os usuários cadastrados
    Retorna:
        Status 200 e um array de objetos JSON com os dados de todos os usuários cadastrados
        Status 500 se ocorreu algum erro durante a operação
        
    
        POST /posts

    Cria um novo post na base de dados
    Parâmetros:
        title: string (obrigatório, mínimo de 5 caracteres)
        description: string (obrigatório, mínimo de 5 caracteres)
        image: string (opcional)
        user_id: número (obrigatório)
        user_name: string (opcional)
    Retorna:
        Status 200 se o post foi criado com sucesso
        Status 400 se algum parâmetro inválido foi fornecido ou ocorreu algum erro durante a operação

    GET /visualizarPost/:id

    Retorna um post específico a partir do ID fornecido
    Parâmetros:
        id: número (obrigatório)
    Retorna:
        Status 200 e um objeto JSON com os dados do post encontrado
        Status 500 se ocorreu algum erro durante a operação

    GET /visualizarPost

    Retorna uma lista com todos os posts cadastrados
    Retorna:
        Status 200 e um array de objetos JSON com os dados de todos os posts cadastrados
        Status 500 se ocorreu algum erro durante a operação

    GET /comentarios/:id

    Retorna os comentários de um post específico a partir do ID fornecido
    Parâmetros:
        id: número (obrigatório)
    Retorna:
        Status 200 e um array de objetos JSON com os dados de todos os comentários do post encontrado
        Status 500 se ocorreu algum erro durante a operação.
