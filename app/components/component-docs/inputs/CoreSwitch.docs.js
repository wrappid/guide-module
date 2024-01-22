import React from "react";

import {
  CoreH4,
  CoreTypographyBody1,
  CoreSwitch,
  CoreStack,
  CoreClasses,
  CoreAlert
} from "@wrappid/core";

import CodeBlock from "../../CodeBlock";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreSwitchDocs() {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <CoreH4>CoreSwitch</CoreH4>

      <CoreTypographyBody1>
        Switches toggle the state of a single setting on or off.
      </CoreTypographyBody1>

      <CoreTypographyBody1>
        Switches are the preferred way to adjust settings on mobile. The option
        that the switch controls, as well as the state it{"'"}s in, should be
        made clear from the corresponding inline label.
      </CoreTypographyBody1>

      <CodeSample
        title={"Basic switches"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`<CoreStack
  spacing={2}
  direction="row"
  styleClasses={[CoreClasses.MARGIN.M1]}
>
  <CoreSwitch {...label} defaultChecked />

  <CoreSwitch {...label} />

  <CoreSwitch {...label} disabled defaultChecked />

  <CoreSwitch {...label} disabled />
</CoreStack>`}
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

      <CoreAlert severity="error">
        {" "}
        CoreFormControlLabel Error: Not Working
      </CoreAlert>

      <CodeSample
        title={"Label"}
        description={
          <CoreTypographyBody1>
            You can provide a label to the <CodeBlock>Switch</CodeBlock> thanks

            to the <CodeBlock>FormControlLabel</CodeBlock> component.
          </CoreTypographyBody1>
        }
        code={`<CoreFormGroup>
  <CoreFormControlLabel control={<CoreSwitch defaultChecked />} label="Label" />

  <CoreFormControlLabel required control={<CoreSwitch />} label="Required" />

  <CoreFormControlLabel disabled control={<CoreSwitch />} label="Disabled" />
</CoreFormGroup>`}
        renderElement={<></>}
      />

      <CodeSample
        title={"Size"}
        description={
          <CoreTypographyBody1>
            Use the <CodeBlock>size</CodeBlock> prop to change the size of the
            switch.
          </CoreTypographyBody1>
        }
        code={`<CoreStack
  spacing={2}
  direction="row"
  styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}

>
  <CoreSwitch {...label} defaultChecked size="small" />

  <CoreSwitch {...label} defaultChecked />
</CoreStack>`}
        renderElement={
          <>
            <CoreStack
              spacing={1}
              direction="row"
              styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
            >
              <CoreSwitch {...label} defaultChecked size="small" />

              <CoreSwitch {...label} defaultChecked />
            </CoreStack>
          </>
        }
      />

      <CoreAlert severity="warning">
        {" "}
        Color Warn: Contains MUI imports - styled, pink, alpha
      </CoreAlert>

      <CodeSample
        title={"Color"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`<CoreStack
  spacing={2}
  direction="row"
  styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
>
  <CoreSwitch {...label} defaultChecked />

  <CoreSwitch {...label} defaultChecked color="secondary" />

  <CoreSwitch {...label} defaultChecked color="warning" />

  <CoreSwitch {...label} defaultChecked color="default" />

  <PinkSwitch {...label} defaultChecked />
</CoreStack>`}
        renderElement={
          <>
            <CoreStack
              spacing={2}
              direction="row"
              styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
            >
              <CoreSwitch {...label} defaultChecked />

              <CoreSwitch {...label} defaultChecked color="secondary" />

              <CoreSwitch {...label} defaultChecked color="warning" />

              <CoreSwitch {...label} defaultChecked color="default" />
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
        title={"Switches with FormGroup (NOT_WORKING)"}
        description={<CoreTypographyBody1><CodeBlock>CoreFormGroup</CodeBlock> is a helpful wrapper used to group selection controls components that provides an easier API. However, you are encouraged to use Checkboxes instead if multiple related controls are required.</CoreTypographyBody1>}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Customization (NOT_WORKING)"}
        description={"Here are some examples of customizing the component."}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Label placement (NOT_WORKING)"}
        description={"You can change the placement of the label:"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Accessibility (TODO)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <ComponentProps component={CoreSwitch} />
    </>
  );
}
