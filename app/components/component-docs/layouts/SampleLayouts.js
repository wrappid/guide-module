/* eslint-disable etc/no-commented-out-code */
import React from "react";

import {
  ComponentRegistryContext, CoreBox, CoreClasses, CoreH3, CoreLayoutItem, CoreTypographyBody1, LayoutViewer    
  , CoreMenu 
  , BlankLayout 
} from "@wrappid/core";
import { useSelector } from "react-redux";

export default function SampleLayouts() {

  const [selectLayout, setSelectLayout] = React.useState(null);

  const collapse = useSelector((state) => state?.menu?.collapse);

  const componentRegistry = React.useContext(ComponentRegistryContext);
  
  const layoutComponentRegistry = Object.fromEntries(Object.entries(componentRegistry).filter((value)=>{
    return value[1].layout === true;
  }));

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
        styleClasses={[
          CoreClasses.DISPLAY.FLEX,
          CoreClasses.FLEX.DIRECTION_COLUMN,
          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
          CoreClasses.ALIGNMENT.ALIGN_ITEMS_START,
          CoreClasses.PADDING.MD.P2
        ]}>
        <CoreH3>Wrappid Layout Manger</CoreH3>

        <CoreTypographyBody1>Layout Manager related description. Layout Manager related description. Layout Manager related description. Layout Manager related description. </CoreTypographyBody1>

        <CoreTypographyBody1>Click on the below thumbnails to view the layouts</CoreTypographyBody1>

        <CoreBox styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>
          <CoreBox styleClasses={[CoreClasses.WIDTH.W_25, CoreClasses.BG.BG_GREY_200]}>
            {/* {
              Object.entries(layoutComponentRegistry).map(([layoutName]) => (
                <>
                  <CoreLink key={layoutName} href={`/layout/${layoutName}`}><CoreTypographyBody1>{layoutName}</CoreTypographyBody1></CoreLink>
                </>
              ))
            } */}

            <CoreMenu
              openCollapse={collapse}
              multiLevel={true}
              menu={prepareLayoutMenu(layoutComponentRegistry)}
              OnMenuClick={(menuItem) => {
                // if (menuItem?.Children && menuItem?.Children?.length >= 0) {
                //   dispatch(toggleMenuItemState(menuItem));
                // }
                setSelectLayout(menuItem?.name);
              }}
              open={true}
            />
          </CoreBox>

          <CoreBox styleClasses={[CoreClasses.WIDTH.W_75]}>
            <CoreTypographyBody1>{`Layout Viewer ${selectLayout}`}</CoreTypographyBody1>

            {selectLayout && <LayoutViewer layoutName={selectLayout} />}
          </CoreBox>
        </CoreBox>
      </CoreLayoutItem>
    </>
  );
}