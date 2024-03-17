// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import {
  CoreBox,
  CoreGrid,
  CoreClasses,
  LayoutManager,
  CoreH5,
  CoreSelect,
  CoreTypographyBody2,
  CoreIconButton,
  CoreIcon
} from "@wrappid/core";

const DEVICE_TYPE = {
  DESKTOP        : "Desktop",
  DESKTOP_TOUCH  : "DesktopTouch",
  MOBILE         : "Mobile",
  MOBILE_NO_TOUCH: "MobileNoTouch",
};

const ORIENTATION = {
  LANDSCAPE: { orientationDisplayName: "Landscape", orientationName: "landscape" },
  POTRAIT  : { orientationDisplayName: "Potrait", orientationName: "potrait" }
};

const POSTURE = {
  CONTINUOUS    : { postureDisplayName: "Continuous", postureName: "CONTINUOUS" },
  FOLDED        : { postureDisplayName: "Folded", postureName: "FOLDED" },
  NOT_APPLICABLE: { postureDisplayName: "NA", postureName: "NOT_APPLICABLE" }
};

const ASPECT_RATIO_MAP = {
  [CoreClasses.ASPECT_RATIO.ASPECT_RATIO_1_1] : { aspectRatioDisplayName: "1:1", aspectRatioName: CoreClasses.ASPECT_RATIO.ASPECT_RATIO_1_1 },
  [CoreClasses.ASPECT_RATIO.ASPECT_RATIO_16_9]: { aspectRatioDisplayName: "9:16", aspectRatioName: CoreClasses.ASPECT_RATIO.ASPECT_RATIO_9_16 },
  [CoreClasses.ASPECT_RATIO.ASPECT_RATIO_9_16]: { aspectRatioDisplayName: "16:9", aspectRatioName: CoreClasses.ASPECT_RATIO.ASPECT_RATIO_16_9 },
  [CoreClasses.ASPECT_RATIO.ASPECT_RATIO_20_9]: { aspectRatioDisplayName: "9:20", aspectRatioName: CoreClasses.ASPECT_RATIO.ASPECT_RATIO_9_20 },
  [CoreClasses.ASPECT_RATIO.ASPECT_RATIO_9_20]: { aspectRatioDisplayName: "20:9", aspectRatioName: CoreClasses.ASPECT_RATIO.ASPECT_RATIO_20_9 },
  [CoreClasses.ASPECT_RATIO.ASPECT_RATIO_3_2] : { aspectRatioDisplayName: "2:3", aspectRatioName: CoreClasses.ASPECT_RATIO.ASPECT_RATIO_2_3 },
  [CoreClasses.ASPECT_RATIO.ASPECT_RATIO_2_3] : { aspectRatioDisplayName: "3:2", aspectRatioName: CoreClasses.ASPECT_RATIO.ASPECT_RATIO_3_2 },
  [CoreClasses.ASPECT_RATIO.ASPECT_RATIO_4_3] : { aspectRatioDisplayName: "3:4", aspectRatioName: CoreClasses.ASPECT_RATIO.ASPECT_RATIO_3_4 },
  [CoreClasses.ASPECT_RATIO.ASPECT_RATIO_3_4] : { aspectRatioDisplayName: "4:3", aspectRatioName: CoreClasses.ASPECT_RATIO.ASPECT_RATIO_4_3 },

};

