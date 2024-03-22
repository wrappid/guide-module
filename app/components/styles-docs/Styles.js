/* eslint-disable */
import React from "react";

import {
  CoreH4,
  CoreTypographyBody1,
  CoreBox,
  CoreGrid,
  CoreClasses,
  CoreTOC,
  CoreTypographyCaption,
  CoreH5,
  CoreH6,
  CoreDivider,
  CoreLayoutItem,
  BlankLayout,
} from "@wrappid/core";
import { UtilityClasses } from "@wrappid/styles";

import CodeSample from "../CodeSample";

import {
  DEFAULT_SAMPLE_COMPONENT,
  CLASS_SPECIFIC_SAMPLE_COMPONENT,
} from "./StylesSamples";

const CLASS_NAME_TO_EXCLUDE = [
  // "DEV_BORDER", // DONE
  // "ALIGNMENT",
  // "BG", // DONE
  // "BORDER", // DONE
  // "COLOR",
  // "CURSOR", // DONE
  // "DISPLAY", // DONE
  // "FLEX",
  "FLOAT",
  "GAP",
  // "GRADIENT",
  "HEIGHT", //DONE*
  // "INTERACTIONS", //DONE
  // "MARGIN", // DONE
  "OBJECT_FIT",
  // "OPACITY", // DONE
  // "OVERFLOW", // DONE
  // "PADDING", // DONE
  "POSITION",
  // "SHADOW", // DONE
  // "TRANSFORM", //DONE
  // "ROTATE", //DONE
  // "TEXT", // DONE*
  "VERTICAL_ALIGN",
  // "VISIBILITY", // DONE
  "WIDTH", // DONE*
  "Z_INDEX",

  "AUTH",
  "BUSINESS_ENTITY",
  "DATA_DISPLAY",
  "DATA_TABLE",
  "FRAMEWORK",
  "ICON",
  "LAYOUT",
  ,
  "MENU",
  "NAVIGATION",
  "POPOVER",
  "RX",
  "SC_APP_DIV",
  "TABLE",
  "UTILS",
  "WIDGET",
];
const CLASS_NAME_FOR_SCREEN_SIZES = ["SM", "MD", "LG", "XL", "XXL"];

/**
 * This component will render guided code sample for style utilities
 *
 * @returns Node Element
 */
export default function Styles() {
  const contentRef = React.useRef(null);
  return (
    <>
      <CoreLayoutItem id={BlankLayout.PLACEHOLDER.CONTENT}>
        <CoreGrid styleClasses={[CoreClasses.BG.BG_GREY_100,CoreClasses.PADDING.PX1]}>
          <CoreBox
            gridProps={{ gridSize: { xs: 12,sm: 12, md: 10 } }}
            ref={contentRef}
          >
            <CoreH4
              styleClasses={[
                CoreClasses.MARGIN.MY2,
                CoreClasses.COLOR.TEXT_PRIMARY,
              ]}
            >
              Style Utilities
            </CoreH4>

            <CoreTypographyBody1>
              These are style utilities built using bootstrap flavour.
            </CoreTypographyBody1>
            <CoreDivider />
            {/* {renderStyleSamples({ classes: UtilityClasses })} */}
            {renderStyleSamples({ classes: CoreClasses })}
          </CoreBox>

          <CoreBox
            gridProps={{ gridSize: 2 }}
            styleClasses={[
              CoreClasses.DISPLAY.NONE,
              CoreClasses.DISPLAY.MD.GRID,
              CoreClasses.POSITION.TOP_0,
              CoreClasses.POSITION.POSITION_STICKY,
              CoreClasses.OVERFLOW.OVERFLOW_Y_SCROLL,
              CoreClasses.HEIGHT.VH_100,
              CoreClasses.BORDER.BORDER,
              CoreClasses.BORDER.BORDER_LEFT,
              CoreClasses.BORDER.BORDER_PRIMARY_LIGHT,
            ]}
          >
            <CoreH6
              styleClasses={[
                CoreClasses.MARGIN.MT2,
                CoreClasses.COLOR.TEXT_PRIMARY,
                CoreClasses.MARGIN.ML5,
              ]}
            >
              Table Of Contents
            </CoreH6>
            <CoreDivider />
            <CoreBox>
              <CoreTOC contentRef={contentRef} headerComponents={[CoreH5]} />
            </CoreBox>
          </CoreBox>
        </CoreGrid>
      </CoreLayoutItem>
    </>
  );
}

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
            title={codeSampleData?.title || className.replace("_", " ")}
            description={codeSampleData.description}
            renderElement={codeSampleData?.renderElement(
              key,
              classes,
              className
            )}
            code={codeSampleData.code(classGroupName, className)}
          />
        );
      } else if (isObject(classes[className])) {
        console.log("isObject true for className = " + className);
        if (CLASS_NAME_FOR_SCREEN_SIZES?.includes(className)) {
          console.log(
            "CLASS_NAME is FOR_SCREEN_SIZES for className = " + className
          );

          return (
            <CoreTypographyCaption
              key={key}
              component="p"
              styleClasses={[CoreClasses.COLOR.TEXT_WARNING_LIGHT]}
            >
              {className} : Size specific documentation not available as of now
            </CoreTypographyCaption>
          );
        } else {
          console.log("calling recursive for className = " + className);
          return codeSampleData.grouped ? (
            <CodeSample
              key={key}
              title={codeSampleData?.title || className.replace("_", " ")}
              description={codeSampleData.description}
              renderElement={
                <CoreGrid id="parent-style-sample">
                  {renderStyleSamples({
                    classGroupName: className,
                    classes: classes[className],
                    key: key,
                  })}
                </CoreGrid>
              }
            />
          ) : (
            renderStyleSamples({
              classGroupName: className,
              classes: classes[className],
            })
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

  Object.keys(CLASS_SPECIFIC_SAMPLE_COMPONENT).forEach(
    (sampleClassName, index) => {
      if (
        sampleClassName !== classGroupName &&
        sampleClassName?.startsWith(classGroupName)
      ) {
        let sampleClassNameMinusGroupName = sampleClassName.slice(
          classGroupName?.length
        );
        if (sampleClassNameMinusGroupName?.startsWith("__STARTS_WITH__")) {
          let sampleClassNameToMatch =
            sampleClassNameMinusGroupName.split("__STARTS_WITH__")[1];

          if (className.startsWith(sampleClassNameToMatch)) {
            startsWithSampleComponent =
              CLASS_SPECIFIC_SAMPLE_COMPONENT[sampleClassName];
          }
        } else if (sampleClassNameMinusGroupName?.startsWith("__ENDS_WITH__")) {
          let sampleClassNameToMatch =
            sampleClassNameMinusGroupName.split("__ENDS_WITH__")[1];

          if (className.endsWith(sampleClassNameToMatch)) {
            startsWithSampleComponent =
              CLASS_SPECIFIC_SAMPLE_COMPONENT[sampleClassName];
          }
        } else if (sampleClassNameMinusGroupName?.startsWith("__INCLUDES__")) {
          let sampleClassNameToMatch =
            sampleClassNameMinusGroupName.split("__INCLUDES__")[1];

          if (className.includes(sampleClassNameToMatch)) {
            startsWithSampleComponent =
              CLASS_SPECIFIC_SAMPLE_COMPONENT[sampleClassName];
          }
        }
      }
    }
  );

  codeSampleData = { ...codeSampleData, ...startsWithSampleComponent };

  return codeSampleData;
};

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
