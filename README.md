# ![GARLAND](cover-garland.png)

## GARLANDについて

ネップリ一覧化サービス GARLAND はその語源の花環のように、すばらしいファンアートでグループとコミュニティを彩りたいという願いから生まれたサービスです。

GARLANDはバーチャルサーカス団VALIS様のファンアートのネップリを広報することを目的としています。

本サービスの開発・運営はVALIS公式様とは無関係の、有志のファンによって行っていますので、本サービスへの質問やお問合せはVALIS公式様ではなく[WANDERER'S INFO運営](https://twitter.com/WANDERERSINFO)のDMまでお願いいたします。

## 仕様

本リポジトリはフロントのみの構成になっており、システムとして動作するためには別途データ保存用のバックエンドとツイート用のAPIが必要です。

### ツイートタイミング

本リポジトリに含まれるソースコードの範囲外ですが現在の設定としては

1. 登録時
2. 月曜・金曜の朝07:30(JST)に登録件数の広報
3. プリント期限12時間前

の3つのタイミングで広報が実施されます。

## 開発にあたって

### 開発モードでの起動 - `npm start`

[http://localhost:3000](http://localhost:3000)で開発中画面の確認ができます。
watchモードになるのでファイル保存時で自動リロードが走ります。

### 実行環境へのデプロイ- `npm run deploy`

自動でビルドとcommit/pushが走ります。
GitHub Actionsによるデプロイが完了すると[https://raitehu.github.io/garland/](https://raitehu.github.io/garland/)で画面確認ができます。


## 環境変数

| key | type | description |
| ---- | ---- | ---- |
| REACT_APP_API_URL | string | データ保存用のバックエンドのURL<br>ex) https://XXXXXX/YYY/ |
