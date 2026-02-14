const express = require('express');
const Gun = require('gun');
const path = require('path');
const app = express();

// サーバーのポート設定
const port = process.env.PORT || 3000;

// index.htmlを配信
app.use(express.static(path.join(__dirname)));

const server = app.listen(port, () => {
    console.log(`ZENITH_V20_CORE_LIVE: Port ${port}`);
});

// Gun.jsサーバーの起動
Gun({ web: server });