const DEVICES = {
  ASUS_ZENBOOK_FOLD: {
    allowFold  : true,
    allowRotate: true,
    aspectRatio: {
      default: { aspectRatioDisplayName: "3:2", aspectRatioName: CoreClasses.ASPECT_RATIO.ASPECT_RATIO_3_2 },
      folded : { aspectRatioDisplayName: "16:9", aspectRatioName: CoreClasses.ASPECT_RATIO.ASPECT_RATIO_16_9 },
    },
    deviceType: DEVICE_TYPE.DESKTOP_TOUCH,
    dimension : {
      default: { height: "1280", width: "853" },
      folded : { height: "915", width: "412" }
    },
    displayName: "Asus Zenbook Fold",
    name       : "ASUS_ZENBOOK_FOLD",
    orientation: { default: ORIENTATION.POTRAIT },
    posture    : { default: POSTURE.CONTINUOUS }
  },
  GALAXY_S20_ULTRA: {
    allowFold  : false,
    allowRotate: true,
    aspectRatio: { default: { aspectRatioDisplayName: "9:20", aspectRatioName: CoreClasses.ASPECT_RATIO.ASPECT_RATIO_9_20 } },
    deviceType : DEVICE_TYPE.MOBILE,
    dimension  : { default: { height: "915", width: "412" } },
    displayName: "Samsung Galaxy S20 Ultra",
    name       : "GALAXY_S20_ULTRA",
    orientation: { default: ORIENTATION.POTRAIT },
    posture    : { default: POSTURE.NOT_APPLICABLE }
  },
  LAPTOP: {
    allowFold  : false,
    allowRotate: false,
    aspectRatio: { default: { aspectRatioDisplayName: "16:9", aspectRatioName: CoreClasses.ASPECT_RATIO.ASPECT_RATIO_16_9 } },
    deviceType : DEVICE_TYPE.DESKTOP,
    dimension  : { default: { height: "1080", width: "1920" } },
    displayName: "Laptop",
    name       : "LAPTOP",
    orientation: { default: ORIENTATION.LANDSCAPE },
    posture    : { default: POSTURE.NOT_APPLICABLE }
  },
  MOBILE: {
    allowFold  : false,
    allowRotate: true,
    aspectRatio: { default: { aspectRatioDisplayName: "9:16", aspectRatioName: CoreClasses.ASPECT_RATIO.ASPECT_RATIO_9_16 } },
    deviceType : DEVICE_TYPE.MOBILE,
    dimension  : { default: { height: "667", width: "375" } },
    displayName: "Mobile",
    name       : "MOBILE",
    orientation: { default: ORIENTATION.POTRAIT },
    posture    : { default: POSTURE.NOT_APPLICABLE }
  },
  TABLET: {
    allowFold  : false,
    allowRotate: true,
    aspectRatio: { default: { aspectRatioDisplayName: "2:3", aspectRatioName: CoreClasses.ASPECT_RATIO.ASPECT_RATIO_2_3 } },
    deviceType : DEVICE_TYPE.MOBILE,
    dimension  : { default: { height: "1180", width: "820" } },
    displayName: "Tablet",
    name       : "TABLET",
    orientation: { default: ORIENTATION.POTRAIT },
    posture    : { default: POSTURE.NOT_APPLICABLE },
  },
};

