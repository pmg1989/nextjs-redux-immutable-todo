import fetch from 'isomorphic-fetch'
import Immutable from 'immutable'
import { todoConstants } from 'constants'

export const taskAdd = name => ({ name, type: todoConstants.TASK_ADD })

export const taskDone = id => ({ id, type: todoConstants.TASK_DONE })

export const taskUndone = id => ({ id, type: todoConstants.TASK_UNDONE })

export const taskRemove = id => ({ id, type: todoConstants.TASK_REMOVE })

export const taskEdit = ({ id, name }) => ({ id, name, type: todoConstants.TASK_EDIT })

export const taskFilter = filter => ({ filter, type: todoConstants.TASK_FILTER })

const receiveTaskList = list => ({
  list: Immutable.fromJS(list),
  type: todoConstants.FETCH_TASK_LIST,
})

// export const fetchTaskList = () => (
//     dispatch => (
//       fetch('https://api.myjson.com/bins/aapid')
//       .then(res => res.json())
//       .then(list => dispatch(receiveTaskList(list)))
//     )
// )

export const fetchTaskList = () => (
  async (dispatch) => {
    const list = await fetch('https://api.myjson.com/bins/aapid').then(res => res.json())
    dispatch(receiveTaskList(list))
  }
)
