fetch('dados.json')
    .then(response => response.json())
    .then(data => {
        const conteudo = document.getElementById('conteudo');
        let html = '';

        data.catalago.forEach(catalago => {
            html += `
            <div class="caixa">
                
                <h2>${catalago.nomedoproduto}</h2>

                <p><strong>Preço: R$</strong> ${catalago.preco}</p>
                <p><strong>Desc:</strong> ${catalago.desc}</p>
            
            
            </div>
            `;
        });

        conteudo.innerHTML = html; 
    })
    .catch(error => console.error('erro ao carregar o json:', error));


