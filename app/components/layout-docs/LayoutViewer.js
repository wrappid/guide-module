// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import {
  CoreTypographyBody1,
  CoreContainedButton,
  CoreBox,
  CoreGrid,
  CoreClasses, LayoutManager, CoreTabPanel, CoreTab, CoreH5, CoreTabs
} from "@wrappid/core";

// eslint-disable-next-line etc/no-commented-out-code
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

export default function LayoutViewer(props) {
  const { layoutName = "ComplexLayout", layoutType } = props;
  
  const [potrait, setPotrait] = React.useState(true);

  const [showInfo, setShowInfo] = React.useState(false);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderLayoutView = () => {
    return (
      <CoreGrid>

        <CoreBox gridProps={{ gridSize: 2 }} styleClasses={[CoreClasses.WIDTH.W_100]}>

          <CoreContainedButton OnClick={() => setShowInfo((prevState) => !prevState)} >
            show Info
          </CoreContainedButton>

          {showInfo && <CoreTypographyBody1>Details</CoreTypographyBody1>}
        </CoreBox>

        <CoreBox gridProps={{ gridSize: 10 }}>
          <CoreBox styleClasses={[
            CoreClasses.BG.BG_GREY_100,
            CoreClasses.PADDING.P1,
            CoreClasses.SHADOW.SMALL,
            layoutType === "Web" && CoreClasses.WIDTH.W_100,
            layoutType === "Tablet" && CoreClasses.WIDTH.W_100,
            layoutType === "Mobile" && CoreClasses.WIDTH.W_100,
            (layoutType === "Web" && potrait === true) && CoreClasses.ASPECT_RATIO.ASPECT_RATIO_4_3, //Potrait
            (layoutType === "Tablet" && potrait === true) && CoreClasses.ASPECT_RATIO.ASPECT_RATIO_16_9, //Potrait
            (layoutType === "Mobile" && potrait === true) && CoreClasses.ASPECT_RATIO.ASPECT_RATIO_9_16, //Potrait
            (layoutType === "Web" && potrait === false) && CoreClasses.ASPECT_RATIO.ASPECT_RATIO_3_4, // Landscape
            (layoutType === "Tablet" && potrait === false) && CoreClasses.ASPECT_RATIO.ASPECT_RATIO_9_16, // Landscape
            (layoutType === "Mobile" && potrait === false) && CoreClasses.ASPECT_RATIO.ASPECT_RATIO_16_9, // Landscape
          ]}>
            <LayoutManager layoutName={layoutName} viewMode={true} />
          </CoreBox>
        </CoreBox>

      </CoreGrid>
    );
  };

  const renderLayoutViewer = (renderType = RENDER_TYPE.WEB) => {
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
          {/* eslint-disable-next-line etc/no-commented-out-code */}
          {/* <LayoutViewer
            showInfo={showInfo}
            setShowInfo={setShowInfo}
            layoutName={layoutName}
            layoutType={renderType}
            potrait={potrait} /> */}

          {layoutName && renderLayoutView() }

          <CoreBox styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.HEIGHT.VH_25, CoreClasses.BG.BG_SECONDARY]}></CoreBox>

        </CoreBox>
      </CoreBox>
    );
  };

  return (
    <>
      <CoreH5>{layoutName}</CoreH5>

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
          <CoreTypographyBody1>{`Tab ${value} ${layoutName} ${showInfo} ${potrait}`}</CoreTypographyBody1>

          <CoreContainedButton OnClick={() => setPotrait(true)}>Potrait</CoreContainedButton>

          <CoreContainedButton OnClick={() => setPotrait(false)}>Landscape</CoreContainedButton>
        </CoreBox>

        <CoreBox>
          <CoreTabPanel value={value} index={0}>
            {renderLayoutViewer(RENDER_TYPE.WEB)}
          </CoreTabPanel>

          <CoreTabPanel value={value} index={1}>
            {renderLayoutViewer(RENDER_TYPE.TABLET)}
          </CoreTabPanel>

          <CoreTabPanel value={value} index={2}>
            {renderLayoutViewer(RENDER_TYPE.MOBILE)}
          </CoreTabPanel>
        </CoreBox>

      </CoreBox>
    </>
  );
}
