import * as React from "react";

import {
  CoreBox,
  CoreH4,
  CorePaper,
  CoreTypographyBody1
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";

export default function CoreFadeDocs() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const icon = (
    <CorePaper sx={{ height: 100, m: 1, width: 100 }} elevation={4}>
      <svg>
        <CoreBox
          component="polygon"
          points="0,100 50,00, 100,100"
          sx={{
            fill       : (theme) => theme.palette.common.white,
            stroke     : (theme) => theme.palette.divider,
            strokeWidth: 1,
          }}
        />
      </svg>
    </CorePaper>
  );

  return (
    <>
      <CoreH4>CoreFade</CoreH4>
  
      <CoreTypographyBody1>
          COMPONENT_DESCRIPTION
      </CoreTypographyBody1>
  
      <CodeSample
        title={"Fade (NOT_WORKING)"}
        description={"Fade in from transparent to opaque."}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<>
          {/* <CoreBox sx={{ height: 180 }}>
            <CoreFormControlLabel
              control={<CoreSwitch checked={checked} onChange={handleChange} />}
              label="Show"
            />

            <CoreBox sx={{ display: "flex" }}>
              <CoreFade in={checked}>{icon}</CoreFade>
            </CoreBox>
          </CoreBox> */}
        </>}
      />
        
      {/* <ComponentProps component={CoreFade} /> */}
      
    </>
  );
}