import { Body, Controller, Delete, Get, Param, Post, Render } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import NewRajzfilmDto from './newRajzfilm.dto';
import Rajzfilm from './rajzfilm.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }
  @Post('rajzfilm')
  async newRajzfilm(@Body() rajzfilm:NewRajzfilmDto){
	const rajzfilmRepo=this.dataSource.getRepository(Rajzfilm);
	rajzfilmRepo.save(rajzfilm);
	return rajzfilm;
  }
  @Get('rajzfilm')
  async listRajzfilm(){
	const rajzfilmRepo=this.dataSource.getRepository(Rajzfilm);
	const [adat,darab]=await rajzfilmRepo.createQueryBuilder().getManyAndCount();
	return {rajzfilmek: adat,count:darab}
  }
  @Delete('/rajzfilm/:id')
  async deleteRajzfilm(@Param('id') id: number) {
	const rajzfilmRepo=this.dataSource.getRepository(Rajzfilm);
	await rajzfilmRepo.delete(id)
  }
}