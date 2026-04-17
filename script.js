document.addEventListener('DOMContentLoaded', () => {
    // Selecionando os elementos que vamos usar
    const btnAbrir = document.getElementById('btn-abrir-menu');
    const btnFechar = document.getElementById('btn-fechar-menu');
    const menuLateral = document.getElementById('menu-lateral');
    const overlay = document.getElementById('menu-overlay');

    // Função que abre a gaveta
    function abrirMenu() {
        menuLateral.classList.add('ativo');
        overlay.classList.add('ativo');
        document.body.style.overflow = 'hidden'; // Impede o site de rolar no fundo
    }

    // Função que fecha a gaveta
    function fecharMenu() {
        menuLateral.classList.remove('ativo');
        overlay.classList.remove('ativo');
        document.body.style.overflow = 'auto'; // Volta a rolar o site
    }

    // Ligando os botões às funções
    if (btnAbrir) {
        btnAbrir.addEventListener('click', abrirMenu);
    }
    
    if (btnFechar) {
        btnFechar.addEventListener('click', fecharMenu);
    }
    
    // Clicar fora do menu (no fundo escuro) também fecha a gaveta
    if (overlay) {
        overlay.addEventListener('click', fecharMenu);
    }
});