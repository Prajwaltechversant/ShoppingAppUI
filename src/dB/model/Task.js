import { Model, Q } from "@nozbe/watermelondb";
import { date, field, readonly, text, writer } from "@nozbe/watermelondb/decorators";
import database from "..";

export default class Task extends Model{

    static table = 'tasks'

    @field('title')  title;
    @field('description')  description;
    @field('is_MarkAsDone') is_MarkAsDone;
    @readonly @date('created_at') createdAt;
    @date('updated_at')  updatedAt;

   

    // @writer static async addTask(){

    //     const newTask = await new Task({

    //     })
    // }


    // getdata

    static async allData(){
        const alldata = await database.get('tasks').query().fetch()
        return alldata;
    }

    


}