import {
  defaultValidProps, defaultInvalidProps, CoreBox, CoreClasses, CoreH6, CoreTypographyBody1, CoreChip, CoreH5 
} from "@wrappid/core";

import ComponentPropTypes from "./ComponentPropTypes";

export default function ComponentProps(props) {
  const { component } = props;
    
  const validProps = [...(component?.validProps || []), ...defaultValidProps];
  const invalidProps = [...(component?.invalidProps || []), ...defaultInvalidProps];

  return (
    <>
      <CoreH6>{"Valid Props"}</CoreH6>

      {validProps && validProps?.map(eachProp => {
        return (
          <CoreBox key={`${eachProp}`} styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_START, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.GAP.GAP_1]}>

            <CoreBox styleClasses={[
              CoreClasses.DISPLAY.FLEX,
              CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_START,
              CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
              CoreClasses.GAP.GAP_1,
              CoreClasses.WIDTH.W_25
            ]}>
              <CoreH6 styleClasses={[CoreClasses.PADDING.PR1]}>{eachProp?.name}</CoreH6>
                
              {eachProp?.required ? (
                <CoreChip size="small" color="info" label="REQUIRED" />
              ) : (
                <CoreChip size="small" color="warning" label="OPTIONAL" />
              )}
            </CoreBox>

            <CoreBox styleClasses={[CoreClasses.WIDTH.W_25]}>
              
              <CoreTypographyBody1>
                {eachProp?.description}
              </CoreTypographyBody1>
            </CoreBox>

            <CoreBox styleClasses={[CoreClasses.WIDTH.W_50]}>

              <ComponentPropTypes propTypes={eachProp?.types} />
            </CoreBox>
          </CoreBox>
        );
      })}

      <CoreH6>{"Invalid Props"}</CoreH6>

      {invalidProps && invalidProps?.map((eachProp, index) => {
        return (
          <CoreBox key={`${eachProp}`}>
            <CoreH5>
              {index + 1}.&nbsp;

              {eachProp}
            </CoreH5>
          </CoreBox>

        );
      })}
    </>
  );
}