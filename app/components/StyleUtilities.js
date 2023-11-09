/* eslint-disable no-console */
import React, { createRef } from "react";

import {
  CoreH4,
  CoreTypographyBody1,
  CoreBox,
  CoreGrid,
  CoreClasses,
  CoreTOC,
  CoreTypographyBody2,
  getPageTOC,
  CoreH1,
  CoreH2,
  CoreH3,
} from "@wrappid/core";
import { UtilityClasses } from "@wrappid/styles";

import CodeSample from "./CodeSample";

const CLASS_NAME_TO_EXCLUDE = [
  // "DEV_BORDER",
  "ALIGNMENT",
  // "BG",
  // "BORDER",
  // "COLOR",
  "DISPLAY",
  "FLEX",
  "FLOAT",
  "INTERACTIONS",
  "OBJECT_FIT",
  // "OPACITY",
  "OVERFLOW",
  "POSITION",
  // "SHADOW",
  // "WIDTH",
  // "HEIGHT",
  // "PADDING",
  // "MARGIN",
  "GAP",
  // "TEXT",
  "VERTICAL_ALIGN",
  "VISIBILITY",
  "Z_INDEX",
];
const CLASS_NAME_FOR_SCREEN_SIZES = ["SM", "MD", "LG", "XL", "XXL"];

const Content = React.forwardRef((props, ref) => {
  return <CoreBox ref={ref}>{props.children}</CoreBox>;
});

Content.displayName = "Content";

export default function StyleUtilities() {
  /**
   * This is a recurrsive function which helps to render style samples
   *
   * @param { classes, classGroupName, className }
   * @returns element
   */
  const renderStyleSamples = ({ classes, classGroupName }) => {
    // console.log("##### Start of renderStyleSamples with below args:");
    // console.log(classes);
    // console.log("classGroupName = " + classGroupName);

    return Object.keys(classes).map((className, index) => {
      // console.log("className = " + className);
      let key =
        (classGroupName ? classGroupName + "_GROUP_" : "") +
        (className ? index + "_" + className : "");
      // console.log("index = " + index + ", className = " + className, "key = " + key);

      if (CLASS_NAME_TO_EXCLUDE?.includes(className)) {
        console.log("Excluding className = " + className);
      } else {
        console.log("Handling className = " + className);

        let codeSampleData = {
          ...DEFAULT_SAMPLE_COMPONENT,
          ...CLASS_SPECIFIC_SAMPLE_COMPONENT[classGroupName],
          ...CLASS_SPECIFIC_SAMPLE_COMPONENT[className],
        };

        if (isString(classes[className])) {
          console.log("isString true for className = " + className);
          return codeSampleData.grouped ? (
            codeSampleData.renderElement(key, classes, className)
          ) : (
            <CodeSample
              key={key}
              title={className}
              description={codeSampleData.description}
              renderElement={codeSampleData?.renderElement(key, classes, className)}
              code={codeSampleData.code}
            />
          );
        } else if (isObject(classes[className])) {
          console.log("isObject true for className = " + className);
          if (CLASS_NAME_FOR_SCREEN_SIZES?.includes(className)) {
            console.log("CLASS_NAME is FOR_SCREEN_SIZES for className = " + className);

            return (
              <CoreTypographyBody1 key={key} styleClasses={[CoreClasses.COLOR.TEXT_WARNING_LIGHT]}>
                {className} : Size specific documantation not available as of now
              </CoreTypographyBody1>
            );
          } else {
            console.log("calling recursive for className = " + className);
            return codeSampleData.grouped ? (
              <CodeSample
                key={key}
                title={className}
                description={codeSampleData.description}
                renderElement={
                  <CoreGrid id="parent-style-sample">
                    {renderStyleSamples({
                      key: key,
                      classGroupName: className,
                      classes: classes[className],
                    })}
                  </CoreGrid>
                }
              />
            ) : (
              renderStyleSamples({ classGroupName: className, classes: classes[className] })
            );
          }
        } else {
          //is not object
          console.warn("Unknown type for " + className);
        }
      }
    });
  };

  return (
    <CoreGrid styleClasses={[CoreClasses.BG.BG_WHITE]}>
      <CoreBox gridProps={{ gridSize: 9 }}>
        <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>
          Style Utilities
        </CoreH4>

        <CoreTypographyBody1>
          These are style utilities built using bootstrap flavour.
        </CoreTypographyBody1>

        {renderStyleSamples({ classes: UtilityClasses })}
      </CoreBox>

      <CoreBox gridProps={{ gridSize: 3 }}>
        <CoreTypographyBody1>Table Of Contents</CoreTypographyBody1>

        <CoreTOC />
      </CoreBox>
    </CoreGrid>
  );
}

/**
 * @todo will move to util file later
 * Utils
 */
function isObject(obj) {
  return obj !== undefined && obj !== null && obj.constructor == Object;
}

function isString(obj) {
  return obj !== undefined && obj !== null && obj.constructor == String;
}

