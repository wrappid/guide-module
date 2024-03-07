/* eslint-disable etc/no-commented-out-code */
import React from "react";

import {
  ComponentRegistryContext, CoreBox, CoreClasses, CoreLayoutItem, CoreTypographyBody1, LayoutViewer, CoreGrid
  , CoreMenu
  , BlankLayout, CoreH4, CoreH5, CoreTab, CoreTabs
} from "@wrappid/core";
import { useSelector } from "react-redux";

export default function SampleLayouts() {

  const [selectLayout, setSelectLayout] = React.useState(null);

  const [value, setValue] = React.useState(0);

  const collapse = useSelector((state) => state?.menu?.collapse);

  const componentRegistry = React.useContext(ComponentRegistryContext);

  const layoutComponentRegistry = Object.fromEntries(Object.entries(componentRegistry).filter((value) => {
    return value[1].layout === true;
  }));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    setSelectLayout(Object.keys(layoutComponentRegistry)[0]);
  }, []);

  const prepareLayoutMenu = (layoutComponentRegistry) => {
    return Object.entries(layoutComponentRegistry)?.map(([layoutName]) => ({
      Children: layoutName,
      id      : layoutName,
      label   : layoutName,
      name    : layoutName?.trim(),
      type    : "layoutName",
    }));
  };

  function CoreTabPanel(props) {
    const { value, label, index, selectLayout, ...other } = props;

    return (
      <>
        <CoreBox
          styleClases={[CoreClasses.WIDTH.VW_50]}
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}>
          {value === index && (
            <>
              <CoreTypographyBody1>{`Tab ${index} ${value} ${selectLayout}`}</CoreTypographyBody1>

              <CoreBox styleClasses={[
                CoreClasses.WIDTH.W_100,
                CoreClasses.DISPLAY.FLEX,
                CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
                CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
                CoreClasses.FLEX.DIRECTION_COLUMN,
                CoreClasses.GAP.GAP_1
              ]}>

                {selectLayout && <LayoutViewer layoutName={selectLayout} layoutType={label} />}

              </CoreBox>
            </>
          )}
        </CoreBox>
      </>
    );
  }

  return (
    <>
      <CoreLayoutItem
        id={BlankLayout.PLACEHOLDER.CONTENT}
        styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.DIRECTION_COLUMN, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_START]}>

        <CoreGrid styleClasses={[CoreClasses.BG.BG_WHITE]}>
          <CoreBox gridProps={{ gridSize: 10 }}>
            <CoreH4
              styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}
            >
              Layout Manger
            </CoreH4>

            <CoreTypographyBody1>Layout Manager related description. Layout Manager related description. Layout Manager related description. Layout Manager related description. </CoreTypographyBody1>

            <CoreTypographyBody1>Click on the below thumbnails to view the layouts</CoreTypographyBody1>

            <CoreH5>{selectLayout}</CoreH5>

            {/* <CoreBox styleClasses={[
              CoreClasses.BG.BG_GREY_100,
              CoreClasses.PADDING.P1,
              CoreClasses.DISPLAY.FLEX,
              CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_EVENLY,
              CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER
            ]}>
              <CoreSpan id={"LTWeb"} styleClasses={[CoreClasses.WIDTH.W_25, CoreClasses.BG.BG_SECONDARY]}>|Web|</CoreSpan>

              <CoreSpan id={"LTTab"} styleClasses={[CoreClasses.WIDTH.W_25, CoreClasses.BG.BG_PRIMARY]}>|Tablet|</CoreSpan>

              <CoreSpan id={"mobile"} styleClasses={[CoreClasses.WIDTH.W_25, CoreClasses.BG.BG_SUCCESS]}>|Mobile|</CoreSpan>

              <CoreSpan id={"RTTab"} styleClasses={[CoreClasses.WIDTH.W_25, CoreClasses.BG.BG_PRIMARY]}>|Tablet|</CoreSpan>

              <CoreSpan id={"RTWeb"} styleClasses={[CoreClasses.WIDTH.W_25, CoreClasses.BG.BG_SECONDARY]}>|Web|</CoreSpan>
            </CoreBox> */}

            <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
              <CoreBox styleClases={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
                <CoreTabs
                  onChange={handleChange}
                  aria-label="full width tabs example" >
                  <CoreTab
                    label="Web"></CoreTab>

                  <CoreTab
                    label="Tablet"></CoreTab>

                  <CoreTab
                    label="Mobile"></CoreTab>
                </CoreTabs>
              </CoreBox>

              <CoreBox>
                <CoreTabPanel
                  label="Mobile"
                  value={value}
                  selectLayout={selectLayout}
                  index={0}>
                </CoreTabPanel>

                {/* <CoreTabPanel>
                  <CoreBox
                    styleClases={[CoreClasses.WIDTH.VW_50]}
                    role="tabpanel"
                    hidden={value !== 0}>
                    {value === 0 && (
                      <>
                        <CoreTypographyBody1>{`Tab ${0} ${value} ${selectLayout}`}</CoreTypographyBody1>

                        <CoreBox styleClasses={[
                          CoreClasses.WIDTH.W_100,
                          CoreClasses.DISPLAY.FLEX,
                          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
                          CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
                          CoreClasses.FLEX.DIRECTION_COLUMN,
                          CoreClasses.GAP.GAP_1
                        ]}>

                          {selectLayout && <LayoutViewer layoutName={selectLayout} layoutType={"Web"} />}

                        </CoreBox>
                      </>
                    )}
                  </CoreBox>
                </CoreTabPanel> */}

                <CoreTabPanel
                  label="Tablet"
                  value={value}
                  selectLayout={selectLayout}
                  index={1}>
                </CoreTabPanel>

                {/* <CoreTabPanel>
                  <CoreBox
                    styleClases={[CoreClasses.WIDTH.VW_50]}
                    role="tabpanel"
                    hidden={value !== 1}>
                    {value === 1 && (
                      <>
                        <CoreTypographyBody1>{`Tab ${1} ${value} ${selectLayout}`}</CoreTypographyBody1>

                        <CoreBox styleClasses={[
                          CoreClasses.WIDTH.W_100,
                          CoreClasses.DISPLAY.FLEX,
                          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
                          CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
                          CoreClasses.FLEX.DIRECTION_COLUMN,
                          CoreClasses.GAP.GAP_1
                        ]}>

                          {selectLayout && <LayoutViewer layoutName={selectLayout} layoutType={"Tablet"} />}

                        </CoreBox>
                      </>
                    )}
                  </CoreBox>
                </CoreTabPanel> */}

                <CoreTabPanel
                  label="Web"
                  value={value}
                  selectLayout={selectLayout}
                  index={2}>
                </CoreTabPanel>

                {/* <CoreTabPanel>
                  <CoreBox
                    styleClases={[CoreClasses.WIDTH.VW_50]}
                    role="tabpanel"
                    hidden={value !== 2}>
                    {value === 2 && (
                      <>
                        <CoreTypographyBody1>{`Tab ${2} ${value} ${selectLayout}`}</CoreTypographyBody1>

                        <CoreBox styleClasses={[
                          CoreClasses.WIDTH.W_100,
                          CoreClasses.DISPLAY.FLEX,
                          CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
                          CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
                          CoreClasses.FLEX.DIRECTION_COLUMN,
                          CoreClasses.GAP.GAP_1
                        ]}>

                          {selectLayout && <LayoutViewer layoutName={selectLayout} layoutType={"Web"} />}

                        </CoreBox>
                      </>
                    )}
                  </CoreBox>
                </CoreTabPanel> */}

              </CoreBox>

            </CoreBox>
          </CoreBox>

          <CoreBox
            styleClasses={[
              CoreClasses.POSITION.TOP_0,
              CoreClasses.POSITION.POSITION_STICKY,
              CoreClasses.OVERFLOW.OVERFLOW_Y_SCROLL,
              CoreClasses.HEIGHT.VH_100,
              CoreClasses.BORDER.BORDER,
              CoreClasses.BORDER.BORDER_LEFT,
              CoreClasses.BORDER.BORDER_SECONDARY_LIGHT,
            ]}
            gridProps={{ gridSize: 2 }}
          >
            <CoreMenu
              openCollapse={collapse}
              multiLevel={true}
              menu={prepareLayoutMenu(layoutComponentRegistry)}
              OnMenuClick={(menuItem) => setSelectLayout(menuItem?.name)}
              open={true}
            />
          </CoreBox>
        </CoreGrid>

      </CoreLayoutItem >
    </>
  );
}