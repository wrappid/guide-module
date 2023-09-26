import {
  stringUtils, defaultValidProps, CoreBox, CoreClasses, CoreDivider, CoreH6, CoreTypographyBody1, CoreH5, CoreChip, CoreStack 
} from "@wrappid/core";

import ComponentPropTypes from "./ComponentPropTypes";

export default function ComponentProps(props) {
  const { type = "valid", component } = props;
    
  const validProps = [...(component?.validProps || []), ...defaultValidProps];

  return (
    <>
      <CoreH5>{`${stringUtils.getLabel(type)} Props`}</CoreH5>

      {
        validProps && validProps?.map(eachProp => {
          return (
            <CoreBox key={`${eachProp}`}>
              <CoreDivider styleClasses={[CoreClasses.MARGIN.MY3]} />

              <CoreStack>
                <CoreH6>{eachProp?.name}</CoreH6>
                
                {eachProp?.required ? (
                  <CoreChip size={"small"} color={"primary"} label={"REQUIRED"} />
                ) : (
                  <CoreChip size={"small"} color={"secondary"} label={"OPTIONAL"} />
                )}
              </CoreStack>

              <CoreTypographyBody1>
                {eachProp?.description}
              </CoreTypographyBody1>

              <ComponentPropTypes propTypes={eachProp?.types} />
            </CoreBox>
          );
        })
      }
    </>
  );
}