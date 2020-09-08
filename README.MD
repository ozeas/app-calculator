# Anticipation Calculator App [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)

Calculadora para simulação de antecipação de transação.

## Instalação

O projeto foi construido utilizando o formato monorepo, utilizando tecnologias como Lerna + Yarn Workspace + Yarn.

O projeto é composto de dois subprojetos: [app](https://github.com/ozeas/app-calculator/tree/master/packages/app "app") e [@ac/components](https://github.com/ozeas/app-calculator/tree/master/packages/ui-components "@ac/components") para separação de componentes reutilizáveis e apps gerais.

### Pré-requesitos

Para correta instalação do projeto é necessário as seguintes ferramentas instaladas:

- node >= 12.16.3
- yarn >= 1.22.4
- git >= 2.24.1

### Instalação local

Para instalar uma cópia local do projeto:

```shell
git clone git@github.com:ozeas/app-calculator.git
cd app-calculator
```

### Instalando dependências

Sendo um projeto monorepo Lerna + Yarn Workspace as dependências dos pacotes são centralizados no node_modules raiz.  Inicialize os pacotes, instale e vincule quaisquer dependências cruzadas.

```shell
yarn bootstrap
```

## Desenvolvimento

Principais libs e frameworks utilizados no projeto:

- react-scripts@3.4.3
- typescript@3.8
- @testing-library/react@9.3.2
- axios@0.20.0
- react-hook-form@6.7.2
- rollup@2.26.5
- @storybook/react@6.0.16


### Ambiente de desenvolvimento

Para configurar o projeto em modo de desenvolvimento, obtenha uma cópia e instalale as dependências:

```shell
git clone git@github.com:ozeas/app-calculator.git
cd app-calculator/
yarn bootstrap
yarn dev:app or yarn dev:components
```

### Build

Build geral dos pacotes do projeto:

```shell
yarn build
```

Build individual dos pacotes:
```shell
yarn build:app or yarn build:components
```

### Publicação
Este projeto está configurado para ser publicado no github pages

```shell
git remove add origin <origin_repo.git>
yarn deploy
```

Consulte outras formas de deploy: [Outras formas de deploy](https://create-react-app.dev/docs/deployment "Outras formas de deploy")


## Tests

Para executar os testes de todos os pacotes:
```shell
yarn test
```

Para executar os testes individuais dos pacotes:
```shell
yarn test:app or yarn test:components
```

## Style guide

Este projeto faz uso das seguintes ferramentas opinativas de estilo de código:

- prettier@2.0.5
- eslint@6.8.0
- @typescript-eslint/eslint-plugin@3.9.1

Veja mais em: [Eslint configuration](https://github.com/ozeas/app-calculator/blob/70478495f3ba536205ded2499da5ae486d9443e1/.eslintrc.json#L2 "Eslint configuration")


## Licença

Este projeto utiliza o modelo de licença MIT.