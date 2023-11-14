import {
  CoreClasses,
  CoreH4,
  CoreLink,
  CoreStack,
  CoreTypographyBody1
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";
const preventDefault = (event) => event.preventDefault();

export default function CoreLinkDocs() {
  return (
    <>
      <CoreH4>CoreLink</CoreH4>
  
      <CoreTypographyBody1>
      The Link component allows you to easily customize anchor elements with your theme colors and typography styles.
      </CoreTypographyBody1>
  
      <CodeSample
        title={"Basic Corelinks (NOT_WORKING)"}
        description={"The Link component is built on top of the Typography component, meaning that you can use its props."}
        code={` <CoreStack
  styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
  spacing={2}
  direction="row"
  onClick={preventDefault}
>
  <CoreLink href="#">Link</CoreLink>

  <CoreLink href="#" color="inherit">
    {"color=\"inherit\""}
  </CoreLink>

  <CoreLink href="#" variant="body2">
    {"variant=\"body2\""}
  </CoreLink>
</CoreStack>`}
        renderElement={<>
          <CoreStack
            styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
            spacing={2}
            direction="row"
            onClick={preventDefault}
          >
            <CoreLink href="#">Link</CoreLink>

            <CoreLink href="#" color="inherit">
              {"color=\"inherit\""}
            </CoreLink>

            <CoreLink href="#" variant="body2">
              {"variant=\"body2\""}
            </CoreLink>
          </CoreStack>
        </>}
      />

      <CodeSample
        title={"Underline (NOT_WORKING)"}
        description={"The underline prop can be used to set the underline behavior. The default is always."}
        code={`<CoreStack
  styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
  spacing={2}
  direction="row"
  onClick={preventDefault}
>
  <CoreLink href="#" underline="none">
    {"underline=\"none\""}
  </CoreLink>

  <CoreLink href="#" underline="hover">
    {"underline=\"hover\""}
  </CoreLink>

  <CoreLink href="#" underline="always">
    {"underline=\"always\""}
  </CoreLink>
</CoreStack>`}
        renderElement={<>
          <CoreStack
            styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
            spacing={2}
            direction="row"
            onClick={preventDefault}
          >
            <CoreLink href="#" underline="none">
              {"underline=\"none\""}
            </CoreLink>

            <CoreLink href="#" underline="hover">
              {"underline=\"hover\""}
            </CoreLink>

            <CoreLink href="#" underline="always">
              {"underline=\"always\""}
            </CoreLink>
          </CoreStack>
        </>}
      />

      <CodeSample
        title={"Security(NOT_DEFINED)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />
        
      {/* <ComponentProps component={CoreLink} /> */}
      
    </>
  );
}