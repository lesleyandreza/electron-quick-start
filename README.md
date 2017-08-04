# Electron Dummy Handoff App

Este App visa demonstrar o uso da API do [Handoff](https://support.apple.com/en-us/HT204681).
O Handoff irá funcionar somente se o App estiver assinado corretamente.

# Get started

## Config

1. Faça o clone do projeto
1. Rode o comando `npm install`
1. Depois duplique o arquivo `config-template.json` e renomeie para `config.json`
1. Preencha as chaves `APP_BUNDLE_ID` e `TeamID`, em `config.json`, de acordo com a sua conta da [Apple Developer](https://developer.apple.com/)
1. Preencha também a chave `SIGN_IDENTITY` de acordo com seu `keyChain Access`
1. Adicione o arquivo de `provisionprofile` de desenvolvimento no diretório `scripts/assets/` com o nome de `development.provisionprofile`

## Run

Use `npm start` para iniciar o modo debug, mas não espere que o handoff funcione de fato, pois só irá funcionar assinado.

E use `npm run pack` para gerar o App assinado.

