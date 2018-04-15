import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import tasksActions from 'actions/todo'
import { Container, Header, TabBar, Nav } from 'components'
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

  static async getInitialProps ({ store }) {
    await store.dispatch(tasksActions.fetchTaskList())
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

    const headerProps = {
      rightContentType: 'tabBar',
    }

    const containerProps = {
      renderHeader: <Header {...headerProps}>首页</Header>,
      renderTabBar: <TabBar selectedTab="" hidden />,
    }

    return (
      <Container {...containerProps}>
        <div className="viewport">
          <Nav />
          <TaskForm onSave={taskAdd} />
          <TaskList {...taskListProps} />
          <TaskStats {...taskStatsProps} />
        </div>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onTasksActions: bindActionCreators(tasksActions, dispatch),
})

export default connect(selector, mapDispatchToProps)(Todo)
