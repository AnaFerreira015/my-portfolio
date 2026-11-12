import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
const root = new URL('../', import.meta.url);
const read = (path) => readFileSync(new URL(path, root), 'utf8');
const html = read('dist/index.html');
const cssFile = readdirSync(new URL('dist/assets/', root)).find(name => name.endsWith('.css'));
const css = read('dist/assets/' + cssFile);
assert(!css.includes('fonts.googleapis.com'), 'As fontes não devem depender de CSS remoto');
assert(html.includes('imagesrcset'), 'Pré-carregar a variante responsiva da foto');
for (const match of css.matchAll(/url\(["']?(\/fonts\/[^)'" ]+)/g)) {
  assert(existsSync(new URL('dist' + match[1], root)), `Fonte ausente: ${match[1]}`);
}
for (const name of ['portrait-256.webp', 'portrait-480.webp']) assert(existsSync(new URL('dist/' + name, root)));
const jsBytes = readdirSync(new URL('dist/assets/', root)).filter(n => n.endsWith('.js')).reduce((sum, n) => sum + readFileSync(new URL('dist/assets/' + n, root)).length, 0);
assert(jsBytes < 280000, 'Orçamento de JavaScript excedido');
assert(Buffer.byteLength(css) < 35000, 'Orçamento de CSS excedido');
console.log(`Recursos locais verificados. JS: ${jsBytes} bytes; CSS: ${Buffer.byteLength(css)} bytes.`);
