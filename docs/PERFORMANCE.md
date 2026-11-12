# Otimizações de carregamento

- Removidos providers de TanStack Query, Tooltip e notificações que não eram usados nas telas.
- CSS Tailwind gerado apenas para os componentes da página e Button. Ao adicionar outro componente de UI, incluir seu arquivo em content no tailwind.config.ts.
- Foto convertida para WebP em 256 e 480 px, com srcset, sizes, prioridade alta e preload responsivo.
- Fontes locais WOFF2 com caracteres latinos/acentos e pontuação, font-display swap e preload das duas fontes principais. Licenças em public/fonts.
- Mantido lazy loading das capturas dos projetos e dimensões reservadas para imagens.
- Cabeçalhos de cache para assets com hash. public/_headers funciona em hospedagens Cloudflare com suporte a esse arquivo; verificar os cabeçalhos reais após publicar. Arquivos HTML não recebem cache imutável.

## Validação

Execute npm test, npm run build, npm run lint, npx tsc --noEmit -p tsconfig.app.json e node scripts/check-performance.mjs.

As medições de tamanho comparam builds de produção. Não foi possível reproduzir a nota 26 sem o relatório e a URL do portfólio publicado. Reavalie no Lighthouse após publicar a pasta dist gerada por npm run build, usando o mesmo dispositivo/modo e condições do teste original. Não use o servidor de desenvolvimento para medir produção.

## Resultado da análise do relatório enviado

O arquivo localhost_8080-20261111T073431.html registra nota 40 (a usuária também observou 44 em outra execução), FCP 12,8 s, LCP 19,2 s, TBT 590 ms e CLS 0. Ele mede o servidor de desenvolvimento, identificado por /@vite/client, /@react-refresh e /node_modules/.vite/deps/. Extensões do Chrome também aparecem entre os maiores consumidores de CPU. Essa execução não representa o bundle de produção.

Correções adicionais: imagens dos projetos em 480 e 800 px com srcset/sizes; prioridade da foto definida no preload HTML para evitar o aviso de fetchPriority no React 18.

## Como medir corretamente

Na raiz do projeto:

```bash
npm install
npm run build
npm run preview -- --host 127.0.0.1 --port 4173
```

Abra http://127.0.0.1:4173/pt em um perfil do Chrome sem extensões (ou janela anônima, verificando que nenhuma extensão tem permissão para funcionar nela). No Lighthouse, mantenha o mesmo modo Mobile e faça três medições, comparando a mediana. Não rode o teste em npm run dev. Depois de publicar, repita na URL de produção para avaliar também compressão e cache da hospedagem.

Não foi medida uma nova nota Lighthouse neste ambiente.
