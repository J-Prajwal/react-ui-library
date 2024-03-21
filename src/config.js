import ButtonViewer from "./viewerComponents/ButtonViewer/ButtonViewer";
import LoaderViewer from "./viewerComponents/LoaderViewer/LoaderViewer";
import TypographyViewer from "./viewerComponents/TypographyViewer/TypographyViewer";

export const componentList = [
  {
    id: 1,
    name: "Button",
    component: <ButtonViewer />,
  },
  {
    id: 2,
    name: "Typography",
    component: <TypographyViewer />,
  },
  {
    id: 3,
    name: "Loader",
    component: <LoaderViewer />,
  },
];
