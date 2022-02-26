
import { CommentItem } from "@/models/Comment"
import { TaskItem } from "@/models/Task"


  export type State = {
    loading: boolean
    ToggleAddModal : boolean
    ToggleCommentModal: boolean
    task: Array<TaskItem>
    comment: Array<CommentItem>

  }
  
  export const state: State = {
      loading: false,
      task: [],
      comment: [],
      ToggleAddModal: false,
      ToggleCommentModal: false
    
  }