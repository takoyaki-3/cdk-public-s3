# CDK Public S3 プロジェクト ドキュメント

## プロジェクトの概要

このプロジェクトは、AWS CDK (Cloud Development Kit) を使用して、静的ウェブサイトをホスティングするためのパブリックアクセス可能な Amazon S3 バケットを作成します。

## ファイル構成

```
├── bin
│   └── cdk-public-s3.ts
├── cdk.json
├── jest.config.js
├── lib
│   └── cdk-public-s3-stack.ts
├── package.json
├── test
│   └── cdk-public-s3.test.ts
├── tsconfig.json
└── website
    ├── error.html
    └── index.html

```

### 主要なディレクトリとファイルの役割

| ディレクトリ/ファイル | 役割 |
|---|---|
| **bin/cdk-public-s3.ts** | CDKアプリケーションのエントリーポイント。CDKスタックを定義し、AWSリソースをデプロイします。 |
| **cdk.json** | CDK Toolkitの設定ファイル。CDKアプリケーションを実行するためのコマンドやコンテキスト情報を定義します。 |
| **jest.config.js** | Jest テストフレームワークの設定ファイル。テストの実行方法を定義します。 |
| **lib/cdk-public-s3-stack.ts** | CDKスタックを定義するファイル。S3バケット、CORS設定、バケットポリシーなどのAWSリソースを定義します。 |
| **package.json** | プロジェクトのパッケージ管理情報ファイル。依存パッケージやスクリプトコマンドを定義します。 |
| **test/cdk-public-s3.test.ts** | CDKスタックの単体テストファイル。CDKスタックが正しく動作することを確認するためのテストコードを記述します。 |
| **tsconfig.json** | TypeScriptコンパイラの設定ファイル。TypeScriptコードのコンパイルオプションを定義します。 |
| **website/index.html** | ウェブサイトのトップページのHTMLファイル。 |
| **website/error.html** | エラーページのHTMLファイル。 |


## 環境変数の設定

このプロジェクトでは、環境変数は使用していません。


## API

このプロジェクトでは、APIは使用していません。


## 設定ファイル

### cdk.json

CDK Toolkitの設定ファイルです。CDKアプリケーションを実行するためのコマンドやコンテキスト情報を定義します。

**例:**

```json
{
  "app": "npx ts-node --prefer-ts-exts bin/cdk-public-s3.ts",
  "context": {
    "@aws-cdk/core:enablePartitionLiterals": true,
    // ... その他の設定 ...
  }
}
```

### jest.config.js

Jest テストフレームワークの設定ファイルです。テストの実行方法を定義します。

**例:**

```javascript
module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/test'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
```

### tsconfig.json

TypeScriptコンパイラの設定ファイルです。TypeScriptコードのコンパイルオプションを定義します。

**例:**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    // ... その他の設定 ...
  }
}
```


## データファイル

### website/index.html

ウェブサイトのトップページのHTMLファイルです。

**例:**

```html
Hello, World!

I'm takoyaki3.
```

### website/error.html

エラーページのHTMLファイルです。

**例:**

```html
This is error page.
```


## コマンド

### ビルドとテスト

| コマンド | 説明 |
|---|---|
| `npm run build` | TypeScriptコードをJavaScriptコードにコンパイルします。 |
| `npm run watch` | コードの変更を監視し、変更があった場合に自動的にコンパイルを行います。 |
| `npm run test` | Jest テストを実行します。 |

### CDKコマンド

| コマンド | 説明 |
|---|---|
| `npx cdk deploy` | CDKスタックをAWSにデプロイします。 |
| `npx cdk diff` | デプロイ済みのスタックと現在のスタックの差分を表示します。 |
| `npx cdk synth` | CloudFormationテンプレートを生成します。 |

## 具体的な動作イメージ

1. `npx cdk deploy` コマンドを実行すると、CDKスタックがAWSにデプロイされます。
2. CDKスタックは、パブリックアクセス可能なS3バケットをAWSに作成します。
3. `website` フォルダ内の `index.html` と `error.html` がS3バケットにデプロイされます。
4. S3バケットにデプロイされたHTMLファイルは、ウェブサイトとしてアクセスできます。
   - `index.html` はウェブサイトのトップページとして表示されます。
   - `error.html` はエラーが発生した場合に表示されます。


## まとめ

このプロジェクトは、CDKを用いてパブリックアクセス可能なS3バケットを作成し、静的ウェブサイトをホスティングする方法を示しています。環境変数やAPIの設定など、より複雑な機能を追加することもできます。


## その他

プロジェクトの詳細については、ソースコードやドキュメントを参照してください。