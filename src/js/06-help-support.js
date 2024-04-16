// Página dentro de un iframe
if (window !== window.parent) {
  document.documentElement.classList.add('help-window');

  // Cambios en la historia de navegación
  window.addEventListener('load', function(event) {
    window.parent.postMessage({ 'message': 'pageLoaded', 'currentPage': window.location.href }, '*');
  });

  // escuchamos peticiones de navegar atrás
  window.addEventListener('message', function(event) {
    if (event.data === 'historyBack') {
      window.history.back();
    }
  });
}