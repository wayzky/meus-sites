document.addEventListener("DOMContentLoaded", function () {
    console.log("Página carregada com sucesso!");

    // Definição de mensagens personalizadas para cada botão com mais detalhes
    const mensagens = {
        "introducao": "A biodiversidade é a base da vida na Terra, garantindo o equilíbrio dos ecossistemas e a estabilidade ambiental. Ela desempenha um papel crucial na alimentação, na regulação do clima e na purificação da água. Sem a biodiversidade, os serviços essenciais, como a polinização de plantas e a formação do solo, seriam comprometidos, afetando diretamente a agricultura e a saúde humana. A preservação da biodiversidade é essencial para o futuro do planeta e das futuras gerações.",
        "btn-entenda-mais": "O desenvolvimento sustentável visa o crescimento econômico, a inclusão social e a proteção ambiental. Isso significa adotar práticas que atendam às necessidades do presente sem prejudicar as gerações futuras. O equilíbrio entre esses três pilares - econômico, social e ambiental - é fundamental para evitar a exploração desenfreada dos recursos naturais e melhorar a qualidade de vida para todos. O desenvolvimento sustentável também ajuda a reduzir a desigualdade social e promove a justiça social.",
        "btn-saiba-como-ajudar": "Você pode contribuir para a preservação da biodiversidade adotando hábitos simples, como reduzir o uso de plásticos, economizar água e consumir alimentos de origem sustentável. Apoiar organizações ambientais e iniciativas de reflorestamento também é uma forma eficaz de agir. Além disso, votar em políticas públicas que incentivem a preservação ambiental e educar outros sobre a importância da biodiversidade são ações cruciais. Cada pequena atitude pode ter um grande impacto na proteção do meio ambiente.",
    };

    // Botões interativos
    const botoes = document.querySelectorAll("button");
    botoes.forEach(botao => {
        botao.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.1)";
        });

        botao.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });

        botao.addEventListener("click", function () {
            const mensagem = mensagens[this.id] || "Informação sobre biodiversidade e sustentabilidade.";
            alert(mensagem);
        });
    });

    // Imagens interativas
    const imagens = document.querySelectorAll(".image");
    imagens.forEach(imagem => {
        imagem.addEventListener("mouseenter", function () {
            this.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
        });

        imagem.addEventListener("mouseleave", function () {
            this.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        });
    });
});

