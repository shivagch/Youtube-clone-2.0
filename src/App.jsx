import { Provider } from 'react-redux'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import store from './utils/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import VideoScreen from './components/VideoScreen'
import Content from './components/Content'

const BrowserRouter = createBrowserRouter([{
  path: '/',
  element: <Body />,
  children: [
    {
      path: '/',
      element: <Content />
    },
    {
      path: 'watch',
      element: <VideoScreen />
    }
  ]
}])

function App() {

  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={BrowserRouter} />
    </Provider>
  )
}

export default App
