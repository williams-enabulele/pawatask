
import { CommentItem, TodoTask } from "@/models"


  export type State = {
    ToggleAddModal : boolean
    ToggleCommentModal: boolean
    tasks: Array<TodoTask>
    comments: Array<CommentItem>
    currentId: number;

  }
  
  export const state: State = {
      tasks: Array<TodoTask>(),
      comments: Array<CommentItem>(),
      ToggleAddModal: false,
      ToggleCommentModal: false,
      currentId: 0
    
  }