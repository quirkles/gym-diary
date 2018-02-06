import Home from './containers/Home'
import List from './containers/List'

const routes = [
  { path: '/',
    exact: true,
    component: Home
  },
  { path: '/home',
    component: Home
  },
  { path: '/list',
    component: List
  }
]

export default routes;