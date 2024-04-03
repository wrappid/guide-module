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
  CoreH6,
  CoreTypographyCaption,
  CoreSpan,
  CoreDivider,
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
  [CoreClasses.ASPECT_RATIO.RATIO_1_1] : { aspectRatioDisplayName: "1:1", aspectRatioName: CoreClasses.ASPECT_RATIO.RATIO_1_1 },
  [CoreClasses.ASPECT_RATIO.RATIO_16_9]: { aspectRatioDisplayName: "9:16", aspectRatioName: CoreClasses.ASPECT_RATIO.RATIO_9_16 },
  [CoreClasses.ASPECT_RATIO.RATIO_9_16]: { aspectRatioDisplayName: "16:9", aspectRatioName: CoreClasses.ASPECT_RATIO.RATIO_16_9 },
  [CoreClasses.ASPECT_RATIO.RATIO_20_9]: { aspectRatioDisplayName: "9:20", aspectRatioName: CoreClasses.ASPECT_RATIO.RATIO_9_20 },
  [CoreClasses.ASPECT_RATIO.RATIO_9_20]: { aspectRatioDisplayName: "20:9", aspectRatioName: CoreClasses.ASPECT_RATIO.RATIO_20_9 },
  [CoreClasses.ASPECT_RATIO.RATIO_3_2] : { aspectRatioDisplayName: "2:3", aspectRatioName: CoreClasses.ASPECT_RATIO.RATIO_2_3 },
  [CoreClasses.ASPECT_RATIO.RATIO_2_3] : { aspectRatioDisplayName: "3:2", aspectRatioName: CoreClasses.ASPECT_RATIO.RATIO_3_2 },
  [CoreClasses.ASPECT_RATIO.RATIO_4_3] : { aspectRatioDisplayName: "3:4", aspectRatioName: CoreClasses.ASPECT_RATIO.RATIO_3_4 },
  [CoreClasses.ASPECT_RATIO.RATIO_3_4] : { aspectRatioDisplayName: "4:3", aspectRatioName: CoreClasses.ASPECT_RATIO.RATIO_4_3 },
  [CoreClasses.ASPECT_RATIO.RATIO_21_9]: { aspectRatioDisplayName: "9:21", aspectRatioName: CoreClasses.ASPECT_RATIO.RATIO_9_21 },
  [CoreClasses.ASPECT_RATIO.RATIO_9_21]: { aspectRatioDisplayName: "21:9", aspectRatioName: CoreClasses.ASPECT_RATIO.RATIO_21_9 },
  [CoreClasses.ASPECT_RATIO.RATIO_25_9]: { aspectRatioDisplayName: "9:25", aspectRatioName: CoreClasses.ASPECT_RATIO.RATIO_9_25 },
  [CoreClasses.ASPECT_RATIO.RATIO_9_25]: { aspectRatioDisplayName: "25:9", aspectRatioName: CoreClasses.ASPECT_RATIO.RATIO_25_9 },

};

