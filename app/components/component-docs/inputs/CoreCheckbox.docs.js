import React from "react";

import {
  CoreTypographyBody1, CoreCheckbox, CoreBox, CoreFormControlLabel, CoreFormGroup, CoreIcon, 
  CoreClasses,
  CoreFormHelperText,
  CoreFormControl,
  CoreFormLabelCheckbox,
  CoreH4
} from "@wrappid/core";

import CodeBlock from "../../CodeBlock";
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function CoreCheckboxDocs() {
  const [checkedData, setcheckedData] = React.useState(true);
  const [state, setState] = React.useState({
    antoine: false,
    gilad  : true,
    jason  : false,
  });

  const handleChangeFrormGroup = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((value) => value).length !== 2;

  const handleChange = (event) => {
    setcheckedData(event.target.checkedData);
  };

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
    <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.DIRECTION_COLUMN, CoreClasses.PADDING.PL2]}>
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
      <ComponentDocs
        component={CoreCheckbox}
        description={
          <>
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

          </>
        }
        samples={
          <>
            <CodeSample
              title={"Basic checkboxes"}
              description={"Code Sample of basic CoreCheckbox"}
              code={`<CoreCheckbox {...label} defaultChecked />
<CoreCheckbox {...label} />
<CoreCheckbox {...label} disabled />
<CoreCheckbox {...label} disabled checked />`}
              expandedCode={`import { CoreBox, CoreCheckbox } from "@wrappid/core";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function InputFileUpload() {

  return (
    <CoreBox>
      <CoreCheckbox {...label} defaultChecked />
      <CoreCheckbox {...label} />
      <CoreCheckbox {...label} disabled />
      <CoreCheckbox {...label} disabled checked />
    </CoreBox>
  );
}`}
              renderElement={
                <>
                  <CoreBox>
                    <CoreCheckbox {...label} defaultChecked />

                    <CoreCheckbox {...label} />

                    <CoreCheckbox {...label} disabled />

                    <CoreCheckbox {...label} disabled checked />
                  </CoreBox>
                </>
              }
            />

            <CodeSample
              title={"Label"}
              description={
                <CoreTypographyBody1>
            You can provide a label to the <CodeBlock>Checkbox</CodeBlock>{" "}
            thanks to the

                  <CodeBlock>CoreFormControlLabel</CodeBlock>
            component.
                </CoreTypographyBody1>
              }
              code={`<CoreFormGroup>
  <CoreFormControlLabel control={<CoreCheckbox defaultChecked />} label="Label" />
  <CoreFormControlLabel required control={<CoreCheckbox />} label="Required" />
  <CoreFormControlLabel disabled control={<CoreCheckbox />} label="Disabled" />
</CoreFormGroup>`}
              expandedCode={`import { CoreCheckbox, CoreFormControlLabel, CoreFormGroup } from "@wrappid/core";

export default function CheckboxLabels() {
  return (
    <CoreFormGroup>
      <CoreFormControlLabel control={<CoreCheckbox defaultChecked />} label="Label" />
      <CoreFormControlLabel required control={<CoreCheckbox />} label="Required" />
      <CoreFormControlLabel disabled control={<CoreCheckbox />} label="Disabled" />
    </CoreFormGroup>
  );
}`}
              renderElement={
                <>
                  <CoreFormGroup>
                    <CoreFormControlLabel control={<CoreCheckbox defaultChecked />} label="Label" />

                    <CoreFormControlLabel required control={<CoreCheckbox />} label="Required" />

                    <CoreFormControlLabel disabled control={<CoreCheckbox />} label="Disabled" />
                  </CoreFormGroup>
                </>
              }
            />

            <CodeSample
              title={"Size"}
              description={
                <CoreTypographyBody1>
          Use the <CodeBlock>size</CodeBlock> prop or customize the font size of the svg icons to change the size of the checkboxes.
                </CoreTypographyBody1>
              }
              code={`<CoreCheckbox {...label} defaultChecked size="small" />
<CoreCheckbox {...label} defaultChecked />`}
              expandedCode={`import { CoreCheckbox } from "@wrappid/core";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function SizeCoreCheckbox() {

  return (
    <>
      <CoreCheckbox {...label} defaultChecked size="small" />
      <CoreCheckbox {...label} defaultChecked />
    </>
  );
}`}
              renderElement={
                <>
                  <CoreCheckbox {...label} defaultChecked size="small" />

                  <CoreCheckbox {...label} defaultChecked />
      
                </>
              }
            />

            <CodeSample
              title={"Color"}
              description={" "}
              code={`<CoreCheckbox {...label} defaultChecked />
<CoreCheckbox {...label} defaultChecked color="secondary" />
<CoreCheckbox {...label} defaultChecked color="success" />
<CoreCheckbox {...label} defaultChecked color="default" />`}
              expandedCode={`import { CoreCheckbox } from "@wrappid/core";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function ColorCheckboxes() {

  return (
    <>     
      <CoreCheckbox {...label} defaultChecked />
      <CoreCheckbox {...label} defaultChecked color="secondary" />
      <CoreCheckbox {...label} defaultChecked color="success" />
      <CoreCheckbox {...label} defaultChecked color="default" />
    </>
  );
}`}
              renderElement={
                <>
                  <CoreCheckbox {...label} defaultChecked />

                  <CoreCheckbox {...label} defaultChecked color="secondary" />

                  <CoreCheckbox {...label} defaultChecked color="success" />

                  <CoreCheckbox {...label} defaultChecked color="default" />

                </>
              }
            />
            
            <CodeSample
              title={"Icon"}
              description={" "}
              code={`<CoreCheckbox {...label} icon={<CoreIcon icon="favorite_border"/>} checkedIcon={<CoreIcon icon="favorite"/>}/>
<CoreCheckbox {...label} icon={<CoreIcon icon="bookmark_border"/>} checkedIcon={<CoreIcon icon="bookmark"/>}/>`}
              expandedCode={`import { CoreCheckbox, CoreIcon } from "@wrappid/core";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function IconCheckboxes() {
  return (
    <>     
      <CoreCheckbox {...label} icon={<CoreIcon icon="favorite_border"/>} checkedIcon={<CoreIcon icon="favorite"/>}/>
      <CoreCheckbox {...label} icon={<CoreIcon icon="bookmark_border"/>} checkedIcon={<CoreIcon icon="bookmark"/>}/>
    </>
  );
}`}
              renderElement={
                <>
                  <CoreCheckbox {...label} icon={<CoreIcon icon="favorite_border"/>} checkedIcon={<CoreIcon icon="favorite"/>}/>

                  <CoreCheckbox {...label} icon={<CoreIcon icon="bookmark_border"/>} checkedIcon={<CoreIcon icon="bookmark"/>}/>
                </>}
            />

            <CodeSample
              title={"Controlled"}
              description={
                <CoreTypographyBody1>
          You can control the checkbox with the 
                  <CodeBlock>checked</CodeBlock> and 

                  <CodeBlock>onChange</CodeBlock> props:
                </CoreTypographyBody1>}
              code={`<>
  <CoreCheckbox
    checked={checked}
    onChange={handleChange}
    inputProps={{ "aria-label": "controlled" }}
  />
</>`}
              expandedCode={`import React from "react";

import { CoreCheckbox } from "@wrappid/core";
export default function ControlledCheckbox() {
  const [checkedData, setcheckedData] = React.useState(true);

  const handleChange = (event) => {
    setcheckedData(event.target.checkedData);
  };

  return (
    <>     
      <CoreCheckbox
        checked={checkedData}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
    </>
  );
}`}
              renderElement={
                <>
                  <CoreCheckbox
                    checked={checkedData}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </>
              }
            />

            <CodeSample
              title={"Indeterminate"}
              description={<CoreTypographyBody1>A checkbox input can only have two states in a form: checked or unchecked. It either submits its value or does not. Visually, there are <strong>three</strong> states a checkbox can be in: checked, unchecked, or indeterminate.</CoreTypographyBody1>}
              code={`<CoreBox>
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
</CoreBox>`}
              expandedCode={`
import React from "react";

import { CoreBox, CoreCheckbox, CoreClasses, CoreFormControlLabel } from "@wrappid/core";
export default function IndeterminateCheckbox() {

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
    <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.DIRECTION_COLUMN, CoreClasses.PADDING.PL2]}>
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
      <CoreBox>
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
      </CoreBox>
    </>
  );
}`}
              renderElement={
                <>
                  <CoreBox>
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
                  </CoreBox>
                </>
              }
            />

            <CodeSample
              title={"FormGroup (NOT_WORKING)"}
              description={<CoreTypographyBody1><CodeBlock>FormGroup</CodeBlock> is a helpful wrapper used to group selection control components.</CoreTypographyBody1>}
              code={`<CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX]}>
  <CoreFormControl styleClasses={[CoreClasses.MARGIN.M3]} component="fieldset" variant="standard">
    <CoreFormLabelCheckbox component="legend">Assign responsibility</CoreFormLabelCheckbox>

    <CoreFormGroup>
      <CoreFormControlLabel
        control={
          <CoreCheckbox checked={gilad} onChange={handleChangeFrormGroup} name="gilad" />
        }
        label="Gilad Gray"
      />

      <CoreFormControlLabel
        control={
          <CoreCheckbox checked={jason} onChange={handleChangeFrormGroup} name="jason" />
        }
        label="Jason Killian"
      />

      <CoreFormControlLabel
        control={
          <CoreCheckbox checked={antoine} onChange={handleChangeFrormGroup} name="antoine" />
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
    styleClasses={[CoreClasses.MARGIN.M3]}
    variant="standard"
  >
    <CoreFormLabelCheckbox component="legend">Pick two</CoreFormLabelCheckbox>

    <CoreFormGroup>
      <CoreFormControlLabel
        control={
          <CoreCheckbox checked={gilad} onChange={handleChangeFrormGroup} name="gilad" />
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
</CoreBox>`}
              renderElement={
                <>
                  <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX]}>
                    <CoreFormControl styleClasses={[CoreClasses.MARGIN.M3]} component="fieldset" variant="standard">
                      <CoreFormLabelCheckbox component="legend">Assign responsibility</CoreFormLabelCheckbox>

                      <CoreFormGroup>
                        <CoreFormControlLabel
                          control={
                            <CoreCheckbox checked={gilad} onChange={handleChangeFrormGroup} name="gilad" />
                          }
                          label="Gilad Gray"
                        />

                        <CoreFormControlLabel
                          control={
                            <CoreCheckbox checked={jason} onChange={handleChangeFrormGroup} name="jason" />
                          }
                          label="Jason Killian"
                        />

                        <CoreFormControlLabel
                          control={
                            <CoreCheckbox checked={antoine} onChange={handleChangeFrormGroup} name="antoine" />
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
                      styleClasses={[CoreClasses.MARGIN.M3]}
                      variant="standard"
                    >
                      <CoreFormLabelCheckbox component="legend">Pick two</CoreFormLabelCheckbox>

                      <CoreFormGroup>
                        <CoreFormControlLabel
                          control={
                            <CoreCheckbox checked={gilad} onChange={handleChangeFrormGroup} name="gilad" />
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
                  </CoreBox>
                </>
              }
            />
  
            <CodeSample
              title={"Label placement"}
              description={<CoreTypographyBody1><CodeBlock>FormGroup</CodeBlock> is a helpful wrapper used to group selection control components.</CoreTypographyBody1>}
              code={`<CoreFormGroup aria-label="position" row>
  <CoreFormControlLabel
    value="top"
    control={<CoreCheckbox />}
    label="Top"
    labelPlacement="top"
  />

  <CoreFormControlLabel
    value="start"
    control={<CoreCheckbox />}
    label="Start"
    labelPlacement="start"
  />

  <CoreFormControlLabel
    value="bottom"
    control={<CoreCheckbox />}
    label="Bottom"
    labelPlacement="bottom"
  />

  <CoreFormControlLabel
    value="end"
    control={<CoreCheckbox />}
    label="End"
    labelPlacement="end"
  />
</CoreFormGroup>`}
              expandedCode={`import { CoreCheckbox, CoreFormControlLabel, CoreFormGroup } from "@wrappid/core";

export default function LabelPlacement() {
  return (
    <CoreFormGroup aria-label="position" row>
      <CoreFormControlLabel
        value="top"
        control={<CoreCheckbox />}
        label="Top"
        labelPlacement="top"
      />

      <CoreFormControlLabel
        value="start"
        control={<CoreCheckbox />}
        label="Start"
        labelPlacement="start"
      />

      <CoreFormControlLabel
        value="bottom"
        control={<CoreCheckbox />}
        label="Bottom"
        labelPlacement="bottom"
      />

      <CoreFormControlLabel
        value="end"
        control={<CoreCheckbox />}
        label="End"
        labelPlacement="end"
      />
    </CoreFormGroup>
  );
}`}
              renderElement={
                <>
                  <CoreFormGroup aria-label="position" row>
                    <CoreFormControlLabel
                      value="top"
                      control={<CoreCheckbox />}
                      label="Top"
                      labelPlacement="top"
                    />

                    <CoreFormControlLabel
                      value="start"
                      control={<CoreCheckbox />}
                      label="Start"
                      labelPlacement="start"
                    />

                    <CoreFormControlLabel
                      value="bottom"
                      control={<CoreCheckbox />}
                      label="Bottom"
                      labelPlacement="bottom"
                    />

                    <CoreFormControlLabel
                      value="end"
                      control={<CoreCheckbox />}
                      label="End"
                      labelPlacement="end"
                    />
                  </CoreFormGroup>
                </>
              }
            />

            <CodeSample
              title={"Customization"}
              description={<CoreH4>Color</CoreH4>}
              code={"NA"}
              expandedCode={`import { CoreCheckbox, CoreClasses, CoreIcon } from "@wrappid/core";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function CustomColorCoreCheckbox() {

  return (
    <>
      <CoreCheckbox
        {...label}
        icon={<CoreIcon styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY]}>check_box_outline_blank</CoreIcon>}
        checkedIcon={<CoreIcon styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY]}>check_box</CoreIcon>}
      />

      <CoreCheckbox
        {...label}
        icon={<CoreIcon styleClasses={[CoreClasses.COLOR.TEXT_SUCCESS]}>check_box_outline_blank</CoreIcon>}
        checkedIcon={<CoreIcon styleClasses={[CoreClasses.COLOR.TEXT_SUCCESS]}>check_box</CoreIcon>}
      />

      <CoreCheckbox
        {...label}
        icon={<CoreIcon styleClasses={[CoreClasses.COLOR.TEXT_ERROR_LIGHT]}>check_box_outline_blank</CoreIcon>}
        checkedIcon={<CoreIcon styleClasses={[CoreClasses.COLOR.TEXT_ERROR_LIGHT]}>check_box</CoreIcon>}
      />
    </>
  );
}`}
              renderElement={
                <>
                  <CoreCheckbox
                    {...label}
                    icon={<CoreIcon styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY]}>check_box_outline_blank</CoreIcon>}
                    checkedIcon={<CoreIcon styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY]}>check_box</CoreIcon>}
                  />

                  <CoreCheckbox
                    {...label}
                    icon={<CoreIcon styleClasses={[CoreClasses.COLOR.TEXT_SUCCESS]}>check_box_outline_blank</CoreIcon>}
                    checkedIcon={<CoreIcon styleClasses={[CoreClasses.COLOR.TEXT_SUCCESS]}>check_box</CoreIcon>}
                  />

                  <CoreCheckbox
                    {...label}
                    icon={<CoreIcon styleClasses={[CoreClasses.COLOR.TEXT_ERROR_LIGHT]}>check_box_outline_blank</CoreIcon>}
                    checkedIcon={<CoreIcon styleClasses={[CoreClasses.COLOR.TEXT_ERROR_LIGHT]}>check_box</CoreIcon>}
                  />
                </>
              }
            />

            <CodeSample
              title={" "}
              description={
                <>
                  <CoreH4>Size</CoreH4>

                  <CoreTypographyBody1> 
                  </CoreTypographyBody1>
                </>

              }
              code={"NA"}
              expandedCode={`import { CoreCheckbox, CoreIcon } from "@wrappid/core";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function CustomSizeCoreCheckbox() {

  return (
    <>
      <CoreCheckbox
        {...label}
        icon={<CoreIcon fontSize="small" >check_box_outline_blank</CoreIcon>}
        checkedIcon={<CoreIcon fontSize="small">check_box</CoreIcon>}
      />

      <CoreCheckbox
        {...label}
        icon={<CoreIcon >check_box_outline_blank</CoreIcon>}
        checkedIcon={<CoreIcon >check_box</CoreIcon>}
      />

      <CoreCheckbox
        {...label}
        icon={<CoreIcon fontSize="large" >check_box_outline_blank</CoreIcon>}
        checkedIcon={<CoreIcon fontSize="large">check_box</CoreIcon>}
      />
    </>
  );
}`}
              renderElement={
                <>
                  <CoreCheckbox
                    {...label}
                    icon={<CoreIcon fontSize="small" >check_box_outline_blank</CoreIcon>}
                    checkedIcon={<CoreIcon fontSize="small">check_box</CoreIcon>}
                  />

                  <CoreCheckbox
                    {...label}
                    icon={<CoreIcon >check_box_outline_blank</CoreIcon>}
                    checkedIcon={<CoreIcon >check_box</CoreIcon>}
                  />

                  <CoreCheckbox
                    {...label}
                    icon={<CoreIcon fontSize="large" >check_box_outline_blank</CoreIcon>}
                    checkedIcon={<CoreIcon fontSize="large">check_box</CoreIcon>}
                  />
                </>
              }
            />
          </>
        }
      />
    </>
  );
}
