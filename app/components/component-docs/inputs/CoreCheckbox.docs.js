import React from "react";

import {
  CoreH4, CoreTypographyBody1, CoreCheckbox, CoreIcon, CoreStack, CoreClasses, CoreBox, CoreAlert 
} from "@wrappid/core";

import CodeBlock from "../../CodeBlock";
import CodeImport from "../../CodeImport";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreCheckboxDocs() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  // const handleChange1 = (event) => {
  //   setChecked([event.target.checked, event.target.checked]);
  // };

  // const handleChange2 = (event) => {
  //   setChecked([event.target.checked, checked[1]]);
  // };

  // const handleChange3 = (event) => {
  //   setChecked([checked[0], event.target.checked]);
  // };

  const children = (
    <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.DIRECTION_COLUMN, CoreClasses.MARGIN.ML3]}>
      {/* <CoreFormControlLabel
        label="Child 1"
        control={<CoreCheckbox checked={checked[0]} onChange={handleChange2} />}
      />

      <CoreFormControlLabel
        label="Child 2"
        control={<CoreCheckbox checked={checked[1]} onChange={handleChange3} />}
      /> */}
    </CoreBox>
  );

  return (
    <>
      <CoreH4>CoreCheckbox</CoreH4>

      <CoreTypographyBody1>
        CoreCheckboxes allow the user to select one or more items from a set.
      </CoreTypographyBody1>

      <CoreTypographyBody1>
        CoreCheckboxes can be used to turn an option on or off.
      </CoreTypographyBody1>

      <CoreTypographyBody1>
        If you have multiple options appearing in a list, you can preserve space
        by using checkboxes instead of on/off switches. If you have a single
        option, avoid using a checkbox and use an on/off switch instead.
      </CoreTypographyBody1>

      <CodeImport name="CoreCheckbox" />

      <CodeSample
        title={"Basic checkboxes"}
        description={"Code Sample of basic CoreCheckbox"}
        code={`<CoreStack direction="row">
  <CoreCheckbox {...label} defaultChecked />

  <CoreCheckbox {...label} />

  <CoreCheckbox {...label} disabled />

  <CoreCheckbox {...label} disabled checked />
</CoreStack>`}
        renderElement={
          <>
            <CoreStack direction="row">
              <CoreCheckbox {...label} defaultChecked />

              <CoreCheckbox {...label} />

              <CoreCheckbox {...label} disabled />

              <CoreCheckbox {...label} disabled checked />
            </CoreStack>
          </>
        }
      />

      <CodeSample
        title={"Label (NOT_WORKING)"}
        description={
          <CoreTypographyBody1>
            You can provide a label to the <CodeBlock>Checkbox</CodeBlock>{" "}
            thanks to the

            <CodeBlock>FormControlLabel</CodeBlock>
            component.
          </CoreTypographyBody1>
        }
        code={`<CoreFormGroup>
  <CoreFormControlLabel control={<CoreCheckbox defaultChecked />} label="Label" />

  <CoreFormControlLabel required control={<CoreCheckbox />} label="Required" />

  <CoreFormControlLabel disabled control={<CoreCheckbox />} label="Disabled" />
</CoreFormGroup>`}
        renderElement={
          <>
            {/* <CoreFormGroup>
              <CoreFormControlLabel control={<CoreCheckbox defaultChecked />} label="Label" />

              <CoreFormControlLabel required control={<CoreCheckbox />} label="Required" />

              <CoreFormControlLabel disabled control={<CoreCheckbox />} label="Disabled" />
            </CoreFormGroup> */}
          </>
        }
      />

      <CoreAlert severity="warning">Size Warning: fontSize not used.</CoreAlert>

      <CodeSample
        title={"Size (SIZE_NOT_WORKING)"}
        description={
          <CoreTypographyBody1>
          Use the <CodeBlock>size</CodeBlock> prop or customize the font size of the svg icons to change the size of the checkboxes.
          </CoreTypographyBody1>
        }
        code={`<CoreStack diraction="row">
  <CoreCheckbox {...label} defaultChecked size="small" />

  <CoreCheckbox {...label} defaultChecked />

  <CoreCheckbox
    {...label}
    defaultChecked
    // sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
  />
</CoreStack>`}
        renderElement={
          <>
            <CoreCheckbox {...label} defaultChecked size="small" />

            <CoreCheckbox {...label} defaultChecked />

            <CoreCheckbox
              {...label}
              defaultChecked
              // sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
            />
          </>
        }
      />

      <CodeSample
        title={"Color (NOT_WORKING)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={
          <>
            <CoreCheckbox {...label} defaultChecked />

            <CoreCheckbox {...label} defaultChecked color="secondary" />

            <CoreCheckbox {...label} defaultChecked color="success" />

            <CoreCheckbox {...label} defaultChecked color="default" />

            <CoreCheckbox
              {...label}
              defaultChecked
              // sx={{
              //   "&.Mui-checked": { color: pink[600] },
              //   color          : pink[800],
              // }}
              styleClasses={[]}
            />
          </>
        }
      />

      <CoreAlert severity="error">Icon Error: CoreCheckbox icon not working.</CoreAlert>

      <CodeSample
        title={"Icon (NOT_WORKING)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={
          <>
            <CoreCheckbox {...label} icon={<CoreIcon icon="favorite_border"/>} checkedIcon="favorite" />

            <CoreCheckbox
              {...label}
              // icon="bookmark_border"
              // checkedIcon="bookmark"
            />
          </>}
      />

      <CodeSample
        title={"Controlled"}
        description={
          <CoreTypographyBody1>
          You can control the checkbox with the 
            <CodeBlock>checked</CodeBlock> and <CodeBlock>onChange</CodeBlock> props:
          </CoreTypographyBody1>}
        code={`<>
  <CoreCheckbox
    checked={checked}
    onChange={handleChange}
    inputProps={{ "aria-label": "controlled" }}
  />
</>`}
        renderElement={
          <>
            <CoreCheckbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </>
        }
      />

      <CoreAlert severity="error">indeterminate Error: indeterminate not working.</CoreAlert>

      <CodeSample
        title={"Indeterminate (Not Working)"}
        description={<CoreTypographyBody1>A checkbox input can only have two states in a form: checked or unchecked. It either submits its value or does not. Visually, there are <strong>three</strong> states a checkbox can be in: checked, unchecked, or indeterminate.</CoreTypographyBody1>}
        code={`<CoreStack direction="column">
  <CoreFormControlLabel
    label="Parent"
    control={
      <CoreCheckbox
        checked={checked[0] && checked[1]}
        onChange={handleChange1}
      />
    }
  />

  {children}
</CoreStack>`}
        renderElement={
          <>
          </>
        }
      />

      <CodeSample
        title={"FormGroup (NOT_DEFINED)"}
        description={<CoreTypographyBody1><CodeBlock>FormGroup</CodeBlock> is a helpful wrapper used to group selection control components.</CoreTypographyBody1>}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={
          <>
        
          </>
        }
      />

      <CodeSample
        title={"Label placement (NOT_DEFINED)"}
        description={"You can change the placement of the label:"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Accessibility (NOT_DEFINED)"}
        description={"You can change the placement of the label:"}
        code={`<Checkbox
  value="checkedA"
  inputProps={{
    'aria-label': 'Checkbox A',
  }}
/>`}
        renderElement={<></>}
      />

      <ComponentProps component={CoreCheckbox} />
    </>
  );
}
