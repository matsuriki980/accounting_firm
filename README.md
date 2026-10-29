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
- お問い合わせフォーム
<br>
<br>

## 工夫点
### 再利用性と保守性を意識したコンポーネント設計
ヘッダー、フッター、セクションタイトルなど、複数ページで使用する共通パーツをHTML・CSSの両面からコンポーネント化し、再利用できるように設計しました。  
これにより、デザインや構造の変更が発生した際も、共通部分を修正するだけで各ページに変更を反映できるようにしました。   
結果として、コードの重複を減らし、保守性の向上と修正作業の効率化を図りました。
<br>
<br>
### remを活用した可変レイアウトの実装
html要素のfont-sizeをcalc(100vw / var(--base-vw))で設定し、画面幅に応じてrem単位の要素が比例して拡大・縮小する可変レイアウトを実装しました。  
スマートフォンでは375px、PCでは1440pxを基準幅として切り替えることで、デザインカンプの数値をそのままrem単位で指定できるようにしました。  
これにより、デザインカンプの数値を変換する手間を省きながら、画面幅に応じたサイズ調整を自動化し、実装作業の効率化と保守性の向上を図りました。  
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
