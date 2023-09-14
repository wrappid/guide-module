/* eslint-disable no-console */
import {
  CoreH4,
  CoreH5,
  CoreH6,
  CoreTypographyBody1,
  CoreBox,
  CoreGrid,
  CoreDivider,
  CoreClasses
} from "@wrappid/core";
import { UtilityClasses } from "@wrappid/styles";

import CodeSample from "./CodeSample";

const CLASS_NAME_TO_EXCLUDE = [
  // -- "DEV_BORDER",
  // -- "ALIGNMENT",
  "INTERACTIONS",
  "POSITION",
  "WIDTH",
  "HEIGHT",
  "VW_100",
  "MIN_VW_100",
];
const CLASS_NAME_FOR_SCREEN_SIZES = [
  "SM",
  "MD",
  "LG",
  "XL",
  "XXL"
];

export default function StyleUtilities() {
  return (
    <CoreGrid>
      <CoreBox gridProps={{ gridSize: 9 }}>
        <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>
          Style Utilities
        </CoreH4>

        <CoreTypographyBody1>
          These are style utilities built using bootstrap flavour.
        </CoreTypographyBody1>

        {getStyleSamples(UtilityClasses)}

        {/* -- {getStyleSamples(StyledComponentsClasses)} */}
        {/* -- {getStyleSamples(CoreClasses)} */}
      </CoreBox>

      <CoreBox gridProps={{ gridSize: 3 }}>
        <CoreTypographyBody1>Table Of Contents</CoreTypographyBody1>
      </CoreBox>
    </CoreGrid>
  );
}

function isObject(obj) {
  return obj !== undefined && obj !== null && obj.constructor == Object;
}

function isString(obj) {
  return obj !== undefined && obj !== null && obj.constructor == String;
}

let classGroupName = "";
const getStyleSamples = (classes) => {
  console.log("##### Start of getStyleSamples() with below arg:");
  console.log(classes);
  console.log("classGroupName = " + classGroupName);
  return (
    <CoreBox styleClasses={[CoreClasses.MARGIN.MB5]}>
      {Object.keys(classes).map((className, index) => {
        console.log("className = " + className);
        if (!CLASS_NAME_TO_EXCLUDE?.some((nameToExclude) => nameToExclude?.includes(className))) {
          if (isString(classes[className])) {
            return (
              <CodeSample
                title={className}
                description={"Some description text goes here..."}
                code={"NOT YET CODED!!!"}
                renderElement={
                  CLASS_SPECIFIC_SAMPLE_COMPONENT[classGroupName]
                    ? CLASS_SPECIFIC_SAMPLE_COMPONENT[classGroupName](classes, className)
                    : DEFAULT_SAMPLE_COMPONENT(classes, className)
                }
              />
            );
          } else if (isObject(classes[className])) {
            if (
              CLASS_NAME_FOR_SCREEN_SIZES?.some((nameToExclude) =>
                nameToExclude?.includes(className)
              )
            ) {
              return (
                <CoreTypographyBody1 styleClasses={[CoreClasses.COLOR.TEXT_WARNING_LIGHT]}>
                  {className} : Size specific documantation not available as of now
                </CoreTypographyBody1>
              );
            } else {
              classGroupName = className;
              return (
                <>
                  <CoreH5 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>
                    {className}
                  </CoreH5>

                  <CoreTypographyBody1>
                    Some Group specific description text goes here...
                  </CoreTypographyBody1>

                  {getStyleSamples(classes[className])}
                </>
              );
            }
          } else {
            console.warn("Unknown type for " + className);
          }
        }
      })}

      <CoreDivider />
    </CoreBox>
  );
};

const DEFAULT_SAMPLE_COMPONENT = (classes, className) => {
  return (
    <CoreBox
      // key={`${className}-${index}`}
      // gridProps={{ gridSize: 4 }}
      styleClasses={[classes[className], CoreClasses.PADDING.P2, CoreClasses.MARGIN.MB1]}
    >
      {className}
    </CoreBox>
  );
};

const CLASS_SPECIFIC_SAMPLE_COMPONENT = {
  ALIGNMENT: (classes, className) => {
    return (
      <CoreBox
        styleClasses={[
          classes[className],
          CoreClasses.BORDER.BORDER,
          CoreClasses.PADDING.P2,
          CoreClasses.HEIGHT.MIN_VH_25,
          CoreClasses.WIDTH.MIN_W_75,
          CoreClasses.FLEX.FLEX_WRAP,
        ]}
      >
        <CoreTypographyBody1 styleClasses={[CoreClasses.BG.BG_PRIMARY]}>
          {className}
        </CoreTypographyBody1>
      </CoreBox>
    );
  },
  BG: (classes, className) => {
    return (
      <CoreBox
        styleClasses={[
          classes[className],
          CoreClasses.BORDER.BORDER,
          CoreClasses.PADDING.P2,
          CoreClasses.TEXT.TEXT_CENTER,
          CoreClasses.WIDTH.MIN_W_75,
        ]}
      >
        {className}
      </CoreBox>
    );
  },
  BORDER: (classes, className) => {
    return (
      <CoreBox
        // key={`borderClass-${index}`}
        gridProps={{ gridSize: 3 }}
        sx={{ backgroundColor: "#eee" }}
        styleClasses={[
          CoreClasses.BORDER.BORDER,
          CoreClasses.BORDER.BORDER_2,
          CoreClasses.BORDER[className],
          CoreClasses.PADDING.P2,
          CoreClasses.MARGIN.MB1,
        ]}
      >
        {className}
      </CoreBox>
    );
  },
};

