import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async(): Promise <Connection> =>{
    const defaultOption = await getConnectionOptions();
    return createConnection(
        Object.assign(defaultOption, {
            database: process.env.NODE_ENV === 'test' ? './src/database/databse.test.sqlite': defaultOption.database
        })
    )
}