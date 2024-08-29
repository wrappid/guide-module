import {
  CoreTypographyBody1,
  CoreButton,
  CoreStack,
  CoreClasses,
  CoreIcon,
  CoreList,
  CoreListItem,
  CoreBox,
  CoreCircularProgress
} from "@wrappid/core";

import CodeBlock from "../../CodeBlock";
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreButtonDocs() {

  return (
    <>
      <ComponentDocs
        component={CoreButton}
        description={
          <>
            <CoreTypographyBody1>
      CoreButton allow users to take actions, and make choices, with a single
      tap.
            </CoreTypographyBody1>

            <CoreTypographyBody1 styleClasses={[CoreClasses.MARGIN.M0]}>
      Buttons communicate actions that users can take. They are typically
      placed throughout your UI, in places like:
            </CoreTypographyBody1>

            <CoreList variant="HTML" listType="DISC">
              <CoreListItem>Modal windows</CoreListItem>

              <CoreListItem>Forms</CoreListItem>

              <CoreListItem>Cards</CoreListItem>

              <CoreListItem>Toolbars</CoreListItem>

            </CoreList>
          </>
        }
        samples={
          <>
            <CodeSample
              title={"Basic button"}
              description={
                <CoreTypographyBody1>
            The <CodeBlock>Button</CodeBlock> comes with three variants: text
            (default), contained, and outlined.
                </CoreTypographyBody1>
              }
              code={`<CoreButton variant="text" label="Text" />
<CoreButton variant="contained" label="Contained" />
<CoreButton variant="outlined" label="Outlined" />`}
              expandedCode={`import { CoreButton, CoreStack } from "@wrappid/core";

export default function BasicButtons() {
  return (
    <CoreStack spacing={2} direction="row" >
      <CoreButton variant="text" label="Text" />
      <CoreButton variant="contained" label="Contained" />
      <CoreButton variant="outlined" label="Outlined"/>
    </CoreStack>
  );
}`}
              renderElement={
                <>
                  <CoreStack spacing={2} direction="row">
                    <CoreButton variant="text" label="Text" />

                    <CoreButton variant="contained" label="Contained" />

                    <CoreButton variant="outlined" label="Outlined"/>
                  </CoreStack>
                </>
              }
            />

            <CodeSample
              title={"Text Button"}
              description={
                "Text buttons are typically used for less-pronounced actions, including those located: in dialogs, in cards. In cards, text buttons help maintain an emphasis on card content."
              }
              code={`<CoreButton label="Primary" />
<CoreButton disabled label="Disabled" />
<CoreButton href="#text-buttons" label="Link" />`}
              expandedCode={`import { CoreButton, CoreStack } from "@wrappid/core";

export default function TextButtons() {
  return (
    <CoreStack direction="row" spacing={2} >
      <CoreButton label="Primary" />
      <CoreButton disabled label="Disabled" />
      <CoreButton href="#text-buttons" label="Link" />
    </CoreStack>
  );
}`}
              renderElement={
                <>
                  <CoreStack direction="row" spacing={2} >
                    <CoreButton label="Primary" />

                    <CoreButton disabled label="Disabled" />

                    <CoreButton href="#text-buttons" label="Link" />
                  </CoreStack>
                </>
              }
            />

            <CodeSample
              title={"Contained button"}
              description={
                "Contained buttons are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app."
              }
              code={`<CoreButton variant="contained" label="Contained"/>
<CoreButton variant="contained" disabled label="Disabled" />
<CoreButton variant="contained" href="#contained-buttons" label="Link"/>`}
              expandedCode={`import { CoreButton, CoreStack } from "@wrappid/core";

export default function ContainedButtons() {
  return (
    <CoreStack direction="row" spacing={2} >
      <CoreButton variant="contained" label="Contained" />
      <CoreButton variant="contained" disabled label="Disabled" />
      <CoreButton variant="contained" href="#contained-buttons" label="Link" />
    </CoreStack>
  );
}`}
              renderElement={
                <CoreStack direction="row" spacing={2} >
                  <CoreButton variant="contained" label="Contained" />

                  <CoreButton variant="contained" disabled label="Disabled" />

                  <CoreButton variant="contained" href="#contained-buttons" label="Link" />
                </CoreStack>
              }
            />

            <CodeSample
              title={" "}
              description={"Remove the elevation with the disableElevation prop."}
              code={"<CoreButton variant=\"contained\" disableElevation label=\"Disable elevation\" />"}
              expandedCode={`import { CoreButton } from "@wrappid/core";

export default function DisableElevation() {
  return (
    <CoreButton variant="contained" disableElevation label="Disable elevation" />
  );
}`}
              renderElement={
                <>
                  <CoreButton variant="contained" disableElevation label="Disable elevation" />
                </>

              }
            />

            <CodeSample
              title={"Outlined button"}
              description={
                <>
                  <CoreTypographyBody1>
              Outlined buttons are medium-emphasis buttons. They contain actions
              that are important but are not the primary action in an app.
                  </CoreTypographyBody1>

                  <CoreTypographyBody1>
              Outlined buttons are also a lower emphasis alternative to
              contained buttons, or a higher emphasis alternative to text
              buttons.
                  </CoreTypographyBody1>
                </>
              }
              code={`<CoreButton variant="outlined" label="Primary" />
<CoreButton variant="outlined" disabled label="Disabled" />
<CoreButton variant="outlined" href="#outlined-buttons" label="Link" />`}
              expandedCode={`import { CoreStack, CoreButton } from "@wrappid/core";

export default function OutlinedButtons() {
  return (
    <CoreStack direction="row" spacing={2} >
      <CoreButton variant="outlined" label="Primary" />
      <CoreButton variant="outlined" disabled label="Disabled" />
      <CoreButton variant="outlined" href="#outlined-buttons" label="Link" />
    </CoreStack>
  );
}`}
              renderElement={
                <CoreStack direction="row" spacing={2} >
                  <CoreButton variant="outlined" label="Primary" />

                  <CoreButton variant="outlined" disabled label="Disabled" />

                  <CoreButton variant="outlined" href="#outlined-buttons" label="Link" />
                </CoreStack>
              }
            />

            <CodeSample
              title={"Handling clicks"}
              description={
                "All components accept an onClick handler that is applied to the root DOM element"
              }
              code={" <CoreButton onClick={() => {console.log(\"onClick function called\");}} label=\"Click Me\" />"}
              expandedCode={`import { CoreButton } from "@wrappid/core";

export default function HandlingClicks() {
  return (
     <CoreButton onClick={() => {console.log("onClick function called");}} label="Click Me" />
}`}
              renderElement={
                // eslint-disable-next-line no-console
                <CoreButton onClick={() => {console.log("onClick function called");}} label="Click Me" />
                      
              }
            />

            <CodeSample
              title={"Color"}
              description={"CoreButton with differnt color props value."}
              code={`<CoreButton variant="outlined" color="inherit" label="inherit" /> 
<CoreButton variant="outlined" color="primary" label="primary" /> 
<CoreButton variant="outlined" color="secondary" label="secondary" /> 
<CoreButton variant="outlined" color="success" label="success" /> 
<CoreButton variant="outlined" color="error" label="error" /> 
<CoreButton variant="outlined" color="info" label="info" /> 
<CoreButton variant="outlined" color="warning" label="warning" /> `}
              expandedCode={`import { CoreStack, CoreButton } from "@wrappid/core";

export default function ColorButtons() {
  return (
    <CoreStack direction="row" spacing={2} >
      <CoreButton variant="outlined" color="inherit" label="inherit" /> 
      <CoreButton variant="outlined" color="primary" label="primary" /> 
      <CoreButton variant="outlined" color="secondary" label="secondary" /> 
      <CoreButton variant="outlined" color="success" label="success" /> 
      <CoreButton variant="outlined" color="error" label="error" /> 
      <CoreButton variant="outlined" color="info" label="info" /> 
      <CoreButton variant="outlined" color="warning" label="warning" /> 
</CoreStack>
  );
}`}
              renderElement={
                <>
                  <CoreStack direction="row" spacing={2} >

                    <CoreButton variant="outlined" color="inherit" label="inherit" /> 

                    <CoreButton variant="outlined" color="primary" label="primary" /> 

                    <CoreButton variant="outlined" color="secondary" label="secondary" /> 

                    <CoreButton variant="outlined" color="success" label="success" /> 

                    <CoreButton variant="outlined" color="error" label="error" /> 

                    <CoreButton variant="outlined" color="info" label="info" /> 

                    <CoreButton variant="outlined" color="warning" label="warning" /> 
                       
                  </CoreStack>
                </>
              }
            />

            <CodeSample
              title={"Sizes"}
              description={"For larger or smaller buttons, use the size prop."}
              code={"NA"}
              expandedCode={`import { CoreButton, CoreBox, CoreClasses } from "@wrappid/core";

export default function ButtonSizes() {
  return (
    <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.DIRECTION_COLUMN, CoreClasses.WIDTH.W_100]}>
      <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.MARGIN.MR4]}>
        <CoreButton variant="text" size="small" label="Small" />
        <CoreButton variant="text" size="medium" label="Medium" />
        <CoreButton variant="text" size="large" label="Large" />
      </CoreBox>

      <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.MARGIN.M1]}>
        <CoreButton variant="outlined" size="small" label="Small" />
        <CoreButton variant="outlined" size="medium" label="Medium" />
        <CoreButton variant="outlined" size="large" label="Large" />
      </CoreBox>

      <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.MARGIN.M1]}>
        <CoreButton variant="contained" size="small" label="Small" />
        <CoreButton variant="contained" size="medium" label="Medium" />
        <CoreButton variant="contained" size="large" label="Large" />
      </CoreBox>
    </CoreBox>
  );
}`}
              renderElement={
                <>
                  <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.DIRECTION_COLUMN, CoreClasses.WIDTH.W_100]}>
                    <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.MARGIN.MR4]}>
                      <CoreButton variant="text" size="small" label="Small" />

                      <CoreButton variant="text" size="medium" label="Medium" />

                      <CoreButton variant="text" size="large" label="Large" />
                    </CoreBox>

                    <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.MARGIN.M1]}>
                    
                      <CoreButton variant="outlined" size="small" label="Small" />

                      <CoreButton variant="outlined" size="medium" label="Medium" />

                      <CoreButton variant="outlined" size="large" label="Large" />
                    </CoreBox>

                    <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.MARGIN.M1]}>

                      <CoreButton variant="contained" size="small" label="Small" />

                      <CoreButton variant="contained" size="medium" label="Medium" />

                      <CoreButton variant="contained" size="large" label="Large" />
                    </CoreBox>
                  </CoreBox>
                </>
              }
            />

            <CodeSample
              title={"Buttons with icons and label"}
              description={
                "Sometimes you might want to have icons for certain buttons to enhance the UX of the application as we recognize logos more easily than plain text. For example, if you have a delete button you can label it with a dustbin icon."
              }
              code={`<CoreButton variant="outlined" startIcon={<CoreIcon icon="delete" />} label="Delete"/>
<CoreButton variant="contained" endIcon={<CoreIcon icon="send" />} label="Send"/>`}
              expandedCode={`import { CoreStack, CoreButton, CoreIcon } from "@wrappid/core";

export default function IconLabelButtons() {
  return (
    <CoreStack direction="row" spacing={2} >
      <CoreButton variant="outlined" startIcon={<CoreIcon icon="delete" />} label="Delete"/>
      <CoreButton variant="contained" endIcon={<CoreIcon icon="send" />} label="Send"/>
    </CoreStack>
  );
}`}
              renderElement={
                <>
                  <CoreStack direction="row" spacing={2} >
                    <CoreButton variant="outlined" startIcon={<CoreIcon icon="delete" />} label="Delete"/>

                    <CoreButton variant="contained" endIcon={<CoreIcon icon="send" />} label="Send"/>
                      
                  </CoreStack>
                </>
              }
            />

            <CodeSample
              title={"File Upload"}
              description={
                <CoreTypographyBody1>
            To create a file upload button, turn the button into a label using{" "}

                  <CodeBlock>component=label</CodeBlock> and then create a

            visually-hidden input with type <CodeBlock>file</CodeBlock>.
                </CoreTypographyBody1>
              }
              code={`<CoreButton
  component="label"
  variant="contained"
  onClick={() => {}}
  startIcon={<CoreIcon icon="cloud_upload" />}
  lqbel="Upload file"
/>`}
              expandedCode={`import { CoreButton, CoreIcon } from "@wrappid/core";

export default function InputFileUpload() {
  return (
     <CoreButton
      component="label"
      variant="contained"
      onClick={() => {}}
      startIcon={<CoreIcon icon="cloud_upload" />}
      lqbel="Upload file"
    />
  );
}`}
              renderElement={
                <>
                  <CoreButton
                    component="label"
                    variant="contained"
                    onClick={() => {}}
                    startIcon={<CoreIcon icon="cloud_upload" />}
                    lqbel="Upload file"
                  />
                </>
              }
            />

            <CodeSample title={"Customization (NOT_DEFINED)"} description={" "} />

            <CodeSample
              title={"Complex Button (NOT_IMPLEMENTED)"}
              description={
                "The Text Buttons, Contained Buttons, Floating Action Buttons and Icon Buttons are built on top of the same component: the ButtonBase. You can take advantage of this lower-level component to build custom interactions."
              }
              code={"PRE-FORMATTED_CODE_GOES_HERE"}
              renderElement={<></>}
            />

            <CodeSample
              title={"Loading button (NEED_REVIEW)"}
              description={
                "CoreLoading buttons can show loading state and disable interactions."
              }
              code={`<CoreButton
  variant="outlined"
  startIcon={ <CoreCircularProgress size={15} />}
  disabled={true}
  label=" " />

<CoreButton
  variant="outlined"
  disabled={true}
  label="loading..." />

<CoreButton
  variant="outlined"
  startIcon={ <CoreCircularProgress size={15} />}
  disabled={true}
  label="save" />`}
              expandedCode={`import { CoreButton, CoreCircularProgress } from "@wrappid/core";

export default function InputFileUpload() {
  return (
    <>
      <CoreButton
        variant="outlined"
        startIcon={ <CoreCircularProgress size={15} />}
        disabled={true}
        label=" " />

      <CoreButton
        variant="outlined"
        disabled={true}
        label="loading..." />

      <CoreButton
        variant="outlined"
        startIcon={ <CoreCircularProgress size={15} />}
        disabled={true}
        label="save" />
    </>
  );
}`}
              renderElement={
                <>
                  <CoreButton
                    variant="outlined"
                    startIcon={ <CoreCircularProgress size={15} />}
                    disabled={true}
                    label=" " />

                  <CoreButton
                    variant="outlined"
                    disabled={true}
                    label="loading..." />

                  <CoreButton
                    variant="outlined"
                    startIcon={ <CoreCircularProgress size={15} />}
                    disabled={true}
                    label="save" />
                </>
              }
            />

          </>
        }
      />

    </>
  );
}
