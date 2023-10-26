import {
  CoreH4,
  CoreTypographyBody1,
  CoreButton,
  CoreStack,
  CoreClasses
} from "@wrappid/core";

import CodeBlock from "../../../CodeBlock";
import CodeImport from "../../../CodeImport";
import CodeSample from "../../../CodeSample";
import ComponentProps from "../../../ComponentProps";

export default function CoreButtonDocs() {
  return (
    <>
      <CoreH4>CoreButton</CoreH4>

      <CoreTypographyBody1>
        CoreButton allow users to take actions, and make choices, with a single
        tap.
      </CoreTypographyBody1>

      <CoreTypographyBody1>
        Buttons communicate actions that users can take. They are typically
        placed throughout your UI, in places like:
      </CoreTypographyBody1>

      <CoreTypographyBody1>- Modal windows</CoreTypographyBody1>

      <CoreTypographyBody1>- Forms</CoreTypographyBody1>

      <CoreTypographyBody1>- Cards</CoreTypographyBody1>

      <CoreTypographyBody1>- Toolbars</CoreTypographyBody1>

      <></>
      <CodeImport name="CoreButton" />

      <CodeSample
        title={"Basic button"}
        description={
          <CoreTypographyBody1>
            The <CodeBlock>Button</CodeBlock> comes with three variants: text
            (default), contained, and outlined.
          </CoreTypographyBody1>
        }
        code={`<CoreStack spacing={2} direction="row" styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
  <CoreButton variant="text" label="Text" />

  <CoreButton variant="contained" label="Contained" />

  <CoreButton variant="outlined" label="Outlined" />
</CoreStack>`}
        renderElement={
          <>
            <CoreStack
              spacing={2}
              direction="row"
              styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
            >
              <CoreButton variant="text" label="Text" />

              <CoreButton variant="contained" label="Contained" />

              <CoreButton variant="outlined" label="Outlined" />
            </CoreStack>
          </>
        }
      />

      <CodeSample
        title={"Text Button"}
        description={
          "Text buttons are typically used for less-pronounced actions, including those located: in dialogs, in cards. In cards, text buttons help maintain an emphasis on card content."
        }
        code={`<CoreStack direction="row" spacing={2} styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
  <CoreButton label="Primary" />

  <CoreButton disabled label="Disabled" />

  <CoreButton href="#text-buttons" label = "Link" />
</CoreStack>`}
        renderElement={
          <>
            <CoreStack
              direction="row"
              spacing={2}
              styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
            >
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
        code={`<CoreStack direction="row" spacing={2} styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
  <CoreButton variant="contained" label="Contained"/>

  <CoreButton variant="contained" disabled label="Disabled" />

  <CoreButton variant="contained" href="#contained-buttons" label="Link"/>
</CoreStack>`}
        renderElement={
          <CoreStack
            direction="row"
            spacing={2}
            styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
          >
            <CoreButton variant="contained" label="Contained" />

            <CoreButton variant="contained" disabled label="Disabled" />

            <CoreButton
              variant="contained"
              href="#contained-buttons"
              label="Link"
            />
          </CoreStack>
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
        code={`<CoreStack direction="row" spacing={2} styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
  <CoreButton variant="outlined" label="Primary"/>

  <CoreButton variant="outlined" disabled label="Disabled"/>

  <CoreButton variant="outlined" href="#outlined-buttons" label="Link"/>
</CoreStack>`}
        renderElement={
          <CoreStack
            direction="row"
            spacing={2}
            styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
          >
            <CoreButton variant="outlined" label="Primary" />

            <CoreButton variant="outlined" disabled label="Disabled" />

            <CoreButton
              variant="outlined"
              href="#outlined-buttons"
              label="Link"
            />
          </CoreStack>
        }
      />

      <CodeSample
        title={"TITLE_OF_THE_SAMPLE (NOT_DEFINED)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"TITLE_OF_THE_SAMPLE (NOT_DEFINED)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"TITLE_OF_THE_SAMPLE (NOT_DEFINED)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"TITLE_OF_THE_SAMPLE (NOT_DEFINED)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"TITLE_OF_THE_SAMPLE (NOT_DEFINED)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"TITLE_OF_THE_SAMPLE (NOT_DEFINED)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"TITLE_OF_THE_SAMPLE (NOT_DEFINED)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"TITLE_OF_THE_SAMPLE (NOT_DEFINED)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <ComponentProps component={CoreButton} />
    </>
  );
}
