import { Injectable } from '@nestjs/common';

@Injectable()
export class QuizService {

    getAll(){
        return 'This is from service'
    }
}
