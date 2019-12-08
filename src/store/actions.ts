
//Action constants
export const ADD_TODO = '[Todo]Add Todo';

//Action constants
export const DELETE_TODO = '[Todo]Remove Todo';

//Action creators
export class AddTodo{
  readonly type = ADD_TODO;
  constructor(private payload:any){

  }

}

export class DeleteTodo{
  readonly type = DELETE_TODO;
  constructor(private payload:any){

  }

}
