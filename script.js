const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Após cagar no mato, Angelo avistou um peixe morto no rio que ele defecou",
        alternativas: [
            {
                texto: "Isso é uma merda!",
                afirmacao: "No início ficou com medo do que essa bosta pode fazer. "
            },
            {
                texto: "Isso é triste!",
                afirmacao: "Angelo fica triste com o peixe morto."
            }
        ]
    },
    {
        enunciado: " Angelo avista um pé de mato de meia altura, folhas pontudas e serrilhadas, e pensou que era uma boa planta para usar com higienizador anal.",
        alternativas: [
            {
                texto: "Usar mato mistrioso",
                afirmacao: "Conseguiu utilizar um mato para contribuir com sua higiene (era Urtigão)."
            },
            {
                texto: "Dois reais",
                afirmacao: "Preferiu dois reais ao mato misterioso, mas ainda assim era o unico recurso disponível para seu asseio."
            }
        ]
    },
    {
        enunciado: "Apos limpar com a Urtiga, percebe bolas vermelhas em sua superficie pélvica, o que ele deve fazer?",
        alternativas: [
            {
                texto: "Mostrar para alguem que possivelmente sabe o que é.",
                afirmacao: "Decide apresentar os ematomas de seu anus em publico, mas ninguem pode ajudá-lo, então decide ir para casa."
            },
            {
                texto: "Conviver com isso pelo resto da vida",
                afirmacao: "Quando percebe os ematomas da Urtiga, acredita que precisa conviver com isso pelo resto de sua vida, e volta para casa ja conformado com o destino."
            }
        ]
    },
    {
        enunciado: "João decidiu não ir para o hospital, o que ele precisa fazer ?",
        alternativas: [
            {
                texto: "Jogar Clash Royale com o objetivo de upar de arena",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}



mostraPergunta();
