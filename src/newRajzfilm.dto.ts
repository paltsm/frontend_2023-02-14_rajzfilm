import { IsEmail, Min, IsDateString, IsInt, IsOptional, IsDefined,IsString, MinLength} from "class-validator";

export default class NewRajzfilmDto{
	@IsString({message:'a névnek szövegnek kell lennie'})
	@IsDefined({message:'nevet kötelező megadni!'})
	nev:string

	@IsInt({message: 'megjelenés évnek egész számnak kell lennie'})
	megjelenesEv:number;
}