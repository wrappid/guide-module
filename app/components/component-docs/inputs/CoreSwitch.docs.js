import React from "react";

import {
  CoreTypographyBody1,
  CoreSwitch,
  CoreStack,
  CoreClasses,
  CoreFormControlLabel,
  CoreFormGroup,
  CoreFormHelperText,
  CoreFormControl
} from "@wrappid/core";

import CodeBlock from "../../CodeBlock";
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreSwitchDocs() {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const [state, setState] = React.useState({
    antoine: true,
    gilad  : true,
    jason  : false,
  });

  const handleChange1 = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <>
      <ComponentDocs
        component={CoreSwitch}
        description={
          <>
            <CoreTypographyBody1>
        Switches toggle the state of a single setting on or off.
            </CoreTypographyBody1>

            <CoreTypographyBody1>
        Switches are the preferred way to adjust settings on mobile. The option
        that the switch controls, as well as the state it{"'"}s in, should be
        made clear from the corresponding inline label.
            </CoreTypographyBody1>

          </>
        }
        samples={
          <>
            <CodeSample
              title={"Basic switches"}
              description={" "}
              code={`<CoreSwitch {...label} defaultChecked />
<CoreSwitch {...label} />
<CoreSwitch {...label} disabled defaultChecked />
<CoreSwitch {...label} disabled />`}
              expandedCode={`import {
  CoreSwitch,
  CoreStack,
  CoreClasses
} from "@wrappid/core";

export default function BasicSwitches() {
  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <CoreStack spacing={2} direction="row" styleClasses={[CoreClasses.MARGIN.M1]} >
      <CoreSwitch {...label} defaultChecked />
      <CoreSwitch {...label} />
      <CoreSwitch {...label} disabled defaultChecked />
      <CoreSwitch {...label} disabled />
    </CoreStack>
  );
}`}
              renderElement={
                <>
                  <CoreStack
                    spacing={2}
                    direction="row"
                    styleClasses={[CoreClasses.MARGIN.M1]}
                  >
                    <CoreSwitch {...label} defaultChecked />

                    <CoreSwitch {...label} />

                    <CoreSwitch {...label} disabled defaultChecked />

                    <CoreSwitch {...label} disabled />
                  </CoreStack>
                </>
              }
            />

            <CodeSample
              title={"Label"}
              description={
                <CoreTypographyBody1>
            You can provide a label to the <CodeBlock>Switch</CodeBlock> thanks

            to the <CodeBlock>FormControlLabel</CodeBlock> component.
                </CoreTypographyBody1>
              }
              code={`<CoreFormControlLabel control={<CoreSwitch defaultChecked />} label="Label" />
<CoreFormControlLabel control={<CoreSwitch required={true} />} label="Required" />
<CoreFormControlLabel control={<CoreSwitch disabled={true} />} label="Disabled" />`}
              expandedCode={`import { 
  CoreSwitch,
  CoreFormControlLabel,
  CoreFormGroup
} from "@wrappid/core";
  
export default function SwitchLabels() {
  return (
    <CoreFormGroup>
      <CoreFormControlLabel control={<CoreSwitch defaultChecked />} label="Label" />
      <CoreFormControlLabel control={<CoreSwitch required={true} />} label="Required" />
      <CoreFormControlLabel control={<CoreSwitch disabled={true} />} label="Disabled" />
    </CoreFormGroup>
  );  
}`}
              renderElement={<>
                <CoreFormGroup>
                  <CoreFormControlLabel control={<CoreSwitch defaultChecked />} label="Label" />

                  <CoreFormControlLabel control={<CoreSwitch required={true} />} label="Required" />

                  <CoreFormControlLabel control={<CoreSwitch disabled={true} />} label="Disabled" />
                </CoreFormGroup>
              </>}
            />

            <CodeSample
              title={"Size"}
              description={
                <CoreTypographyBody1>
            Use the <CodeBlock>size</CodeBlock> prop to change the size of the
            switch.
                </CoreTypographyBody1>
              }
              code={`<CoreSwitch {...label} defaultChecked size="small" />
<CoreSwitch {...label} defaultChecked />`}
              expandedCode={`import { CoreStack, CoreSwitch } from "@wrappid/core";

export default function SwitchesSize() {
  const label = { inputProps: { "aria-label": "Size switch demo" } };

  return (
    <CoreStack direction="row" spacing={2}>
      <CoreSwitch {...label} defaultChecked size="small" />
      <CoreSwitch {...label} defaultChecked />
    </CoreStack>
  );
}`}
              renderElement={
                <>
                  <CoreStack direction="row" spacing={2}>
                    <CoreSwitch {...label} defaultChecked size="small" />

                    <CoreSwitch {...label} defaultChecked />
                  </CoreStack>
                </>
              }
            />

            <CodeSample
              title={"Color"}
              description={"Chaange the color of switch."}
              code={`<CoreSwitch {...label} defaultChecked color="default" />
<CoreSwitch {...label} defaultChecked color="primary" />
<CoreSwitch {...label} defaultChecked color="secondary" />
<CoreSwitch {...label} defaultChecked color="error" />
<CoreSwitch {...label} defaultChecked color="info" />
<CoreSwitch {...label} defaultChecked color="success" />
<CoreSwitch {...label} defaultChecked color="warning" />`}
              expandedCode={`import { CoreSwitch, CoreStack } from "@wrappid/core";

export default function ColorSwitches() {
  const label = { inputProps: { "aria-label": "Size switch demo" } };

  return (
    <CoreStack spacing={2} direction="row" >
      <CoreSwitch {...label} defaultChecked color="default" />
      <CoreSwitch {...label} defaultChecked color="primary" />
      <CoreSwitch {...label} defaultChecked color="secondary" />
      <CoreSwitch {...label} defaultChecked color="error" />
      <CoreSwitch {...label} defaultChecked color="info" />
      <CoreSwitch {...label} defaultChecked color="success" />
      <CoreSwitch {...label} defaultChecked color="warning" />
    </CoreStack>
  );
}`}
              renderElement={
                <>
                  <CoreStack spacing={2} direction="row" >
                    <CoreSwitch {...label} defaultChecked color="default" />

                    <CoreSwitch {...label} defaultChecked color="primary" />

                    <CoreSwitch {...label} defaultChecked color="secondary" />

                    <CoreSwitch {...label} defaultChecked color="error" />

                    <CoreSwitch {...label} defaultChecked color="info" />

                    <CoreSwitch {...label} defaultChecked color="success" />

                    <CoreSwitch {...label} defaultChecked color="warning" />
                  </CoreStack>
                </>
              }
            />

            <CodeSample
              title={"Controlled"}
              description={
                <CoreTypographyBody1>
            You can control the switch with the <CodeBlock>checked</CodeBlock>{" "}

            and <CodeBlock>onChange</CodeBlock> props:
                </CoreTypographyBody1>
              }
              code={`<CoreSwitch
  checked={checked}
  onChange={handleChange}
  inputProps={{ "aria-label": "controlled" }}
/>`}
              expandedCode={`import React from "react";

import { CoreSwitch } from "@wrappid/core";
  
export default function ControlledSwitches() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
     <CoreSwitch
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
      />
  );
}`}
              renderElement={
                <>
                  <CoreSwitch
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </>
              }
            />

            <CodeSample
              title={"Switches with FormGroup"}
              description={<CoreTypographyBody1><CodeBlock>CoreFormGroup</CodeBlock> is a helpful wrapper used to group selection controls components that provides an easier API. However, you are encouraged to use Checkboxes instead if multiple related controls are required.</CoreTypographyBody1>}
              code={"Na"}
              expandedCode={`import React from "react";

import {
  CoreTypographyBody1,
  CoreSwitch,
  CoreClasses,
  CoreFormControlLabel,
  CoreFormGroup,
  CoreFormControl,
  CoreFormHelperText
} from "@wrappid/core";
                
export default function SwitchesGroup() {
  const [state, setState] = React.useState({
    antoine: true,
    gilad  : true,
    jason  : false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <CoreFormControl styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]} component="fieldset" variant="standard">
      <CoreTypographyBody1>Assign responsibility</CoreTypographyBody1>
      <CoreFormGroup>
        <CoreFormControlLabel
          control={<CoreSwitch checked={state.gilad} onChange={handleChange} name="gilad" />}
          label="Gilad Gray"
        />
        <CoreFormControlLabel
          control={<CoreSwitch checked={state.jason} onChange={handleChange} name="jason" />}
          label="Jason Killian"
        />
        <CoreFormControlLabel
          control={<CoreSwitch checked={state.antoine} onChange={handleChange} name="antoine" />}
          label="Antoine Llorca"
        />
      </CoreFormGroup>
      <CoreFormHelperText>Be careful</CoreFormHelperText>
    </CoreFormControl>
  );                
}`}
              renderElement={<>
                <CoreFormControl styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]} component="fieldset" variant="standard">
                  <CoreTypographyBody1>Assign responsibility</CoreTypographyBody1>

                  <CoreFormGroup>
                    <CoreFormControlLabel
                      control={
                        <CoreSwitch checked={state.gilad} onChange={handleChange1} name="gilad" />
                      }
                      label="Gilad Gray"
                    />

                    <CoreFormControlLabel
                      control={
                        <CoreSwitch checked={state.jason} onChange={handleChange1} name="jason" />
                      }
                      label="Jason Killian"
                    />

                    <CoreFormControlLabel
                      control={
                        <CoreSwitch checked={state.antoine} onChange={handleChange1} name="antoine" />
                      }
                      label="Antoine Llorca"
                    />
                  </CoreFormGroup>

                  <CoreFormHelperText>Be careful</CoreFormHelperText>
                </CoreFormControl>
              </>}
            />

            <CodeSample
              title={"Customization (NOT_WORKING)"}
              description={"Here are some examples of customizing the component."}
              code={"PRE-FORMATTED_CODE_GOES_HERE"}
              renderElement={<></>}
            />

            <CodeSample
              title={"Label placement"}
              description={"You can change the placement of the label:"}
              code={"NA"}
              expandedCode={`import {
  CoreTypographyBody1,
  CoreSwitch,
  CoreClasses,
  CoreFormControlLabel,
  CoreFormGroup,
  CoreFormHelperText,
  CoreFormControl
} from "@wrappid/core";

export default function FormControlLabelPosition() {
  return (
    <CoreFormControl styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]} component="fieldset">
        <CoreTypographyBody1>Label placement</CoreTypographyBody1>
        <CoreFormGroup aria-label="position" row>
          <CoreFormControlLabel
            value="top"
            control={<CoreSwitch color="primary" />}
            label="Top"
            labelPlacement="top"
          />
          <CoreFormControlLabel
            value="start"
            control={<CoreSwitch color="primary" />}
            label="Start"
            labelPlacement="start"
          />
          <CoreFormControlLabel
            value="bottom"
            control={<CoreSwitch color="primary" />}
            label="Bottom"
            labelPlacement="bottom"
          />
          <CoreFormControlLabel
            value="end"
            control={<CoreSwitch color="primary" />}
            label="End"
            labelPlacement="end"
          />
        </CoreFormGroup>
      </CoreFormControl>
  );
}`}
              renderElement={<>
                <CoreFormControl styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]} component="fieldset">
                  <CoreTypographyBody1>Label placement</CoreTypographyBody1>

                  <CoreFormGroup aria-label="position" row>
                    <CoreFormControlLabel
                      value="top"
                      control={<CoreSwitch color="primary" />}
                      label="Top"
                      labelPlacement="top"
                    />

                    <CoreFormControlLabel
                      value="start"
                      control={<CoreSwitch color="primary" />}
                      label="Start"
                      labelPlacement="start"
                    />

                    <CoreFormControlLabel
                      value="bottom"
                      control={<CoreSwitch color="primary" />}
                      label="Bottom"
                      labelPlacement="bottom"
                    />

                    <CoreFormControlLabel
                      value="end"
                      control={<CoreSwitch color="primary" />}
                      label="End"
                      labelPlacement="end"
                    />
                  </CoreFormGroup>
                </CoreFormControl>
              </>}
            />
          </>
        }
      />
      
    </>
  );
}
