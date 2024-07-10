import { Provider } from 'react-redux'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import store from './utils/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Content from './components/Content'
import SearchResults from './components/SearchResults'
import VideoBody from './components/VideoBody'

const BrowserRouter = createBrowserRouter([{
  path: '/',
  element: <><Header /><Body /></>,
  children: [
    {
      path: '/',
      element: <Content />
    },
    {
      path: 'watch',
      element: <VideoBody />
    },
    {
      path: 'results',
      element: <SearchResults />
    }
  ]
}])

function App() {

  return (
    <Provider store={store}>
      <RouterProvider router={BrowserRouter} />
    </Provider>
  )
}

export default App
