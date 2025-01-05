import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { DataSourceOptions } from 'typeorm';
import { DataSource } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './boards/database/typeorm.config';

@Module({
	imports: [
	  	TypeOrmModule.forRootAsync({
			useClass: TypeOrmConfig,
			dataSourceFactory: async (options: DataSourceOptions) => {
		  	return new DataSource(options).initialize()
			}
	  	}),
	  	BoardsModule
	],
})
export class AppModule {}
