import React from "react";

import {
  toggleMenuItemState,
  CoreBox,
  CoreClasses,
  CoreTypographyBody2,
  CoreMenu
} from "@wrappid/core";
import { useDispatch, useSelector } from "react-redux";

export default function ComponentsMenu(props) {
  const dispatch = useDispatch();

  const collapse = useSelector((state) => state?.menu?.collapse);
  // eslint-disable-next-line no-unused-vars
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
        // eslint-disable-next-line etc/no-commented-out-code
        {/*console.log("menu of", docKey);
      console.log(prepareComponentMenu(docsRegistry[docKey]?.children));*/}
        let label = <CoreTypographyBody2 gutterBottom={true} styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY]}>{`${docKey?.trim()}`}</CoreTypographyBody2>;

        return {
          Children: prepareComponentMenu(docsRegistry[docKey]?.children),
          id      : docKey,
          label   : label,
          name    : docKey?.trim(),
          type    : "menuitem",
        };
      }) || []
    );
  };

  /**
   * Right drawer related collapse
   */
  // eslint-disable-next-line no-unused-vars

  return (
    <CoreBox styleClasses={[CoreClasses.OVERFLOW.OVERFLOW_Y_SCROLL, CoreClasses.HEIGHT.VH_100]}>
      
      <CoreTypographyBody2 styleClasses={[CoreClasses.COLOR.TEXT_SECONDARY, CoreClasses.TEXT.TEXT_CENTER]}>Component Menu</CoreTypographyBody2>

      <CoreBox>
        <CoreMenu
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
        />
      </CoreBox>
    </CoreBox>   
  );
}
