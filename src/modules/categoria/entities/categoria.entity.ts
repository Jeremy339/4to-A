import { Producto } from "../../producto/entities/producto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Categoria {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombreCategoria: string;
    @Column()
    detalle:string;
    
    @OneToMany(()=> Producto, (prod)=> prod.categoria)
    producto:Producto[]
    }
