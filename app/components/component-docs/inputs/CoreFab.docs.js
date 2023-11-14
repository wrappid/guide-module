import {
  CoreH4,
  CoreTypographyBody1,
  CoreFab,
  CoreIcon,
  CoreClasses,
  CoreStack,
  CoreAlert
} from "@wrappid/core";

import CodeBlock from "../../CodeBlock";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreFabDocs() {
  return (
    <>
      <CoreH4>CoreFab</CoreH4>

      <CoreTypographyBody1>
        A Core Floating Action Button (FAB) performs the primary, or most
        common, action on a screen.
      </CoreTypographyBody1>

      <CoreTypographyBody1>
        A floating action button appears in front of all screen content,
        typically as a circular shape with an icon in its center. FABs come in
        two types: regular, and extended. Only use a FAB if it is the most
        suitable way to present a screen{"'"}s primary action. Only one
        component is recommended per screen to represent the most common action.
      </CoreTypographyBody1>

      <CodeSample
        title={"Basic FAB"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={
          <>
            <CoreStack
              spacing={2}
              direction="row"
              // sx={{ "& > :not(style)": { m: 1 } }}
              styleClasses={[CoreClasses.MARGIN.M1]}
            >
              <CoreFab color="primary" aria-label="add">
                <CoreIcon icon="add" />
              </CoreFab>

              <CoreFab color="error" aria-label="edit">
                <CoreIcon icon="edit" />
              </CoreFab>

              <CoreFab variant="extended">
                <CoreIcon
                  icon="navigation"
                  styleClasses={[CoreClasses.MARGIN.M1]}
                />
                Navigate
              </CoreFab>

              <CoreFab disabled aria-label="like">
                <CoreIcon icon="favorite" />
              </CoreFab>
            </CoreStack>
          </>
        }
      />

      <CodeSample
        title={"Size"}
        description={
          <CoreTypographyBody1>
            By default, the size is <CodeBlock>large</CodeBlock>. Use the

            {" "}<CodeBlock>size</CodeBlock> prop for smaller floating action
            buttons.
          </CoreTypographyBody1>
        }
        code={`<CoreStack
  spacing={2}
  direction="row" 
  styleClasses={[CoreClasses.MARGIN.M1]}
>
  <CoreFab size="small" color="error" aria-label="add">
    <CoreIcon icon="add" />
  </CoreFab>

  <CoreFab size="medium" color="error" aria-label="add">
    <CoreIcon icon="add" />
  </CoreFab>

  <CoreFab color="error" aria-label="add">
    <CoreIcon icon="add" />
  </CoreFab>
</CoreStack>`}
        renderElement={
          <>
            <CoreStack
              spacing={2}
              direction="row"
              // sx={{ "& > :not(style)": { m: 1 } }}
              styleClasses={[CoreClasses.MARGIN.M1]}
            >
              <CoreFab size="small" color="error" aria-label="add">
                <CoreIcon icon="add" />
              </CoreFab>

              <CoreFab size="medium" color="error" aria-label="add">
                <CoreIcon icon="add" />
              </CoreFab>

              <CoreFab color="error" aria-label="add">
                <CoreIcon icon="add" />
              </CoreFab>
            </CoreStack>
          </>
        }
      />

      <CodeSample
        title={"Extended Variant"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`<CoreStack
  spacing={2}
  direction="row"
  // sx={{ "& > :not(style)": { m: 1 } }}
  styleClasses={[CoreClasses.MARGIN.M1]}
>

  <CoreFab variant="extended" size="small" color="primary">
    <CoreIcon icon="navigation" />
  Extended
  </CoreFab>

  <CoreFab variant="extended" size="medium" color="primary">
    <CoreIcon icon="navigation" />
  Extended
  </CoreFab>

  <CoreFab variant="extended" color="primary">
    <CoreIcon icon="navigation" />
  Extended
  </CoreFab>
</CoreStack>`}
        renderElement={
          <>
            <CoreStack
              spacing={2}
              direction="row"
              // sx={{ "& > :not(style)": { m: 1 } }}
              styleClasses={[CoreClasses.MARGIN.M1]}
            >
              <CoreFab variant="extended" size="small" color="primary">
                <CoreIcon icon="navigation" />
                Extended
              </CoreFab>

              <CoreFab variant="extended" size="medium" color="primary">
                <CoreIcon icon="navigation" />
                Extended
              </CoreFab>

              <CoreFab variant="extended" color="primary">
                <CoreIcon icon="navigation" />
                Extended
              </CoreFab>
            </CoreStack>
          </>
        }
      />

      <CoreAlert severity="error"> Animation Error: SwipeableViews, Zoom etc. Not Implemented</CoreAlert>

      <CodeSample
        title={"Animation"}
        description={
          <>
            <CoreTypographyBody1>
              The floating action button animates onto the screen as an
              expanding piece of material, by default.
            </CoreTypographyBody1>

            <CoreTypographyBody1>
              A floating action button that spans multiple lateral screens (such
              as tabbed screens) should briefly disappear, then reappear if its
              action changes.
            </CoreTypographyBody1>

            <CoreTypographyBody1>
              The Zoom transition can be used to achieve this. Note that since
              both the exiting and entering animations are triggered at the same
              time, we use <CodeBlock>enterDelay</CodeBlock> to allow the

              outgoing Floating Action Button{"'"}s animation to finish before
              the new one enters.
            </CoreTypographyBody1>
          </>
        }
        code={`            <CoreBox
              // sx={{
              //   bgcolor  : "background.paper",
              //   minHeight: 200,
              //   position : "relative",
              //   width    : 500,
              // }}
              styleClasses={[CoreClasses.BG.BG_SECONDARY, CoreClasses.HEIGHT.MIN_H_100, CoreClasses.WIDTH.MIN_W_100, CoreClasses.POSITION.POSITION_RELATIVE]}
            >
              <CoreAppBar position="static" color="default">
                <CoreTabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="fullWidth"
                  aria-label="action tabs example"
                >
                  <CoreTab label="Item One" {...a11yProps(0)} />

                  <CoreTab label="Item Two" {...a11yProps(1)} />

                  <CoreTab label="Item Three" {...a11yProps(2)} />
                </CoreTabs>
              </CoreAppBar>

              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <CoreTabPanel value={value} index={0} dir={theme.direction}>
                  Item One
                </CoreTabPanel>

                <CoreTabPanel value={value} index={1} dir={theme.direction}>
                  Item Two
                </CoreTabPanel>

                <CoreTabPanel value={value} index={2} dir={theme.direction}>
                  Item Three
                </CoreTabPanel>
              </SwipeableViews>

              {fabs.map((fab, index) => (
                <Zoom
                  key={fab.color}
                  in={value === index}
                  timeout={transitionDuration}
                  style={{
                    transitionDelay: ${"`${"}
                      value === index ? transitionDuration.exit : 0
                    }${"`"}ms,
                  }}
                  unmountOnExit
                >
                  <CoreFab sx={fab.sx} aria-label={fab.label} color={fab.color}>
                    {fab.icon}
                  </CoreFab>
                </Zoom>
              ))}
            </CoreBox>`}
        renderElement={
          <>
          </>
        }
      />

      <ComponentProps component={CoreFab} />
    </>
  );
}
