   /**
     * Alterna a visibilidade do menu flutuante
     */
    function toggleMenu() {
      const menu = document.getElementById('menuLinks');
      menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    }

    /**
     * Fecha o menu se o usuário clicar fora dele
     */
    window.addEventListener('click', function (e) {
      const menu = document.getElementById('menuLinks');
      const button = document.querySelector('.botao-fixo');
      if (!menu.contains(e.target) && !button.contains(e.target)) {
        menu.style.display = 'none';
      }
    });