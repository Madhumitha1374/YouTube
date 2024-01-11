// // import logo from './logo.svg';
import { Provider, useSelector } from 'react-redux';
import './App.css';
import { Body } from './Components/Body';
import { Header } from './Components/Header';
import appStore from './redux/appStore';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MainContainer } from './Components/MainContainer';
import { WatchPage } from './Components/WatchPage';
import { SearchResults } from './Components/SearchResults';
import { ChannelData } from './Components/ChannelData';
import { Footer } from './Components/Footer';

const appRouter = createBrowserRouter([{
  path : "/",
  element : <Body/>,
  children: [
    {
      path : "/",
      element : <MainContainer/>
    },
    {
      path : "/",
      element : <Header/>
    },
    // {
    //   path : "/",
    //   element : <Footer/>
    // },
    {
      path : "watch",
      element : <WatchPage/>
    },
    {
      path : "/results",
      element : <SearchResults/>
    },
    {
      path : "/channel",
      element : <ChannelData/>
    }
  ]
}])


function App() {
  return (
    
      <Provider store={appStore}>
        <div>
      <Header/>
      <RouterProvider router={appRouter}/>
      {/* <Footer/> */}
      </div>
      </Provider>
    
  );
}

export default App;




