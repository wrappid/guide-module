import {
  CoreClasses,
  CoreConfirmPasswordField,
  CoreH4,
  CoreStack,
  CoreTypographyBody1
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";
  
export default function CoreConfirmPasswordFieldDocs() {
  return (
    <>
      <CoreH4>CoreConfirmPasswordField</CoreH4>
  
      <CoreTypographyBody1>
          COMPONENT_DESCRIPTION
      </CoreTypographyBody1>
  
      <CodeSample
        title={"TITLE_OF_THE_SAMPLE (NOT_DEFINED)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`
<CoreStack
    styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
    spacing={2}
    direction="row">
    <CoreConfirmPasswordField
      id="outlined-basic"
      label="Outlined"
      variant="outlined"
      value="Password"></CoreConfirmPasswordField>

    <CoreConfirmPasswordField
      id="filled-basic"
      label="Filled"
      variant="filled"
      value="Password"></CoreConfirmPasswordField>

    <CoreConfirmPasswordField
      id="standard-basic"
      label="Standard"
      variant="standard"
      value="pPasswordpp"></CoreConfirmPasswordField>
  </CoreStack>
        `}
        renderElement={<>
          <CoreStack
            styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
            spacing={2}
            direction="row">
            <CoreConfirmPasswordField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              value="Password"></CoreConfirmPasswordField>

            <CoreConfirmPasswordField
              id="filled-basic"
              label="Filled"
              variant="filled"
              value="Password"></CoreConfirmPasswordField>

            <CoreConfirmPasswordField
              id="standard-basic"
              label="Standard"
              variant="standard"
              value="pPasswordpp"></CoreConfirmPasswordField>
          </CoreStack>
        </>}
      />
        
      {/* eslint-disable-next-line etc/no-commented-out-code */}
      {/* <ComponentProps component={CoreConfirmPasswordField} /> */}
      
    </>
  );
}