document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.querySelector('.card-container');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    const modalCardTitle = document.getElementById('modal-card-title');
    const modalCardContent = document.getElementById('modal-card-content');

    
    const cardsContent = [
        { title: "Primeira vez", content: "Você fez eu me sentir especial e importante desde a primeira vez que a gente saiu. Eu gosto muito de você não só por ser você, mas porque você me fez gostar mais de mim mesmo." },
        { title: "Nosso primeiro beijo", content: "Eu vou lembrar pra sempre de que foi você que teve a iniciativa (tecnicamente). E que eu amei o jeito que você me puxou pra perto de você, foi muito bom estar ali com você." },
        { title: "Como você lida com tudo", content: "Mesmo no dia do nosso primeiro encontro estando chovendo para um caralho e eu quase me afogando na poça de água que tava embaixo da gente, você tava super feliz e otimista, não queria ir embora só pelo fato de estar comigo. Eu passaria ate o amanhecer ali com você." },
        { title: "Nosso primeiro sexo", content: "Sem querer fugir do lado romântico, mas eu fiquei obcecado em você desde a primeira vez que a gente transou. Eu não achei que ia ter uma identificação tão rápida e profunda com alguém assim. Estou viciado em você, Gabi." },
        { title: "Primeira vez dormindo juntos", content: "Mesmo sendo a primeira vez da gente, você quis ficar comigo, quis dormir comigo e eu tive uma noite de sono maravilhosa agarrado com uma pessoa que eu não queria largar por nada nesse mundo." },
        { title: "Seus Olhos", content: "Eu ja falei 1000x e vou falar mais uma, eu sou apaixonado nos seus olhos, na forma como você me olha. Eu ficaria te encrando por horas se eu não fosse parecer um maluco fazendo isso. O meu coração acelera toda vez que você olha com carinho pra mim." },
        { title: "Seu cabelo", content: "Tu tem um dos cabelos mais lindos que eu ja vi, eu amo eles, eu amo o cheiro deles, eu amo poder encostar no seu ombro e ficar ate com eles entrando na minha boca." },
        { title: "O jeito que você fala", content: "Nunca achei que fosse encontrar alguém tão tagarela assim como eu, mas achei! Eu amo te ouvir falar, amo te ligar e te escutar falando por horas de uma histórias malucas, com pessoas que eu nem sei quem são. Eu dormiria todos os dias te ouvindo falar como foi seu dia, o que você fez e o que você vai fazer amanhã." },
        { title: "Nossa intimidade", content: "Você não faz ideia de como eu me sinto especial por saber que você se sente com liberdade pra falar pra mim o que você pensa, sente, sobre seu passado e sobre coisas pessoais suas. Eu me sinto alguém único e importante, e prometo guardar todos seus segredos comigo até o fim." },
        { title: "Seu cheiro", content: "Eu sou COMPLETAMENTE viciado no seu cheiro, quando você me deu o primeiro presente, eu fiquei dias cheirando a sacola só por ter resquicios de você. Fiquei dias cheirando essa almofada do homem aranha, imaginado que você tava aqui dormindo comigo. Eu sou apaixonado no seu perfume e no cheiro que você tem." },
        { title: "Seus gostos", content: "Você me fez experimentar coisas novas, um novo ritmo de música, séries novas, coisas novas. E eu tenho adorado isso, tem sido muito bom partilhar isso com você e te conhecer um pedacinho a mais a cada coisa que eu me insiro no seu mundo" },
        { title: "Suas sardas", content: "Eu acho a coisa mais linda do mundo quando te olho sem maquiagem, quando te olho quando você acorda, quando te olho bem de perto e consigo olhar cada sardinha que você tem no rosto e percebo que estou do lado da mulher mais linda desse mundo." },
        { title: "Sua alegria", content: "Eu amo pessoas felizes. Eu amo ser feliz. E eu encontrei alguém que é mais feliz que eu! Eu quero estar junto com você sempre, porque eu sei que sempre eu vou estar feliz e animado ao seu lado." },
        { title: "Sua dedicação", content: "Eu levo muito a sério meu futuro e eu vejo que você se sente igual a mim. Você da a vida pelo seu trabalho, porque entende o quanto isso é importante pra você. Isso me faz te admirar muito, olho pra você como se você fosse uma das mulheres mais incríveis que eu ja conheci na minha vida ( e você é )." },
        { title: "Seu corpo", content: "Licença para eu ser um pouco safado. Mas você é a mulher mais gostosa que eu ja tive em toda minha vida, sua bunda, suas coxas, seus peitos, toda vez que eu penso em você eu fico maluco só de imaginar que eu tive essa sorte na vida! Meu padrão aumentou MUITO depois de você tá? Vai ser dificil superarem." },
        { title: "O jeito que você se importa comigo", content: "Você desde sempre fez questão de se apegar aos detalhes, ao que eu gosto, ao que eu escuto, ate ao que eu gosto de comer. Eu quase chorei no primeiro presente que você me deu e pode ter certeza que eu uso até hoje e sempre vou usar as meias que você me deu! Foram muito especiais pra mim, muito mais do que apenas meias, foram uma prova de como você me olha com carinho." },
        { title: "Você com meus amigos", content: "Você não faz ideia o quão ansioso eu estava pra te apresentar pros meus amigos, porque eu tinha certeza que eles iam te adorar. Isso é muito importante pra mim Gabi, muito mesmo. Obrigado por fazer esses momentos serem mais especiais." },
        { title: "Sua intensidade", content: "Eu sou uma pessoa muito intensa de demonstrar carinho, de ser quem eu sou, de fazer o que eu quero fazer. Acho que essas cartas são uma prova disso, então estar com alguem que pela primeira vez retribui isso, me fez querer ser mais e mais intenso com você, sendo quem eu sou de verdade." },
        { title: "Como você se cuida", content: "Eu admiro muito a forma que você cuida de si mesmo, seja treinando, comendo, dormindo, de todas as formas. Você realmente espera estar bem no futuro e faz o que for necessário agora para estar bem la frente. Eu admiro muito isso em você e me motiva a ser igual." },
        { title: "A sua voz", content: "Tu tem uma voz muito gostosa de se ouvir, seja falando normal, com carinho, porra ate reclamando comigo eu gosto de te ouvir! Eu amo te escutar e amo cada palavra que sai da sua boca com a sua voz!" },
        { title: "Seu sorriso e sua risada", content: "Eu adoro te fazer rir, adoro ver seu sorrido, adoro ouvir sua gargalhada alta e ver você se divertindo quando está comigo. Eu faria um curso de stand up só pra conseguir ser o mais engraçado possível e te fazer rir o tempo todo." },
        { title: "Sua simplicidade", content: "Eu amo o jeito que você não se importa com o mais caro, com o mais incrível, se eu te dar um confeito e for de coração tu vai amar como se eu tivesse te comprado um carro. Eu não to acostumado com isso, mas prometo que vou me acostumar com alguém tão especial assim." },
        { title: "Sua inteligencia", content: "Eu amo te ouvir falar sobre assuntos mais profundos, politica, religiao, tudo. Eu te acho muito interessante, muito inteligente e queria poder te ouvir falando ate sobre a criação do universo do começo se eu pudesse." },
        { title: "Sua maturidade", content: "Eu achei por muito tempo que só fosse me relacionar com alguém bem mais velho, até te achar. Encontrar alguém tão madura, tão jovem, me fez sentir menos sozinho no mundo." },
        { title: "Teu abraço", content: "Eu fico muito triste e com muita saudade quando passamos muito tempo sem nos vermos, mas tudo vale a pena quando te encontro e você me dá o abraço mais gostoso do mundo que da vontade de morar nele, de nunca de soltar e ficar pra sempre agarrado em você." },
        { title: "O dia que eu te machuquei", content: "O dia que eu quebrei sua confiança foi um dia que eu entrei em desespero so de pensar que eu poderia ter te perdido. Claro que eu aprendi a me controlar mais, mas só de pensar que eu poderia estar deixando escapar pelas minhas mãos uma pessoa que eu nunca nem imaginei que eu fosse capaz de encontrar, que eu fosse capaz de merecer. Eu me comprometo a ser alguém melhor por mim e pra você. Você merece ter a melhor pessoa do mundo do seu lado Gabi, e eu quero muito que essa pessoa seja eu." },
        { title: "O jeito que você me perdoou", content: "Eu realmente achei que tava tudo perdido, mas você quis me dar uma outra chance, você me disse que eu valia a pena, e mais uma vez eu me senti a pessoa mais especial do mundo. Quando eu tava na igreja tinha uma música que cantava 'quem é muito perdoado, muito ama'. E eu te garanto que meu carinho por você aumento muito depois de ver o esforço que você fez pra me perdoar e continuar comigo. Eu nunca vou me esquecer disso, Gabi." },
        { title: "O que eu quero fazer", content: "Eu quero poder ser eu mesmo com você, eu quero poder aprender com tudo que eu ja errei em outros relacionamentos e poder fazer certo com você, quero poder fazer com que eu seja a pessoa que deu certo com você, que você sinta falta quando está longe, mas não te sufoque, que te dê abertura para realizar seus desejos e que esteja do seu lado em tudo que precisar." },
        { title: "O que eu estou fazendo", content: "Enquanto escrevo essas cartas, eu estou me comprometendo comigo mesmo e orando todos os dias, além de falar com minha psicóloga para me tornar alguém melhor, não só por você, mas para mim. Eu espero que estejamos super feliz hoje, no dia que você estiver lendo, e eu prometo que vou dar 100% de mim todos os dias para fazer essa promessa dar certo. Deixei uma última mensagem pra você amanhã, espero que tenha gostado de tudo isso, eu fiz do fundo do meu coração." },
        { title: "Eu te amo", content: "Não tem nada pra falar nessa carta não, eu te amo e já sabia disso desde que escrevi essa mensagem a 30 dias atrás. Não precisa dizer que me ama de volta, só quero deixar claro o que eu sinto pra você. E é isso, eu te amo, Gabi." }
    ];

    const startDate = new Date('2025-06-25T00:00:00'); 
    const today = new Date(); 

    const diffTime = Math.abs(today.getTime() - startDate.getTime());

    
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    
    const cardsAllowed = diffDays; 


    for (let i = 1; i <= 30; i++) {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.dataset.day = i; 

        const cardNumber = document.createElement('div');
        cardNumber.classList.add('card-number');
        cardNumber.textContent = i;
        cardDiv.appendChild(cardNumber);

        if (i > cardsAllowed) {
            cardDiv.classList.add('disabled');
            cardDiv.style.cursor = 'not-allowed'; 
        } else {
            cardDiv.addEventListener('click', () => {
                modalCardTitle.textContent = cardsContent[i - 1].title;
                modalCardContent.textContent = cardsContent[i - 1].content;
                modal.style.display = 'flex'; 
            });
        }
        cardContainer.appendChild(cardDiv);
    }

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});