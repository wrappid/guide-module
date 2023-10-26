import { styled } from "@mui/material/styles";
import {
  CoreH4,
  CoreTypographyBody1,
  CoreButton,
  CoreStack,
  CoreClasses,
  CoreBox,
  CoreIcon,
  CoreIconButton
} from "@wrappid/core";

import CodeBlock from "../../../CodeBlock";
import CodeImport from "../../../CodeImport";
import CodeSample from "../../../CodeSample";
import ComponentProps from "../../../ComponentProps";

export default function CoreButtonDocs() {
  const VisuallyHiddenInput = styled("input")({
    bottom    : 0,
    clip      : "rect(0 0 0 0)",
    clipPath  : "inset(50%)",
    height    : 1,
    left      : 0,
    overflow  : "hidden",
    position  : "absolute",
    whiteSpace: "nowrap",
    width     : 1,
  });

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
              <CoreButton variant="text" label="Text" onClick={() => {}} />

              <CoreButton
                variant="contained"
                label="Contained"
                onClick={() => {}}
              />

              <CoreButton
                variant="outlined"
                label="Outlined"
                onClick={() => {}}
              />
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
              <CoreButton label="Primary" onClick={() => {}} />

              <CoreButton disabled label="Disabled" onClick={() => {}} />

              <CoreButton
                href="#text-buttons"
                label="Link"
                onClick={() => {}}
              />
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
            <CoreButton
              variant="contained"
              label="Contained"
              onClick={() => {}}
            />

            <CoreButton
              variant="contained"
              disabled
              label="Disabled"
              onClick={() => {}}
            />

            <CoreButton
              variant="contained"
              href="#contained-buttons"
              label="Link"
              onClick={() => {}}
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
            <CoreButton variant="outlined" label="Primary" onClick={() => {}} />

            <CoreButton
              variant="outlined"
              disabled
              label="Disabled"
              onClick={() => {}}
            />

            <CoreButton
              variant="outlined"
              href="#outlined-buttons"
              label="Link"
              onClick={() => {}}
            />
          </CoreStack>
        }
      />

      <CodeSample
        title={"Handling clicks"}
        description={
          "All components accept an onClick handler that is applied to the root DOM element"
        }
        code={`<CoreStack
  direction="row"
  spacing={2}
  styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
  <CoreButton
    onClick={() => {
      alert("clicked");
    }}>Click Me</CoreButton>
</CoreStack>`}
        renderElement={
          <>
            <CoreStack
              direction="row"
              spacing={2}
              styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
            >
              <CoreButton
                onClick={() => {
                  alert("clicked");
                }}
              >
                Click Me
              </CoreButton>
            </CoreStack>
          </>
        }
      />

      <CodeSample
        title={"Color"}
        description={"Using Default Colors"}
        code={`<CoreStack direction="row" spacing={2} styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
  <CoreButton color="secondary">Secondary</CoreButton>

  <CoreButton variant="contained" color="success">
      Success
  </CoreButton>

  <CoreButton variant="outlined" color="error">
      Error
  </CoreButton>
</CoreStack>`}
        renderElement={
          <>
            <CoreStack
              direction="row"
              spacing={2}
              styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
            >
              <CoreButton color="secondary">Secondary</CoreButton>

              <CoreButton variant="contained" color="success">
                Success
              </CoreButton>

              <CoreButton variant="outlined" color="error">
                Error
              </CoreButton>
            </CoreStack>
          </>
        }
      />

      <CodeSample
        title={"Size"}
        description={"For larger or smaller buttons, use the size prop."}
        code={`<CoreStack direction="row" spacing={2} styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
  <CoreBox styleClasses={[CoreClasses.MARGIN.M1]}>
    <div>
      <CoreButton size="small">Small</CoreButton>

      <CoreButton size="medium">Medium</CoreButton>

      <CoreButton size="large">Large</CoreButton>
    </div>

    <div>
      <CoreButton variant="outlined" size="small">
          Small
      </CoreButton>

      <CoreButton variant="outlined" size="medium">
          Medium
      </CoreButton>

      <CoreButton variant="outlined" size="large">
          Large
      </CoreButton>
    </div>

    <div>
      <CoreButton variant="contained" size="small">
          Small
      </CoreButton>

      <CoreButton variant="contained" size="medium">
          Medium
      </CoreButton>

      <CoreButton variant="contained" size="large">
          Large
      </CoreButton>
    </div>
  </CoreBox>
</CoreStack>`}
        renderElement={
          <>
            <CoreStack
              direction="row"
              spacing={2}
              styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
            >
              <CoreBox styleClasses={[CoreClasses.MARGIN.M1]}>
                <div>
                  <CoreButton size="small">Small</CoreButton>

                  <CoreButton size="medium">Medium</CoreButton>

                  <CoreButton size="large">Large</CoreButton>
                </div>

                <div>
                  <CoreButton variant="outlined" size="small">
                    Small
                  </CoreButton>

                  <CoreButton variant="outlined" size="medium">
                    Medium
                  </CoreButton>

                  <CoreButton variant="outlined" size="large">
                    Large
                  </CoreButton>
                </div>

                <div>
                  <CoreButton variant="contained" size="small">
                    Small
                  </CoreButton>

                  <CoreButton variant="contained" size="medium">
                    Medium
                  </CoreButton>

                  <CoreButton variant="contained" size="large">
                    Large
                  </CoreButton>
                </div>
              </CoreBox>
            </CoreStack>
          </>
        }
      />

      <CodeSample
        title={"Buttons with icons and label"}
        description={
          "Sometimes you might want to have icons for certain buttons to enhance the UX of the application as we recognize logos more easily than plain text. For example, if you have a delete button you can label it with a dustbin icon."
        }
        code={`<CoreStack direction="row" spacing={2} styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
<CoreButton variant="outlined" startIcon={<CoreIcon icon="delete" />} onClick={()=>{}}>
    Delete
</CoreButton>

<CoreButton variant="contained" endIcon={<CoreIcon icon="send" />} onClick={()=>{}}>
    Send
</CoreButton>`}
        renderElement={
          <>
            <CoreStack
              direction="row"
              spacing={2}
              styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
            >
              <CoreButton
                variant="outlined"
                startIcon={<CoreIcon icon="delete" />}
                onClick={() => {}}
              >
                Delete
              </CoreButton>

              <CoreButton
                variant="contained"
                endIcon={<CoreIcon icon="send" />}
                onClick={() => {}}
              >
                Send
              </CoreButton>
            </CoreStack>
          </>
        }
      />

      <CodeSample
        title={"Icon Button"}
        description={
          "Icons are also appropriate for toggle buttons that allow a single choice to be selected or deselected, such as adding or removing a star to an item."
        }
        code={`<CoreStack
  direction="row"
  spacing={1}
  styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
>
  <CoreIconButton aria-label="delete">
    <CoreIcon>delete</CoreIcon>
  </CoreIconButton>

  <CoreIconButton aria-label="delete" disabled color="primary">
    <CoreIcon>delete</CoreIcon>
  </CoreIconButton>

  <CoreIconButton color="secondary" aria-label="add an alarm">
    <CoreIcon>alarm</CoreIcon>
  </CoreIconButton>

  <CoreIconButton color="primary" aria-label="add to shopping cart">
    <CoreIcon>add_shopping_cart</CoreIcon>
  </CoreIconButton>
</CoreStack>`}
        renderElement={
          <>
            <CoreStack
              direction="row"
              spacing={1}
              styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
            >
              <CoreIconButton aria-label="delete">
                <CoreIcon>delete</CoreIcon>
              </CoreIconButton>

              <CoreIconButton aria-label="delete" disabled color="primary">
                <CoreIcon>delete</CoreIcon>
              </CoreIconButton>

              <CoreIconButton color="secondary" aria-label="add an alarm">
                <CoreIcon>alarm</CoreIcon>
              </CoreIconButton>

              <CoreIconButton color="primary" aria-label="add to shopping cart">
                <CoreIcon>add_shopping_cart</CoreIcon>
              </CoreIconButton>
            </CoreStack>
          </>
        }
      />

      <CodeSample
        title={"Sizes"}
        description={
          <CoreTypographyBody1>
            For larger or smaller icon buttons, use the
            <CodeBlock>size</CodeBlock> prop.
          </CoreTypographyBody1>
        }
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={
          <>
            <CoreStack
              direction="row"
              spacing={1}
              styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
            >
              <CoreIconButton aria-label="delete" size="small">
                <CoreIcon fontSize="inherit">delete</CoreIcon>
              </CoreIconButton>

              <CoreIconButton aria-label="delete" size="small">
                <CoreIcon fontSize="small">delete</CoreIcon>
              </CoreIconButton>

              <CoreIconButton aria-label="delete" size="large">
                <CoreIcon>delete</CoreIcon>
              </CoreIconButton>

              <CoreIconButton aria-label="delete" size="large">
                <CoreIcon fontSize="inherit">delete</CoreIcon>
              </CoreIconButton>
            </CoreStack>
          </>
        }
      />

      <CodeSample
        title={"Colors"}
        description={
          <CoreTypographyBody1>
            Use <CodeBlock>color</CodeBlock> prop to apply theme color palette
            to component.
          </CoreTypographyBody1>
        }
        code={`<CoreStack
  direction="row"
  spacing={1}
  styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
>
  <CoreIconButton aria-label="fingerprint" color="secondary">
    <CoreIcon>fingerprint</CoreIcon>
  </CoreIconButton>

  <CoreIconButton aria-label="fingerprint" color="success">
    <CoreIcon>fingerprint</CoreIcon>
  </CoreIconButton>
</CoreStack>`}
        renderElement={
          <>
            <CoreStack
              direction="row"
              spacing={1}
              styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
            >
              <CoreIconButton aria-label="fingerprint" color="secondary">
                <CoreIcon>fingerprint</CoreIcon>
              </CoreIconButton>

              <CoreIconButton aria-label="fingerprint" color="success">
                <CoreIcon>fingerprint</CoreIcon>
              </CoreIconButton>
            </CoreStack>
          </>
        }
      />

      <CodeSample
        title={"File Upload"}
        description={
          <CoreTypographyBody1>
            To create a file upload button, turn the button into a label using{" "}

            <CodeBlock>component={"}label{"}</CodeBlock> and then create a

            visually-hidden input with type <CodeBlock>file</CodeBlock>.
          </CoreTypographyBody1>
        }
        code={`<CoreStack
  direction="row"
  styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
>
  <CoreButton
    component="label"
    variant="contained"
    onClick={() => {}}
    startIcon={<CoreIcon icon="cloud_upload" />}
  >
    Upload file
    <VisuallyHiddenInput type="file" />
  </CoreButton>
</CoreStack>`}
        renderElement={
          <>
            <CoreStack
              direction="row"
              styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
            >
              <CoreButton
                component="label"
                variant="contained"
                onClick={() => {}}
                startIcon={<CoreIcon icon="cloud_upload" />}
              >
                Upload file
                <VisuallyHiddenInput type="file" />
              </CoreButton>
            </CoreStack>
          </>
        }
      />

      <CodeSample
        title={"Complex Button (NOT_IMPLEMENTED)"}
        description={
          "The Text Buttons, Contained Buttons, Floating Action Buttons and Icon Buttons are built on top of the same component: the ButtonBase. You can take advantage of this lower-level component to build custom interactions."
        }
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <ComponentProps component={CoreButton} />
    </>
  );
}
