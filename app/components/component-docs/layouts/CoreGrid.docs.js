
import {
  CoreBox,
  CoreClasses,
  CoreGrid,
  CoreH4,
  CoreListItem,
  CoreStack,
  CoreTypographyBody1
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";

export default function CoreGridDocs() {

  return (
    <>
      <CoreH4>CoreGrid</CoreH4>

      <CoreStack spacing={2} direction="row">
        <CoreTypographyBody1>
      The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts.

        </CoreTypographyBody1>

        <CoreTypographyBody1>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
        The grid creates visual consistency between layouts while allowing flexibility across a wide variety of designs. Material Design's responsive UI is based on a 12-column grid layout.

        </CoreTypographyBody1>

      </CoreStack>

      <CodeSample
        title={"Basic grid (NOT_WORKING)"}
        description={`Column widths are integer values between 1 and 12; they apply at any breakpoint and indicate how many columns are occupied by the component.
        A value given to a breakpoint applies to all the other breakpoints wider than it (unless overridden, as you can read later in this page). For example, xs={12} sizes a component to occupy the whole viewport width regardless of its size.`}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<>
          <CoreBox styleClasses = {[CoreClasses.FLEX.styleClasses]}>
            <CoreGrid container spacing={2}>
              <CoreGrid item xs={8}>
                <CoreListItem>xs=8</CoreListItem>
              </CoreGrid>

              <CoreGrid item xs={4}>
                <CoreListItem>xs=4</CoreListItem>
              </CoreGrid>

              <CoreGrid item xs={4}>
                <CoreListItem>xs=4</CoreListItem>
              </CoreGrid>

              <CoreGrid item xs={8}>
                <CoreListItem>xs=8</CoreListItem>
              </CoreGrid>
            </CoreGrid>
          </CoreBox>
        </>}
      />

      <CodeSample
        title={"TITLE_OF_THE_SAMPLE (NOT_DEFINED)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Grid with multiple breakpoints (NOT_DEFINED)"}
        description={"Components may have multiple widths defined, causing the layout to change at the defined breakpoint. Width values given to larger breakpoints override those given to smaller breakpoints.\
        For example, xs={12} sm={6} sizes a component to occupy half of the viewport width (6 columns) when viewport width is 600 or more pixels. For smaller viewports, the component fills all 12 available columns."}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<>
          {/* eslint-disable-next-line etc/no-commented-out-code */}
          {/* <CoreBox sx={{ flexGrow: 1 }}>
            <CoreGrid container spacing={2}>
              <CoreGrid item xs={6} md={8}>
                <Item>xs=6 md=8</Item>
              </CoreGrid>

              <CoreGrid item xs={6} md={4}>
                <Item>xs=6 md=4</Item>
              </CoreGrid>

              <CoreGrid item xs={6} md={4}>
                <Item>xs=6 md=4</Item>
              </CoreGrid>

              <CoreGrid item xs={6} md={8}>
                <Item>xs=6 md=8</Item>
              </CoreGrid>
            </CoreGrid>
          </CoreBox> */}
        </>}
      />

      <CodeSample
        title={"Spacing (NOT_WORKING)"}
        description={"To control space between children, use the spacing prop. The spacing value can be any positive number, including decimals and any string. The prop is converted into a CSS property using the theme.spacing() helper."}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<>
          {/* eslint-disable-next-line etc/no-commented-out-code */}
          {/* <CoreGrid styleClasses = {[CoreClasses.FLEX.FLEX_GROW_1]} container spacing={2}>
            <CoreGrid item xs={12}>
              <CoreGrid container justifyContent="center" spacing={spacing}>
                {[0, 1, 2].map((value) => (
                  <CoreGrid key={value} item>
                    <CorePaper
                      // sx={{
                      //   backgroundColor: (theme) =>
                      //     theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                      //   height: 140,
                      //   width : 100,
                      // }}
                    />
                  </CoreGrid>
                ))}
              </CoreGrid>
            </CoreGrid>

            <CoreGrid item xs={12}>
              <CorePaper styleClasses = {[CoreClasses.PADDING.P2]}>
                <CoreGrid container>
                  <CoreGrid item>
                    <CoreFormControl component="fieldset">
                      <CoreFormLabel component="legend">spacing</CoreFormLabel>

                      <CoreRadioGroup
                        name="spacing"
                        aria-label="spacing"
                        value={spacing.toString()}
                        onChange={handleChange}
                        row
                      >
                        {[
                          0,
                          0.5,
                          1,
                          2,
                          3,
                          4,
                          8,
                          12
                        ].map((value) => (
                          <CoreFormControlLabel
                            key={value}
                            value={value.toString()}
                            control={<CoreRadio />}
                            label={value.toString()}
                          />
                        ))}
                      </CoreRadioGroup>
                    </CoreFormControl>
                  </CoreGrid>
                </CoreGrid>
              </CorePaper>

              <CoreHighlightedCode code={jsx} language="jsx" />
            </CoreGrid>
          </CoreGrid> */}
        
        </>}
      />

      <CodeSample
        title={"Row & column spacing (NOT_WORKING)"}
        description={"The rowSpacing and columnSpacing props allow for specifying the row and column gaps independently. It's similar to the row-gap and column-gap properties of CSS Grid."}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<>
          {/* eslint-disable-next-line etc/no-commented-out-code */}
          {/* <CoreBox styleClasser = {[coreClasses.WIDTH.W_100]}>
            <CoreGrid container rowSpacing={1} columnSpacing={{ md: 3, sm: 2, xs: 1 }}>
              <CoreGrid item xs={6}>
                <Item>1</Item>
              </CoreGrid>

              <CoreGrid item xs={6}>
                <Item>2</Item>
              </CoreGrid>

              <CoreGrid item xs={6}>
                <Item>3</Item>
              </CoreGrid>

              <CoreGrid item xs={6}>
                <Item>4</Item>
              </CoreGrid>
            </CoreGrid>
          </CoreBox> */}
        
        </>}
      />

      <CodeSample
        title={"Responsive values (NOT_WORKING)"}
        description={"You can switch the props' value based on the active breakpoint. For instance, we can implement the \"recommended\" responsive layout grid of Material Design."}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<>
          {/* eslint-disable-next-line etc/no-commented-out-code */}
          {/* <CoreBox styleClasses = {[CoreClasses.FLEX.FLEX_GROW_1]} >
            <CoreGrid container spacing={{ md: 3, xs: 2 }} columns={{ md: 12, sm: 8, xs: 4 }}>
              {Array.from(Array(6)).map((_, index) => (
                <CoreGrid
                  item
                  xs={2}
                  sm={4}
                  md={4}
                  key={index}>
                  <Item>xs=2</Item>
                </CoreGrid>
              ))}
            </CoreGrid>
          </CoreBox> */}
        
        </>}
      />

      <CodeSample
        title={"Interactive (NOT_WORKING)"}
        description={"Below is an interactive demo that lets you explore the visual results of the different settings:"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<>
          <CoreGrid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          ></CoreGrid>
        </>}
      />

      <CodeSample
        title={"Auto-layout (NOT_WORKING)"}
        description={"The Auto-layout makes the items equitably share the available space. That also means you can set the width of one item and the others will automatically resize around it."}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<>
          {/* eslint-disable-next-line etc/no-commented-out-code */}
          {/* <CoreBox styleClasses = {[CoreClasses.FLEX.FLEX_GROW_1]}>
            <CoreGrid container spacing={3}>
              <CoreGrid item xs>
                <Item>xs</Item>
              </CoreGrid>

              <CoreGrid item xs={6}>
                <Item>xs=6</Item>
              </CoreGrid>

              <CoreGrid item xs>
                <Item>xs</Item>
              </CoreGrid>
            </CoreGrid>
          </CoreBox> */}
        </>}
      />
        
      <CodeSample
        title={"Variable width content(NOT_WORKING)"}
        description={"Set one of the size breakpoint props to \"auto\" instead of true / a number to size a column based on the natural width of its content."}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<>
          {/* eslint-disable-next-line etc/no-commented-out-code */}
          {/* <CoreBox styleClasses = {[CoreClasses.FLEX.FLEX_GROW_1]}>
            <CoreGrid container spacing={3}>
              <CoreGrid item xs="auto">
                <Item>variable width content</Item>
              </CoreGrid>

              <CoreGrid item xs={6}>
                <Item>xs=6</Item>
              </CoreGrid>

              <CoreGrid item xs>
                <Item>xs</Item>
              </CoreGrid>
            </CoreGrid>
          </CoreBox> */}

        </>}
      />
        
      <CodeSample
        title={"Complex Grid(NOT_WORKING)"}
        description={"The following demo doesn't follow the Material Design guidelines, but illustrates how the grid can be used to build complex layouts."}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />
        
      <CodeSample
        title={"Nested Grid (NOT_WORKING)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />
        
      <CodeSample
        title={"Columns (NOT_WORKING)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"CSS Grid Layout (NOT_WORKING)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />
        
      {/* eslint-disable-next-line etc/no-commented-out-code */}
      {/* <ComponentProps component={CoreGrid} /> */}
      
    </>
  );
}