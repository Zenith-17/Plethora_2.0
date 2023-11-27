import "./App.css";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import VideoContainer from "./components/VideoContainer";
import { lazy, Suspense} from "react";

//lodaing other components inside home component in a lazy manner
// using lazy and Suspense from React to enable lazy loading for certain components. 
// Lazy loading means that these components will be loaded asynchronously (on-demand) when they are accessed, rather than loading them all at once when the application starts. This is beneficial for reducing the initial loading time and only fetching components as needed.

const WatchPage = lazy(() => import("./components/WatchPage"));
const SearchPage = lazy(() => import("./components/SearchPage"));
const FilteredResults = lazy(() => import("./components/FilteredResults"));
const ShortsPage = lazy(() => import("./components/ShortsPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <VideoContainer />,
      },
      {
        path: "watch",
        element: (
          <Suspense>
            <WatchPage />
          </Suspense>
        ),
      },
      {
        path: "/results",
        element: (
          <Suspense>
            <SearchPage />
          </Suspense>
        ),
      },
      {
        path: "/filter",
        element: (
          <Suspense>
            <FilteredResults />
          </Suspense>
        ),
      },
      {
        path: "/shorts",
        element: (
          <Suspense>
            <ShortsPage />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {

  return (
    <div className="App dark:bg-black dark:text-gray-300">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
