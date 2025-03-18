# CHORN Project

## Smart Contract Development

* `truffle init`
* Update `truffle-config.js`
* Develop contracts
* Deploy to Local `NETWORK=development truffle migrate`
* Deploy to Production (Mainnet) `NETWORK=mainnet truffle migrate`

## Initial SQLite3 and Database

* Add dependencies `yarn add sqlite sqlite3 ts-node`
* Add file `src/app/services/api/initial.ts`
* Add `"type": "module"` in the package.json
* Run `yarn migrate` then it will create a file `database.db`
* Remove `"type": "module"` from the package.json

## Install Vercel CLI

* `inp install -g vercel`
* `vercel login`
* `vercel`

## CI/CD Integration

* Add file **.gitlab-ci.yml**

```
stages:
  - deploy

deploy_to_vercel:
  image: node:22
  stage: deploy
  script:
    - npm install -g vercel
    - vercel --token $VERCEL_TOKEN --prod --yes
  only:
    - main
```

## Note for script --verbose-rpc

```

  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "postbuild": "next-sitemap && node scripts/after-next-sitemap.js",
    "migrate": "node --loader ts-node/esm src/app/services/api/initial.ts",
    "console-dev": "npx truffle console --network development",
    "compile-dev": "npx truffle compile --network development",
    "migrate-dev": "npx truffle migrate --network development --verbose-rpc",
    "migrate-prod": "npx truffle migrate --network mainnet"
  },
```

## Infura

* First request

```
curl --url https://mainnet.infura.io/v3/1b99ecc1d7a74e69b9fbd745e9e31e69 \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'
  
{"jsonrpc":"2.0","id":1,"result":"0x14cc93e"}  
```