const ZOOM_VALUES = {
  FIT_TO_SCREEN: "Fit to Screen",
  ZOOM_100     : 100,
  ZOOM_125     : 125,
  ZOOM_150     : 150,
  ZOOM_200     : 200,
  ZOOM_50      : 50,
  ZOOM_75      : 75,
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

  const handleDeviceAspectRatio = () => {
    // Create a copy of the currentDevice object
    let updatedDevice = { ...currentDevice };

    // eslint-disable-next-line no-prototype-builtins
    if (updatedDevice.aspectRatio.hasOwnProperty("current") === false) {
      updatedDevice.aspectRatio.current = currentDevice.aspectRatio.default;
    }

    if (updatedDevice.allowFold) {
      // eslint-disable-next-line no-prototype-builtins
      if (updatedDevice.posture.hasOwnProperty("current")) {
        if (POSTURE.CONTINUOUS === updatedDevice.posture.current) {
          updatedDevice.aspectRatio.current = updatedDevice.aspectRatio.default;
        } else if (POSTURE.FOLDED === updatedDevice.posture.current) {
          updatedDevice.aspectRatio.current = updatedDevice.aspectRatio.folded;
        }
      }
    }

    if (updatedDevice.allowRotate) {
      // eslint-disable-next-line no-prototype-builtins
      if (updatedDevice.orientation.hasOwnProperty("current")) {
        if (updatedDevice.orientation.default === updatedDevice.orientation.current) {
          if (POSTURE.CONTINUOUS === updatedDevice.posture.current) {
            updatedDevice.aspectRatio.current = updatedDevice.aspectRatio.default;
          } else if (POSTURE.FOLDED === updatedDevice.posture.current) {
            updatedDevice.aspectRatio.current = updatedDevice.aspectRatio.folded;
          }
        } else {
          updatedDevice.aspectRatio.current = ASPECT_RATIO_MAP[updatedDevice.aspectRatio.current.aspectRatioName];
        }
      }
    }
    setCurrentDevice(updatedDevice);
  };

  const handleDeviceDimension = () => {
    // Create a copy of the currentDevice object
    let updatedDevice = { ...currentDevice };

    // eslint-disable-next-line no-prototype-builtins
    if (updatedDevice.dimension.hasOwnProperty("current") === false) {
      updatedDevice.dimension.current = currentDevice.dimension.default;
    }

    if (updatedDevice.orientation.default === updatedDevice.orientation.current) {
      if (POSTURE.CONTINUOUS === updatedDevice.posture.current && updatedDevice.dimension.default === updatedDevice.dimension.current) {
        updatedDevice.dimension.current = updatedDevice.dimension.folded;
      } else if (POSTURE.FOLDED === updatedDevice.posture.current && updatedDevice.dimension.folded === updatedDevice.dimension.current) {
        updatedDevice.dimension.current = updatedDevice.dimension.default;
      }
    } 

    if (updatedDevice.dimension.default === updatedDevice.dimension.current) {
      updatedDevice.dimension.current = updatedDevice.dimension.folded;
    } else if (updatedDevice.dimension.folded === updatedDevice.dimension.current) {
      updatedDevice.dimension.current = updatedDevice.dimension.default;
    }

    setCurrentDevice(updatedDevice);
    handleDeviceAspectRatio();
    handleDeviceDimension();

    updatedDevice = { ...currentDevice };
    setCurrentDevice(updatedDevice);
  };

  const handleDeviceOrientation = () => {
    // Create a copy of the currentDevice object
    let updatedDevice = { ...currentDevice };

    // eslint-disable-next-line no-prototype-builtins
    if (updatedDevice.orientation.hasOwnProperty("current") === false) {
      updatedDevice.orientation.current = currentDevice.orientation.default;
    }

    if (ORIENTATION.LANDSCAPE === updatedDevice.orientation.current) {
      updatedDevice.orientation.current = ORIENTATION.POTRAIT;
    } else if (ORIENTATION.POTRAIT === updatedDevice.orientation.current) {
      updatedDevice.orientation.current = ORIENTATION.LANDSCAPE;
    }

    setCurrentDevice(updatedDevice);
    handleDeviceAspectRatio();
    handleDeviceDimension();

    updatedDevice = { ...currentDevice };
    setCurrentDevice(updatedDevice);
  };

  const handleDevicePosture = () => {
    // Create a copy of the currentDevice object
    let updatedDevice = { ...currentDevice };

    // eslint-disable-next-line no-prototype-builtins
    if (updatedDevice.posture.hasOwnProperty("current") === false) {
      updatedDevice.posture.current = currentDevice.posture.default;
    }

    // Update the posture.current property based on its current value
    if (POSTURE.CONTINUOUS === updatedDevice.posture.current) {
      updatedDevice.posture.current = POSTURE.FOLDED;
    } else if (POSTURE.FOLDED === updatedDevice.posture.current) {
      updatedDevice.posture.current = POSTURE.CONTINUOUS;
    }

    setCurrentDevice(updatedDevice);
    handleDeviceAspectRatio();
    handleDeviceDimension();

    updatedDevice = { ...currentDevice };
    setCurrentDevice(updatedDevice);
  };

  /**
   * 
   * @returns 
   */
  const getCurrentAspectRatio = () => {
    // eslint-disable-next-line no-prototype-builtins
    if (currentDevice.aspectRatio.hasOwnProperty("current") === false) {
      currentDevice.aspectRatio.current = currentDevice.aspectRatio.default;
    }

    return currentDevice.aspectRatio.current.aspectRatioDisplayName;
  };

  /**
   * 
   * @returns 
   */
  const getCurrentDimension = () => {
    // eslint-disable-next-line no-prototype-builtins
    if (currentDevice.dimension.hasOwnProperty("current") === false) {
      currentDevice.dimension.current = currentDevice.dimension.default;
    }
    let currDim = currentDevice.dimension.current;

    return `${currDim.width} x ${currDim.height}`;
  };

  /**
   * 
   * @returns 
   */
  const getCurrentOrientation = () => {
    // eslint-disable-next-line no-prototype-builtins
    if (currentDevice.orientation.hasOwnProperty("current") === false) {
      currentDevice.orientation.current = currentDevice.orientation.default;
    }
    return currentDevice.orientation.current.orientationDisplayName;
  };

  /**
   * 
   * @returns 
   */
  const getCurrentPosture = () => {
    // eslint-disable-next-line no-prototype-builtins
    if (currentDevice.posture.hasOwnProperty("current") === false) {
      currentDevice.posture.current = currentDevice.posture.default;
    }
    return currentDevice.posture.current.postureDisplayName;
  };

  const renderLayoutView = () => {
    return (
      <CoreBox
        gridProps={{ gridSize: 12 }}
        styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.FLEX.DIRECTION_COLUMN]}>

        <CoreGrid>
          <CoreTypographyBody2 gridProps={{ gridSize: { md: 3 } }}>
            Aspect Ratio: {getCurrentAspectRatio()}

            {/* eslint-disable-next-line etc/no-commented-out-code */}
            {/* {currentDevice?.aspectRatio?.[currentDevice.posture.default === POSTURE.FOLDED ? "folded" : "default"]?.aspectRatioDisplayName} */}
          </CoreTypographyBody2>

          <CoreTypographyBody2 gridProps={{ gridSize: { md: 3 } }}>
            Dimension: {getCurrentDimension()}
          </CoreTypographyBody2>

          <CoreTypographyBody2 gridProps={{ gridSize: { md: 3 } }}>
            Orientation: {getCurrentOrientation()}
          </CoreTypographyBody2>

          <CoreTypographyBody2 gridProps={{ gridSize: { md: 3 } }}>
            Posture: {getCurrentPosture()}
          </CoreTypographyBody2>
        </CoreGrid>

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
      </CoreBox >
    );
  };

  return (
    <>
      <CoreH5>{layoutName}</CoreH5>

      <CoreGrid>
        <CoreSelect
          gridProps={{ gridSize: { md: 4, xs: 8 } }}
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
          gridProps={{ gridSize: { md: 2, xs: 4 } }}
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
          gridProps={{ gridSize: { md: 6 } }}
          styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.WIDTH.W_100]} >

          <CoreIconButton
            title={currentDevice.allowRotate ? "Rotate" : "Screen orientation option"}
            onClick={(event) => handleDeviceOrientation(event)}
            disabled={!(currentDevice?.allowRotate || false)}>
            <CoreIcon>screen_rotation</CoreIcon>
          </CoreIconButton>

          <CoreIconButton
            title={"Device posture"}
            onClick={(event) => handleDevicePosture(event)}
            disabled={!(currentDevice?.allowFold || false)}
          >
            <CoreIcon>devices_fold</CoreIcon>
          </CoreIconButton>

        </CoreBox>
      </CoreGrid>

      {layoutName && renderLayoutView()}
    </>
  );
}

// eslint-disable-next-line etc/no-commented-out-code
// function simulateScreenSize(width, height) {
//   document.documentElement.style.setProperty("--viewport-width", `${width}px`);
//   document.documentElement.style.setProperty("--viewport-height", `${height}px`);
// }