import {
    NativeBadge,
    CoreClasses,
    CoreStack,
    CoreSpan,
    CoreH4,
    CoreTypographyBody1,
    CoreIcon,
    CoreBadge,
    CoreBox
  } from "@wrappid/core";
  import {Badge} from "@mui/material"
  
  import CodeSample from "../../CodeSample";
  import ComponentProps from "../../ComponentProps";
  
  export default function CoreDividerDocs() {
    return (
      <>
        <CoreH4
          styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}
        >
          CoreDivider
        </CoreH4>
  
        <CoreTypographyBody1>
        A divider is a thin line that groups content in lists and layouts.
        </CoreTypographyBody1>
  
  
       
  
  <ComponentProps component={CoreBadge} />
  
      </>
    );
  }
  