// =====================================
//  SCRIPT GLOBAL PARA TODO O SITE
// =====================================

// ----------- BOTÕES "COMPRAR" NO INDEX (redirecionam ao login) -----------
document.addEventListener("DOMContentLoaded", () => {
    const botoesCompra = document.querySelectorAll(".btn-venda");
    botoesCompra.forEach(btn => {
        btn.addEventListener("click", () => {
            window.location.href = "login.html";
        });
    });
});

// ----------- FORMULÁRIO DE CONTATO (INDEX) -----------
document.addEventListener("DOMContentLoaded", () => {
    const formContato = document.querySelector(".contact-form");
    if (formContato) {
        formContato.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Mensagem enviada com sucesso!");
            formContato.reset();
        });
    }
});

// =====================================
//  LOGIN (login.html)
// =====================================

document.addEventListener("DOMContentLoaded", () => {
    const formLogin = document.getElementById("formLogin");

    if (formLogin) {
        const usuario = "Gustavo";     // SEU NOME
        const matricula = "1291392522040";    // SUA MATRÍCULA

        const usuario2 = "Jorge";     // SEU NOME
        const matricula2 = "1291392522021";    // SUA MATRÍCULA

        formLogin.addEventListener("submit", function(e) {
            e.preventDefault();

            const email = document.getElementById("email").value.trim();
            const senha = document.getElementById("senha").value.trim();
            const erro = document.getElementById("erro");

            if (email === "" || senha === "") {
                erro.innerText = "Preencha todos os campos!";
                return;
            }

            if ((senha === matricula && usuario == "Gustavo" )|| (senha === matricula2 && usuario2 == "Jorge")) {
                window.location.href = "pedido.html";
            } else {
                erro.innerText = "Usuário ou senha incorretos.";
            }
        });
    }
});

// =====================================
//  PEDIDO / CARRINHO (pedido.html)
// =====================================

document.addEventListener("DOMContentLoaded", () => {
    // Só executa se estiver na página pedido.html
    if (document.getElementById("listaItens")) {

        const produtos = [
            { nome: "Placa De Vídeo Asus RTX5090 Rog Astral Gaming Oc Nvidia Geforce, 32gb, Gddr7, ARGB, G-sync, Ray Tracing, Dlss 4, Hdr - 90yv0lw0-m0na00", preco: 25796.40, img: "https://images4.kabum.com.br/produtos/fotos/700804/placa-de-video-rog-astral-gaming-geforce-rtx5090-oc-nvidia-32gb-gddr7-argb-90yv0lw0-m0na00_1737724637_gg.jpg"  },

            { nome: "Placa Mãe Gigabyte B550M AORUS Elite, Chipset B550, AMD AM4, mATX, DDR4", preco: 759.51, img: "https://images.kabum.com.br/produtos/fotos/114781/placa-mae-gigabyte-b550m-aorus-elite-amd-am4-micro-atx-ddr4_1594908595_gg.jpg" },

            { nome: "Processador Intel Core i9-14900K, 14ª Geração, 6GHz Max Turbo, Cache 36MB, 24 Núcleos, 32 Threads, LGA1700 - BX8071514900K", preco: 3044.99, img: "https://www.gigantec.com.br/media/catalog/product/p/r/processador-intel-core-i9-14900kf-36-ghz-60ghz-turbo-14-geracao-24-cores-32-threads-lga-1700-bx8071514900kf-002.jpg" }

        ];

        let carrinho = [];

        // Função global para poder ser chamada pelo HTML
        window.add = function(i) {
            carrinho.push(produtos[i]);
            atualizar();
        }

        window.remover = function(i) {
            carrinho.splice(i, 1);
            atualizar();
        }

        function atualizar() {
            const lista = document.getElementById("listaItens");
            const totalEl = document.getElementById("total");

            lista.innerHTML = "";
            let total = 0;

            carrinho.forEach((item, index) => {
                total += item.preco;

                lista.innerHTML += `
                    <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
                        <img src="${item.img}" width="60">
                        <p>${item.nome} — R$ ${item.preco}</p>
                        <button onclick="remover(${index})" style="background:red;color:white;padding:5px;border-radius:5px;">X</button>
                    </div>
                `;
            });

            totalEl.innerText = total;
        }

        window.finalizar = function() {
            if (carrinho.length === 0) {
                alert("O carrinho está vazio!");
                return;
            }
            alert("Pedido finalizado com sucesso!");
        }
    }
});
