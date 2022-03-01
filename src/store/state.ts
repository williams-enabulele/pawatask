
import { TodoTask } from "@/models"
import { CommentItem } from "@/models/Comment"


  export type State = {
    loading: boolean
    ToggleAddModal : boolean
    ToggleCommentModal: boolean
    tasks: Array<TodoTask>
    comments: Array<CommentItem>
    currentId: number;

  }
  
  export const state: State = {
      loading: false,
      tasks: Array<TodoTask>(),
      comments: [],
      ToggleAddModal: false,
      ToggleCommentModal: false,
      currentId: 0
    
  }