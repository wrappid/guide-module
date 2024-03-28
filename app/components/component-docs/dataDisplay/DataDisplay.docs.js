/* eslint-disable react/no-unescaped-entities */
import {
  CoreBox, CoreClasses, CoreH4, CoreH5, CoreSpan, CoreTypographyBody1 
} from "@wrappid/core";

const wrappidTypes = [
  {
    description: "This library provides a collection of pre-built, reusable components that cover common UI elements like buttons, forms, navigation bars, and more. These components are designed to streamline development and ensure a consistent look and feel across your web and mobile applications.",
    title      : "CoreComponents"
  },
  {
    description: " While CoreComponents offer a solid foundation, Wrappid empowers you to create your own custom components to address specific functionalities or UI requirements within your application. This flexibility allows you to tailor the components to your unique needs.",
    title      : "Custom Components"
  }
];

const benefitsofWrappid = [
  {
    description: "Pre-built CoreComponents eliminate the need to write code for common UI elements from scratch. This saves development time and allows you to focus on the core functionalities of your application.",
    title      : "Faster Development"
  },
  {
    description: "Both CoreComponents and custom components can be reused throughout your application, reducing code duplication and promoting maintainability.",
    title      : "Code Reusability"
  },
  {
    description: "CoreComponents ensure a consistent visual style across your application, leading to a more polished and user-friendly experience.",
    title      : "Consistent UI"
  },
  {
    description: "Components promote a modular design approach, making your application easier to understand, maintain, and scale.",
    title      : "Modular Design"
  }
];

const wrappidComponentsInfo = [
  {
    description: "You can import pre-built CoreComponents and custom components into your development environment for use within your application.",
    title      : "Importing Components"
  },
  {
    description: "CoreComponents often come with built-in customization options through props (properties you pass to the component). You can further customize them with CSS to achieve the desired look and feel.",
    title      : "Customizing Components"
  },
  {
    description: "Components can be nested within each other to create more complex UI structures.",
    title      : "Composing Components"
  }
];

export default function DataDisplayDocs() {
  return (
    <>
      <CoreBox styleClasses={[
        CoreClasses.DISPLAY.FLEX,
        CoreClasses.FLEX.DIRECTION_COLUMN,
        CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_START,
        CoreClasses.ALIGNMENT.ALIGN_ITEMS_START,
        CoreClasses.PADDING.PY2,
        CoreClasses.GAP.GAP_2
      ]}>
        <CoreBox styleClasses={[
          CoreClasses.DISPLAY.FLEX,
          CoreClasses.FLEX.DIRECTION_COLUMN,
          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_START,
          CoreClasses.ALIGNMENT.ALIGN_ITEMS_START,
          CoreClasses.GAP.GAP_2
        ]}>
          <CoreH4>Wrappid Components - Overview</CoreH4>

          <CoreH5>Building Blocks for Rapid Development</CoreH5>

          <CoreTypographyBody1>Wrappid Framework embraces the concept of components to expedite application development.</CoreTypographyBody1>
        </CoreBox>

        <CoreBox styleClasses={[
          CoreClasses.DISPLAY.FLEX,
          CoreClasses.FLEX.DIRECTION_COLUMN,
          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_START,
          CoreClasses.ALIGNMENT.ALIGN_ITEMS_START,
          CoreClasses.GAP.GAP_2
        ]}>
          <CoreH5>Introduction</CoreH5>

          <CoreTypographyBody1>Wrappid Framework is a software development framework aimed at accelerating application development.</CoreTypographyBody1>

          <CoreTypographyBody1>Wrappid Framework embraces the concept of components to expedite application development. Here's a breakdown of Wrappid components and their role within the framework.</CoreTypographyBody1>

          <CoreH5>Types of Wrappid Components:</CoreH5>

          {wrappidTypes.map((item, index) => {
            return (
              <CoreTypographyBody1 key={index}>
                <CoreSpan styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_BOLDER]}>
                  {index + 1}. &nbsp;

                  {item.title}:&nbsp;
                </CoreSpan>

                {item.description}
              </CoreTypographyBody1>
            
            );
          })}

        </CoreBox>

        <CoreBox styleClasses={[
          CoreClasses.DISPLAY.FLEX,
          CoreClasses.FLEX.DIRECTION_COLUMN,
          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_START,
          CoreClasses.ALIGNMENT.ALIGN_ITEMS_START,
          CoreClasses.GAP.GAP_2
        ]}>
          <CoreH5>Advantages of Wrappid</CoreH5>

          {benefitsofWrappid.map((item, index) => {
            return (
              <CoreTypographyBody1 key={index}>
                <CoreSpan styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_BOLDER]}>
                  {index + 1}.&nbsp;

                  {item.title}:&nbsp;
                </CoreSpan>

                {item.description}
              </CoreTypographyBody1>
            
            );
          })}

        </CoreBox>

        <CoreBox styleClasses={[
          CoreClasses.DISPLAY.FLEX,
          CoreClasses.FLEX.DIRECTION_COLUMN,
          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_START,
          CoreClasses.ALIGNMENT.ALIGN_ITEMS_START,
          CoreClasses.GAP.GAP_2
        ]}>
          <CoreH5>Working with Wrappid Components:</CoreH5>

          {wrappidComponentsInfo.map((item, index) => {
            return (
              <CoreTypographyBody1 key={index}>
                <CoreSpan styleClasses={[CoreClasses.TEXT.TEXT_WEIGHT_BOLDER]}>
                  {index + 1}.&nbsp; 

                  {item.title}:&nbsp;
                </CoreSpan>

                {item.description}
              </CoreTypographyBody1>
            
            );
          })}

        </CoreBox>
      </CoreBox>
    </>
  );
}