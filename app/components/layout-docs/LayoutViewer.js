/* eslint-disable etc/no-commented-out-code */
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
  CoreTypographyBody1, 
  CoreIconButton,
  CoreIcon
} from "@wrappid/core";

const ORIENTATION = {
  POTRAIT  : { orientationName: "potrait", orientationDisplayName: "Potrait" },
  LANDSCAPE: { orientationName: "landscape", orientationDisplayName: "Landscape" }
};

const BENDING = {
  CONTINUOUS    : { bendingnName: "CONTINUOUS", bendingDisplayName: "Continuous" },
  FOLDED        : { bendingnName: "FOLDED", bendingDisplayName: "Folded" },
  NOT_APPLICABLE: { bendingnName: "NOT_APPLICABLE", bendingDisplayName: "NA" }
};

const DEVICE_TYPE = {
  MOBILE         : "Mobile",
  MOBILE_NO_TOUCH: "MobileNoTouch",
  DESKTOP        : "Desktop",
  DESKTOP_TOUCH  : "DesktopTouch",
};

const DEVICES = {
  MOBILE: {
    name       : "MOBILE",
    displayName: "Mobile",
    deviceType : DEVICE_TYPE.MOBILE,
    aspectRatio: { default: { aspectRatioName: CoreClasses.ASPECT_RATIO.ASPECT_RATIO_9_16, aspectRatioDisplayName: "9:16" } },
    dimension  : { default: { width: "375", height: "667" } },
    allowRotate: true,
    orientation: { default: ORIENTATION.POTRAIT },
    allowFold  : false,
    bending    : { default: BENDING.NOT_APPLICABLE }
  },
  TABLET: {
    name       : "TABLET",
    displayName: "Tablet",
    deviceType : DEVICE_TYPE.MOBILE,
    aspectRatio: { default: { aspectRatioName: CoreClasses.ASPECT_RATIO.ASPECT_RATIO_2_3, aspectRatioDisplayName: "2:3" } },
    dimension  : { default: { width: "820", height: "1180" } },
    allowRotate: true,
    orientation: { default: ORIENTATION.POTRAIT },
    allowFold  : false,
    bending    : { default: BENDING.NOT_APPLICABLE },
  },
  LAPTOP: {
    name       : "LAPTOP",
    displayName: "Laptop",
    deviceType : DEVICE_TYPE.DESKTOP,
    aspectRatio: { default: { aspectRatioName: CoreClasses.ASPECT_RATIO.ASPECT_RATIO_16_9, aspectRatioDisplayName: "16:9" } },
    dimension  : { default: { width: "1920", height: "1080" } },
    allowRotate: false,
    orientation: { default: ORIENTATION.LANDSCAPE },
    allowFold  : false,
    bending    : { default: BENDING.NOT_APPLICABLE }
  },
  GALAXY_S20_ULTRA: {
    name       : "GALAXY_S20_ULTRA",
    displayName: "Samsung Galaxy S20 Ultra",
    deviceType : DEVICE_TYPE.MOBILE,
    aspectRatio: { default: { aspectRatioName: CoreClasses.ASPECT_RATIO.ASPECT_RATIO_9_20, aspectRatioDisplayName: "9:20" } },
    dimension  : { default: { width: "412", height: "915" } },
    allowRotate: true,
    orientation: { default: ORIENTATION.POTRAIT },
    allowFold  : false,
    bending    : { default: BENDING.NOT_APPLICABLE }
  },
  ASUS_ZENBOOK_FOLD: {
    name       : "ASUS_ZENBOOK_FOLD",
    displayName: "Asus Zenbook Fold",
    deviceType : DEVICE_TYPE.DESKTOP_TOUCH,
    aspectRatio: {
      default: { aspectRatioName: CoreClasses.ASPECT_RATIO.ASPECT_RATIO_3_2, aspectRatioDisplayName: "3:2" }, 
      folded : { aspectRatioName: CoreClasses.ASPECT_RATIO.ASPECT_RATIO_16_9, aspectRatioDisplayName: "16:9" },
    },
    dimension: {
      default: { width: "853", height: "1280" }, 
      folded : { width: "412", height: "915" } 
    },
    allowRotate: true,
    orientation: { default: ORIENTATION.POTRAIT },
    allowFold  : true,
    bending    : { default: BENDING.CONTINUOUS }
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
  const { layoutName = "ComplexLayout" } = props;

  // eslint-disable-next-line no-unused-vars
  const [potrait, setPotrait] = React.useState(true);

  const [currentDevice, setCurrentDevice] = React.useState(DEVICES.MOBILE);

  const [zoomValue, setZoomValue] = React.useState(ZOOM_VALUES.ZOOM_100);

  const handleDeviceChange = (event) => {
    let currentDevice = DEVICES[event.target.value];

    setCurrentDevice(currentDevice);
    // eslint-disable-next-line etc/no-commented-out-code
    // setPotrait(true);
    // simulateScreenSize(DEVICES[currentDevice]?.dimension.height, DEVICES[currentDevice]?.dimension.width);
  };

  const handleChangeZoom = (event) => {
    setZoomValue(event?.target?.value);
  };

  const handleDeviceRotate = () => {};

  const handleDeviceFold = () => {
    // Create a copy of the currentDevice object
    let updatedDevice = { ...currentDevice };
  
    // eslint-disable-next-line no-console
    console.log("Before update:", updatedDevice);
  
    // Update the bending.default property based on its current value along with aspectRatio and dimension
    if (BENDING.CONTINUOUS === updatedDevice.bending.default) {
      // eslint-disable-next-line no-console
      console.log("if condition", updatedDevice);
      updatedDevice.bending.default = BENDING.FOLDED;
  
      // Update aspectRatio and dimension to folded values
      updatedDevice.aspectRatio.default = { ...DEVICES[updatedDevice.name].aspectRatio.folded };
      updatedDevice.dimension.default = { ...DEVICES[updatedDevice.name].dimension.folded };
  
    } else if (BENDING.FOLDED === updatedDevice.bending.default) {
      // eslint-disable-next-line no-console
      console.log("if else condition", updatedDevice);

      updatedDevice.bending.default = BENDING.CONTINUOUS;
  
      // Update aspectRatio and dimension to default values
      updatedDevice.aspectRatio.default = { ...DEVICES[updatedDevice.name].aspectRatio.default };
      updatedDevice.dimension.default = { ...DEVICES[updatedDevice.name].dimension.default };
    }
  
    // eslint-disable-next-line no-console
    console.log("After update:", updatedDevice);
  
    setCurrentDevice(updatedDevice);
  };
  const renderLayoutView = () => {
    return (
      <>
        <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.FLEX.DIRECTION_COLUMN]}>
          <CoreBox styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.FLEX_WRAP_WRAP, CoreClasses.GAP.GAP_3]}>
            <CoreTypographyBody1>
               Aspect Ratio: {currentDevice?.aspectRatio?.[currentDevice.bending.default === BENDING.FOLDED ? "folded" : "default"]?.aspectRatioDisplayName}
            </CoreTypographyBody1>

            <CoreTypographyBody1>Dimension: {`${currentDevice?.dimension.default.width || currentDevice?.dimension.current.width} x ${currentDevice?.dimension.default.height || currentDevice?.dimension.current.height}`}</CoreTypographyBody1>

            <CoreTypographyBody1>Orientation: {currentDevice?.orientation.default.orientationDisplayName}</CoreTypographyBody1>

            <CoreTypographyBody1>Bending: {currentDevice?.bending?.current?.bendingDisplayName || currentDevice?.bending?.default?.bendingDisplayName}</CoreTypographyBody1>

          </CoreBox>

          <CoreBox
            styleClasses={[
              CoreClasses.BG.BG_GREY_100,
              CoreClasses.PADDING.P1,
              CoreClasses.SHADOW.SMALL,
              CoreClasses.OVERFLOW.OVERFLOW_AUTO,
              currentDevice?.deviceType === (DEVICE_TYPE.DESKTOP || DEVICE_TYPE.DESKTOP_TOUCH) && CoreClasses.WIDTH.W_75,
              currentDevice?.deviceType === (DEVICE_TYPE.MOBILE || DEVICE_TYPE.MOBILE_NO_TOUCH) && CoreClasses.WIDTH.W_50,
              currentDevice?.deviceType === DEVICE_TYPE.DESKTOP &&
              potrait === true &&
              currentDevice.aspectRatio.default, //Potrait
              currentDevice?.deviceType === "TABLET" &&
              potrait === true &&
              CoreClasses.ASPECT_RATIO.ASPECT_RATIO_9_16, //Potrait
              currentDevice?.deviceType === "MOBILE" &&
              potrait === true &&
              CoreClasses.ASPECT_RATIO.ASPECT_RATIO_9_16, //Potrait
              currentDevice?.deviceType === "WEB" &&
              potrait === false &&
              CoreClasses.ASPECT_RATIO.ASPECT_RATIO_3_4, // Landscape
              currentDevice?.deviceType === "TABLET" &&
              potrait === false &&
              CoreClasses.ASPECT_RATIO.ASPECT_RATIO_16_9, // Landscape
              currentDevice?.deviceType === "MOBILE" &&
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
        <CoreSelect
          gridProps={{ gridSize: 3 }}
          label="Device"
          id="currentDevice"
          value={currentDevice.name}
          handleChange={handleDeviceChange}
          options={Object.keys(DEVICES).map((key) => ({
            id   : DEVICES[key].name,
            label: DEVICES[key].displayName,
            value: DEVICES[key].name,
          }))}
        />

        <CoreSelect
          gridProps={{ gridSize: 2 }}
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

        <CoreBox
          gridProps={{ gridSize: 2 }}
          styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.WIDTH.W_100]} >

          <CoreIconButton
            title={currentDevice.allowRotate ? "Rotate" : "Screen orientation option"} 
            onClick={() => handleDeviceRotate()}
            disabled={!(currentDevice?.allowRotate || false)}>
            <CoreIcon>screen_rotation</CoreIcon>
          </CoreIconButton>

          <CoreIconButton
            title={"Device Fold"}
            onClick={() => handleDeviceFold()}
            disabled={!(currentDevice?.allowFold || false)}
          >
            <CoreIcon>devices_fold</CoreIcon>
          </CoreIconButton>

        </CoreBox>
      </CoreGrid>

      <CoreBox styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.MARGIN.MY2]}>

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

// eslint-disable-next-line etc/no-commented-out-code
// function simulateScreenSize(width, height) {
//   document.documentElement.style.setProperty("--viewport-width", `${width}px`);
//   document.documentElement.style.setProperty("--viewport-height", `${height}px`);
// }