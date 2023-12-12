/* eslint-disable */
import {
  CoreAlert,
  CoreBox,
  CoreClasses,
  CoreH6,
  CoreList,
  CoreListItem,
  CoreTypographyBody1,
  CoreTypographyBody2,
  CoreTypographyCaption,
} from "@wrappid/core";

export const DEFAULT_SAMPLE_COMPONENT = {
  code: (classGroupName, className) => {
    return `<AnyComponent styleClasses={[CoreClasses${classGroupName ? "." + classGroupName : ""}${
      className ? "." + className : ""
    }]}></AnyComponent>`;
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
          Sets the border of all elements when the wrappid app is started in DEV env. This border
          could be used during development to understand boundary of all rendered elements.
        </CoreTypographyBody1>

        <CoreTypographyBody2>
          Note: This border renders in different color in different screen sizes.
        </CoreTypographyBody2>
      </>
    ),
  },
  ALIGNMENT: {
    description: "specific desc",
    grouped: true,
    renderElement: (key, classes, className) => {
      return (
        <CoreBox
          key={key}
          gridProps={{ gridSize: 4 }}
          styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.DIRECTION_COLUMN]}
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
  ALIGNMENT__STARTS_WITH__ALIGN_ITEMS: {
    description: "specific desc",
    grouped: true,
    renderElement: (key, classes, className) => {
      return (
        <CoreBox
          key={key}
          gridProps={{ gridSize: 4 }}
          styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.DIRECTION_COLUMN]}
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
  ALIGNMENT__STARTS_WITH__JUSTIFY_CONTENT: {
    grouped: false,
    renderElement: (key, classes, className) => {
      return (
        <CoreBox
          key={key}
          gridProps={{ gridSize: 4 }}
          styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.DIRECTION_COLUMN]}
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
  BG: {
    description: (
      <>
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
          Use border utilities to add or remove an element’s borders. Choose from all borders or one
          at a time.
        </CoreTypographyBody1>

        <CoreTypographyBody2>
          Note: In some of the examples the border-width is forcefully given 2px, so that examples
          are easily visible.
        </CoreTypographyBody2>
      </>
    ),
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
  BORDER__STARTS_WITH__BORDER_ROUNDED: {
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
  BORDER__STARTS_WITH__BORDER_STYLE: {
    renderElement: (key, classes, className) => {
      return (
        <CoreBox
          key={key}
          gridProps={{ gridSize: 3 }}
          styleClasses={[
            CoreClasses.BG.BG_SECONDARY_LIGHT,
            classes[className],
            CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
            CoreClasses.PADDING.P1,
            // CoreClasses.BORDER.BORDER,
            // CoreClasses.BORDER.BORDER_2,
          ]}
        >
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
          <CoreTypographyCaption>{className}</CoreTypographyCaption>
        </CoreBox>
      );
    },
  },
  CURSOR: {
    grouped: true,
  },
  MARGIN: {
    description: (
      <>
        <CoreAlert severity="warning">
          {
            "Some margin samples are NOT WORKING as of now because IMPORTANT is missing on all style files"
          }
        </CoreAlert>

        <CoreTypographyBody1>
          {
            "Assign margin values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties."
          }
        </CoreTypographyBody1>

        <CoreTypographyBody2>
          {"Note: Classes are built from multiples of DEFAULT_MARGIN having a value of 8px."}
        </CoreTypographyBody2>

        <CoreTypographyBody1>
          {"The classes are named using the format CoreClasses.MARGIN.M{sides}{size}"}

          <CoreList dense={true} marker="disc">
            {"Where sides is one of:"}

            <CoreListItem>{"T - (top) for classes that set margin-top"}</CoreListItem>

            <CoreListItem>{"B - (bottom) for classes that set margin-bottom"}</CoreListItem>

            <CoreListItem>{"L - (left) for classes that set margin-left"}</CoreListItem>

            <CoreListItem>{"R - (right) for classes that set margin-right"}</CoreListItem>

            <CoreListItem>
              {"X - for classes that set both margin-left and margin-right"}
            </CoreListItem>

            <CoreListItem>
              {"Y - for classes that set both margin-top and margin-bottom"}
            </CoreListItem>

            <CoreListItem>
              {"blank - for classes that set a margin on all 4 sides of the element"}
            </CoreListItem>
          </CoreList>

          <CoreList dense={true} marker="disc">
            {"Where size is one of:"}

            <CoreListItem>
              {"0 - for classes that eliminate the margin by setting it to 0"}
            </CoreListItem>

            <CoreListItem>{"1 - for classes that set the margin to DEFAULT_MARGIN"}</CoreListItem>

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

            <CoreListItem>{"AUTO - for classes that set the margin to auto"}</CoreListItem>
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
          <CoreTypographyCaption styleClasses={[CoreClasses.BG.BG_WHITE, classes[className]]}>
            {className}
          </CoreTypographyCaption>
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
    description: (
      <>
        <CoreTypographyBody1>
          {
            "Assign padding values to an element or a subset of its sides with shorthand classes. Includes support for individual properties, all properties, and vertical and horizontal properties."
          }
        </CoreTypographyBody1>

        <CoreTypographyBody2>
          {"Note: Classes are built from multiples of DEFAULT_PADDING having a value of 8px."}
        </CoreTypographyBody2>

        <CoreTypographyBody1>
          {"The classes are named using the format CoreClasses.PADDING.P{sides}{size}"}

          <CoreList dense={true} marker="disc">
            {"Where sides is one of:"}

            <CoreListItem>{"T - (top) for classes that set padding-top"}</CoreListItem>

            <CoreListItem>{"B - (bottom) for classes that set padding-bottom"}</CoreListItem>

            <CoreListItem>{"L - (left) for classes that set padding-left"}</CoreListItem>

            <CoreListItem>{"R - (right) for classes that set padding-right"}</CoreListItem>

            <CoreListItem>
              {"X - for classes that set both padding-left and padding-right"}
            </CoreListItem>

            <CoreListItem>
              {"Y - for classes that set both padding-top and padding-bottom"}
            </CoreListItem>

            <CoreListItem>
              {"blank - for classes that set a padding on all 4 sides of the element"}
            </CoreListItem>
          </CoreList>

          <CoreList dense={true} marker="disc">
            {"Where size is one of:"}

            <CoreListItem>
              {"0 - for classes that eliminate the padding by setting it to 0"}
            </CoreListItem>

            <CoreListItem>{"1 - for classes that set the padding to DEFAULT_PADDING"}</CoreListItem>

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
    description: (
      <>
        <CoreTypographyBody1>
          Documentation and examples for common text utilities to control alignment, wrapping,
          weight, and more.
        </CoreTypographyBody1>

        <CoreH6>Text alignment</CoreH6>
        <CoreTypographyBody1>
          Easily realign text to components with text alignment classes. Use TEXT_START, TEXT_END,
          TEXT_CENTER or TEXT_JUSTIFY for respective alignments. Responsive classes are also
          available.
        </CoreTypographyBody1>

        <CoreH6>Font weight</CoreH6>
        <CoreTypographyBody1>
          {
            "Quickly change the font-weight of text with text weight classes. Use TEXT_WIGHT_<font-weight>, where <font-weight> values are LIGHTER = lighter, LIGHT = 300, NORMAL = 400, MEDIUM = 500, SEMIBOLD = 600, BOLD = 700 and BOLDER = bolder."
          }
        </CoreTypographyBody1>

        <CoreH6>Font style</CoreH6>
        <CoreTypographyBody1>
          Change the font-style of text with text style classes. Use TEXT_STYLE_ITALIC or
          TEXT_STYLE_NORMAL for respective font styles.
        </CoreTypographyBody1>

        <CoreH6>Text decoration</CoreH6>
        <CoreTypographyBody1>
          Decorate text in components with text decoration classes. Use TEXT_DECORATION_NONE,
          TEXT_DECORATION_UNDERLINE and TEXT_DECORATION_LINE_THROUGH to decorate.
        </CoreTypographyBody1>
      </>
    ),
    grouped: true,
    renderElement: (key, classes, className) => {
      return (
        <CoreBox
          key={key}
          gridProps={{ gridSize: 12 }}
          styleClasses={[CoreClasses.BORDER.BORDER, CoreClasses.PADDING.P1, classes[className]]}
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
          styleClasses={[CoreClasses.BORDER.BORDER, CoreClasses.PADDING.P1]}
        >
          <CoreTypographyCaption styleClasses={[classes[className]]}>
            {className}
            {" sample. Fusce mattis egestas risus, in euismod odio tincidunt in."}
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
          styleClasses={[CoreClasses.BORDER.BORDER, CoreClasses.PADDING.P1]}
        >
          <CoreTypographyCaption styleClasses={[classes[className]]}>
            {className}
            {" sample. Fusce mattis egestas risus, in euismod odio tincidunt in."}
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
          styleClasses={[CoreClasses.BORDER.BORDER, CoreClasses.PADDING.P1]}
        >
          <CoreTypographyCaption styleClasses={[classes[className]]}>
            {className}
            {" sample. Fusce mattis egestas risus, in euismod odio tincidunt in."}
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
          styleClasses={[CoreClasses.BORDER.BORDER, CoreClasses.PADDING.P1]}
        >
          <CoreTypographyCaption styleClasses={[classes[className]]}>
            {className}
            {" sample. Fusce mattis egestas risus, in euismod odio tincidunt in."}
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
          styleClasses={[CoreClasses.BORDER.BORDER, CoreClasses.PADDING.P1]}
        >
          <CoreTypographyCaption styleClasses={[classes[className]]}>
            {className}
            {" sample. Fusce mattis egestas risus, in euismod odio tincidunt in."}
          </CoreTypographyCaption>
        </CoreBox>
      );
    },
  },
};
