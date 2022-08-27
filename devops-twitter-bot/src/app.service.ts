import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return (
      '<i>Twitter Bot</i> for the <b>DevOps Community</b>.' +
      '<br/><br/>' +
      'Kindly checkout the repository at <i><b><a href="https://github.com/rohitg00/devops-twitter-bot">rohitg00/devops-twitter-bot</a></b></i>'
    );
  }
}
