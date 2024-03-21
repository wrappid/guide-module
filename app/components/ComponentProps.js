import React from "react";

import {
  defaultValidProps, defaultInvalidProps, CoreBox, CoreClasses, CoreH6, CoreTypographyBody1, CoreChip, CoreH5, CoreDivider, CoreSelect, CoreGrid, CoreAccordion, CoreAccordionSummary, CoreAccordionDetail, CoreIcon, CoreIconButton
} from "@wrappid/core";

import ComponentPropTypes from "./ComponentPropTypes";

const VIEWPROPSDATA = ["Table", "List"];

export default function ComponentProps(props) {
  const [viewPropsData, setViewPropsData] = React.useState(VIEWPROPSDATA[0]);
  const { component } = props;

  const validProps = [...(component?.validProps || []), ...defaultValidProps];
  const invalidProps = [...(component?.invalidProps || []), ...defaultInvalidProps];

  const handleSelectChange = (event) => {
    setViewPropsData(event.target.value);
  };

  const PropsHeading = ({ title }) => {
    return (
      <CoreBox styleClasses={[CoreClasses.BG.BG_GREY_100, CoreClasses.PADDING.P2, CoreClasses.BORDER.BORDER_ROUNDED_1, CoreClasses.MARGIN.MY2]}>
        <CoreH5>{title}</CoreH5>

        {title === "Valid Props" && <CoreSelect
          gridProps={{ gridSize: { md: 12 } }}
          label="View props"
          id="viewPropsData"
          value={viewPropsData}
          handleChange={(event) => handleSelectChange(event)}
          options={Object.keys(VIEWPROPSDATA).map((key) => ({
            id   : VIEWPROPSDATA[key],
            label: VIEWPROPSDATA[key],
            value: VIEWPROPSDATA[key],
          }))}
        />}
      </CoreBox>
    );
  };

  return (
    <>
      <PropsHeading title={"Valid Props"} />

      {validProps && validProps?.map(eachProp => {
        return (
          <>
            {<CoreBox key={`${eachProp}`} styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_START, CoreClasses.ALIGNMENT.ALIGN_ITEMS_START, CoreClasses.GAP.GAP_2]}>

              {/* props data in list format */}
              {viewPropsData === "Table" &&
                <CoreGrid>
                  <CoreBox gridProps={{ gridSize: { md: 3 } }}>
                    <CoreH6 styleClasses={[CoreClasses.PADDING.PR1]}>{eachProp?.name}</CoreH6>

                    {eachProp?.required ? (
                      <CoreChip size="small" color="info" label="REQUIRED" />
                    ) : (
                      <CoreChip size="small" color="warning" label="OPTIONAL" />
                    )}
                  </CoreBox>

                  <CoreBox gridProps={{ gridSize: { md: 3 } }}>

                    <CoreTypographyBody1>
                      {eachProp?.description}
                    </CoreTypographyBody1>
                  </CoreBox>

                  <CoreBox gridProps={{ gridSize: { md: 6 } }}>

                    <ComponentPropTypes propTypes={eachProp?.types} />
                  </CoreBox>

                  <CoreDivider />
                </CoreGrid>
              }

              {/* props data in list format */}
              {viewPropsData === "List" &&
                <CoreGrid>
                  <CoreAccordion gridProps={12}>
                    <CoreAccordionSummary expandIcon={<CoreIconButton><CoreIcon icon="expand_more" /></CoreIconButton>}>
                      <CoreH6>{eachProp?.name}</CoreH6>
                    </CoreAccordionSummary>

                    <CoreAccordionDetail>
                      <CoreBox>
                        {eachProp?.required ? (
                          <CoreChip size="small" color="info" label="REQUIRED" />
                        ) : (
                          <CoreChip size="small" color="warning" label="OPTIONAL" />
                        )}

                        <CoreDivider />

                        <CoreTypographyBody1>
                          {eachProp?.description}
                        </CoreTypographyBody1>

                        <CoreDivider />

                        <ComponentPropTypes propTypes={eachProp?.types} />
                      </CoreBox>
                    </CoreAccordionDetail>
                  </CoreAccordion>
                </CoreGrid>
              }
            </CoreBox>}
          </>
        );
      })}

      <PropsHeading title={"Invalid Props"} />

      {invalidProps && invalidProps?.map((eachProp) => {
        return (
          <CoreBox key={`${eachProp}`}>
            <CoreH5>{eachProp}</CoreH5>

            <CoreDivider />
          </CoreBox>
        );
      })}
    </>
  );
}