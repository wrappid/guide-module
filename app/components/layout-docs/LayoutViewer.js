/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable no-prototype-builtins */
// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import {
  CoreBox,
  CoreGrid,
  CoreClasses,
  LayoutManager,
  CoreSelect,
  CoreTypographyBody2,
  CoreIconButton,
  CoreIcon,
  CoreLabel,
  CoreH5
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
      default: { aspectRatioDisplayName: "2:3", aspectRatioName: CoreClasses.ASPECT_RATIO.ASPECT_RATIO_2_3 },
      folded : { aspectRatioDisplayName: "16:9", aspectRatioName: CoreClasses.ASPECT_RATIO.ASPECT_RATIO_16_9 },
    },
    deviceType: DEVICE_TYPE.DESKTOP_TOUCH,
    dimension : {
      default: { height: "1280", width: "853" },
      folded : { height: "1280", width: "1706" }
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
  ZOOM_50      : 50,
  ZOOM_75      : 75,
  ZOOM_100     : 100,
  ZOOM_125     : 125,
  ZOOM_150     : 150,
  ZOOM_200     : 200,
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

    if (updatedDevice.aspectRatio.hasOwnProperty("current") === false) {
      updatedDevice.aspectRatio.current = currentDevice.aspectRatio.default;
    }

    if (updatedDevice.allowFold) {
      if (updatedDevice.posture.hasOwnProperty("current")) {
        if (POSTURE.CONTINUOUS === updatedDevice.posture.current) {
          updatedDevice.aspectRatio.current = updatedDevice.aspectRatio.default;
        } else if (POSTURE.FOLDED === updatedDevice.posture.current) {
          updatedDevice.aspectRatio.current = updatedDevice.aspectRatio.folded;
        }
      }
    }

    if (updatedDevice.allowRotate) {
      if (updatedDevice.orientation.hasOwnProperty("current")) {
        if (updatedDevice.orientation.default === updatedDevice.orientation.current) {
          if (POSTURE.CONTINUOUS === updatedDevice.posture.current
            || POSTURE.NOT_APPLICABLE === updatedDevice.posture.current) {
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

    if (updatedDevice.dimension.hasOwnProperty("current") === false) {
      updatedDevice.dimension.current = currentDevice.dimension.default;
    }

    if (updatedDevice.allowFold) {
      if (updatedDevice.posture.hasOwnProperty("current")) {
        if (POSTURE.CONTINUOUS === updatedDevice.posture.current) {
          updatedDevice.dimension.current = updatedDevice.dimension.default;
        } else if (POSTURE.FOLDED === updatedDevice.posture.current) {
          updatedDevice.dimension.current = updatedDevice.dimension.folded;
        }
      }
    }

    if (updatedDevice.allowRotate) {
      if (updatedDevice.orientation.hasOwnProperty("current")) {
        if (updatedDevice.orientation.default === updatedDevice.orientation.current) {
          if (POSTURE.CONTINUOUS === updatedDevice.posture.current
            || POSTURE.NOT_APPLICABLE === updatedDevice.posture.current) {
            updatedDevice.dimension.current = updatedDevice.dimension.default;
          } else if (POSTURE.FOLDED === updatedDevice.posture.current) {
            updatedDevice.dimension.current = updatedDevice.dimension.folded;
          }
        } else {
          let updatedDimension = {
            height: currentDevice.dimension.default.width,
            width : currentDevice.dimension.default.height
          };

          if (POSTURE.FOLDED === updatedDevice.posture.current) {
            updatedDimension = {
              height: currentDevice.dimension.folded.width,
              width : currentDevice.dimension.folded.height
            };
          }

          updatedDevice.dimension.current = updatedDimension;
        }
      }
    }

    setCurrentDevice(updatedDevice);
  };

  const handleDeviceOrientation = () => {
    // Create a copy of the currentDevice object
    let updatedDevice = { ...currentDevice };

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

        <CoreBox
          styleClasses={[
            CoreClasses.BG.BG_GREY_100,
            CoreClasses.PADDING.P1,
            CoreClasses.SHADOW.SMALL,
            CoreClasses.OVERFLOW.OVERFLOW_AUTO,
            currentDevice?.deviceType === (DEVICE_TYPE.DESKTOP || DEVICE_TYPE.DESKTOP_TOUCH) && CoreClasses.WIDTH.W_75,
            currentDevice?.deviceType === (DEVICE_TYPE.MOBILE || DEVICE_TYPE.MOBILE_NO_TOUCH) && CoreClasses.WIDTH.W_50,
            currentDevice.aspectRatio.current.aspectRatioName
          ]}
        >
          <LayoutManager layoutName={layoutName} viewMode={true} />
        </CoreBox>
      </CoreBox >
    );
  };

  return (
    <>
      <CoreBox styleClasses={[CoreClasses.POSITION.STICKY_TOP, CoreClasses.BG.BG_GREY_100, CoreClasses.MARGIN.MB1, CoreClasses.PADDING.P1]} >
        <CoreGrid>
          <CoreH5 styleClasses={[CoreClasses.MARGIN.M0]}>{layoutName}</CoreH5>

          <CoreSelect
            gridProps={{ gridSize: { md: 3 } }}
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
            gridProps={{ gridSize: { md: 2, xs: 4 }, styleClasses: [CoreClasses.ALIGNMENT.ALIGN_ITEMS_END] }}
          >
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

        <CoreGrid>
          <CoreBox gridProps={{ gridSize: { md: 3, xs: 6 } }} >
            <CoreLabel>Dimension</CoreLabel>

            <CoreTypographyBody2 styleClasses={[CoreClasses.MARGIN.M0]}>
              {getCurrentDimension()}
            </CoreTypographyBody2>
          </CoreBox>

          <CoreBox gridProps={{ gridSize: { md: 3, xs: 6 } }} >
            <CoreLabel>Aspect Ratio</CoreLabel>

            <CoreTypographyBody2 styleClasses={[CoreClasses.MARGIN.M0]}>
              {getCurrentAspectRatio()}
            </CoreTypographyBody2>
          </CoreBox>

          <CoreBox gridProps={{ gridSize: { md: 3, xs: 6 } }} >
            <CoreLabel>Orientation</CoreLabel>

            <CoreTypographyBody2 styleClasses={[CoreClasses.MARGIN.M0]}>
              {getCurrentOrientation()}
            </CoreTypographyBody2>
          </CoreBox>

          <CoreBox gridProps={{ gridSize: { md: 3, xs: 6 } }} >
            <CoreLabel>Posture</CoreLabel>

            <CoreTypographyBody2 styleClasses={[CoreClasses.MARGIN.M0]} >
              {getCurrentPosture()}
            </CoreTypographyBody2>
          </CoreBox>

        </CoreGrid>

      </CoreBox>

      {layoutName && renderLayoutView()}
    </>
  );
}

// eslint-disable-next-line etc/no-commented-out-code
// function simulateScreenSize(width, height) {
//   document.documentElement.style.setProperty("--viewport-width", `${width}px`);
//   document.documentElement.style.setProperty("--viewport-height", `${height}px`);
// }