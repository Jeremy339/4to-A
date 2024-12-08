import { Injectable } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductoService {

  constructor(@InjectRepository(Producto) private productoRepository: Repository<Producto>){}
  queryBuilder(alias:string){
    return this.productoRepository.createQueryBuilder(alias);
  }

  create(createProductoDto: CreateProductoDto) {
    const producto = this.productoRepository.create(createProductoDto);  // Crear la instancia del producto
    return this.productoRepository.save(producto);  // Guardar el producto en la base de datos
  }

  findAll() {
    return this.productoRepository.find();  // Devuelve todos los productos
  }

  async findOne(id: number) {
    const producto = await this.productoRepository.findOne({ where: { id } });
    if (!producto) {
      throw new Error('Producto no encontrado');
    }
    return producto;
  }

  async update(id: number, updateProductoDto: UpdateProductoDto) {
    const producto = await this.productoRepository.findOne({ where: { id } });
    if (!producto) {
      throw new Error('Producto no encontrado');
    }
  
    // Actualizar las propiedades del producto
    Object.assign(producto, updateProductoDto);
  
    return this.productoRepository.save(producto);  // Guardar el producto actualizado
  }

  async remove(id: number) {
    const producto = await this.productoRepository.findOne({ where: { id } });
    if (!producto) {
      throw new Error('Producto no encontrado');
    }
  
    await this.productoRepository.remove(producto);  // Eliminar el producto
    return { message: 'Producto eliminado exitosamente' };  // Respuesta después de eliminar
  }
}
