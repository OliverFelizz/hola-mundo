const fs = require('fs');
const path = require('path');

test('La página debe contener un encabezado con "¡Hola, Mundo!"', () => {
    const htmlPath = path.join(__dirname, '../index.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    document.body.innerHTML = htmlContent;

    expect(document.querySelector('h1').textContent).toBe('¡Hola, Mundo!');
});
