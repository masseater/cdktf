import { Construct } from 'constructs';
import { App, TerraformStack } from 'cdktf';
import { AwsProvider, Instance } from "./.gen/providers/aws";

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new AwsProvider(this, 'tfcdk-aws', {
      region: 'ap-northeast-1'
    })

    // define resources here
    new Instance(this, 'tfcdk-instance', {
      ami: 'ami-01748a72bed07727c',
      instanceType: 't2.micro'
    })
  }
}

const app = new App();
new MyStack(app, 'cdktf');
app.synth();
