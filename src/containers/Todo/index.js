import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import tasksActions from 'actions/todo'
import Head from 'components/Head'
import Nav from 'components/Nav'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
import TaskStats from './TaskStats'
import selector from '../../selectors/todo'

class Todo extends Component {
  static propTypes = {
    tasks: PropTypes.object.isRequired,
    taskCount: PropTypes.number.isRequired,
    doneTaskCount: PropTypes.number.isRequired,
    filters: PropTypes.string.isRequired,
    onTasksActions: PropTypes.object.isRequired,
  }

  componentDidMount () {
    const { onTasksActions } = this.props
    onTasksActions.fetchTaskList()
  }

  render () {
    const { tasks, taskCount, doneTaskCount, filters, onTasksActions } = this.props
    const { taskAdd, taskDone, taskUndone, taskRemove, taskEdit, taskFilter } = onTasksActions

    const taskListProps = {
      tasks,
      onTaskEdit: taskEdit,
      onTaskDone: taskDone,
      onTaskUndone: taskUndone,
      onTaskRemove: taskRemove,
    }

    const taskStatsProps = {
      filters,
      taskCount,
      doneTaskCount,
      onTaskFilter: taskFilter,
    }

    return (
      <div className="viewport content-box">
        <Head title="home" />
        <Nav />
        <div className="content">
          <TaskForm onSave={taskAdd} />
          <TaskList {...taskListProps} />
          <TaskStats {...taskStatsProps} />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onTasksActions: bindActionCreators(tasksActions, dispatch),
})

export default connect(selector, mapDispatchToProps)(Todo)
