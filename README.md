Ao acessar o site, a pessoa presenteada verá 30 "cartas" numeradas. Apenas as cartas correspondentes aos dias que se passaram desde a data de início estarão "desbloqueadas" e poderão ser lidas. As cartas futuras permanecem "lacradas" até o dia certo.

🛠️ Como Usar/Editar o Projeto
Este projeto é feito com tecnologias web básicas:

HTML: Estrutura do site.
CSS: Estilo e design romântico.
JavaScript: Lógica para liberar as cartas dia a dia e exibir o conteúdo.
📝 Editando o Conteúdo das Cartas

As mensagens das 30 cartas são definidas no arquivo script.js.

Abra o arquivo script.js em um editor de texto (como VS Code, Sublime Text, Bloco de Notas).

Encontre a variável cardsContent (por volta da linha 9, dependendo dos comentários):

JavaScript
const cardsContent = [
    { title: "Dia 1: O Início da Nossa História", content: "Meu amor, mal posso acreditar que estamos vivendo mais um mês juntos. Cada dia ao seu lado é um presente!" },
    { title: "Dia 2: Seu Sorriso", content: "Hoje eu celebro a alegria que seu sorriso me traz. Ele ilumina meus dias e me faz esquecer de todo o resto." },
    // ... e assim por diante para as 30 cartas
];
 Edite o title e o content de cada objeto para personalizar as mensagens para a sua pessoa amada. Certifique-se de manter a estrutura de { title: "Seu Título Aqui", content: "Sua Mensagem Aqui" } para cada uma das 30 entradas.

Salve o arquivo script.js após fazer suas alterações.

🗓️ Definindo a Data de Início

A data a partir da qual as cartas começam a ser liberadas também é definida no arquivo script.js.

Abra o arquivo script.js.

Encontre a linha que define a startDate:

JavaScript
const startDate = new Date('2025-06-25T00:00:00'); // Defina a data de início AQUI!
 Altere a string da data para o dia em que você deseja que a contagem de cartas comece. O formato é 'AAAA-MM-DDTHH:MM:SS'. Por exemplo, para 1º de julho de 2025, seria '2025-07-01T00:00:00'.

Salve o arquivo script.js.

🚀 Como Hospedar Seu Próprio Projeto no GitHub Pages (Criando um Fork)
Você pode hospedar este projeto gratuitamente na sua própria conta do GitHub usando o GitHub Pages.

Faça Login no GitHub: Acesse github.com e faça login na sua conta (ou crie uma, se ainda não tiver).
Vá para o Repositório Original: Navegue até a página do repositório original deste projeto no GitHub.
Crie um Fork: No canto superior direito da página do repositório, clique no botão "Fork". Isso criará uma cópia completa do projeto na sua própria conta do GitHub.
Edite seus Arquivos (Opcional, mas Recomendado):
No seu novo repositório (a cópia que você fez), clique no arquivo script.js.
Clique no ícone de lápis (editar) para fazer as alterações no cardsContent e startDate diretamente no navegador.
Após editar, role para baixo e clique em "Commit changes" para salvar.
Habilite o GitHub Pages:
No seu repositório (a cópia que você fez), clique na aba "Settings" (Configurações).
No menu lateral esquerdo, clique em "Pages".
Em "Build and deployment", na seção "Source", selecione "Deploy from a branch".
Em "Branch", selecione a branch main (ou master) e a pasta /(root).
Clique em "Save".
Aguarde a Publicação: Leva alguns minutos para o GitHub processar e publicar seu site. O link para o seu site será exibido na mesma página de configurações do Pages, geralmente no formato seunome.github.io/nome-do-seu-repositorio.
Compartilhe o Link! Envie este link para a pessoa especia
