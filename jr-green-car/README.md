# JR Green Car Project

JR グリーン車に関する TypeScript プロジェクトです。このプロジェクトでは Vitest でのテスト、Selenium での Web テストを含んでいます。

## 技術スタック

- **TypeScript**: 型安全な JavaScript
- **Vitest**: 高速なテストフレームワーク
- **Selenium**: Web アプリケーションの自動テスト
- **pnpm**: 高速なパッケージマネージャー

## セットアップ

### 前提条件
- Node.js (v18 以上)
- pnpm
- Chrome ブラウザ（Selenium テスト用）

### インストール

```bash
# 依存関係をインストール
pnpm install
```

## スクリプト

```bash
# 開発モード（TypeScript の監視）
pnpm dev

# TypeScript のビルド
pnpm build

# テストの実行（監視モード）
pnpm test

# テストの一回実行
pnpm test:run

# テスト UI の起動
pnpm test:ui

# カバレッジ付きテスト実行
pnpm test:coverage
```

## プロジェクト構造

```
jr-green-car/
├── src/
│   └── index.ts          # メインのソースコード
├── tests/
│   ├── basic.test.ts     # 基本的な単体テスト
│   └── selenium.test.ts  # Selenium Web テスト
├── package.json
├── tsconfig.json         # TypeScript 設定
├── vitest.config.ts      # Vitest 設定
└── README.md
```

## 機能

### グリーン車サービス
- 乗客の挨拶機能
- グリーン車料金計算
- 乗客管理サービス

### テスト
- **単体テスト**: 基本的な機能のテスト
- **Web テスト**: Selenium を使用した Web サイトのテスト

## 注意事項

- Selenium テストを実行するには Chrome ブラウザがインストールされている必要があります
- CI/CD 環境では Chrome ドライバーの設定が必要な場合があります