const DEVICES = {
  GALAXY_FOLD: {
    allowFold  : true,
    allowRotate: true,
    aspectRatio: {
      default: { aspectRatioDisplayName: "25:9", aspectRatioName: CoreClasses.ASPECT_RATIO.RATIO_25_9 },
      folded : { aspectRatioDisplayName: "21:9", aspectRatioName: CoreClasses.ASPECT_RATIO.RATIO_21_9 },
    },
    deviceType: DEVICE_TYPE.MOBILE,
    dimension : {
      default: { height: "653", width: "512" },
      folded : { height: "653", width: "280" }
    },
    displayName: "Samsung Galaxy Fold",
    name       : "GALAXY_FOLD",
    orientation: { default: ORIENTATION.POTRAIT },
    posture    : { default: POSTURE.CONTINUOUS }
  },
  ASUS_ZENBOOK_FOLD: {
    allowFold  : true,
    allowRotate: true,
    aspectRatio: {
      default: { aspectRatioDisplayName: "2:3", aspectRatioName: CoreClasses.ASPECT_RATIO.RATIO_2_3 },
      folded : { aspectRatioDisplayName: "16:9", aspectRatioName: CoreClasses.ASPECT_RATIO.RATIO_16_9 },
    },
    deviceType: DEVICE_TYPE.DESKTOP_TOUCH,
    dimension : {
      default: { height: "1280", width: "853" },
      folded : { height: "1280", width: "1706" }
    },
    zoom       : { default: 100 },
    displayName: "Asus Zenbook Fold",
    name       : "ASUS_ZENBOOK_FOLD",
    orientation: { default: ORIENTATION.POTRAIT },
    posture    : { default: POSTURE.CONTINUOUS }
  },
  GALAXY_S20_ULTRA: {
    allowFold  : false,
    allowRotate: true,
    aspectRatio: { default: { aspectRatioDisplayName: "9:20", aspectRatioName: CoreClasses.ASPECT_RATIO.RATIO_9_20 } },
    deviceType : DEVICE_TYPE.MOBILE,
    dimension  : { default: { height: "915", width: "412" } },
    zoom       : { default: 100 },
    displayName: "Samsung Galaxy S20 Ultra",
    name       : "GALAXY_S20_ULTRA",
    orientation: { default: ORIENTATION.POTRAIT },
    posture    : { default: POSTURE.NOT_APPLICABLE }
  },
  LAPTOP: {
    allowFold  : false,
    allowRotate: false,
    aspectRatio: { default: { aspectRatioDisplayName: "16:9", aspectRatioName: CoreClasses.ASPECT_RATIO.RATIO_16_9 } },
    deviceType : DEVICE_TYPE.DESKTOP,
    dimension  : { default: { height: "1080", width: "1920" } },
    zoom       : { default: 100 },
    displayName: "Laptop",
    name       : "LAPTOP",
    orientation: { default: ORIENTATION.LANDSCAPE },
    posture    : { default: POSTURE.NOT_APPLICABLE }
  },
  MOBILE: {
    allowFold  : false,
    allowRotate: true,
    aspectRatio: { default: { aspectRatioDisplayName: "9:16", aspectRatioName: CoreClasses.ASPECT_RATIO.RATIO_9_16 } },
    deviceType : DEVICE_TYPE.MOBILE,
    dimension  : { default: { height: "667", width: "375" } },
    zoom       : { default: 100 },
    displayName: "Mobile",
    name       : "MOBILE",
    orientation: { default: ORIENTATION.POTRAIT },
    posture    : { default: POSTURE.NOT_APPLICABLE }
  },
  TABLET: {
    allowFold  : false,
    allowRotate: true,
    aspectRatio: { default: { aspectRatioDisplayName: "2:3", aspectRatioName: CoreClasses.ASPECT_RATIO.RATIO_2_3 } },
    deviceType : DEVICE_TYPE.MOBILE,
    dimension  : { default: { height: "1180", width: "820" } },
    zoom       : { default: 100 },
    displayName: "Tablet",
    name       : "TABLET",
    orientation: { default: ORIENTATION.POTRAIT },
    posture    : { default: POSTURE.NOT_APPLICABLE },
  },
};

const ZOOM_VALUES = {
  // eslint-disable-next-line etc/no-commented-out-code
  // FIT_TO_SCREEN: "Fit to Screen",
  ZOOM_50 : 50,
  ZOOM_75 : 75,
  ZOOM_100: 100,
  ZOOM_125: 125,
  ZOOM_150: 150,
  ZOOM_200: 200,
};

