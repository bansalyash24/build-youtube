import './App.css';
import Body from './Body';
import Head from './Head';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import WatchPage from './WatchPage';
import MainContainer from './MainContainer';
import Demo from './Demo';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element:(
      <>
          <Head />
          <Body/>
      </>
    ),
    children: [
      {
        path: '/',
        element: <MainContainer />
      },
      {
        path: '/watch',
        element: <WatchPage />
      },
      {
        path: '/demo',
        element: <Demo />
      }
    ]
  }
])
function App() {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;

/***
 * Head
 * body
 *  Sidebar
 *  MenuItems
 * MainContainer
 *    ButtonList
 *    VideoContainer
 *      VideoCard
 */