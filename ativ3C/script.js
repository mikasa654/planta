const caixaPrincipal = document.querySelector(".principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        alternativas: [
            {
                texto: "Você gosta de flores?",
            },
            {
                texto: "Você não gosta de flores?",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Já tentou plantar girassois ",
            },
            {
                texto: "Nunca tentei.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Já procurou formas de plantar?",
            },
            {
                texto: "Não procurei nada.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "já tentou plantar ao sol ?",
            },
            {
                texto: "Não tentei.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Já tentou plantar rosas ?",
            },
            {
                texto: "Não quero rosas.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "ja pesquisou sobre cravos ?",
            },
            {
                texto: "Não quero cravos.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Espero ter ajudado.",
            },
            {
                texto: "Atualize a página para começar.",
            }
        ]
    },

];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraAlternativas(){
    perguntaAtual = perguntas[atual];
    caixaAlternativas.textContent = "";

    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    atual++;
    mostraAlternativas();
}


mostraAlternativas();