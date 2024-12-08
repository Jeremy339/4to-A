import { Module } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoController } from './producto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';  // Asegúrate de importar TypeOrmModule
import { Producto } from './entities/producto.entity';  // Importa la entidad Producto

@Module({
  imports: [TypeOrmModule.forFeature([Producto])],  // Registra la entidad Producto en el módulo
  controllers: [ProductoController],
  providers: [ProductoService],
})
export class ProductoModule {}