const DEFAULT_SAMPLE_COMPONENT = {
  description: "",
  grouped: false,
  renderElement: (key, classes, className) => {
    return (
      <CoreBox
        key={key}
        styleClasses={[
          classes[className],
          CoreClasses.BORDER.BORDER,
          CoreClasses.PADDING.P1,
          CoreClasses.TEXT.TEXT_CENTER,
        ]}
      >
        {className}
      </CoreBox>
    );
  },
};

const CLASS_SPECIFIC_SAMPLE_COMPONENT = {
  ALIGNMENT: {
    description: "",
    grouped: true,
    renderElement: (key, classes, className) => {
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
  },
  BG: {
    description: (
      <>
        <CoreTypographyBody1>
          Sets the background of an element to any contextual class.
        </CoreTypographyBody1>

        <CoreTypographyBody2>
          {
            "Background utilities do not set color, so in some cases you’ll want to use CoreClasses.COLOR.TEXT_<contextual-class>"
          }
        </CoreTypographyBody2>
      </>
    ),
    grouped: true,
    renderElement: (key, classes, className) => {
      return (
        <CoreBox
          key={key}
          gridProps={{ gridSize: 4 }}
          styleClasses={[
            classes[className],
            CoreClasses.BORDER.BORDER,
            CoreClasses.PADDING.P1,
            CoreClasses.TEXT.TEXT_CENTER,
          ]}
        >
          {className}
        </CoreBox>
      );
    },
  },
  BORDER: {
    description:
      "In the examples the border-width is forcefully given 2px, so that examples are easily visible.",
    grouped: true,
    renderElement: (key, classes, className) => {
      return (
        <CoreBox
          key={key} // key={`borderClass-${index}`}
          gridProps={{ gridSize: 4 }}
          styleClasses={[
            CoreClasses.BORDER.BORDER,
            CoreClasses.BORDER.BORDER_2,
            classes[className],
            CoreClasses.PADDING.P1,
          ]}
        >
          {className}
        </CoreBox>
      );
    },
  },
  COLOR: {
    description: "Colorize text with text color utilities.",
    grouped: true,
    renderElement: (key, classes, className) => {
      return (
        <CoreBox
          key={key}
          gridProps={{ gridSize: 4 }}
          styleClasses={[
            classes[className],
            CoreClasses.BORDER.BORDER,
            CoreClasses.PADDING.P1,
            CoreClasses.TEXT.TEXT_CENTER,
          ]}
        >
          {className}
        </CoreBox>
      );
    },
  },
  MARGIN: {
    description: "",
    grouped: true,
    renderElement: (key, classes, className) => {
      return (
        <CoreBox
          styleClasses={[
            CoreClasses.BG.BG_WARNING_LIGHT,
            CoreClasses.BORDER.BORDER,
            CoreClasses.BORDER.BORDER_WARNING,
            CoreClasses.MARGIN.M3,
          ]}
        >
          <CoreTypographyBody1
            styleClasses={[CoreClasses.BG.BG_WHITE, CoreClasses.MARGIN.M0, classes[className]]}
          >
            {className}
          </CoreTypographyBody1>
        </CoreBox>
      );
    },
  },
  OPACITY: {
    description: "",
    grouped: true,
  },
  PADDING: {
    description: "",
    grouped: true,
    renderElement: (key, classes, className) => {
      return (
        <CoreBox
          key={key}
          gridProps={{ gridSize: 4 }}
          styleClasses={[
            classes[className],
            CoreClasses.BG.BG_SUCCESS_LIGHT,
            CoreClasses.BORDER.BORDER,
            CoreClasses.BORDER.BORDER_SUCCESS,
            CoreClasses.MARGIN.M3,
          ]}
        >
          <CoreTypographyBody1 styleClasses={[CoreClasses.BG.BG_WHITE, CoreClasses.MARGIN.M0]}>
            {className}
          </CoreTypographyBody1>
        </CoreBox>
      );
    },
  },
  SHADOW: {
    description: "",
    grouped: true,
    renderElement: (key, classes, className) => {
      return (
        <CoreBox
          key={key}
          styleClasses={[
            classes[className],
            CoreClasses.PADDING.P3,
            CoreClasses.MARGIN.M3,
            CoreClasses.TEXT.TEXT_CENTER,
            CoreClasses.WIDTH.MIN_W_75,
          ]}
        >
          {className}
        </CoreBox>
      );
    },
  },
  TEXT: {
    description: "",
    grouped: true,
    renderElement: (key, classes, className) => {
      return (
        <CoreBox
          key={key}
          gridProps={{ gridSize: 6 }}
          styleClasses={[
            CoreClasses.BORDER.BORDER,
            CoreClasses.PADDING.P1,
            CoreClasses.TEXT.TEXT_CENTER,
            classes[className],
          ]}
        >
          {className}
        </CoreBox>
      );
    },
  },
};
