import { ActionContext, ActionTree } from 'vuex'
import { Mutations, MutationType } from './mutations'
import { State } from './state'

export enum ActionTypes {
  GetTaskItems = 'GET_TASKS',
  GetTaskComments = 'GET_COMMENTS'
}

type ActionAugments = Omit<ActionContext<State, State>, 'commit'> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
}

export type Actions = {
  [ActionTypes.GetTaskItems](context: ActionAugments): void,
  [ActionTypes.GetTaskComments](context: ActionAugments): void,

}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.GetTaskItems]({ commit }) {
    commit(MutationType.SetLoading, true)

    await sleep(1000)

    commit(MutationType.SetLoading, false)
    commit(MutationType.SetTasks, [])
  },
  async [ActionTypes.GetTaskComments]({ commit }) {
    commit(MutationType.SetLoading, true)

    await sleep(1000)

    commit(MutationType.SetLoading, false)
    commit(MutationType.SetComments, [
      {
        id: "yyy",
        content: 'Task description lorem ipsum dolor lorem task description lorem ipsum dolor lorem task description lorem ipsum dolor lorem task description lorem ipsum dolor lorem task',
        date: "4/6/19"

      }
    ])
    }
}