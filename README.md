
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

