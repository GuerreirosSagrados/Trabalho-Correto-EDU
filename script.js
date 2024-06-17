const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando terminou trabalho você vê uma nova tecnologia, uma IA que consegue responder todos os tipos de coisas, ela também gera imagens e textos. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Amendrontador!",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "Muito Legal",
                afirmacao: "Como vocês usam a IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "Essa novidade da Inteligência Artificial, um professor de tecnologia da escola decidiu fazer uma retomada de aulas sobre o conteúdo. No fim da aula pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Utilizar um recurso que necessita o uso da IA para que ela ajude a encontrar informações completas para o trabalho e explique numa linguagem mais fácil de entender.",
                afirmacao: "Conseguimos utilizar a IA para buscar informações necessárias."
            },
            {
                texto: "Fazer o trabalho com base das falas dos colegas, procurar na internet e pesquisar o conhecimento sobre o tema.",
                afirmacao: "Sentimos mais facilidade em utilizar seus recursos para escrever nosso trabalho."
            }
        ]
    },
    {
        enunciado: "Após a finalização do trabalho escrito, a professora promoveu um debate com a turma para discutir o processo de pesquisa e escrita. Durante essa discussão, foi abordado um ponto crucial: o impacto da inteligência artificial no futuro do trabalho. Qual é a sua posição nesse debate?",
        alternativas: [
            {
                texto: "Defender sobre a IA pode criar novos empregos e oportunidades de emprego.",
                afirmacao: "A IA está inovando e a luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Defender a IA trará a perda de emprego e trabalho para as máquinas.",
                afirmacao: "A preocupação com a sociedade motivou a criar um grupo de estudos para discutir meios de utilização de IA de forma certa."
            }
        ]
    },
    {
        enunciado: "Após a discussão, foi solicitado que você criasse uma imagem no computador representando suas ideias sobre a IA. E agora?",
        alternativas: [
            {
                texto: "Fazer uma imagem usando o Canva.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem usando IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte. O progresso do trabalho está um pouco atrasado, e um membro do seu grupo decidiu utilizar IA para ajudar na elaboração. No entanto, o trabalho parece ser uma cópia exata do conteúdo gerado pela IA. O que você faria?",
        alternativas: [
            {
                texto: "Fazer comando usando uma IA é uma boa ideia, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "A IA é uma boa ideia, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho para não apresentar erros.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
