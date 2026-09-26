## 作品概要
架空の会計事務所 「青山会計事務所」のコーポレートサイトのTOPページ。  
プロのデザイナーから購入したデザインカンプを再現しました。  
デザインカンプをもとにHTML、CSS、JavaScriptでコーディング。  
レスポンシブ対応を行い、PC・スマートフォンで閲覧できるようにしました。

### 提供元
(https://brain-market.com/u/hiroyuu/a/b0QzN5kTMgoTZsNWa0JXY)

### 制作期間
- HTML / CSS : 約2週間
- JavaScript : 4日

### 担当範囲
- コーディング

## URL
[https://matsuyamarikiya.jp/accounting_firm/](https://matsuyamarikiya.jp/accounting_firm/)

## 使用技術
- HTML
- CSS
- JavaScript
- Git
- GitHub

## 実装した機能
- スクロール量に応じたヘッダー背景表示・非表示切り替え
- ハンバーガーメニュー開閉
- ハンバーガーメニュー リンクに応じた画像切り替え
- スライド式 splideカルーセルスライダー
- splide 自動再生スライダー
- レスポンシブ対応

## こだわった点・工夫点

### SCSSでのファイル分割による管理性向上
SCSSのファイルをpage、layout、componentなどの役割ごとに分類し、フォルダ構成を整理しました。  
スタイルの役割を明確に分けることで、目的のコードを見つけやすくし、修正や追加が発生した際にも管理しやすい構成を意識しました。

### CSSとJavaScriptの役割分離
JavaScriptではスタイルを直接操作せず、クラスの付け外しによる状態の切り替えのみを行い、見た目の変更はCSS側で管理しました。  
CSSとJavaScriptの役割を明確に分離することで、コードの責務を整理し、意図しないスタイル変更や動作が発生しにくい構成を意識しました。

### 複数の状態に応じたヘッダー背景切り替え処理
ヘッダー背景の表示・非表示を、複数の条件に基づいて制御しました。  
「スクロール位置がページトップからトリガー要素までの距離を超えていること」と「ハンバーガーメニューが閉じていること」の2つの状態を判定し、両方の条件を満たした場合にヘッダー背景を表示するよう実装しました。  
また、ハンバーガーメニューの開閉状態をヘッダー背景の切り替え処理側でも共有することで、各処理が個別に状態を管理することによる処理の衝突を防ぎ、複数のJavaScript処理が連携して動作するよう設計しました。

## ディレクトリ構成
```text
project/
    └── src/
         ├── assets/
         │      ├── css/
         │      ├── images/
         │      ├── js/
         │      └── scss/
         |            ├── foundation/
         |            ├── layout/
         |            ├── component/
         |            ├── global/
         |            ├── utility/
         |            └── page/
         | 
         ├── 404/
         ├── about/
         ├── contact/
         |     |── confirm/
         |     └── thanks/
         | 
         ├── feature/
         ├── news/
         |     └── detail/
         ├── privacy-policy/
         ├── service/
         ├── voice/
         |     └── detail/
         └── index.html
