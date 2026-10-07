# 青山会計事務所 静的コーディング版
<br>

## 概要
HTML・CSS・JavaScriptのスキルを証明することを目的に制作した、  
架空の会計事務所「青山会計事務所」のWebサイトです。  
[Brain Market](https://brain-market.com/u/hiroyuu/a/b0QzN5kTMgoTZsNWa0JXY)
よりデザインカンプを購入し、実務を意識したWebサイトとして構築しました。
<br>
<br>

## サイトURL
[https://matsuyamarikiya.jp/accounting_firm/](https://matsuyamarikiya.jp/accounting_firm/)
<br>
<br>

## 制作情報

### 制作期間

- HTML・SCSSコーディング：約2週間
- JavaScript実装：約4日

### 制作人数

- 個人制作

### 担当範囲

- HTMLマークアップ
- SCSSコーディング
- JavaScript実装
- レスポンシブ対応
- GitHubへの公開
- サーバーアップロード (さくらサーバー)
<br>
<br>

## 使用技術

- HTML
- SCSS
- JavaScript
- Git
- GitHub
- Splide
<br>
<br>

## サイト構成

- トップページ（`top`）
- 青山会計事務所の強み（`feature`）
- サービス内容（`service`）
- お客様の声（`voice`）
- お知らせ（`news`）
- 事務所案内（`about`）
- お問い合わせ（`contact`）
- 入力内容確認（`confirm`）
- 送信完了（`thanks`）
- プライバシーポリシー（`privacy-policy`）
- 404エラーページ（`404`）
<br>
<br>

## 実装内容

- レスポンシブ対応
- ハンバーガーメニュー
- ヘッダー背景の切り替え
- スライダー
- ページトップ 自動スクロールボタン
- お問い合わせフォーム
- 404エラーページ
<br>
<br>

## 工夫点
### ヘッダー背景の切り替え制御
スクロール位置とハンバーガーメニューの開閉状態という2つの条件を1つの関数で一括判定し、クラス付与の競合を防ぎました。   
これにより、スクロール時とメニュー開閉時のどちらでも同じ判定ロジックを呼び出すため、常に最新の状態が反映され、意図しない背景色の上書きを防止しています。  
<br>
### 共通化を目的としたCSS設計
ヘッダー、フッター、セクションタイトルなど全ページ共通のコンポーネントを、使い回し可能な設計で実装しました。 
これにより、修正やデザイン変更時に複数ファイルを手直す必要がなくなり、1 箇所の更新で全ページに反映できるようになりました。  
保守性の向上と作業時間の削減を実現しています。
<br>
<br>
### remを使用した可変式レイアウトの実装
html 要素の font-size を calc(100vw / var(--base-vw)) で可変設定し、rem 単位でレイアウト全体をスケールさせる手法を採用しました。 
スマホ（375px）と PC（1440px）で基準値を切り替えることで、デザインカンプの数値をそのまま rem で使用でき、開発効率と保守性を両立しています。
<br>
<br>

## ディレクトリ構成

```text
.
├── index.html
│
├── feature
│   └── index.html
│
├── service
│   └── index.html
│
├── voice
│   ├── index.html
│   └── detail
│       └── index.html
│
├── news
│   ├── index.html
│   └── detail
│       └── index.html
│
├── about
│   └── index.html
│
├── contact
│   ├── index.html
│   ├── confirm
│   │   └── index.html
│   └── thanks
│       └── index.html
│
├── privacy-policy
│   └── index.html
│
├── 404
│   └── index.html
│
└── assets
    ├── img
    │   ├── about
    │   ├── common
    │   ├── feature
    │   ├── news
    │   ├── service
    │   ├── top
    │   └── voice
    │
    ├── js
    │   ├── module
    │   │   ├── contact-slider.js
    │   │   ├── hamburger-menu.js
    │   │   ├── header-bg.js
    │   │   ├── top-service-slider.js
    │   │   └── top-voice-slider.js
    │   ├── vendor
    │   │   └── splide-extension-auto-scroll.min.js
    │   └── main.js
    │
    ├── scss
    │   ├── component
    │   ├── foundation
    │   ├── global
    │   ├── layout
    │   ├── page
    │   ├── utility
    │   └── style.scss
    │
    └── css
        └── style.css
```
<br>
<br>

### ディレクトリ補足

- `assets/img/common`：お問い合わせアイコンなど、全ページ共通で使用する画像
- `assets/js/module`：機能ごとに分割したJavaScriptファイル
- `assets/js/vendor`：外部ライブラリやプラグインのファイル
- `assets/scss`：SCSSのソースファイル
- `assets/css`：SCSSからコンパイルしたCSSファイル
<br>
<br>

## 対応画面幅

- モバイル (375 ~ 899px)
- PC (900px ~)
