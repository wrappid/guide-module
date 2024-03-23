/* eslint-disable */
import React from "react";

import {
  toggleMenuItemState,
  CoreBox,
  CoreClasses,
  CoreSpan,
  CoreTOC,
  CoreH5,
  toggleRightMenuState
} from "@wrappid/core";
import { useDispatch, useSelector } from "react-redux";
import { CoreMenu } from "@wrappid/core";

export default function ComponentsMenu(props) {
  const dispatch = useDispatch();
  const contentRef = React.useRef(null);

  const collapse = useSelector((state) => state?.menu?.collapse);
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
        // eslint-disable-next-line etc/no-commented-out-code
        {/*console.log("menu of", docKey);
      console.log(prepareComponentMenu(docsRegistry[docKey]?.children));*/}
        let label = <CoreSpan gutterBottom={true} styleClasses={[CoreClasses.COLOR.TEXT_BLACK]}>{`${docKey?.trim()}`}</CoreSpan>;

        return {
          Children: prepareComponentMenu(docsRegistry[docKey]?.children),
          id: docKey,
          label: label,
          name: docKey?.trim(),
          type: "menuitem",
        };
      }) || []
    );
  };

  return (
    <>
      <CoreBox>
        {/* eslint-disable-next-line etc/no-commented-out-code */}
        {/* <CoreTOC 
          headerComponents={[CoreH5]}
          contentRef={contentRef} 
          openCollapse={collapse}
          multiLevel={true}
          menu={prepareComponentMenu(docsRegistry)}
          OnMenuClick={(menuItem) => {
            if (menuItem?.Children && menuItem?.Children?.length >= 0) {
              dispatch(toggleMenuItemState(menuItem));
            }
            setCurrentPage(menuItem?.id);
          }}
          open={true}
        /> */}

        {/* eslint-disable-next-line etc/no-commented-out-code */}
        <CoreMenu
          openCollapse={collapse}
          multiLevel={true}
          menu={prepareComponentMenu(docsRegistry)}
          OnMenuClick={(menuItem) => {
            if (menuItem?.Children && menuItem?.Children?.length >= 0) {
              dispatch(toggleMenuItemState(menuItem));
            }
            setCurrentPage(menuItem?.id);
            dispatch(toggleRightMenuState())
          }}
          open={true}
        />
      </CoreBox>
    </>
  );
}
