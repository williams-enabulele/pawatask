
import { TodoTask } from "@/models"
import { CommentItem } from "@/models/Comment"


  export type State = {
    ToggleAddModal : boolean
    ToggleCommentModal: boolean
    tasks: Array<TodoTask>
    comments: Array<CommentItem>
    currentId: number;

  }
  
  export const state: State = {
      tasks: Array<TodoTask>(),
      comments: [],
      ToggleAddModal: false,
      ToggleCommentModal: false,
      currentId: 0
    
  }