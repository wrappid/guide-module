/* eslint-disable no-console */
import {
  CoreH4,
  CoreH5,
  CoreH6,
  CoreTypographyBody1,
  CoreTypographyBody2,
  CoreBox,
  CoreGrid,
  CoreDivider,
  CoreClasses,
} from "@wrappid/core";
import CodeSample from "./CodeSample";

const CLASS_NAME_TO_EXCLUDE = [
  // "DEV_BORDER",
  "ALIGNMENT",
  // "BG",
  "BORDER",
  // "COLOR",
  "DISPLAY",
  "FLEX",
  "FLOAT",
  "INTERACTIONS",
  "OBJECT_FIT",
  "OPACITY",
  "OVERFLOW",
  "POSITION",
  "SHADOW",
  "WIDTH",
  "HEIGHT",
  "PADDING",
  "MARGIN",
  "GAP",
  "TEXT",
  "VERTICAL_ALIGN",
  "VISIBILITY",
  "Z_INDEX",
];
const CLASS_NAME_FOR_SCREEN_SIZES = ["SM", "MD", "LG", "XL", "XXL"];

export default function StyleSample(props) {
  const { classes, classGroupName, className } = props;
  console.log("##### Start of <StyleSample /> with below arg:");
  console.log(classes);
  console.log("classGroupName = " + classGroupName);
  console.log("className = " + className);
  let key = (classGroupName ? classGroupName + "-" : "") + (className ? "" + className : "group");
  console.log("key = " + key);

  let codeSampleData = DEFAULT_SAMPLE_COMPONENT;

  Object.keys(classes).map((className, index) => {
    console.log("index = " + index + ", className = " + className);
    if (CLASS_NAME_TO_EXCLUDE?.includes(className)) {
      console.log("Excluding className = " + className);
    } else {
      console.log("Handling className = " + className);

      codeSampleData = CLASS_SPECIFIC_SAMPLE_COMPONENT[className]
        ? CLASS_SPECIFIC_SAMPLE_COMPONENT[className]
        : CLASS_SPECIFIC_SAMPLE_COMPONENT[classGroupName]
        ? CLASS_SPECIFIC_SAMPLE_COMPONENT[classGroupName]
        : DEFAULT_SAMPLE_COMPONENT;

      if (isString(classes[className])) {
        console.log("isString true for className = " + className);
        return codeSampleData.grouped ? (
          codeSampleData.renderElement(classes, className)
        ) : (
          <CodeSample
            key={key}
            title={className}
            description={codeSampleData.description}
            code={"NOT YET CODED!!!"}
            renderElement={codeSampleData.renderElement(classes, className)}
          />
        );
      } else if (isObject(classes[className])) {
        console.log("isObject true for className = " + className);
        if (CLASS_NAME_FOR_SCREEN_SIZES?.includes(className)) {
          console.log("CLASS_NAME is FOR_SCREEN_SIZES for className = " + className);

          return (
            <CoreTypographyBody1 styleClasses={[CoreClasses.COLOR.TEXT_WARNING_LIGHT]}>
              {className} : Size specific documantation not available as of now
            </CoreTypographyBody1>
          );
        } else {
          console.log("calling recursive for className = " + className);
          // if (codeSampleData?.grouped) {
          //   console.log("grouped");
          // } else {
          //   console.log("ungrouped");
          //   return <StyleSample classes={classes[className]} classGroupName={className} />;
          // }
          return codeSampleData.grouped ? (
            // <CoreTypographyBody1 styleClasses={[CoreClasses.COLOR.TEXT_INFO]}>
            //   {className} : grouped recursive call
            // </CoreTypographyBody1>
            <CodeSample
              key={key}
              title={className}
              description={codeSampleData.description}
              code={"NOT YET CODED!!!"}
              renderElement={
                <CoreGrid>
                  <StyleSample classes={classes[className]} classGroupName={className} />
                </CoreGrid>
              }
            />
          ) : (
            // <CoreTypographyBody1 styleClasses={[CoreClasses.COLOR.TEXT_ERROR]}>
            //   {className} : ungrouped recursive call
            // </CoreTypographyBody1>

            <StyleSample classes={classes[className]} classGroupName={className} />
          );
        }
      } else {
        //is not object
        console.warn("Unknown type for " + className);
      }
    }
  });
  {
    /* </CoreBox> */
  }
}

function isObject(obj) {
  return obj !== undefined && obj !== null && obj.constructor == Object;
}

function isString(obj) {
  return obj !== undefined && obj !== null && obj.constructor == String;
}

const DEFAULT_SAMPLE_COMPONENT = {
  description: "",
  grouped: false,
  renderElement: (classes, className) => {
    return (
      <CoreBox
        // key={`${className}-${index}`}
        // gridProps={{ gridSize: 4 }}
        styleClasses={[classes[className], CoreClasses.PADDING.P2, CoreClasses.MARGIN.MB1]}
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
    renderElement: (classes, className) => {
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
          {`Background utilities do not set color, so in some cases you’ll want to use CoreClasses.COLOR.TEXT_<contextual-class>`}
        </CoreTypographyBody2>
      </>
    ),
    grouped: true,
    renderElement: (classes, className) => {
      return (
        <CoreBox
          gridProps={{ gridSize: 4 }}
          styleClasses={[
            classes[className],
            CoreClasses.BORDER.BORDER,
            CoreClasses.MARGIN.MB1,
            CoreClasses.PADDING.P2,
            CoreClasses.TEXT.TEXT_CENTER,
            // CoreClasses.WIDTH.MIN_W_75,
          ]}
        >
          {className}
        </CoreBox>
      );
    },
  },
  BORDER: {
    description: "",
    grouped: true,
    renderElement: (classes, className) => {
      return (
        <CoreBox
          // key={`borderClass-${index}`}
          gridProps={{ gridSize: 3 }}
          styleClasses={[
            CoreClasses.BORDER.BORDER,
            CoreClasses.BORDER.BORDER_2,
            classes[className],
            CoreClasses.PADDING.P2,
            CoreClasses.MARGIN.MB1,
          ]}
        >
          {className}
        </CoreBox>
      );
    },
  },
  SHADOW: {
    description: "",
    grouped: true,
    renderElement: (classes, className) => {
      return (
        <CoreBox
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
  PADDING: {
    description: "",
    grouped: true,
    renderElement: (classes, className) => {
      return (
        <CoreBox
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
  MARGIN: {
    description: "",
    grouped: true,
    renderElement: (classes, className) => {
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
};
