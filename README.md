# kakomimasuServer
 #procon31 競技部門 コアサーバ for Deno/Node.js by すずとも

## 仕様
[かこみますネットワークプロトコルを決めようの会](https://hackmd.io/IDgCfeQ8SqWQuK9PzkG8xQ?view)
に書いてあるAPIを作ってる

## 進捗
プレイヤー登録, ルームID取得APIは何となくできた。

## 利用方法
### cloneして使う
```
$ git clone https://github.com/kamekyame/kakomimasuServer
```

コンソールにて
```
$ deno run --allow-net main.ts
```
`main.ts`を実行すると、`localhost:8888`でリスニングを開始します。

### ファイルでimportして使う
```Typescript
import "https://kamekyame.github.io/kakomimasuServer/main.ts";
```
cloneして使う方法と同様に、上記コードが書かれたファイルを実行すると、`localhost:8888`でリスニングを開始します。

## APIリファレンス
基本的には上記の[仕様](#仕様)に沿って作っている。

出来たところまでを下記に示した。

### POST プレイヤー登録、ルームID取得API
リクエストURL
```
http://localhost:8888/match
```
header
```
Content-Type: application/json
```
body
```Json
{
    "playerName": "すずとも",
    "spec": "ポンコツ"
}
```
---
レスポンス例
```
{
    "playerName": "すずとも",
    "spec": "ポンコツ",
    "playerToken": "0df81d58-5d44-4b5e-9480-db28933d9b1b",
    "roomId": "694c5172-a294-4fa0-9b2f-075f704d68bd"
}
```

このように、playerNameとspecを送信すると、
player固有のTokenとルームIDがJsonで返ってきます。