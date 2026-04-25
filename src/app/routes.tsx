import { createBrowserRouter } from "react-router";
import { StartScreen } from "./components/StartScreen";
import { HomePage } from "./components/HomePage";
import { OfficeMerchandise } from "./components/OfficeMerchandise";
import { GiftSets } from "./components/GiftSets";
import { MediaPublications } from "./components/MediaPublications";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <StartScreen />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/office-merchandise",
    element: <OfficeMerchandise />,
  },
  {
    path: "/gift-sets",
    element: <GiftSets />,
  },
  {
    path: "/media-publications",
    element: <MediaPublications />,
  },
]);
