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
  CoreTypographyCaption,
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
  "WIDTH",
  "HEIGHT",
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
   * @param { classes, classGroupName }
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

        let codeSampleData = prepareCodeSampleData({
          classGroupName: classGroupName,
          className: className,
        });

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
              code={codeSampleData.code(classGroupName, className)}
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

  /**
   *
   * @param { classGroupName, classes } param0
   * @returns { description:String, grouped:boolean, renderElement: (key, classes, className), code: (classGroupName, className) }
   */
  const prepareCodeSampleData = ({ classGroupName, className }) => {
    let codeSampleData = {
      ...DEFAULT_SAMPLE_COMPONENT,
      ...CLASS_SPECIFIC_SAMPLE_COMPONENT[classGroupName],
      ...CLASS_SPECIFIC_SAMPLE_COMPONENT[className],
    };

    let startsWithSampleComponent;
    Object.keys(CLASS_SPECIFIC_SAMPLE_COMPONENT).forEach((sampleClassName, index) => {
      if (sampleClassName?.startsWith("__STARTS_WITH__")) {
        let sampleClassNameToMatch = sampleClassName.split("__STARTS_WITH__")[1];
        if (className.startsWith(sampleClassNameToMatch)) {
          startsWithSampleComponent = CLASS_SPECIFIC_SAMPLE_COMPONENT[sampleClassName];
        }
      } else if (sampleClassName?.startsWith("__ENDS_WITH__")) {
        let sampleClassNameToMatch = sampleClassName.split("__ENDS_WITH__")[1];
        if (className.endsWith(sampleClassNameToMatch)) {
          startsWithSampleComponent = CLASS_SPECIFIC_SAMPLE_COMPONENT[sampleClassName];
        }
      }
    });

    codeSampleData = { ...codeSampleData, ...startsWithSampleComponent };

    return codeSampleData;
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
  description: "Basic example and usage sample.",
  grouped: false,
  renderElement: (key, classes, className) => {
    return (
      <CoreBox
        key={key}
        gridProps={{ gridSize: 3 }}
        styleClasses={[
          classes[className],
          CoreClasses.BORDER.BORDER,
          CoreClasses.PADDING.P1,
          CoreClasses.TEXT.TEXT_CENTER,
        ]}
      >
        <CoreTypographyCaption>{className}</CoreTypographyCaption>
      </CoreBox>
    );
  },
  code: (classGroupName, className) => {
    return `<AnyComponent styleClasses={[CoreClasses${classGroupName ? "." + classGroupName : ""}${
      className ? "." + className : ""
    }]}></AnyComponent>`;
  },
};

