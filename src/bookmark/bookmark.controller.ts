import {
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Redirect,
} from '@nestjs/common';
import { create } from 'domain';

@Controller('bookmark')
export class BookmarkController {
  // @Post()
  // create():string{
  //   return 'This action is used to create and post a new data'
  // }

  // @Post()
  // @HttpCode(204)  // This method will not return any value
  // createNew(){
  //     return 'This is used to print http code'
  // }

  @Post()
  @Header('Header-name', 'Hi everyone')
  createHeader() {
    return 'This action post the header method';
  }

  @Get()
  findAll(): string {
    return 'This action is used to return all the data';
  }

  @Get('asdfg')
  getdata() {
    return 'This is the method using route';
  }

  //     @Get(':id')
  //    findOne(@Param() params): string {
  //   console.log(params.id);
  //   return `This action returns a #${params.id} `;
  // }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }

  //   @Get()
  //   @Redirect('https://nestjs.com', 301)
  //    hostName(){
  //      return {url:'https://nestjs.com'}
  // }
}
