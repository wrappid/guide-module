import {
  CoreH4,
  CoreTypographyBody1,
  CoreStack,
  CoreClasses,
  CoreIconButton,
  CoreIcon
} from "@wrappid/core";

import CodeBlock from "../../../CodeBlock";
import CodeImport from "../../../CodeImport";
import CodeSample from "../../../CodeSample";
import ComponentProps from "../../../ComponentProps";

export default function CoreIconButtonDocs() {
  return (
    <>
      <CoreH4>CoreIconButton</CoreH4>

      <CoreTypographyBody1>
        CoreIconButtons are commonly found in app bars and toolbars.
      </CoreTypographyBody1>

      <CodeImport name="CoreIconButton" />

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

      <ComponentProps component={CoreIconButton} />
    </>
  );
}
