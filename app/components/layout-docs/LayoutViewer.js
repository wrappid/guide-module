/* eslint-disable sort-keys-fix/sort-keys-fix */
// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import {
  CoreBox,
  CoreGrid,
  CoreClasses,
  LayoutManager,
  CoreH5,
  CoreSelect,
  CoreContainedButton
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

const ORIENTATION = {
  POTRAIT  : { name: "potrait", displayName: "Potrait" },
  LANDSCAPE: { name: "landscape", displayName: "Landscape" }
};
const BENDING = {
  CONTINUOUS: { name: "continuous", displayName: "Continuous" },
  FOLDED    : { name: "folded", displayName: "Folded" }
};

const DEVICES = {
  MOBILE: {
    name       : "mobile",
    displayName: "Mobile", 
    aspectRatio: { name: CoreClasses.ASPECT_RATIO.ASPECT_RATIO_9_16, displayName: "9:16" }, 
    dimension  : { width: "375", height: "667" }, 
    orientation: { default: ORIENTATION.POTRAIT, current: ORIENTATION.POTRAIT }, 
    bending    : { default: BENDING.CONTINUOUS, current: BENDING.CONTINUOUS }
  },
  TABLET: {
    name       : "tablet",
    displayName: "Tablet", 
    aspectRatio: { name: CoreClasses.ASPECT_RATIO.ASPECT_RATIO_2_3, displayName: "2:3" }, 
    dimension  : { width: "820", height: "1180" }, 
    orientation: { default: ORIENTATION.POTRAIT, current: ORIENTATION.POTRAIT }, 
    bending    : { default: BENDING.CONTINUOUS, current: BENDING.CONTINUOUS }
  },
  LAPTOP: {
    name       : "web",
    displayName: "Web", 
    aspectRatio: { name: CoreClasses.ASPECT_RATIO.ASPECT_RATIO_1_1, displayName: "1:1" }, 
    dimension  : { width: "1280", height: "800" }, 
    orientation: { default: ORIENTATION.POTRAIT, current: ORIENTATION.POTRAIT }, 
    bending    : { default: BENDING.CONTINUOUS, current: BENDING.CONTINUOUS }
  },
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

  const [device, setDevice] = React.useState(DEVICES.LAPTOP);

  const [zoomValue, setZoomValue] = React.useState(ZOOM_VALUES.ZOOM_100);

  const handleDeviceChange = (event) => {
    setDevice(event?.target?.value);
  };

  const handleChangeZoom = (event) => {
    setZoomValue(event?.target?.value);
  };

  const renderLayoutView = () => {
    return (
      <>
        <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.FLEX.DIRECTION_COLUMN]}>
          <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
            {/* <CoreSpan>AspectRatio : {device.aspectRatio.displayName}</CoreSpan>

            <CoreSpan>Dimension: {`${device.dimension.height} ${device.dimension.width}`}</CoreSpan>

            <CoreSpan>Orientation: {device.orientation.default.name}</CoreSpan>

            <CoreSpan>Bending: {device.bending.default}</CoreSpan> */}
          </CoreBox>

          <CoreBox
            styleClasses={[
              CoreClasses.BG.BG_GREY_100,
              CoreClasses.PADDING.P1,
              CoreClasses.SHADOW.SMALL,
              CoreClasses.WIDTH.W_100,
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
      </>
    );
  };

  return (
    <>
      <CoreH5>{layoutName}</CoreH5>

      <CoreGrid>
        <CoreBox styleClasses={[
          CoreClasses.DISPLAY.FLEX,
          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
          CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
          CoreClasses.WIDTH.W_100,
          CoreClasses.GAP.GAP_3
        ]}>
          <CoreSelect
            gridProps={{ gridSize: 3 }}
            label="Device"
            id={device}
            value={device}
            handleChange={handleDeviceChange}
            options={Object.keys(DEVICES).map((key) => ({
              id   : DEVICES[key].name || key,
              label: DEVICES[key].displayName || key,
              value: DEVICES[key].name || key,
            }))}
          />

          <CoreSelect
            gridProps={{ gridSize: 3 }}
            label="Zoom"
            id={zoomValue}
            value={zoomValue}
            handleChange={handleChangeZoom}
            options={[
              ...Object.values(ZOOM_VALUES).map((value) => {
                return { id: value, label: value, value: value };
              })
            ]}
          />

          <CoreContainedButton>
            Potrait
          </CoreContainedButton>

          <CoreContainedButton>
            Fold
          </CoreContainedButton>
        </CoreBox>
      </CoreGrid>

      <CoreBox styleClasses={[CoreClasses.WIDTH.VW_50, CoreClasses.MARGIN.MY2]}>

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
