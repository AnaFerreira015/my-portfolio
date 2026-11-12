# Portfólio com foco em desenvolvimento

Escopo aprovado: manter todo o conteúdo na página inicial, priorizar apresentação, sete projetos e experiência; preservar idiomas, temas e pesquisa.

Plano:
- [x] Criar dados bilíngues e cards com capturas reais dos sete projetos, três em destaque. Não inventar repositórios ou tecnologias.
- [x] Ajustar apresentação, navegação, metadados e ordem das seções. Agrupar pesquisa de forma compacta, preservando o conteúdo.
- [x] Validar build, TypeScript, testes de componentes, acessibilidade e navegação; revisar visualmente e entregar ZIP sem dependências ou histórico Git.

Decisões: trabalhar na cópia isolada extraída do ZIP, branch feat/developer-portfolio. Capturas mostram apenas páginas públicas; Controle de Ponto requer conta. Preservar informações profissionais originais.

Baseline: 32 testes passaram. O Chromium local não inicia por restrição do ambiente; capturas dos sites serão obtidas no navegador disponível.

Resultado: 34 testes de componentes/unidade passaram, incluindo axe na seção de projetos em português e inglês. Build, lint e TypeScript aprovados. Revisão independente sem bloqueios; hierarquia de títulos da pesquisa ajustada.

Limitação: testes E2E e inspeção visual local não concluídos porque o navegador local não está disponível e o navegador remoto não acessa o servidor local. Não é uma declaração de acessibilidade integral.

Manutenção: edite src/data/projects.ts para alterar textos, links, tecnologias ou ordem. Capturas WebP em public/projects. Informações profissionais originais preservadas; currículo oculto enquanto o link for apenas #.

## Ajuste de espaçamento e tecnologias

O espaço entre os cards e Experiência passou de 160/224 px para 64/80 px (mobile/desktop), somando o padding das seções. Experiência usa o mesmo container dos projetos. Categorias têm altura mínima uniforme e tecnologias/links ficam no rodapé de cada card.

Stacks conferidas nos package.json e imports dos cinco ZIPs enviados. Para Vet em Casa (React e Supabase) e Editor (React, Mantine e Tiptap), confirmação nos bundles públicos dos sites; TypeScript e outras ferramentas de build não foram presumidos.

## Grade única de projetos

Os sete projetos agora usam uma única grade de três colunas a partir de md, preservando a ordem dos dados e o tamanho dos antigos destaques. Removidos os subtítulos “Em destaque” e “Outros projetos”.
