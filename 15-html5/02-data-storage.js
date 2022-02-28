(function() {
    const color = sessionStorage.getItem( 'Color' ) || 'gold';
    document.body.style.backgroundColor = color;
})();