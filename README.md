# udemy-nextjs-supabase-app-directory

個人の学習用リポジトリです  
Udemy の Next.js app directory コース学習内容を写経したソースコードです

## Index

- [DEMO](#demo)
- [Features](#features)
- [Requirement](#requirement)
- [Installation](#installation)
- [Usage](#usage)
- [Note](#note)
- [Author](#author)
- [License](#license)

## DEMO

アプリのデプロイ場所は非公開

## Features

講師のリポジトリ  
https://github.com/GomaGoma676/nextjs-app-router-supabase/tree/main

## Requirement

開発者の端末で動かすのに必要なライブラリなど

- next: 13.4.1

## Installation

### 1\. Clone Repository

下記コマンドを実行してリポジトリをクローンします。

```bash
git clone https://github.com/kawamuragen/udemy-nextjs-supabase-app-directory.git
```

### 2\. Download Dependent Packages

下記コマンドを実行して依存パッケージのダウンロードを開始します。初回は終了までに 5 分ほどかかります。エラーが出ないことを確認してください。

```bash
npm install
```

### 3\. Setting an env file

下記コマンドを実行してテンプレートから`.env.local`ファイルを作成します。

```bash
cp .env.local.template .env.local
```

`.env.local`ファイルには Supabase のダッシュボードから変数の値を設定してください。

### 4\. Next.js app build

下記コマンドを実行して build を実行します。

```bash
npm run build
```

### 5\. Next.js app start

下記コマンドを実行してアプリを起動します。

```bash
npm run start
```

適当なブラウザから、下記アドレスにアクセスします。

http://localhost:3000 を選択

※ブラウザのゲストモードやシークレットモードを利用すると、Cookie やキャッシュを保存しないため、PT 環境でアクセスするときに推奨です。

## Usage

執筆予定

## Note

### 初回実施した Create new Next.js project

```bash
# npx create-next-app --example with-tailwindcss rsc-supabase --use-npm
npx create-next-app@13.4.1 --tailwind rsc-supabase --use-npm
npm i @heroicons/react@2.0.17 @supabase/auth-helpers-nextjs@0.6.1 @supabase/supabase-js@2.21.0 zustand@4.3.8 supabase@1.55.1 date-fns@2.30.0
npm i next@13.4.1
```

### 初回実施した Generate supabase types

```bash
npx supabase login
npx supabase init
npx supabase link --project-ref your_project_id
npx supabase gen types typescript --linked > database.types.ts
```

### Git User Settings

Local user configuration to update Github contribution graphs.

```bash
$ git config --local user.name "サブアカウント"
$ git config --local user.email "サブアカウントメールアドレス"
```

## Author

作成情報を列挙する

- Gen, Kawamura
- Personal study repository
- E-mail: \*\*\*\*

## License

UNLICENSE
