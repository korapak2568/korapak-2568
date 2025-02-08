# CHORN Project

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

## .gitlab-ci.yml
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