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
} from "@wrappid/core";
import { UtilityClasses } from "@wrappid/styles";

import CodeSample from "../CodeSample";

import {
  DEFAULT_SAMPLE_COMPONENT,
  CLASS_SPECIFIC_SAMPLE_COMPONENT,
} from "./StyleUtilitiesSamples";

const CLASS_NAME_TO_EXCLUDE = [
  // "DEV_BORDER", // DONE
  "ALIGNMENT",
  // "BG", // DONE
  // "BORDER", // DONE
  // "COLOR",
  // "CURSOR", // DONE
  // "DISPLAY", // DONE
  // "FLEX",
  "FLOAT",
  "GAP",
  // "HEIGHT", //DONE*
  // "INTERACTIONS", //DONE
  // "MARGIN", // DONE
  "OBJECT_FIT",
  // "OPACITY", // DONE
  // "OVERFLOW", // DONE
  "PADDING", // DONE
  "POSITION",
  // "SHADOW", // DONE
  // "TEXT", // DONE*
  "VERTICAL_ALIGN",
  // "VISIBILITY", // DONE
  // "WIDTH", // DONE*
  "Z_INDEX",
];
const CLASS_NAME_FOR_SCREEN_SIZES = ["SM", "MD", "LG", "XL", "XXL"];

/**
 * This component will render guided code sample for style utilities
 *
 * @returns Node Element
 */
export default function StyleUtilities() {
  const contentRef = React.useRef(null);
  const testH4Ref = React.useRef(null);
  console.log("this is test cosole", contentRef);
  return (
    <CoreGrid styleClasses={[CoreClasses.BG.BG_WHITE]}>
      <CoreBox gridProps={{ gridSize: 9 }} ref={contentRef}>
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

        {renderStyleSamples({ classes: UtilityClasses })}
      </CoreBox>

      <CoreBox
        styleClasses={CoreClasses.POSITION.POSITION_FIXED}
        gridProps={{ gridSize: 3 }}
      >
        <CoreTypographyBody1>Table Of Contents</CoreTypographyBody1>
        <CoreTOC contentRef={contentRef} />
      </CoreBox>
    </CoreGrid>
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
            title={className}
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
              {className} : Size specific documantation not available as of now
            </CoreTypographyCaption>
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
