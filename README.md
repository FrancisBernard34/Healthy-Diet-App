# Healthy

Healthy é um aplicativo web criado com Next.js, Tailwind CSS, e NextAuth. Utilizei a versão mais atualizada do Next.js, aproveitando as vantagens dos Server Components e Server Actions para oferecer uma experiência de usuário otimizada.

## Características

- **Next.js**: Utilizei o Next.js para construir uma aplicação web moderna e eficiente.
- **Tailwind CSS**: Para estilização, utilizei o Tailwind CSS, que permite criar designs responsivos e personalizados com facilidade.
- **NextAuth**: Para autenticação, integrei o NextAuth, permitindo que os usuários entrem com suas contas do Google.
- **Zustand**: Utilizei Zustand para gerenciamento de estado global. Ele é leve, simples e não requer o uso de um context provider, tornando o código mais limpo e fácil de manter.

## Crie sua dieta semanal de forma fácil e rápida!

Com Healthy, você pode personalizar sua dieta semanal de acordo com suas necessidades e preferências, facilitando a gestão de sua alimentação.

## Como clonar e configurar o projeto

1. **Clonar o repositório**:
```
git clone https://github.com/FrancisBernard34/Healthy-Diet-App.git
```
2. **Instalar dependências**:
   Navegue até a pasta do projeto e execute:
```
npm install
```
3. **Crie um arquivo `.env.local` na pasta raiz do projeto e configure as seguintes variáveis de ambiente:**
- `NEXTAUTH_URL`: URL base da sua aplicação
- `NEXTAUTH_SECRET`: Chave secreta utilizada pelo NextAuth
- `FORM_TOKEN`: Token para restringir as requisições advindas de fora do formulário.
- `MONGODB_URI`: String de conexão ao banco de dados MongoDB
- `MONGODB_DATABASE`: Nome do banco de dados
- `GOOGLE_ID`: ID do Google OAuth
- `GOOGLE_SECRET`: Chave secreta do Google OAuth

4. Altere a variável `baseURL` no arquivo `axios.ts` para a URL da sua aplicação:
```
baseURL: "http://meu-app.com"
```

5. **Iniciar o servidor de desenvolvimento**:
```
npm run dev
```

### Recursos adicionais:
- Documentação do Next.js: https://nextjs.org/docs/
- Documentação do Tailwind CSS: https://tailwindcss.com/docs/
- Documentação do NextAuth: https://next-auth.js.org/getting-started/introduction

### Contribuindo:
Se você encontrar algum problema ou tiver alguma sugestão de melhoria, por favor, abra um issue no repositório.