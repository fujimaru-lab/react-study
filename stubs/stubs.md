# Stubs Server

開発用にStubs Serverを使用する

## References

[stubs-server](https://www.npmjs.com/package/stubs-server)

## Setup

1. Create a folder 'stubs' which will contains all the json stubs files
2. Just run npx stubs-server and your stubs will hosted on port 9001.
3. Open https://localhost:9001,
4. This will open the stubs-ui console where you can create or edit your stubs.
5. Create new stubs by clicking 'Create New Stub'.
6. Type the 'api name'(e.g "test") and enter valid json and Click 'Add API'.
7. Search for API, edit and save.
8. Test your mock api by going to browser "http://localhost:9001/test".
9. Your other routes will work as normal.

## Stub URLの設定

.envファイルを参考にして作成すること  
例： URL_ATTENDANCELIST=https://localhost:9001/attendancelist
