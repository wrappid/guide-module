/* eslint-disable sort-keys-fix/sort-keys-fix */
// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import {
  CoreTypographyBody1,
  CoreContainedButton,
  CoreBox,
  CoreGrid,
  CoreClasses,
  LayoutManager,
  CoreH5,
  CoreSelect
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

const DEVICES = {
  LAPTOP: "laptop",
  MOBILE: "mobile",
  TABLET: "tablet",
};

const ZOOM_VALUES = {
  ZOOM_50      : 50,
  ZOOM_75      : 75,
  ZOOM_100     : 100,
  ZOOM_125     : 125,
  ZOOM_150     : 150,
  ZOOM_200     : 200,
  FIT_TO_SCREEN: "Fit to Screen",
};

export default function LayoutViewer(props) {
  const { layoutName = "ComplexLayout", layoutType } = props;

  // eslint-disable-next-line no-unused-vars
  const [potrait, setPotrait] = React.useState(true);

  const [showInfo, setShowInfo] = React.useState(false);

  const [device, setDevice] = React.useState(DEVICES.LAPTOP);

  const [zoomValue, setZoomValue] = React.useState(ZOOM_VALUES.ZOOM_100);

  const handleChange = (event) => {
    setDevice(event?.target?.value);
  };

  const handleChangeZoom = (event) => {
    setZoomValue(event?.target?.value);
  };

  const renderLayoutView = () => {
    return (
      <CoreGrid>
        <CoreBox
          gridProps={{ gridSize: 2 }}
          styleClasses={[CoreClasses.WIDTH.W_100]}
        >
          <CoreContainedButton
            OnClick={() => setShowInfo((prevState) => !prevState)}
          >
            show Info
          </CoreContainedButton>

          {showInfo && <CoreTypographyBody1>Details</CoreTypographyBody1>}
        </CoreBox>

        <CoreBox gridProps={{ gridSize: 10 }}>
          <CoreBox
            styleClasses={[
              CoreClasses.BG.BG_GREY_100,
              CoreClasses.PADDING.P1,
              CoreClasses.SHADOW.SMALL,
              layoutType === "Web" && CoreClasses.WIDTH.W_100,
              layoutType === "Tablet" && CoreClasses.WIDTH.W_100,
              layoutType === "Mobile" && CoreClasses.WIDTH.W_100,
              layoutType === "Web" &&
                potrait === true &&
                CoreClasses.ASPECT_RATIO.ASPECT_RATIO_4_3, //Potrait
              layoutType === "Tablet" &&
                potrait === true &&
                CoreClasses.ASPECT_RATIO.ASPECT_RATIO_16_9, //Potrait
              layoutType === "Mobile" &&
                potrait === true &&
                CoreClasses.ASPECT_RATIO.ASPECT_RATIO_9_16, //Potrait
              layoutType === "Web" &&
                potrait === false &&
                CoreClasses.ASPECT_RATIO.ASPECT_RATIO_3_4, // Landscape
              layoutType === "Tablet" &&
                potrait === false &&
                CoreClasses.ASPECT_RATIO.ASPECT_RATIO_9_16, // Landscape
              layoutType === "Mobile" &&
                potrait === false &&
                CoreClasses.ASPECT_RATIO.ASPECT_RATIO_16_9, // Landscape
            ]}
          >
            <LayoutManager layoutName={layoutName} viewMode={true} />
          </CoreBox>
        </CoreBox>
      </CoreGrid>
    );
  };

  return (
    <>
      <CoreH5>{layoutName}</CoreH5>

      <CoreGrid>
        <CoreSelect
          gridProps={{ gridSize: 3 }}
          label="Device:"
          selectID={device}
          value={device}
          handleChange={handleChange}
          options={[
            ...Object.keys(DEVICES).map((device) => {
              return { id: device, label: device, value: device };
            })
          ]}
        />

        <CoreTypographyBody1 gridProps={{ gridSize: 3 }}>ZOOM</CoreTypographyBody1>

        <CoreSelect
          gridProps={{ gridSize: 3 }}
          label="Zoom:"
          selectID={zoomValue}
          value={zoomValue}
          handleChange={handleChangeZoom}
          options={[
            ...Object.values(ZOOM_VALUES).map((value) => {
              return { id: value, label: value, value: value };
            })
          ]}
        />
      </CoreGrid>

      <CoreBox styleClasses={[CoreClasses.WIDTH.VW_50]} role="tabpanel">
        <CoreTypographyBody1>{device}</CoreTypographyBody1>

        <CoreBox
          styleClasses={[
            CoreClasses.WIDTH.W_100,
            CoreClasses.DISPLAY.FLEX,
            CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
            CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
            CoreClasses.FLEX.DIRECTION_COLUMN,
            CoreClasses.GAP.GAP_1,
          ]}
        >
          {layoutName && renderLayoutView()}
        </CoreBox>
      </CoreBox>
    </>
  );
}
