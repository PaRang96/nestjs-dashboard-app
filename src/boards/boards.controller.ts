import { Controller, Get, Post, Body, Param, Delete, Patch, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board, BoardStatus } from './board.model';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) {}

    @Get('/')
    getAllBoards() : Board[] {
        return this.boardsService.getAllBoards();
    }

    @Post('/')
    @UsePipes(ValidationPipe)
    createBoard(
        @Body() createBoardDto: CreateBoardDto
    ) : Board {
        return this.boardsService.createBoard(createBoardDto);
    }

    @Get('/:id')
    getBoardById(@Param('id') id: string) : Board {
        return this.boardsService.getBoardById(id);
    }

    @Delete('/:id')
    deleteBoard(@Param('id') id: string) : void {
        this.boardsService.deleteBoard(id);
    }

    @Patch('/:id/status')
    updateBoardStatus(
        @Param('id') id: string,
        @Body('status', BoardStatusValidationPipe) status: BoardStatus
    ) : Board {
        return this.boardsService.updateBoardStatus(id, status);
    }
}
