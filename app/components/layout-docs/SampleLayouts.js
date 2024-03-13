/* eslint-disable etc/no-commented-out-code */
import React from "react";

import {
  BlankLayout,
  ComponentRegistryContext, CoreBox, CoreClasses,
  CoreContainedButton,
  CoreGrid,
  CoreH4, CoreH5,
  CoreLayoutItem,
  CoreMenu,
  CoreTab,
  CoreTabPanel,
  CoreTabs,
  CoreTypographyBody1
} from "@wrappid/core";
import { useSelector } from "react-redux";

import LayoutViewer from "./LayoutViewer";

// const AspectRtio = {
//   ASPECT_RATIO_16_9: "aspectRatio16By9",
//   ASPECT_RATIO_1_1 : "aspectRatio1By1",
//   ASPECT_RATIO_20_9: "aspectRatio20By9",
//   ASPECT_RATIO_2_3 : "aspectRatio2By3",
//   ASPECT_RATIO_3_2 : "aspectRatio3By2",
//   ASPECT_RATIO_3_4 : "aspectRatio3By4",
//   ASPECT_RATIO_4_3 : "aspectRatio4By3",
//   ASPECT_RATIO_9_16: "aspectRatio9By16",
//   ASPECT_RATIO_9_20: "aspectRatio9By20",
// };

const RENDER_TYPE = {
  MOBILE: "mobile",
  TABLET: "tablet",
  WEB   : "web",
};

export default function SampleLayouts() {

  const [selectLayout, setSelectLayout] = React.useState(null);

  const [potrait, setPotrait] = React.useState(true);

  const [showInfo, setShowInfo] = React.useState(false);

  const [value, setValue] = React.useState(0);

  const collapse = useSelector((state) => state?.menu?.collapse);

  const componentRegistry = React.useContext(ComponentRegistryContext);

  const layoutComponentRegistry = Object.fromEntries(Object.entries(componentRegistry).filter((value) => {
    return value[1].layout === true;
  }));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    setSelectLayout(Object.keys(layoutComponentRegistry)[0]);
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

  const renderLayoutViewr = (renderType = RENDER_TYPE.WEB) => {
    return (
      <CoreBox
        styleClasses={[CoreClasses.WIDTH.VW_50]}
        role="tabpanel"
      >  
        <CoreTypographyBody1>{renderType}</CoreTypographyBody1>

        <CoreBox styleClasses={[
          CoreClasses.WIDTH.W_100,
          CoreClasses.DISPLAY.FLEX,
          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
          CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
          CoreClasses.FLEX.DIRECTION_COLUMN,
          CoreClasses.GAP.GAP_1
        ]}>

          {selectLayout && <LayoutViewer
            showInfo={showInfo}
            setShowInfo={setShowInfo}
            layoutName={selectLayout}
            layoutType={renderType}
            potrait={potrait} />}

          <CoreBox styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.HEIGHT.VH_25, CoreClasses.BG.BG_SECONDARY]}></CoreBox>

        </CoreBox>
      </CoreBox>
    );
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

            <CoreH5>{selectLayout}</CoreH5>

            <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
              <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
                <CoreTabs
                  value={value}
                  onChange={handleChange} 
                  aria-label="full width tabs example" >
                  <CoreTab label="Web"></CoreTab>

                  <CoreTab label="Tablet"></CoreTab>

                  <CoreTab label="Mobile"></CoreTab>
                </CoreTabs>
              </CoreBox>

              <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_START, CoreClasses.ALIGNMENT.ALIGN_ITEMS_START]}>
                <CoreTypographyBody1>{`Tab ${value} ${selectLayout} ${showInfo} ${potrait}`}</CoreTypographyBody1>

                <CoreContainedButton OnClick={() => setPotrait(true)}>Potrait</CoreContainedButton>

                <CoreContainedButton OnClick={() => setPotrait(false)}>Landscape</CoreContainedButton>
              </CoreBox>

              <CoreBox>
                <CoreTabPanel value={value} index={0}>
                  {renderLayoutViewr(RENDER_TYPE.WEB)}
                </CoreTabPanel>

                <CoreTabPanel value={value} index={1}>
                  {renderLayoutViewr(RENDER_TYPE.TABLET)}
                </CoreTabPanel>

                <CoreTabPanel value={value} index={2}>
                  {renderLayoutViewr(RENDER_TYPE.MOBILE)}
                </CoreTabPanel>
              </CoreBox>

            </CoreBox>
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