
import {
  CoreH4,
  CoreTypographyBody1,
  CoreSelect
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreSelectDocs() {
  // eslint-disable-next-line etc/no-commented-out-code
  {/*const [age, setAge] = React.useState("");
  
  const handleChange = (event) => {
    setAge(event.target.value);
  };*/}

  return (
    <>
      <CoreH4>CoreSelect</CoreH4>

      <CoreTypographyBody1>
        Select components are used for collecting user provided information from a list of options.
      </CoreTypographyBody1>

      <CodeSample
        title={"Basic CoreSelect(NOT_WORKING)<Incomplete>"}
        description={"Menus are positioned under their emitting elements, unless they are close to the bottom of the viewport."}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<>
          {/* eslint-disable-next-line etc/no-commented-out-code */}
          {/* <CoreBox sx={{ minWidth: 120 }}>
            <CoreFormControl fullWidth>
              <CoreInputLabel id="demo-simple-select-label">Age</CoreInputLabel>

              <CoreSelect
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <CoreMenuItem value={10}>Ten</CoreMenuItem>

                <CoreMenuItem value={20}>Twenty</CoreMenuItem>

                <CoreMenuItem value={30}>Thirty</CoreMenuItem>
              </CoreSelect>
            </CoreFormControl>
          </CoreBox> */}

        </>}
      />

      <ComponentProps component={CoreSelect} />
    </>
  );
}
