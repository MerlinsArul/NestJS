import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Createquizdto } from './createquiz.dto';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {

    constructor(private quizservice:QuizService){}

    @Get()
    quiz(){
        return [1,2,3]
    }

    @Get('fromservice')
    allquiz(){
        return this.quizservice.getAll()
    }

    @Post()
    @UsePipes(ValidationPipe)
    createQuiz(@Body() quizdata:Createquizdto){
             return {data : quizdata}
    }
}
