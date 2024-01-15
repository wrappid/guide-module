/* eslint-disable */
import {
  CoreAlert,
  CoreBox,
  CoreClasses,
  CoreH3,
  CoreH6,
  CoreList,
  CoreListItem,
  CoreTypographyBody1,
  CoreTypographyBody2,
  CoreTypographyCaption,
} from "@wrappid/core";

export const DEFAULT_SAMPLE_COMPONENT = {
  code: (classGroupName, className) => {
    return `<AnyComponent styleClasses={[CoreClasses${
      classGroupName ? "." + classGroupName : ""
    }${className ? "." + className : ""}]}></AnyComponent>`;
  },
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
};

export const CLASS_SPECIFIC_SAMPLE_COMPONENT = {
  DEV_BORDER: {
    description: (
      <>
        <CoreTypographyBody1>
          Sets the border of all elements when the wrappid app is started in DEV
          env. This border could be used during development to understand
          boundary of all rendered elements.
        </CoreTypographyBody1>

        <CoreTypographyBody2>
          Note: This border renders in different color in different screen
          sizes.
        </CoreTypographyBody2>
      </>
    ),
  },
  ALIGNMENT: {
    description: (
      <>
        <CoreAlert severity="error">
          {"ALIGN_CONTENT are NOT WORKING as of now"}
        </CoreAlert>
        <CoreAlert severity="warning">
          {"Size specific documantation not available as of now"}
        </CoreAlert>
        <CoreTypographyBody1>
          Used to align contentents accordingly
        </CoreTypographyBody1>
      </>
    ),
    grouped: true,
    renderElement: (key, classes, className) => {
      return (
        <CoreBox
          key={key}
          gridProps={{ gridSize: 4 }}
          styleClasses={[
            CoreClasses.DISPLAY.FLEX,
            CoreClasses.FLEX.DIRECTION_COLUMN,
          ]}
        >
          <CoreBox
            height={64}
            styleClasses={[
              classes[className],
              CoreClasses.BORDER.BORDER,
              CoreClasses.BORDER.BORDER_2,
              CoreClasses.BORDER.BORDER_WARNING_LIGHT,
            ]}
          >
            <CoreTypographyCaption
              styleClasses={[
                CoreClasses.BORDER.BORDER,
                CoreClasses.BORDER.BORDER_2,
                CoreClasses.BORDER.BORDER_INFO,
                CoreClasses.PADDING.P1,
              ]}
            >
              ITEM
            </CoreTypographyCaption>
            <CoreTypographyCaption
              styleClasses={[
                CoreClasses.BORDER.BORDER,
                CoreClasses.BORDER.BORDER_2,
                CoreClasses.BORDER.BORDER_INFO,
                CoreClasses.PADDING.P1,
              ]}
            >
              ITEM
            </CoreTypographyCaption>
          </CoreBox>
          <CoreTypographyCaption styleClasses={[CoreClasses.TEXT.TEXT_CENTER]}>
            {className}
          </CoreTypographyCaption>
        </CoreBox>
      );
    },
  },
  ALIGNMENT__STARTS_WITH__ALIGN_CONTENT: {
    description: "specific desc",
    grouped: true,
    renderElement: (key, classes, className) => {
      return (
        <CoreBox
          key={key}
          gridProps={{ gridSize: 4 }}
          styleClasses={[
            CoreClasses.DISPLAY.FLEX,
            CoreClasses.FLEX.DIRECTION_COLUMN,
          ]}
        >
          <CoreBox
            styleClasses={[
              classes[className],
              CoreClasses.BORDER.BORDER,
              CoreClasses.BORDER.BORDER_2,
              CoreClasses.BORDER.BORDER_WARNING_LIGHT,
            ]}
          >
            <CoreTypographyCaption
              height={20}
              styleClasses={[
                CoreClasses.BORDER.BORDER,
                CoreClasses.BORDER.BORDER_2,
                CoreClasses.BORDER.BORDER_INFO,
                CoreClasses.PADDING.P1,
              ]}
            >
              CONTENT
            </CoreTypographyCaption>
            <CoreTypographyCaption
              height={40}
              styleClasses={[
                CoreClasses.BORDER.BORDER,
                CoreClasses.BORDER.BORDER_2,
                CoreClasses.BORDER.BORDER_INFO,
                CoreClasses.PADDING.P1,
              ]}
            >
              CONTENT Lorem Ipsum has been the industry's
            </CoreTypographyCaption>
            <CoreTypographyCaption
              height={30}
              styleClasses={[
                CoreClasses.BORDER.BORDER,
                CoreClasses.BORDER.BORDER_2,
                CoreClasses.BORDER.BORDER_INFO,
                CoreClasses.PADDING.P1,
              ]}
            >
              CONTENT
            </CoreTypographyCaption>
            <CoreTypographyCaption
              height={10}
              styleClasses={[
                CoreClasses.BORDER.BORDER,
                CoreClasses.BORDER.BORDER_2,
                CoreClasses.BORDER.BORDER_INFO,
                CoreClasses.PADDING.P1,
              ]}
            >
              CONTENT
            </CoreTypographyCaption>
          </CoreBox>
          <CoreTypographyCaption styleClasses={[CoreClasses.TEXT.TEXT_CENTER]}>
            {className}
          </CoreTypographyCaption>
        </CoreBox>
      );
    },
  },
  ALIGNMENT__STARTS_WITH__ALIGN_SELF: {
    description: "specific desc",
    grouped: true,
    renderElement: (key, classes, className) => {
      return (
        <CoreBox
          key={key}
          gridProps={{ gridSize: 4 }}
          styleClasses={[
            CoreClasses.DISPLAY.FLEX,
            CoreClasses.FLEX.DIRECTION_COLUMN,
          ]}
        >
          <CoreBox
            height={64}
            styleClasses={[
              CoreClasses.DISPLAY.FLEX,
              CoreClasses.FLEX.DIRECTION_ROW,
              CoreClasses.BORDER.BORDER,
              CoreClasses.BORDER.BORDER_2,
              CoreClasses.BORDER.BORDER_WARNING_LIGHT,
            ]}
          >
            <CoreTypographyCaption
              styleClasses={[
                classes[className],
                CoreClasses.BORDER.BORDER,
                CoreClasses.BORDER.BORDER_2,
                CoreClasses.BORDER.BORDER_INFO,
                CoreClasses.PADDING.P1,
              ]}
            >
              SELF CONTENT
            </CoreTypographyCaption>
            <CoreTypographyCaption
              styleClasses={[
                classes[className],
                CoreClasses.BORDER.BORDER,
                CoreClasses.BORDER.BORDER_2,
                CoreClasses.BORDER.BORDER_INFO,
                CoreClasses.PADDING.P1,
              ]}
            >
              ITEM
            </CoreTypographyCaption>
          </CoreBox>
          <CoreTypographyCaption styleClasses={[CoreClasses.TEXT.TEXT_CENTER]}>
            {className}
          </CoreTypographyCaption>
        </CoreBox>
      );
    },
  },
  BG: {
    title: "BACKGROUND",
    description: (
      <>
        <CoreAlert severity="error">
          {"Text colour not changing by default"}
        </CoreAlert>
        <CoreTypographyBody1>
          Sets the background of an element to any contextual class.
        </CoreTypographyBody1>

        <CoreTypographyBody2>
          {
            "Background utilities set color to contrastText by default, so in some cases you’ll want to use CoreClasses.COLOR.TEXT_<contextual-class>"
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
            CoreClasses.BORDER.BORDER_2,
            CoreClasses.BORDER.BORDER_WARNING_LIGHT,
            CoreClasses.PADDING.P1,
            CoreClasses.TEXT.TEXT_CENTER,
          ]}
        >
          <CoreTypographyCaption>{className}</CoreTypographyCaption>
        </CoreBox>
      );
    },
  },
  BORDER: {
    description: (
      <>
        <CoreTypographyBody1>
          Use border utilities to add or remove an element’s borders. Choose
          from all borders or one at a time.
        </CoreTypographyBody1>

        <CoreTypographyBody2>
          Note: In some of the examples the border-width is forcefully given
          2px, so that examples are easily visible.
        </CoreTypographyBody2>
      </>
    ),
    grouped: true,
    renderElement: (key, classes, className) => {
      return (
        <CoreBox gridProps={{ gridSize: 3 }}>
          <CoreBox
            key={key}
            height={56}
            styleClasses={[
              CoreClasses.BORDER.BORDER,
              classes[className],
              CoreClasses.BORDER.BORDER_2,
              CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
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
  BORDER__STARTS_WITH__BORDER_STYLE: {
    renderElement: (key, classes, className) => {
      return (
        <CoreBox gridProps={{ gridSize: 3 }}>
          <CoreBox
            key={key}
            height={56}
            styleClasses={[
              classes[className],
              CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
              CoreClasses.PADDING.P1,
              // CoreClasses.BORDER.BORDER,
              // CoreClasses.BORDER.BORDER_2,
            ]}
          >
            <CoreTypographyCaption>144x56</CoreTypographyCaption>
          </CoreBox>
          <CoreTypographyCaption>{className}</CoreTypographyCaption>
        </CoreBox>
      );
    },
  },
  BORDER__ENDS_WITH___PILL: {
    renderElement: (key, classes, className) => {
      return (
        <CoreBox
          key={key}
          gridProps={{ gridSize: 3 }}
          styleClasses={[
            CoreClasses.FLEX.DIRECTION_COLUMN,
            CoreClasses.FLEX.FLEX_WRAP_WRAP,
            CoreClasses.ALIGNMENT.ALIGN_CONTENT_CENTER,
            CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
            CoreClasses.PADDING.P1,
          ]}
        >
          <CoreBox
            height={56}
            styleClasses={[
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
  COLOR: {
    description: (
      <>
        <CoreTypographyBody1>
          Colorize text with text color utilities.
        </CoreTypographyBody1>
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
          <CoreTypographyCaption styleClasses={[classes[className]]}>
            {className}
          </CoreTypographyCaption>
        </CoreBox>
      );
    },
  },
  COLOR__STARTS_WITH__TEXT_WHITE: {
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
          <CoreTypographyCaption styleClasses={[classes[className]]}>
            {className}
          </CoreTypographyCaption>
        </CoreBox>
      );
    },
  },
  CURSOR: {
    description: "Small utility that sets cursor when element is hovered",
    grouped: true,
    renderElement: (key, classes, className) => {
      return (
        <CoreBox
          key={key}
          gridProps={{ gridSize: 3 }}
          styleClasses={[
            classes[className],
            CoreClasses.BORDER.BORDER,
            CoreClasses.BORDER.BORDER_2,
            CoreClasses.BORDER.BORDER_WARNING_LIGHT,
            CoreClasses.PADDING.P1,
            CoreClasses.TEXT.TEXT_CENTER,
          ]}
        >
          <CoreTypographyCaption>{className}</CoreTypographyCaption>
        </CoreBox>
      );
    },
  },
  DISPLAY: {
    description: (
      <>
        <CoreAlert severity="warning">
          {"Size specific documantation not available as of now"}
        </CoreAlert>
        <CoreTypographyBody1>
          Quickly and responsively toggle the display value of components and
          more with our display utilities. Includes support for some of the more
          common values, as well as some extras for controlling display when
          printing.
        </CoreTypographyBody1>

        <CoreTypographyBody2>
          {
            "Width utilitiy includes support for 25%, 50%, 75%, and 100% by default. Modify those values as you need to generate different utilities here."
          }
        </CoreTypographyBody2>
      </>
    ),
    grouped: true,
    renderElement: (key, classes, className) => {
      return (
        <CoreBox key={key} gridProps={{ gridSize: 4 }} styleClasses={[]}>
          <CoreBox
            styleClasses={[
              CoreClasses.BORDER.BORDER,
              CoreClasses.BORDER.BORDER_2,
              CoreClasses.BORDER.BORDER_WARNING_LIGHT,
              CoreClasses.PADDING.P1,
              CoreClasses.TEXT.TEXT_CENTER,
            ]}
          >
            <CoreBox
              styleClasses={[
                classes[className],
                CoreClasses.BORDER.BORDER,
                CoreClasses.BORDER.BORDER_2,
                CoreClasses.BORDER.BORDER_INFO,
                CoreClasses.PADDING.P1,
                CoreClasses.TEXT.TEXT_CENTER,
              ]}
            >
              <CoreTypographyCaption>Box 1</CoreTypographyCaption>
            </CoreBox>
            <CoreBox
              styleClasses={[
                classes[className],
                CoreClasses.BORDER.BORDER,
                CoreClasses.BORDER.BORDER_2,
                CoreClasses.BORDER.BORDER_INFO,
                CoreClasses.PADDING.P1,
                CoreClasses.TEXT.TEXT_CENTER,
              ]}
            >
              <CoreTypographyCaption>Box 2</CoreTypographyCaption>
            </CoreBox>
          </CoreBox>
          <CoreTypographyCaption>{className}</CoreTypographyCaption>
        </CoreBox>
      );
    },
  },
  FLEX: {
    description: (
      <>
        <CoreAlert severity="error">
          {"FLEX items documentation INCOMPLETE"}
        </CoreAlert>
        <CoreAlert severity="warning">
          {"Size specific documantation not available as of now"}
        </CoreAlert>
        <CoreTypographyBody1>
          Set the direction of flex items in a flex container with direction
          utilities. In most cases you can omit the horizontal class here as the
          browser default is row.
        </CoreTypographyBody1>
      </>
    ),
    grouped: true,
    renderElement: (key, classes, className) => {
      return (
        <CoreBox gridProps={{ gridSize: 6 }}>
          <CoreBox
            key={key}
            styleClasses={[
              classes[className],
              CoreClasses.DISPLAY.FLEX,
              CoreClasses.BORDER.BORDER,
              CoreClasses.BORDER.BORDER_2,
              CoreClasses.BORDER.BORDER_WARNING_LIGHT,
              CoreClasses.PADDING.P1,
              CoreClasses.TEXT.TEXT_CENTER,
            ]}
          >
            <CoreBox
              styleClasses={[
                CoreClasses.BORDER.BORDER,
                CoreClasses.BORDER.BORDER_2,
                CoreClasses.BORDER.BORDER_INFO,
                CoreClasses.PADDING.P1,
                CoreClasses.TEXT.TEXT_CENTER,
              ]}
            >
              <CoreTypographyCaption>BOX 1</CoreTypographyCaption>
            </CoreBox>
            <CoreBox
              styleClasses={[
                CoreClasses.BORDER.BORDER,
                CoreClasses.BORDER.BORDER_2,
                CoreClasses.BORDER.BORDER_INFO,
                CoreClasses.PADDING.P1,
                CoreClasses.TEXT.TEXT_CENTER,
              ]}
            >
              <CoreTypographyCaption>BOX 2</CoreTypographyCaption>
            </CoreBox>
          </CoreBox>
          <CoreTypographyCaption>{className}</CoreTypographyCaption>
        </CoreBox>
      );
    },
  },
  FLOAT: {
    description: (
      <>
        <CoreAlert severity="warning">
          {"Size specific documantation not available as of now"}
        </CoreAlert>
        <CoreTypographyBody1>
          These utility classes float an element to the left or right, or
          disable floating, based on the current viewport size.
        </CoreTypographyBody1>
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
  GAP: {
    description: (
      <>
        <CoreAlert severity="error">
          {"ROW_GAP NOT WORKING as of now"}
        </CoreAlert>
        <CoreAlert severity="warning">
          {"Size specific documantation not available as of now"}
        </CoreAlert>
        <CoreTypographyBody1>
          When using display: grid or display: flex, you can make use of gap
          utilities on the parent element. This can save on having to add margin
          utilities to individual children of a grid or flex container.{" "}
        </CoreTypographyBody1>
      </>
    ),
    grouped: true,
    renderElement: (key, classes, className) => {
      return (
        <CoreBox gridProps={{ gridSize: 3 }}>
          <CoreBox
            styleClasses={[
              classes[className],
              CoreClasses.DISPLAY.FLEX,
              CoreClasses.DISPLAY.FLEX_WRAP_WRAP,
              CoreClasses.BORDER.BORDER,
              CoreClasses.PADDING.P1,
              CoreClasses.TEXT.TEXT_CENTER,
            ]}
          >
            <CoreBox
              styleClasses={[
                CoreClasses.BORDER.BORDER,
                CoreClasses.TEXT.TEXT_CENTER,
              ]}
            >
              <CoreTypographyCaption>ITEM 1</CoreTypographyCaption>
            </CoreBox>
            <CoreBox
              styleClasses={[
                CoreClasses.BORDER.BORDER,
                CoreClasses.TEXT.TEXT_CENTER,
              ]}
            >
              <CoreTypographyCaption>ITEM 2</CoreTypographyCaption>
            </CoreBox>
            <CoreBox
              styleClasses={[
                CoreClasses.BORDER.BORDER,
                CoreClasses.TEXT.TEXT_CENTER,
              ]}
            >
              <CoreTypographyCaption>ITEM 3</CoreTypographyCaption>
            </CoreBox>
            <CoreBox
              styleClasses={[
                CoreClasses.BORDER.BORDER,
                CoreClasses.TEXT.TEXT_CENTER,
              ]}
            >
              <CoreTypographyCaption>ITEM 4</CoreTypographyCaption>
            </CoreBox>
          </CoreBox>
          <CoreTypographyCaption>{className}</CoreTypographyCaption>
        </CoreBox>
      );
    },
  },
  HEIGHT: {
    description: (
      <>
        <CoreAlert severity="error">
          {"VW HEIGHT is exceeding the parent box limit"}
        </CoreAlert>
        <CoreTypographyBody1>
          Easily make an element as tall (relative to its parent) with height
          utilitiy.
        </CoreTypographyBody1>

        <CoreTypographyBody2>
          {
            "height utilitiy includes support for 25%, 50%, 75%, and 100% by default. Modify those values as you need to generate different utilities here."
          }
        </CoreTypographyBody2>
      </>
    ),
    grouped: true,
    renderElement: (key, classes, className) => {
      return (
        <CoreBox gridProps={{ gridSize: 1 }} height={256}>
          <CoreBox
            key={key}
            // gridProps={{ gridSize: 3 }}
            styleClasses={[
              classes[className],
              CoreClasses.BORDER.BORDER,
              CoreClasses.BORDER.BORDER_2,
              CoreClasses.BORDER.BORDER_INFO,
              CoreClasses.PADDING.P1,
              CoreClasses.TEXT.TEXT_CENTER,
            ]}
          >
            <CoreTypographyCaption>{className}</CoreTypographyCaption>
          </CoreBox>
        </CoreBox>
      );
    },
  },
  INTERACTIONS: {
    description: (
      <>
        <CoreTypographyBody1>
          Utility classes that change how users interact with contents of a
          website.
        </CoreTypographyBody1>
      </>
    ),
    grouped: true,
    renderElement: (key, classes, className) => {
      return (
        <CoreBox>
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
            <CoreTypographyBody1>
              This paragraph will be entirely selected when clicked by the user.
            </CoreTypographyBody1>
          </CoreBox>
          <CoreTypographyCaption>{className}</CoreTypographyCaption>
        </CoreBox>
      );
    },
  },
  USER_SELECT: {
    description: (
      <>
        <CoreTypographyBody1>
          Change the way in which the content is selected when the user
          interacts with it.
        </CoreTypographyBody1>
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
            CoreClasses.BORDER.BORDER_2,
            CoreClasses.BORDER.BORDER_WARNING_LIGHT,
            CoreClasses.PADDING.P1,
            CoreClasses.TEXT.TEXT_CENTER,
          ]}
        >
          <CoreTypographyCaption>{className}</CoreTypographyCaption>
        </CoreBox>
      );
    },
  },
  POINTER_EVENT: {
    description: (
      <>
        <CoreTypographyBody1>
          Classes to prevent or add element interactions.
        </CoreTypographyBody1>
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
            CoreClasses.BORDER.BORDER_2,
            CoreClasses.BORDER.BORDER_WARNING_LIGHT,
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
    description: (
      <>
        <CoreAlert severity="error">
          {"Negative margin samples are NOT WORKING as of now"}
        </CoreAlert>
        <CoreAlert severity="warning">
          {"Size specific documantation not available as of now"}
        </CoreAlert>

        <CoreTypographyBody1>
          {
            "Assign margin values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties."
          }
        </CoreTypographyBody1>

        <CoreTypographyBody2>
          {
            "Note: Classes are built from multiples of DEFAULT_MARGIN having a value of 8px."
          }
        </CoreTypographyBody2>

        <CoreTypographyBody1>
          {
            "The classes are named using the format CoreClasses.MARGIN.M{sides}{size}"
          }

          <CoreList dense={true} marker="disc">
            {"Where sides is one of:"}

            <CoreListItem>
              {"T - (top) for classes that set margin-top"}
            </CoreListItem>

            <CoreListItem>
              {"B - (bottom) for classes that set margin-bottom"}
            </CoreListItem>

            <CoreListItem>
              {"L - (left) for classes that set margin-left"}
            </CoreListItem>

            <CoreListItem>
              {"R - (right) for classes that set margin-right"}
            </CoreListItem>

            <CoreListItem>
              {"X - for classes that set both margin-left and margin-right"}
            </CoreListItem>

            <CoreListItem>
              {"Y - for classes that set both margin-top and margin-bottom"}
            </CoreListItem>

            <CoreListItem>
              {
                "blank - for classes that set a margin on all 4 sides of the element"
              }
            </CoreListItem>
          </CoreList>

          <CoreList dense={true} marker="disc">
            {"Where size is one of:"}

            <CoreListItem>
              {"0 - for classes that eliminate the margin by setting it to 0"}
            </CoreListItem>

            <CoreListItem>
              {"1 - for classes that set the margin to DEFAULT_MARGIN"}
            </CoreListItem>

            <CoreListItem>
              {"2 - for classes that set the margin to DEFAULT_MARGIN * 2"}
            </CoreListItem>

            <CoreListItem>
              {"3 - for classes that set the margin to DEFAULT_MARGIN * 3"}
            </CoreListItem>

            <CoreListItem>
              {"4 - for classes that set the margin to DEFAULT_MARGIN * 4"}
            </CoreListItem>

            <CoreListItem>
              {"5 - for classes that set the margin to DEFAULT_MARGIN * 5"}
            </CoreListItem>

            <CoreListItem>
              {"AUTO - for classes that set the margin to auto"}
            </CoreListItem>
          </CoreList>
        </CoreTypographyBody1>
      </>
    ),
    grouped: true,
    renderElement: (key, classes, className) => {
      return (
        <CoreBox
          key={key}
          gridProps={{ gridSize: 2 }}
          styleClasses={[
            CoreClasses.BG.BG_WARNING_LIGHT,
            CoreClasses.BORDER.BORDER,
            CoreClasses.BORDER.BORDER_WARNING,
            CoreClasses.TEXT.TEXT_CENTER,
          ]}
        >
          <CoreTypographyCaption
            component="p"
            styleClasses={[CoreClasses.BG.BG_WHITE, classes[className]]}
          >
            {className}
          </CoreTypographyCaption>
        </CoreBox>
      );
    },
  },
  MARGIN__ENDS_WITH___AUTO: {
    renderElement: (key, classes, className) => {
      return (
        <CoreBox
          key={key}
          gridProps={{ gridSize: 12 }}
          styleClasses={[
            CoreClasses.BG.BG_WARNING_LIGHT,
            CoreClasses.BORDER.BORDER,
            CoreClasses.BORDER.BORDER_WARNING,
            CoreClasses.TEXT.TEXT_CENTER,
          ]}
        >
          <CoreTypographyCaption
            styleClasses={[CoreClasses.BG.BG_WHITE, classes[className]]}
          >
            {className}
          </CoreTypographyCaption>
        </CoreBox>
      );
    },
  },
  OBJECT_FIT: {
    description: (
      <>
        <CoreAlert severity="error">
          {"OBJECT_FIT documentaion INCOMPLETE as of now"}
        </CoreAlert>
        <CoreAlert severity="warning">
          {"Size specific documantation not available as of now"}
        </CoreAlert>
        <CoreTypographyBody1>
          Use the object fit utilities to modify how the content of a replaced
          element, such as an img or video, should be resized to fit its
          container.
        </CoreTypographyBody1>
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
  OPACITY: {
    description: (
      <>
        <CoreTypographyBody1>
          Sets the opacity level for an element. The opacity level describes the
          transparency level for an element, where OPACITY_0 is completely
          transparent, OPACITY_50 is 50% visible, and OPACITY_100 is not
          transparent at all.
        </CoreTypographyBody1>

        <CoreTypographyBody1>
          {"Set the opacity of an element using OPACITY_{value} utilities."}
        </CoreTypographyBody1>

        <CoreTypographyBody2>
          Note: The sequence consists of the integers from 0 to 100, inclusive,
          spaced at intervals of 5. In other words, the sequence comprises the
          multiples of 5 from 0 to 20 (i.e., 0, 5, 10, ..., 100).
        </CoreTypographyBody2>
      </>
    ),
    grouped: true,
    renderElement: (key, classes, className) => {
      return (
        <CoreBox gridProps={{ gridSize: 3 }}>
          <CoreBox
            key={key}
            height={24}
            styleClasses={[
              classes[className],
              CoreClasses.BG.BG_PRIMARY,
              CoreClasses.TEXT.TEXT_CENTER,
            ]}
          >
            <CoreTypographyCaption
              styleClasses={[CoreClasses.COLOR.TEXT_BLACK]}
            >
              Lorem ipsum dolor
            </CoreTypographyCaption>
          </CoreBox>
          <CoreTypographyCaption>{className}</CoreTypographyCaption>
        </CoreBox>
      );
    },
  },
  OVERFLOW: {
    description: (
      <>
        <CoreTypographyBody1>
          Use these shorthand utilities for quickly configuring how content
          overflows an element.
        </CoreTypographyBody1>
      </>
    ),
    grouped: true,
    renderElement: (key, classes, className) => {
      return (
        <CoreBox
          styleClasses={[
            CoreClasses.BORDER.BORDER,
            CoreClasses.BORDER.BORDER_2,
            CoreClasses.BORDER.BORDER_WARNING_LIGHT,
          ]}
          gridProps={{ gridSize: 3 }}
        >
          <CoreBox
            key={key}
            height={64}
            width={256}
            styleClasses={[
              classes[className],
              CoreClasses.BORDER.BORDER,
              CoreClasses.BORDER.BORDER_2,
              CoreClasses.BORDER.BORDER_PRIMARY_LIGHT,
              CoreClasses.MARGIN.M1,
            ]}
          >
            <CoreTypographyCaption
              styleClasses={[CoreClasses.TEXT.TEXT_NOWRAP]}
            >
              in ultricies quam, sollicitudin porttitor felis.
            </CoreTypographyCaption>
            <CoreTypographyCaption>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              in ultricies quam, sollicitudin porttitor felis. Donec non aliquet
            </CoreTypographyCaption>
          </CoreBox>
          <CoreBox styleClasses={[CoreClasses.PADDING.PT1]}>
            <CoreTypographyCaption>{className}</CoreTypographyCaption>
          </CoreBox>
        </CoreBox>
      );
    },
  },
  OVERFLOW__STARTS_WITH__OVERFLOW_X: {
    description: (
      <>
        <CoreAlert severity="error">
          {"Scroll-x is NOT WORKING as of now"}
        </CoreAlert>
        <CoreTypographyBody1>
          Use these shorthand utilities for quickly configuring how content
          overflows an element.
        </CoreTypographyBody1>
      </>
    ),
    grouped: true,
    renderElement: (key, classes, className) => {
      return (
        <CoreBox
          styleClasses={[
            CoreClasses.BORDER.BORDER,
            CoreClasses.BORDER.BORDER_2,
            CoreClasses.BORDER.BORDER_WARNING_LIGHT,
          ]}
          gridProps={{ gridSize: 3 }}
        >
          <CoreBox
            key={key}
            height={64}
            width={256}
            styleClasses={[
              classes[className],
              CoreClasses.BORDER.BORDER,
              CoreClasses.BORDER.BORDER_2,
              CoreClasses.BORDER.BORDER_PRIMARY_LIGHT,
              CoreClasses.MARGIN.M1,
              CoreClasses.TEXT.TEXT_NOWRAP,
            ]}
          >
            <CoreTypographyCaption styleClasses={[CoreClasses.PADDING.PT1]}>
              Lorem ipsum dolor sit amet, consectur adiping.
            </CoreTypographyCaption>
          </CoreBox>
          <CoreBox styleClasses={[CoreClasses.PADDING.PT1]}>
            <CoreTypographyCaption>{className}</CoreTypographyCaption>
          </CoreBox>
        </CoreBox>
      );
    },
  },
  OVERFLOW__STARTS_WITH__OVERFLOW_Y: {
    description: (
      <>
        <CoreAlert severity="error">
          {"Scroll-x is NOT WORKING as of now"}
        </CoreAlert>
        <CoreTypographyBody1>
          Use these shorthand utilities for quickly configuring how content
          overflows an element.
        </CoreTypographyBody1>
      </>
    ),
    grouped: true,
    renderElement: (key, classes, className) => {
      return (
        <CoreBox
          styleClasses={[
            CoreClasses.BORDER.BORDER,
            CoreClasses.BORDER.BORDER_2,
            CoreClasses.BORDER.BORDER_WARNING_LIGHT,
          ]}
          gridProps={{ gridSize: 3 }}
        >
          <CoreBox
            key={key}
            height={64}
            styleClasses={[
              classes[className],
              CoreClasses.BORDER.BORDER,
              CoreClasses.BORDER.BORDER_2,
              CoreClasses.BORDER.BORDER_PRIMARY_LIGHT,
              CoreClasses.MARGIN.M1,
            ]}
          >
            <CoreTypographyCaption styleClasses={[CoreClasses.PADDING.PT1]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus.consectetur adipiscing elit. Phasellus in ultricies
              quam, sollicitudin porttitor felis. Donec non aliquet
            </CoreTypographyCaption>
          </CoreBox>
          <CoreBox styleClasses={[CoreClasses.PADDING.PT1]}>
            <CoreTypographyCaption>{className}</CoreTypographyCaption>
          </CoreBox>
        </CoreBox>
      );
    },
  },
  PADDING: {
    description: (
      <>
        <CoreAlert severity="warning">
          {"Size specific documantation not available as of now"}
        </CoreAlert>
        <CoreTypographyBody1>
          {
            "Assign padding values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties."
          }
        </CoreTypographyBody1>

        <CoreTypographyBody2>
          {
            "Note: Classes are built from multiples of DEFAULT_PADDING having a value of 8px."
          }
        </CoreTypographyBody2>

        <CoreTypographyBody1>
          {
            "The classes are named using the format CoreClasses.PADDING.P{sides}{size}"
          }

          <CoreList dense={true} marker="disc">
            {"Where sides is one of:"}

            <CoreListItem>
              {"T - (top) for classes that set padding-top"}
            </CoreListItem>

            <CoreListItem>
              {"B - (bottom) for classes that set padding-bottom"}
            </CoreListItem>

            <CoreListItem>
              {"L - (left) for classes that set padding-left"}
            </CoreListItem>

            <CoreListItem>
              {"R - (right) for classes that set padding-right"}
            </CoreListItem>

            <CoreListItem>
              {"X - for classes that set both padding-left and padding-right"}
            </CoreListItem>

            <CoreListItem>
              {"Y - for classes that set both padding-top and padding-bottom"}
            </CoreListItem>

            <CoreListItem>
              {
                "blank - for classes that set a padding on all 4 sides of the element"
              }
            </CoreListItem>
          </CoreList>

          <CoreList dense={true} marker="disc">
            {"Where size is one of:"}

            <CoreListItem>
              {"0 - for classes that eliminate the padding by setting it to 0"}
            </CoreListItem>

            <CoreListItem>
              {"1 - for classes that set the padding to DEFAULT_PADDING"}
            </CoreListItem>

            <CoreListItem>
              {"2 - for classes that set the padding to DEFAULT_PADDING * 2"}
            </CoreListItem>

            <CoreListItem>
              {"3 - for classes that set the padding to DEFAULT_PADDING * 3"}
            </CoreListItem>

            <CoreListItem>
              {"4 - for classes that set the padding to DEFAULT_PADDING * 4"}
            </CoreListItem>

            <CoreListItem>
              {"5 - for classes that set the padding to DEFAULT_PADDING * 5"}
            </CoreListItem>
          </CoreList>
        </CoreTypographyBody1>
      </>
    ),
    grouped: true,
    renderElement: (key, classes, className) => {
      return (
        <CoreBox
          key={key}
          gridProps={{ gridSize: 2 }}
          styleClasses={[
            classes[className],
            CoreClasses.BG.BG_SUCCESS_LIGHT,
            CoreClasses.BORDER.BORDER,
            CoreClasses.BORDER.BORDER_SUCCESS,
            CoreClasses.TEXT.TEXT_CENTER,
          ]}
        >
          <CoreTypographyCaption
            component="p"
            styleClasses={[CoreClasses.BG.BG_WHITE, CoreClasses.MARGIN.M0]}
          >
            {className}
          </CoreTypographyCaption>
        </CoreBox>
      );
    },
  },
  SHADOW: {
    description: "Add or remove shadows to elements with box-shadow utilities.",
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
    description: (
      <>
        <CoreAlert severity="error">{"NO VARIATION in TEXT_WEIGHT"}</CoreAlert>
        <CoreTypographyBody1>
          Documentation and examples for common text utilities to control
          alignment, wrapping, weight, and more.
        </CoreTypographyBody1>

        <CoreH6>Text alignment</CoreH6>
        <CoreTypographyBody1>
          Easily realign text to components with text alignment classes. Use
          TEXT_START, TEXT_END, TEXT_CENTER or TEXT_JUSTIFY for respective
          alignments. Responsive classes are also available.
        </CoreTypographyBody1>

        <CoreH6>Font weight</CoreH6>
        <CoreTypographyBody1>
          {
            "Quickly change the font-weight of text with text weight classes. Use TEXT_WIGHT_<font-weight>, where <font-weight> values are LIGHTER = lighter, LIGHT = 300, NORMAL = 400, MEDIUM = 500, SEMIBOLD = 600, BOLD = 700 and BOLDER = bolder."
          }
        </CoreTypographyBody1>

        <CoreH6>Font style</CoreH6>
        <CoreTypographyBody1>
          Change the font-style of text with text style classes. Use
          TEXT_STYLE_ITALIC or TEXT_STYLE_NORMAL for respective font styles.
        </CoreTypographyBody1>

        <CoreH6>Text decoration</CoreH6>
        <CoreTypographyBody1>
          Decorate text in components with text decoration classes. Use
          TEXT_DECORATION_NONE, TEXT_DECORATION_UNDERLINE and
          TEXT_DECORATION_LINE_THROUGH to decorate.
        </CoreTypographyBody1>
      </>
    ),
    grouped: true,
    renderElement: (key, classes, className) => {
      return (
        <CoreBox
          key={key}
          gridProps={{ gridSize: 3 }}
          styleClasses={[
            CoreClasses.BORDER.BORDER,
            CoreClasses.BORDER.BORDER_2,
            CoreClasses.BORDER.BORDER_WARNING_LIGHT,
            CoreClasses.PADDING.P1,
            classes[className],
          ]}
        >
          <CoreTypographyCaption>
            {className}
            {
              " sample. Fusce mattis egestas risus, in euismod odio tincidunt in. Maecenas ut ultricies quam. Curabitur sit amet diam a magna rhoncus posuere quis eu sem. Donec nec convallis ipsum. Donec euismod, ex vel maximus tincidunt, lacus libero faucibus nulla, eu scelerisque nisi metus at mi. Phasellus luctus in magna id finibus."
            }
          </CoreTypographyCaption>
        </CoreBox>
      );
    },
  },
  TEXT__STARTS_WITH__TEXT_WEIGHT: {
    renderElement: (key, classes, className) => {
      return (
        <CoreBox
          key={key}
          gridProps={{ gridSize: 12 }}
          styleClasses={[
            CoreClasses.BORDER.BORDER,
            CoreClasses.BORDER.BORDER_2,
            CoreClasses.BORDER.BORDER_WARNING_LIGHT,
            CoreClasses.PADDING.P1,
          ]}
        >
          <CoreTypographyCaption styleClasses={[classes[className]]}>
            {className}
            {
              " sample. Fusce mattis egestas risus, in euismod odio tincidunt in."
            }
          </CoreTypographyCaption>
        </CoreBox>
      );
    },
  },
  TEXT__STARTS_WITH__TEXT_STYLE: {
    renderElement: (key, classes, className) => {
      return (
        <CoreBox
          key={key}
          gridProps={{ gridSize: 6 }}
          styleClasses={[
            CoreClasses.BORDER.BORDER,
            CoreClasses.BORDER.BORDER_2,
            CoreClasses.BORDER.BORDER_WARNING_LIGHT,
            CoreClasses.PADDING.P1,
          ]}
        >
          <CoreTypographyCaption styleClasses={[classes[className]]}>
            {className}
            {
              " sample. Fusce mattis egestas risus, in euismod odio tincidunt in."
            }
          </CoreTypographyCaption>
        </CoreBox>
      );
    },
  },
  TEXT__STARTS_WITH__TEXT_DECORATION: {
    renderElement: (key, classes, className) => {
      return (
        <CoreBox
          key={key}
          gridProps={{ gridSize: 4 }}
          styleClasses={[
            CoreClasses.BORDER.BORDER,
            CoreClasses.BORDER.BORDER_2,
            CoreClasses.BORDER.BORDER_WARNING_LIGHT,
            CoreClasses.PADDING.P1,
          ]}
        >
          <CoreTypographyCaption styleClasses={[classes[className]]}>
            {className}
            {
              " sample. Fusce mattis egestas risus, in euismod odio tincidunt in."
            }
          </CoreTypographyCaption>
        </CoreBox>
      );
    },
  },
  TEXT__STARTS_WITH__TEXT_TRANSFORM: {
    renderElement: (key, classes, className) => {
      return (
        <CoreBox
          key={key}
          gridProps={{ gridSize: 4 }}
          styleClasses={[
            CoreClasses.BORDER.BORDER,
            CoreClasses.BORDER.BORDER_2,
            CoreClasses.BORDER.BORDER_WARNING_LIGHT,
            CoreClasses.PADDING.P1,
          ]}
        >
          <CoreTypographyCaption styleClasses={[classes[className]]}>
            {className}
            {
              " sample. Fusce mattis egestas risus, in euismod odio tincidunt in."
            }
          </CoreTypographyCaption>
        </CoreBox>
      );
    },
  },
  TEXT__ENDS_WITH__WRAP: {
    renderElement: (key, classes, className) => {
      return (
        <CoreBox
          key={key}
          gridProps={{ gridSize: 6 }}
          styleClasses={[
            CoreClasses.BORDER.BORDER,
            CoreClasses.BORDER.BORDER_2,
            CoreClasses.BORDER.BORDER_WARNING_LIGHT,
            CoreClasses.PADDING.P1,
          ]}
        >
          <CoreTypographyCaption styleClasses={[classes[className]]}>
            {className}
            {
              " sample. Fusce mattis egestas risus, in euismod odio tincidunt in."
            }
          </CoreTypographyCaption>
        </CoreBox>
      );
    },
  },
  VERTICAL_ALIGN: {
    description: (
      <>
        <CoreAlert severity="error">
          {"VERTICAL_ALIGN documentation INCOMPLETE"}
        </CoreAlert>
        <CoreTypographyBody1>
          Easily change the vertical alignment of inline, inline-block,
          inline-table, and table cell elements.
        </CoreTypographyBody1>
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
  VISIBILITY: {
    description: (
      <>
        <CoreTypographyBody1>
          Control the visibility, without modifying the display, of elements
          with visibility utilities.
        </CoreTypographyBody1>
      </>
    ),
    grouped: true,
    renderElement: (key, classes, className) => {
      return (
        <CoreBox
          gridProps={{ gridSize: 6 }}
          styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}
        >
          <CoreBox
            key={key}
            styleClasses={[
              CoreClasses.BORDER.BORDER,
              CoreClasses.BORDER.BORDER_2,
              CoreClasses.BORDER.BORDER_WARNING_LIGHT,
              CoreClasses.PADDING.P1,
              CoreClasses.TEXT.TEXT_CENTER,
            ]}
          >
            <CoreBox
              key={key}
              styleClasses={[
                classes[className],
                CoreClasses.BG.BG_PRIMARY,
                CoreClasses.BORDER.BORDER,
                CoreClasses.BORDER.BORDER_2,
                CoreClasses.BORDER.BORDER_INFO,
                CoreClasses.PADDING.P1,
                CoreClasses.TEXT.TEXT_CENTER,
              ]}
            >
              <CoreTypographyCaption
                styleClasses={[CoreClasses.COLOR.TEXT_WHITE]}
              >
                I am the content of this box
              </CoreTypographyCaption>
            </CoreBox>
          </CoreBox>
          <CoreTypographyCaption>{className}</CoreTypographyCaption>
        </CoreBox>
      );
    },
  },
  WIDTH: {
    description: (
      <>
        <CoreAlert severity="error">
          {"VW width is exceeding the parent box limit"}
        </CoreAlert>
        <CoreTypographyBody1>
          Easily make an element as wide (relative to its parent) with width
          utilitiy.
        </CoreTypographyBody1>

        <CoreTypographyBody2>
          {
            "Width utilitiy includes support for 25%, 50%, 75%, and 100% by default. Modify those values as you need to generate different utilities here."
          }
        </CoreTypographyBody2>
      </>
    ),
    grouped: true,
    renderElement: (key, classes, className) => {
      return (
        <CoreBox
          key={key}
          gridProps={{ gridSize: 12 }}
          styleClasses={[
            classes[className],
            CoreClasses.BORDER.BORDER,
            CoreClasses.BORDER.BORDER_2,
            CoreClasses.BORDER.BORDER_INFO,
            CoreClasses.PADDING.P1,
            CoreClasses.TEXT.TEXT_CENTER,
          ]}
        >
          <CoreTypographyCaption>{className}</CoreTypographyCaption>
        </CoreBox>
      );
    },
  },
  Z_INDEX: {
    description: (
      <>
        <CoreAlert severity="error">
          {"Z_INDEX documentation INCOMPLETE"}
        </CoreAlert>
        <CoreTypographyBody1>
          Z_INDEX plays an important part in how our components overlay and
          interact with one another.
        </CoreTypographyBody1>
      </>
    ),
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
          ]}
        >
          <CoreBox
            styleClasses={[
              classes[className],
              CoreClasses.BORDER.BORDER,
              CoreClasses.PADDING.P1,
              CoreClasses.TEXT.TEXT_CENTER,
            ]}
          >
            <CoreTypographyCaption>BOX 1</CoreTypographyCaption>
          </CoreBox>
          <CoreBox
            styleClasses={[
              CoreClasses.BG.BG_SECONDARY_LIGHT,
              CoreClasses.BORDER.BORDER,
              CoreClasses.PADDING.P1,
              CoreClasses.TEXT.TEXT_CENTER,
            ]}
          >
            <CoreTypographyCaption>BOX 2</CoreTypographyCaption>
          </CoreBox>

          <CoreTypographyCaption>{className}</CoreTypographyCaption>
        </CoreBox>
      );
    },
  },
  POSITION: {
    description: (
      <>
        <CoreTypographyBody1>
          Z_INDEX plays an important part in how our components overlay and
          interact with one another.
        </CoreTypographyBody1>
      </>
    ),
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
          ]}
        >
          <CoreBox
            styleClasses={[
              classes[className],
              CoreClasses.BORDER.BORDER,
              CoreClasses.PADDING.P1,
              CoreClasses.TEXT.TEXT_CENTER,
            ]}
          >
            <CoreTypographyCaption>BOX 1</CoreTypographyCaption>
          </CoreBox>

          <CoreTypographyCaption>{className}</CoreTypographyCaption>
        </CoreBox>
      );
    },
  },

  //CoreClasses Components

  AUTH: {
    description: "",
    grouped: true,
    renderElement: (key, classes, className) => {
      return (
        <CoreBox
          key={key}
          gridProps={{ gridSize: 3 }}
          styleClasses={[
            classes[className],
            CoreClasses.BORDER.BORDER,
            CoreClasses.BORDER.BORDER_2,
            CoreClasses.BORDER.BORDER_WARNING_LIGHT,
            CoreClasses.PADDING.P1,
            CoreClasses.TEXT.TEXT_CENTER,
          ]}
        >
          <CoreTypographyCaption>{className}</CoreTypographyCaption>
        </CoreBox>
      );
    },
  },
  DATA_DISPLAY: {
    description: "",
    grouped: true,
    renderElement: (key, classes, className) => {
      return (
        <CoreBox
          key={key}
          gridProps={{ gridSize: 3 }}
          styleClasses={[
            classes[className],
            CoreClasses.BORDER.BORDER,
            CoreClasses.BORDER.BORDER_2,
            CoreClasses.BORDER.BORDER_WARNING_LIGHT,
            CoreClasses.PADDING.P1,
            CoreClasses.TEXT.TEXT_CENTER,
          ]}
        >
          <CoreTypographyCaption>{className}</CoreTypographyCaption>
        </CoreBox>
      );
    },
  },
  DATA_TABLE: {
    description: "",
    grouped: true,
  },
  ICON: {
    description: "",
    grouped: true,
  },
  LAYOUT: {
    description: "",
    grouped: true,
  },
  MENU: {
    description: "",
    grouped: true,
  },
  NAVIGATION: {
    description: "",
    grouped: true,
  },
  POPOVER: {
    description: "",
    grouped: true,
  },
  RX: {
    description: "",
    grouped: true,
  },
  TABLE: {
    description: "",
    grouped: true,
  },
  UTILS: {
    description: "",
    grouped: true,
  },
  WIDGET: {
    description: "",
    grouped: true,
  },
};
