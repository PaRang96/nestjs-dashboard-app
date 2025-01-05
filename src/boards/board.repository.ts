import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Board } from "./board.entity";

@Injectable()
export class BoardRepository extends Repository<Board>{
    constructor(private datSource: DataSource) {
        super(Board, datSource.createEntityManager());
    }
}
