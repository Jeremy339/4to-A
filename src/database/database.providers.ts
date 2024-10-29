import { DataSource } from "typeorm"

export const databaseProvider=[
    {
        provide: 'DATABASE_CONECTION',
        useFactory:()=>{
            const dataSource= new DataSource({
                type:'postgres',
                host:'localhost',
                port: 5432,
                username:'postgres',
                password: '123',
                database:'back_nest_angular_JP'
            });
            return dataSource.initialize();
        }
    }
]