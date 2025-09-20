(function () {
  function setTocWidth() {
    // encontra a sidebar (wm-toc-pane) e mede a largura real dela
    var toc = document.querySelector('.wm-toc-pane');
    var w = toc ? toc.getBoundingClientRect().width : 0;
    // define uma variável CSS global com fallback
    document.documentElement.style.setProperty('--toc-w', (w || 260) + 'px');
  }
  // roda agora e quando a janela é redimensionada
  window.addEventListener('load', setTocWidth);
  window.addEventListener('resize', setTocWidth);
  // em alguns temas o conteúdo troca via hash; observe mudanças no DOM
  var obs = new MutationObserver(setTocWidth);
  obs.observe(document.documentElement, { childList: true, subtree: true });
})();
