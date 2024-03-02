# Healthy

Healthy é um aplicativo web criado com Next.js, Tailwind CSS, e NextAuth. Utilizei a versão mais atualizada do Next.js, aproveitando as vantagens dos Server Components e Server Actions para oferecer uma experiência de usuário otimizada.

## Características

- **Next.js**: Utilizamos o Next.js para construir uma aplicação web moderna e eficiente.
- **Tailwind CSS**: Para estilização, utilizamos o Tailwind CSS, que nos permite criar designs responsivos e personalizados com facilidade.
- **NextAuth**: Para autenticação, integramos o NextAuth, permitindo que os usuários entrem com suas contas do Google.

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

4. **Iniciar o servidor de desenvolvimento**:
```
npm run dev
```

### Recursos adicionais:
- Documentação do Next.js: https://nextjs.org/docs/
- Documentação do Tailwind CSS: https://tailwindcss.com/docs/
- Documentação do NextAuth: [URL inválido removido]

### Contribuindo:
Se você encontrar algum problema ou tiver alguma sugestão de melhoria, por favor, abra um issue no repositório.