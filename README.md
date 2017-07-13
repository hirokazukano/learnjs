
## Study Serverless Single Page Apps

deploy url: [http://learnjs.study.jp.s3-website-ap-northeast-1.amazonaws.com/](http://learnjs.study.jp.s3-website-ap-northeast-1.amazonaws.com/) 

### AWS CLI setup for mac

1. `sudo easy_install pip`
2. `sudo -H pip install awscli --upgrade --ignore-installed six`
3. `aws --version`
4. `aws configure --profile admin`で~/.aws/credentialsに設定が書き出される

### S3 bucket create and deploy

* create `$ ./sspa create_bucket learnjs.study.jp`
* deploy `$ ./sspa deploy_bucket learnjs.study.jp`

### Amazon Cognito設定

#### Google認証設定

1. [Google Developers Consoleにログイン](https://console.developers.google.com)
2. プロジェクトを作成
3. 「APIを有効にする」を選択
4. 「認証情報」を選択
5. OAuth同意画面を入力
6. 認証情報作成をクリックして「OAuthクライアントID」を選択
7. 種類を「ウェブアプリケーション」を選択して作成
8. クライアントIDをconf/cognito/identity_pools/learnjs/config.jsonに追記

#### アイデンティティプールの作成

`./sspa create_pool conf/cognito/identity_pools/learnjs`を実行
* assume_role_policy.json,pool_info.json,role_info.jsonが作成される
* awsに新しいroleが作成される