const getBackgroundColorUtilitySamples = () => {
  return (
    <>
      {getTopicHeading("Background color")}

      <CoreTypographyBody1>
        Similar to the contextual text color classes, set the background of an element to any
        contextual class. Background utilities do not set color, so in some cases you’ll want to use
        .text-*
      </CoreTypographyBody1>

      <CoreGrid>
        {Object.keys(CoreClasses.BG).map((bgClass, index) => {
          return (
            <CoreBox
              key={`bgClass-${index}`}
              gridProps={{ gridSize: 4 }}
              styleClasses={[CoreClasses.BG[bgClass], CoreClasses.PADDING.P2, CoreClasses.MARGIN.MB1]}
            >
              {bgClass}
            </CoreBox>
          );
        })}
      </CoreGrid>
    </>
  );
};

const getBorderUtilitySamples = () => {
  return (
    <>
      {getTopicHeading("Border")}

      <CoreTypographyBody1>
        In the examples the border-width is forcefully given 2px, so that examples are easily
        visible.
      </CoreTypographyBody1>

      <CoreGrid>
        {Object.keys(CoreClasses.BORDER).map((borderClass, index) => {
          return (
            <CoreBox
              key={`borderClass-${index}`}
              gridProps={{ gridSize: 3 }}
              sx={{ backgroundColor: "#eee" }}
              styleClasses={[
                CoreClasses.BORDER.BORDER,
                CoreClasses.BORDER.BORDER_2,
                CoreClasses.BORDER[borderClass],
                CoreClasses.PADDING.P2,
                CoreClasses.MARGIN.MB1,
              ]}
            >
              {borderClass}
            </CoreBox>
          );
        })}
      </CoreGrid>
    </>
  );
};

const getColorUtilitySamples = () => {
  return (
    <>
      {getTopicHeading("Color")}

      <CoreTypographyBody1>Colorize text with text color utilities.</CoreTypographyBody1>

      <CoreGrid>
        {Object.keys(CoreClasses.COLOR).map((colorClass, index) => {
          return (
            <CoreBox
              key={`colorClass-${index}`}
              gridProps={{ gridSize: 3 }}
              styleClasses={[CoreClasses.COLOR[colorClass], CoreClasses.PADDING.PX2, CoreClasses.MARGIN.MB1]}
            >
              {colorClass}
            </CoreBox>
          );
        })}
      </CoreGrid>
    </>
  );
};
const getTextUtilitySamples = () => {
  return (
    <>
      {getTopicHeading("Text")}

      <CoreTypographyBody1></CoreTypographyBody1>

      <CoreGrid>
        {Object.keys(CoreClasses.TEXT).map((textClass, index) => {
          return (
            <CoreBox
              key={`textClass-${index}`}
              gridProps={{ gridSize: 3 }}
              styleClasses={[CoreClasses.TEXT[textClass], CoreClasses.PADDING.PX2, CoreClasses.MARGIN.MB1]}
            >
              {textClass}
            </CoreBox>
          );
        })}
      </CoreGrid>
    </>
  );
};

const getOpacityUtilitySamples = () => {
  return (
    <>
      {getTopicHeading("Opacity")}

      <CoreTypographyBody1>
        The opacity property sets the opacity level for an element. The opacity level describes the
        transparency level, where 100 is not transparent at all, 50 is 50% visible, and 0 is
        completely transparent.
      </CoreTypographyBody1>

      <CoreTypographyBody1>
        Set the opacity of an element using OPACITY_NN utilities.
      </CoreTypographyBody1>

      <CoreGrid>
        {Object.keys(CoreClasses.OPACITY).map((opacityClass, index) => {
          return (
            <CoreBox
              key={`opacityClass-${index}`}
              gridProps={{ gridSize: 3 }}
              styleClasses={[CoreClasses.OPACITY[opacityClass], CoreClasses.PADDING.P2, CoreClasses.MARGIN.MB1, CoreClasses.BG.BG_PRIMARY]}
            >
              {opacityClass}
            </CoreBox>
          );
        })}
      </CoreGrid>
    </>
  );
};

const getHeading = (headingText) => {
  return (
    <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>
      {headingText}
    </CoreH4>
  );
};

/* -- const getSubHeading = (subHeadingText) => {
    return (
        <CoreH5
            styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_SECONDARY, CoreClasses.TEXT.TEXT_UPPERCASE]}
        >
            {subHeadingText}
        </CoreH5>
    );
}; */

const getTopicHeading = (topicHeadingText) => {
  return (
    <CoreH6 styleClasses={[CoreClasses.MARGIN.MY1, CoreClasses.COLOR.TEXT_INFO]}>
      {topicHeadingText}
    </CoreH6>
  );
};
