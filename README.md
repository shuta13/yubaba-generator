# yubaba-generator
React(+ TSX)開発ボイラープレート
[![Netlify Status](https://api.netlify.com/api/v1/badges/ad3621e6-b27f-426e-89d9-21ba19e3a036/deploy-status)](https://app.netlify.com/sites/practical-volhard-5c9dc0/deploys)
## 開発準備
1. `git clone https://github.com/shuta13/yubaba-generator.git`
2. `yarn install`
## コマンドの説明
### `yarn dev`
devサーバー立ち上げ、 <http://localhost:8080>にアクセス
### `yarn build`
ビルド実行
### `yarn deploy`
github pages用デプロイオプション
## 補足
- github pages にデプロイする際は `yarn deploy` 実行後push
- netlify にデプロイする場合はビルドなしでpushのみ