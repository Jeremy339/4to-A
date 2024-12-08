import { IsDecimal, IsInt, IsNotEmpty, IsString, IsOptional, IsBoolean } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateProductoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;
  
  @IsDecimal({decimal_digits:'2'})
  @IsNotEmpty()
  precio: number;

  @IsInt()
  @IsNotEmpty()
  stock: number;

  @IsOptional()
  @IsString()
  image: string;

  @IsOptional()
  @IsString()
  descripcion: string;

  @IsOptional()
  @IsBoolean()
  estado: boolean;

  @IsInt()
  @IsNotEmpty()
  categoriaId: number;
}
