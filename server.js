const express = require('express');
const Gun = require('gun');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname));

const server = app.listen(port, '0.0.0.0', () => {
    console.log(`CORE_LIVE_AT_PORT_${port}`);
});

// Gunサーバーの初期化（Renderのプロキシを通すための設定）
Gun({ 
    web: server,
    file: 'db_data', // 簡易的な永続化
    radisk: false    // 無料プランのメモリ制限対策
});
