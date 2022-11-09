import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }

    @Get()
    getTasks(): Task[] {
        return this.tasksService.getTasks();
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Task {
        return this.tasksService.getTaskById(id);
    }

    @Post()
    createTask(
        @Body('title') title: string,
        @Body('description') description: string)
        : Task {
        return this.tasksService.createTask(title, description);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id: string) {
        this.tasksService.deleteTask(id);
        return `Task ${id} Deleted Sucessfully.`;
    }

    @Patch('/:id')
    updateTaskStatus(
        @Param('id') id: string,
        @Body('status') status: TaskStatus) {
        return this.tasksService.updateTaskStatus(id, status);
    }

    @Put('/:id')
    updateTask(
        @Param('id') id: string,
        @Body('title') title: string,
        @Body('description') description: string,
        @Body('status') status: TaskStatus) {
        return this.tasksService.updateTask(id, title, description, status);
    }
}
