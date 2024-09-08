import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';
import * as iam from 'aws-cdk-lib/aws-iam';

export class CdkPublicS3Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // S3 bucket for public access website
    const bucket = new s3.Bucket(this, 'CdkPublicS3Bucket', {
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: 'error.html',
      publicReadAccess: true, // 公開アクセスを有効化
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ACLS, // 必要に応じて調整
    });

    /

    // CORS設定の追加
    bucket.addCorsRule({
      allowedOrigins: ['*'], // すべてのオリジンを許可
      allowedMethods: [s3.HttpMethods.GET, s3.HttpMethods.HEAD], // GET, HEADメソッドを許可
      allowedHeaders: ['*'], // すべてのヘッダーを許可
      maxAge: 30, // オプション、ブラウザのCORS結果キャッシュ期間（秒）
    });/ バケットポリシーを追加してすべてのオブジェクトへの公開アクセスを許可
    bucket.addToResourcePolicy(new iam.PolicyStatement({
      actions: ['s3:GetObject'],
      resources: [`${bucket.bucketArn}/*`],
      principals: [new iam.AnyPrincipal()],
    }));

    // deploy the website assets to the bucket
    new s3deploy.BucketDeployment(this, 'CdkPublicS3Deploy', {
      sources: [s3deploy.Source.asset('./website')],
      destinationBucket: bucket,
    });

    // WebサイトのURLを出力
    new cdk.CfnOutput(this, 'CdkPublicS3BucketOutput', {
      value: bucket.bucketWebsiteUrl,
    });

    // The code that defines your stack goes here
  }
}
