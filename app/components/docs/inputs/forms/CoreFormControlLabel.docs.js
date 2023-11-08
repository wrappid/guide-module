import * as React from "react";

import {
  CoreBox,
  CoreCheckbox,
  CoreH4,
  CoreTypographyBody1,
  CoreFormControlLabel
} from "@wrappid/core";
  
import CodeSample from "../../../CodeSample";

export default function CoreFormControlLabelDocs() {
  const [checked, setChecked] = React.useState([true, false]);

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };

  const children = (
    <CoreBox sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <CoreFormControlLabel
        label="Child 1"
        control={<CoreCheckbox checked={checked[0]} onChange={handleChange2} />}
      />

      <CoreFormControlLabel
        label="Child 2"
        control={<CoreCheckbox checked={checked[1]} onChange={handleChange3} />}
      />
    </CoreBox>
  );

  return (
    <>
      <CoreH4>CoreFormControlLabel</CoreH4>
  
      <CoreTypographyBody1>
          COMPONENT_DESCRIPTION
      </CoreTypographyBody1>
  
      <CodeSample
        title={"CoreFormControlLabel(NOT_WORKING)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<>
          {/* <div>
            <CoreFormControlLabel
              label="Parent"
              control={
                <CoreCheckbox
                  checked={checked[0] && checked[1]}
                  indeterminate={checked[0] !== checked[1]}
                  onChange={handleChange1}
                />
              }
            />

            {children}
          </div>
         */}
        </>}
      />
        
      {/* <ComponentProps component={CoreFormControlLabel} /> */}
      
    </>
  );
}