const CLASS_SPECIFIC_SAMPLE_COMPONENT = {
  DEV_BORDER: {
    description: (
      <>
        <CoreTypographyBody1>
          Sets the border of all elements when the wrappid app is started in DEV env. This border
          could be used during development to understand boundary of all rendered elements.
        </CoreTypographyBody1>

        <CoreTypographyBody2>
          Note: this border renders in different color in different screen sizes.
        </CoreTypographyBody2>
      </>
    ),
  },
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
            <CoreTypographyCaption>{className}</CoreTypographyCaption>
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
          <CoreTypographyCaption>{className}</CoreTypographyCaption>
        </CoreBox>
      );
    },
  },
  BG_BLACK: {
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
            CoreClasses.COLOR.TEXT_WHITE,
          ]}
        >
          <CoreTypographyCaption>{className}</CoreTypographyCaption>
        </CoreBox>
      );
    },
  },
  BORDER: {
    description:
      "In some of the examples the border-width is forcefully given 2px, so that examples are easily visible.",
    grouped: true,
    renderElement: (key, classes, className) => {
      return (
        <CoreBox
          key={key}
          gridProps={{ gridSize: 3 }}
          styleClasses={[
            CoreClasses.BG.BG_SECONDARY_LIGHT,
            CoreClasses.BORDER.BORDER,
            classes[className],
            CoreClasses.BORDER.BORDER_2,
            CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
            CoreClasses.PADDING.P1,
          ]}
        >
          <CoreTypographyCaption>{className}</CoreTypographyCaption>
        </CoreBox>
      );
    },
  },
  __STARTS_WITH__BORDER_ROUNDED: {
    renderElement: (key, classes, className) => {
      return (
        <CoreBox
          key={key}
          gridProps={{ gridSize: 4 }}
          styleClasses={[
            CoreClasses.FLEX.DIRECTION_COLUMN,
            CoreClasses.FLEX.FLEX_WRAP_WRAP,
            CoreClasses.ALIGNMENT.ALIGN_CONTENT_CENTER,
            CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
            CoreClasses.PADDING.P1,
          ]}
        >
          <CoreBox
            width={56}
            height={56}
            styleClasses={[
              CoreClasses.BG.BG_SECONDARY_LIGHT,
              CoreClasses.BORDER.BORDER,
              classes[className],
              CoreClasses.BORDER.BORDER_2,
              CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
              CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
              CoreClasses.PADDING.P1,
            ]}
          >
            <CoreTypographyCaption>56x56</CoreTypographyCaption>
          </CoreBox>
          <CoreTypographyCaption>{className}</CoreTypographyCaption>
        </CoreBox>
      );
    },
  },
  __ENDS_WITH___PILL: {
    renderElement: (key, classes, className) => {
      return (
        <CoreBox
          key={key}
          gridProps={{ gridSize: 4 }}
          styleClasses={[
            CoreClasses.FLEX.DIRECTION_COLUMN,
            CoreClasses.FLEX.FLEX_WRAP_WRAP,
            CoreClasses.ALIGNMENT.ALIGN_CONTENT_CENTER,
            CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
            CoreClasses.PADDING.P1,
          ]}
        >
          <CoreBox
            width={144}
            height={56}
            styleClasses={[
              CoreClasses.BG.BG_SECONDARY_LIGHT,
              CoreClasses.BORDER.BORDER,
              classes[className],
              CoreClasses.BORDER.BORDER_2,
              CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
              CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
              CoreClasses.PADDING.P1,
            ]}
          >
            <CoreTypographyCaption>144x56</CoreTypographyCaption>
          </CoreBox>
          <CoreTypographyCaption>{className}</CoreTypographyCaption>
        </CoreBox>
      );
    },
  },
  __STARTS_WITH__BORDER_STYLE: {
    renderElement: (key, classes, className) => {
      return (
        <CoreBox
          key={key}
          gridProps={{ gridSize: 3 }}
          styleClasses={[
            CoreClasses.BG.BG_SECONDARY_LIGHT,
            // CoreClasses.BORDER.BORDER,
            classes[className],
            // CoreClasses.BORDER.BORDER_2,
            CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
            CoreClasses.PADDING.P1,
          ]}
        >
          <CoreTypographyCaption>{className}</CoreTypographyCaption>
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
          <CoreTypographyCaption>{className}</CoreTypographyCaption>
        </CoreBox>
      );
    },
  },
  __STARTS_WITH__TEXT_WHITE: {
    renderElement: (key, classes, className) => {
      return (
        <CoreBox
          key={key}
          gridProps={{ gridSize: 4 }}
          styleClasses={[
            classes[className],
            CoreClasses.BG.BG_BLACK,
            CoreClasses.BORDER.BORDER,
            CoreClasses.PADDING.P1,
            CoreClasses.TEXT.TEXT_CENTER,
          ]}
        >
          <CoreTypographyCaption>{className}</CoreTypographyCaption>
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
            <CoreTypographyCaption>{className}</CoreTypographyCaption>
          </CoreTypographyBody1>
        </CoreBox>
      );
    },
  },
  OPACITY: {
    description: (
      <>
        <CoreTypographyBody1>
          Sets the opacity level for an element. The opacity level describes the transparency level
          for an element, where OPACITY_0 is completely transparent, OPACITY_50 is 50% visible, and
          OPACITY_100 is not transparent at all.
        </CoreTypographyBody1>
        <CoreTypographyBody1>
          {"Set the opacity of an element using OPACITY_{value} utilities."}
        </CoreTypographyBody1>
        <CoreTypographyBody2>
          Note: The values are 0, 5, 10, ... , 100 with a step of 5.
        </CoreTypographyBody2>
      </>
    ),
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
            <CoreTypographyCaption>{className}</CoreTypographyCaption>
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
          <CoreTypographyCaption>{className}</CoreTypographyCaption>
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
          <CoreTypographyCaption>{className}</CoreTypographyCaption>
        </CoreBox>
      );
    },
  },
};
