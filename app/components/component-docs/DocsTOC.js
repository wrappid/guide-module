import React from "react";
import {
  toggleMenuItemState,
  CoreAccordion,
  CoreAccordionDetail,
  CoreAccordionSummary,
  CoreBox,
  CoreClasses,
  CoreTextButton,
  CoreTypographyBody1,
  CoreMenu,
} from "@wrappid/core";
import { useDispatch, useSelector } from "react-redux";

export default function DocsTOC(props) {
  const dispatch = useDispatch();

  const collapse = useSelector((state) => state?.menu?.collapse);
  const [preparedMenu, setPreparedMenu] = React.useState([]);
  const { docsRegistry, /* currentPage, */ setCurrentPage } = props;
  const getSortedRegistry = (docsRegistry) => {
    return (
      docsRegistry &&
      Object.keys(docsRegistry)?.sort(
        (curr, next) => docsRegistry[curr].order - docsRegistry[next].order
      )
    );
  };

  const prepareComponentMenu = (docsRegistry) => {
    return (
      getSortedRegistry(docsRegistry)?.map((docKey) => {
        console.log("menu of", docKey);
        console.log(prepareComponentMenu(docsRegistry[docKey]?.children));
        return {
          Children: prepareComponentMenu(docsRegistry[docKey]?.children),
          id: docKey,
          label: docKey?.trim(),
          name: docKey?.trim(),
          type: "menuitem",
        };
      }) || []
    );
  };
  React.useEffect(() => {
    setPreparedMenu(prepareComponentMenu(docsRegistry));
  }, []);
  React.useEffect(() => {
    setPreparedMenu(prepareComponentMenu(docsRegistry));
  }, [docsRegistry]);

  React.useEffect(() => {
    console.log("prepared menu");
    console.log(preparedMenu);
  }, [preparedMenu]);

  return (
    <>
      <CoreTypographyBody1>Table Of Contents</CoreTypographyBody1>

      <CoreBox
        CoreClasses={[
          CoreClasses.OVERFLOW.OVERFLOW_Y_SCROLL,
          CoreClasses.HEIGHT.H_100,
        ]}
      >
        {/* {JSON.stringify(prepareComponentMenu(docsRegistry), null, 2)} */}
        <CoreMenu
          openCollapse={collapse}
          multiLevel={true}
          menu={prepareComponentMenu(docsRegistry)}
          OnMenuClick={(menuItem) => {
            if (menuItem.Children && menuItem.Children.length > 0) {
              dispatch(toggleMenuItemState(menuItem));
            }
            setCurrentPage(menuItem.id);
          }}
          open={true}
        />
      </CoreBox>
    </>
  );
}
