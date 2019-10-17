---
title: "ブログを GatsbyJS でリニューアルしました"
description: "React ベースの静的サイトジェネレータである GatsbyJS を使ってブログを作り直したので解説。"
date: "2019-10-11"
tags: ["tech", "javascript", "netlify", "react", "gatsby"]
image: ""
---

とてもお久しぶりにブログを書きます。どうもこんばんは、 [@nabeliwo](https://twitter.com/nabeliwo) です。

## 趣味はブログ作りです。

ここで突然の自己紹介をするんですけど僕の趣味はブログを作ることです。  
「書くこと」ではなくて「作ること」が趣味です。

これまではてブや WordPress や Hugo などを使ってブログを立ち上げては「ブログはじめました」記事だけ投稿してその後一度も記事が更新されないままブログを閉じるという日々を繰り返してきたわけですが、今回また新たにブログ作ってみました。

前回は Go 言語の静的サイトジェネレータである Hugo を使用しましたが、今回は React 製の静的サイトジェネレータである [GatsbyJS](https://www.gatsbyjs.org/) を使用しています。

## GatsbyJS すごい

ここ最近はわざわざ記事は DB に保存するのではなくマークダウンでファイルとして持っておいてそれをローカルでビルドして HTML を生成してホストするっていう流れがあると思うのですが、 GatsbyJS もその類です。

その分動的に記事をごにょごにょして柔軟に表示する、みたいなことは難しいんですけど、 WordPress で管理してた時とか正直本当にめんどくさかったし、今はローカルでマークダウン作って Git で push したら一発で公開という流れが簡単に作れるので本当に管理が簡単です。

で、その流れで以前までは Hugo を使っていたのですがなんせ Go 言語が全然わかってないので自由自在に色々できるっていう感じではなくて。  
もちろん勉強すればいいだけの話ではあるのですが、やりたいことができる -> 勉強する -> 実装するのサイクルが遅すぎてうがあああってなってました。

そんなわけで React 製の静的サイトジェネレータが出たって聞いた時はめっちゃ興奮しましたね。

僕は職業としては Web フロントエンドエンジニアで SPA を作ることを強みとさせていただいているので、普段から React には慣れています。  
ということで Gatsby なら自分のやりたいことを一切の障壁なく実行できるのではっていう。

実際やってみて思ったこととしてはプラグインがめっちゃ充実してるのでやりたいことがほぼプラグインで全部できたので拍子抜けしたっていう。  
もうちょっと自分でごにょる必要あるかなーと思ってたのですが、本当に簡単に終わりました。

あ、 GatsbyJS の特徴をもう一つ言うと GraphQL を使ってデータを取得して React で描画するっていう感じです。  
そのデータリソースをローカルのマークダウンファイルだったり、 Contentful だったり、自分の好きなようにできますよーっていうのがウリなのかも。

## 作った

そんなわけで作ったのがこのブログ「ラリルレロ」です。  
「ラリルレロ」には特に意味はないですね。「愛国者達」とかでもないですよ。

正直 GatsbyJS を知ったのは1年以上前で、ブログ作りたい〜ってずっと言ってたのですがなにせスプラトゥーンで忙しい日々なのでなかなか行動に移せずにいたのですが今回ようやく重い腰をあげて作るに至りました。

僕は特にデザインに明るいというわけでもなくて毎回見た目は雰囲気で「これかっこよくね？」って思ったものを作るっていうアレなのですが、今回もそんな感じです。  
強いて言えば最近は乗算にはまっているので乗算を使ったエフェクトを入れたいなーっていうのがあって、ロゴに乗算を使ってみました。

![ラリルレロ](/images/post/2019/10/renewal-blog/01.gif "ラリルレロ")

こんな感じ。個人的にはとても気に入ってます。  
ちなみに前回のブログはこんな感じのロゴにしてました。

![nabeliwo-note](/images/post/2019/10/renewal-blog/02.gif "nabeliwo-note")

これもめっちゃいいですね…。  
こういうのを考えるのが結構好きだったりします。

## 他のツールとか

あとは Route53 でドメイン取って Netlify でホストしてます。  
本当に最近は全てが楽で一瞬で良い時代になってるなーって感じがする。

ちなみに以前までは nabeliwo.me というドメインを使っていたんだけどなんとなくやめて nabeliwo.com にした。  
本当に特に理由はなくてなんとなく。

ブログのソースコードはこちら。  
[https://github.com/nabeliwo/nabeliwo-blog](https://github.com/nabeliwo/nabeliwo-blog)

特に隠すものもないはずなので(多分)、パブリックリポジトリでやっている。  
やばいやつ見えてるやんあほーっていうのに気づいた優しい人はこっそり教えてください。

gatsby-config.js っていうのと gatsby-node.js っていうファイルで基本的な設定やらページの生成を行うんだけれど、触った感じ多分ここで複雑なことをがあーって書くのは行儀が悪いっぽいということに気づいた。気づきつつ一旦そこに詰め込みまくってて非常に参考にならない実装になっているので、 GatsbyJS 興味持っていてブログ作ってみたいって人は僕のソースコードはあまり参考にしない方がいいかも。

## お気持ちとか

あとはまあ気持ち的な話で、最近は note とか強くなってきているし、はてブも未だ健在だし文章を投稿する場として自分自身で環境を作るっていうのはそんなにおいしい感じはないっていうのは共通認識だと思います。

とは言え僕は Web フロントエンドの人間なのでブログというのは格好の練習場所というか、まあ最初に言ったように趣味なのでそこでいろんな実験をしたいよねって感じです。  
GatsbyJS のすごいところで、 PWA 対応もプラグイン入れるだけでシュッとできるので実はこのブログもすでに対応済みだったりします。

あとはパフォーマンス周りとかもブログは練習に最適なので良いかなーって思ってます。  
現状このブログではまだまだそこらへんできてないので引き続きよくしていこうかなって段階です。  
そんなわけでなんか個人でやりたいなーって思っているフロントエンドエンジニアにブログは最初の助走としておすすめではあります。

もし今後もこのブログで記事を投稿することがあるならば、多分アニメとかゲームとか本とかテックな話とかを書いていくと思うので、興味があったら見てもらえたらなーと思ってます。  
終わり。