export default function LayoutViewer(props) {
  
  const { layoutName = "ComplexLayout" } = props;

  const [currentDevice, setCurrentDevice] = React.useState(DEVICES.MOBILE);

  // eslint-disable-next-line etc/no-commented-out-code
  // const [zoomValue, setZoomValue] = React.useState(ZOOM_VALUES.ZOOM_100);

  // eslint-disable-next-line no-console
  // console.log("zoomValue", zoomValue);

  const handleDeviceChange = (event) => {
    let currentDevice = DEVICES[event.target.value];

    setCurrentDevice(currentDevice);
    // eslint-disable-next-line etc/no-commented-out-code
    // setPotrait(true);
    // simulateScreenSize(DEVICES[currentDevice]?.dimension.height, DEVICES[currentDevice]?.dimension.width);
  };

  /**
   * 
   */
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

  /**
   * 
   */
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
          // note that width will be set to height and height will be set to width in this section as orientation is changing here
          let updatedCurrentDimension = {
            height: currentDevice.dimension.default.width,
            width : currentDevice.dimension.default.height
          };

          if (POSTURE.FOLDED === updatedDevice.posture.current) {
            updatedCurrentDimension = {
              height: currentDevice.dimension.folded.width,
              width : currentDevice.dimension.folded.height
            };
          }

          updatedDevice.dimension.current = updatedCurrentDimension;
        }
      }
    }
    
    let updatedRenderedDimension = {
      height: Math.round(currentDevice.dimension.current.height * currentDevice.zoom.current / 100),
      width : Math.round(currentDevice.dimension.current.width * currentDevice.zoom.current / 100)
    };

    updatedDevice.dimension.rendered = updatedRenderedDimension;

    setCurrentDevice(updatedDevice);
  };

  /**
   * 
   * @param {*} event 
   */
  const handleDeviceZoom = (event) => {
    // Create a copy of the currentDevice object
    let updatedDevice = { ...currentDevice };
    
    updatedDevice.zoom.current = event?.target?.value;

    setCurrentDevice(updatedDevice);

    handleDeviceDimension();
  };

  /**
   * 
   */
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

  /**
   * 
   */
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

    // reset orientation to default
    updatedDevice.orientation.current = currentDevice.orientation.default;

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
  const getCurrentDimensionWidth = () => {
    getCurrentDimension();
    return currentDevice.dimension.current.width;
  };

  /**
   * 
   * @returns 
   */
  const getCurrentDimensionHeight = () => {
    getCurrentDimension();
    return currentDevice.dimension.current.height;
  };

  /**
   * 
   * @returns 
   */
  const getRenderedDimension = () => {
    if (currentDevice.dimension.hasOwnProperty("rendered") === false) {
      currentDevice.dimension.rendered = currentDevice.dimension.current;
    }
    let renderedDim = currentDevice.dimension.rendered;

    return `${renderedDim.width} x ${renderedDim.height}`;
  };

  /**
   * 
   * @returns 
   */
  const getRenderedDimensionWidth = () => {
    getRenderedDimension();
    return currentDevice.dimension.rendered.width;
  };

  /**
   * 
   * @returns 
   */
  const getRenderedDimensionHeight = () => {
    getRenderedDimension();
    return currentDevice.dimension.rendered.height;
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

  /**
   * 
   * @returns 
   */
  const getCurrentZoom = () => {
    if (currentDevice.hasOwnProperty("zoom") === false) {
      currentDevice.zoom = {};
      currentDevice.zoom.default = 100;
    }
    if (currentDevice.zoom.hasOwnProperty("current") === false) {
      currentDevice.zoom.current = currentDevice.zoom.default;
    }
    return currentDevice.zoom.current;
  };

  /**
   * 
   */
  const renderLayoutViewerMenu = () => {
    return (
      <>
        <CoreH6 styleClasses={[CoreClasses.MARGIN.MB1]}>{layoutName}</CoreH6>

        <CoreDivider />

        <CoreTypographyBody2 styleClasses={[CoreClasses.MARGIN.MB1]}>Device Selection</CoreTypographyBody2>

        <CoreGrid>
          <CoreSelect
            gridProps={{ gridSize: { md: 12 } }}
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
            gridProps={{ gridSize: { md: 8, xs: 4 } }}
            label="Zoom"
            id="currentZoom"
            value={getCurrentZoom()}
            handleChange={handleDeviceZoom}
            options={[
              ...Object.values(ZOOM_VALUES).map((value) => {
                return { id: value, label: value, value: value };
              })
            ]}
          />

          <CoreBox
            gridProps={{ gridSize: { md: 4, xs: 4 }, styleClasses: [CoreClasses.ALIGNMENT.ALIGN_ITEMS_END] }}
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

        <CoreDivider />
        
        <CoreTypographyBody2 styleClasses={[CoreClasses.MARGIN.MB1]}>Device Parameters</CoreTypographyBody2>

        {renderLayoutViewerParam("Aspect Ratio", getCurrentAspectRatio())}

        {renderLayoutViewerParam("Orientation", getCurrentOrientation())}

        {renderLayoutViewerParam("Posture", getCurrentPosture())}
   
        {renderLayoutViewerParam("Dimension", getCurrentDimension())}

        {renderLayoutViewerParam("Rendered Dim.", getRenderedDimension())}
 
      </>
    );
  };

  const renderLayoutViewerParam = (key, value) => {
    return ( 
      <CoreTypographyCaption>
        <CoreGrid>
          <CoreSpan gridProps={{ gridSize: { md: 7 } }}>{key}</CoreSpan>

          <CoreSpan
            gridProps={{
              gridSize    : { md: 5 },
              styleClasses: [CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_END] 
            }} 
          >{value}</CoreSpan>
        </CoreGrid>
      </CoreTypographyCaption>
    );
  };

  /**
   * 
   * @returns 
   */
  const renderLayoutViewerCanvas = () => {
    return (
      <>
        <CoreTypographyBody2
          styleClasses={[CoreClasses.BG.BG_WHITE, CoreClasses.POSITION.STICKY_TOP, CoreClasses.MARGIN.MB0, CoreClasses.MARGIN.ML3]}
        >←&nbsp;&nbsp;&nbsp;Screen Width: {getCurrentDimensionWidth()}px,

         Rendered Width: {getRenderedDimensionWidth()}px&nbsp;&nbsp;&nbsp;→</CoreTypographyBody2>

        <CoreTypographyBody2
          styleClasses={[
            CoreClasses.BG.BG_WHITE,
            CoreClasses.POSITION.STICKY_TOP,
            CoreClasses.PADDING.PB3,
            CoreClasses.TEXT.TEXT_WRITING_MODE_BOTTOM_TO_TOP,
            CoreClasses.FLOAT.START
          ]}
        >←&nbsp;&nbsp;&nbsp;Screen Height: {getCurrentDimensionHeight()}px, 

        Rendered Height: {getRenderedDimensionHeight()}px&nbsp;&nbsp;&nbsp;→</CoreTypographyBody2>

        <CoreBox
          styleClasses={[
            CoreClasses.BG.BG_DOT_GRID_1,
            CoreClasses.HEIGHT.MIN_VH_75,
            CoreClasses.HEIGHT.MAX_VH_100,
            CoreClasses.MARGIN.MB3,
            CoreClasses.OVERFLOW.OVERFLOW_AUTO,
            CoreClasses.PADDING.P2
          ]}>

          <CoreBox 
            height={currentDevice.dimension.rendered.height + "px"}
            width={currentDevice.dimension.rendered.width + "px"}
            styleClasses={[
              CoreClasses.BG.BG_GREY_100,
              CoreClasses.PADDING.P1,
              CoreClasses.SHADOW.NORMAL,
              CoreClasses.OVERFLOW.OVERFLOW_AUTO,
              currentDevice.aspectRatio.current.aspectRatioName
            ]}
          >
            <LayoutManager key={layoutName + "-VIEW-MODE"} layoutName={layoutName} viewMode={true} />
          </CoreBox>
        </CoreBox >

        {/* ↑↓ */}
      </>
    );
  };

  return (
    <>
      <CoreH5>Layout Viewer</CoreH5>

      <CoreGrid>
        <CoreBox
          gridProps={{ gridSize: { md: 3 } }}
          styleClasses={[CoreClasses.POSITION.STICKY_TOP, CoreClasses.BG.BG_GREY_100, CoreClasses.MARGIN.MB1, CoreClasses.PADDING.P1]} >
          {renderLayoutViewerMenu()}
        </CoreBox>

        <CoreBox
          gridProps={{ gridSize: { md: 9 } }}
        >
          {layoutName && renderLayoutViewerCanvas()}
        </CoreBox>
      </CoreGrid>
    </>
  );
}

// eslint-disable-next-line etc/no-commented-out-code
// function simulateScreenSize(width, height) {
//   document.documentElement.style.setProperty("--viewport-width", `${width}px`);
//   document.documentElement.style.setProperty("--viewport-height", `${height}px`);
// }