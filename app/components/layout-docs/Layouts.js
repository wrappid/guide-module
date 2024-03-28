/* eslint-disable etc/no-commented-out-code */
import React from "react";

import {
  BlankLayout,
  ComponentRegistryContext, CoreBox, CoreClasses,
  CoreGrid,
  CoreH4,
  CoreLayoutItem,
  CoreMenu,
  CoreTypographyBody1
} from "@wrappid/core";
import { useSelector } from "react-redux";

import LayoutViewer from "./LayoutViewer";

export default function Layouts() {

  const [selectLayout, setSelectLayout] = React.useState(null);

  const collapse = useSelector((state) => state?.menu?.collapse);

  const componentRegistry = React.useContext(ComponentRegistryContext);

  const layoutComponentRegistry = Object.fromEntries(Object.entries(componentRegistry).filter((value) => {
    return value[1].layout === true;
  }));

  React.useEffect(() => {
    setSelectLayout(Object.keys(layoutComponentRegistry)[1]);
  }, []);

  const prepareLayoutMenu = (layoutComponentRegistry) => {
    return Object.entries(layoutComponentRegistry)?.map(([layoutName]) => ({
      Children: layoutName,
      id      : layoutName,
      label   : layoutName,
      name    : layoutName?.trim(),
      type    : "layoutName",
    }));
  };

  return (
    <>
      <CoreLayoutItem
        id={BlankLayout.PLACEHOLDER.CONTENT}
        styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.DIRECTION_COLUMN, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_START]}>

        <CoreGrid styleClasses={[CoreClasses.BG.BG_WHITE]}>
          <CoreBox gridProps={{ gridSize: 10 }}>
            <CoreH4
              styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}
            >
              Layout Manger
            </CoreH4>

            <CoreTypographyBody1>Layout Manager related description. Layout Manager related description. Layout Manager related description. Layout Manager related description. </CoreTypographyBody1>

            <CoreTypographyBody1>Click on the below thumbnails to view the layouts</CoreTypographyBody1>

            <LayoutViewer layoutName={selectLayout} />
          </CoreBox>

          <CoreBox
            styleClasses={[
              CoreClasses.POSITION.TOP_0,
              CoreClasses.POSITION.POSITION_STICKY,
              CoreClasses.OVERFLOW.OVERFLOW_Y_SCROLL,
              CoreClasses.HEIGHT.VH_100,
              CoreClasses.BORDER.BORDER,
              CoreClasses.BORDER.BORDER_LEFT,
              CoreClasses.BORDER.BORDER_SECONDARY_LIGHT,
            ]}
            gridProps={{ gridSize: 2 }}
          >
            <CoreMenu
              openCollapse={collapse}
              multiLevel={true}
              menu={prepareLayoutMenu(layoutComponentRegistry)}
              OnMenuClick={(menuItem) => setSelectLayout(menuItem?.name)}
              open={true}
            />
          </CoreBox>
        </CoreGrid>

      </CoreLayoutItem >
    </>
  );
}