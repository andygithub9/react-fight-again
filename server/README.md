## install cmd

```bash
npm init -y
npm i express -S
npm i nodemon -D
npm i body-parser -S
```

## package.json

```json
  "scripts": {
    "dev":"nodemon app.js"
  },
```

## 測試發送 POST 請求並攜帶 JSON 數據到 http://localhost:3000/login

可以在 bit bash 中測試

```bash
curl -X POST -H "Content-Type: application/json" -d '{"uid":"01","passwd":"123qweasd"}' http://localhost:3000/login
```
