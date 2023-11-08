import * as React from "react";

import {
  CoreH4,
  CoreTypographyBody1
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";

export default function CoreFormControlDocs() {
  const [state, setState] = React.useState({
    antoine: false,
    gilad  : true,
    jason  : false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <>
      <CoreH4>CoreFormControl</CoreH4>
  
      <CoreTypographyBody1>
          COMPONENT_DESCRIPTION
      </CoreTypographyBody1>
  
      <CodeSample
        title={"TITLE_OF_THE_SAMPLE (NOT_WORKING)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`        
<CoreFormControl color="secondary"></CoreFormControl>
        `}
        renderElement={<>
          {/* <CoreBox sx={{ display: "flex" }}>
            <CoreFormControl sx={{ m: 3 }} component="fieldset" variant="standard">

              <CoreFormGroup>
                <CoreFormControlLabel
                  control={
                    <CoreCheckbox checked={gilad} onChange={handleChange} name="gilad" />
                  }
                  label="Gilad Gray"
                />

                <CoreFormControlLabel
                  control={
                    <CoreCheckbox checked={jason} onChange={handleChange} name="jason" />
                  }
                  label="Jason Killian"
                />

                <CoreFormControlLabel
                  control={
                    <CoreCheckbox checked={antoine} onChange={handleChange} name="antoine" />
                  }
                  label="Antoine Llorca"
                />
              </CoreFormGroup>

              <CoreFormHelperText>Be careful</CoreFormHelperText>
            </CoreFormControl>

            <CoreFormControl
              required
              error={error}
              component="fieldset"
              sx={{ m: 3 }}
              variant="standard"
            >

              <CoreFormGroup>
                <CoreFormControlLabel
                  control={
                    <CoreCheckbox checked={gilad} onChange={handleChange} name="gilad" />
                  }
                  label="Gilad Gray"
                />

                <CoreFormControlLabel
                  control={
                    <CoreCheckbox checked={jason} onChange={handleChange} name="jason" />
                  }
                  label="Jason Killian"
                />

                <CoreFormControlLabel
                  control={
                    <CoreCheckbox checked={antoine} onChange={handleChange} name="antoine" />
                  }
                  label="Antoine Llorca"
                />
              </CoreFormGroup>

              <CoreFormHelperText>You can display an error</CoreFormHelperText>
            </CoreFormControl>
          </CoreBox> */}
        </>}
      />
        
      {/* <ComponentProps component={CoreFormControl} /> */}
      
    </>
  );
}