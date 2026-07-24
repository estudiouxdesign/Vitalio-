# Site Institucional — Vitalio

Site institucional da Vitalio, empresa brasileira que desenvolve soluções voltadas à saúde respiratória, integrando natureza, ciência, tecnologia e cuidado humano.

## Objetivo do site

O site apresenta a empresa, suas soluções e sua trajetória, além de servir como canal institucional para potenciais clientes, distribuidores, parceiros, investidores e participantes de programas e editais.

## Páginas

- `index.html` — página inicial;
- `produtos.html` — produtos e soluções;
- `sobre.html` — história, missão, equipe e trajetória;
- `contato.html` — contato institucional.

## Tecnologias

- HTML5;
- CSS3;
- JavaScript puro (Vanila JS);
- GIT / GitHub para versionamento;
- HostGator/cPanel para hospedagem em produção.

## Estrutura do projeto

```text
.
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   └── i18n.js
├── index.html
├── produtos.html
├── sobre.html
├── contato.html
└── README.md

```

## Executar localmente

Na raiz do projeto, execute:

```bash
python3 -m http.server 8000
```
O servidor Python serve apenas para desenvolvimento local e não representa o ambiente de produção.

O site pode ser acessado em: <http://localhost:8000>

## Fluxo de alteração

1. Atualizar a `main`;
2. Criar uma branch;
3. Implementar e testar;
4. Fazer commit e push;
5. Abrir um Pull Request;
6. Fazer merge;
7. Publicar manualmente na HostGator.

## Publicação

- O código-fonte é versionado no GitHub;
- Atualmente, a publicação do domínio oficial https://vitaliobrasil.com.br é realizada manualmente na hospedagem HostGator, utilizando a pasta `public_html`. `public_html` da HostGator;
- Arquivos HTML devem ser enviados para a raiz de `public_html`;
- Os arquivos `js/app.js` e `js/i18n.js` devem ser enviados para `public_html/js`;
- Evite enviar arquivos de controle de versão (como `.gitignore`) para a hospedagem.

## Cuidados

- Não editar a `main` diretamente;
- Não publicar sem testar em desktop e mobile;
- Manter português e inglês sincronizados;
- Confirmar contatos e alegações institucionais antes da publicação;
- Não substituir a pasta inteira da hospedagem sem necessidade.

## Contexto

Este repositório contém apenas o site institucional da Vitalio.

Documentações estratégicas, planejamento do produto, arquitetura e demais materiais do Projeto Vitalio são mantidos separadamente na Documentação Viva do projeto.
