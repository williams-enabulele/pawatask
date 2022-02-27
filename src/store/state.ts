
import { CommentItem } from "@/models/Comment"
import { TaskItem } from "@/models/Task"


  export type State = {
    loading: boolean
    ToggleAddModal : boolean
    ToggleCommentModal: boolean
    tasks: Array<TaskItem>
    comment: Array<CommentItem>

  }
  
  export const state: State = {
      loading: false,
      tasks: [],
      comment: [],
      ToggleAddModal: false,
      ToggleCommentModal: false
    
  }