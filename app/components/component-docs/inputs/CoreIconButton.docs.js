import {
  CoreTypographyBody1,
  CoreStack,
  CoreIconButton,
  CoreIcon
} from "@wrappid/core";

import CodeBlock from "../../CodeBlock";
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreIconButtonDocs() {
  return (
    <>
      <ComponentDocs
        component={CoreIconButton}
        description="CoreIconButtons are commonly found in app bars and toolbars."
        samples={
          <>
            <CodeSample
              title={"Icon Button"}
              description={
                "Icons are also appropriate for toggle buttons that allow a single choice to be selected or deselected, such as adding or removing a star to an item."
              }
              code={`<CoreIconButton aria-label="delete">
  <CoreIcon fontSize="large">delete</CoreIcon>
</CoreIconButton>

<CoreIconButton aria-label="delete" disabled color="primary">
  <CoreIcon fontSize="large">delete</CoreIcon>
</CoreIconButton>

<CoreIconButton color="secondary" aria-label="add an alarm">
  <CoreIcon fontSize="large">alarm</CoreIcon>
</CoreIconButton>

<CoreIconButton color="primary" aria-label="add to shopping cart">
  <CoreIcon fontSize="large">add_shopping_cart</CoreIcon>
</CoreIconButton>`}
              expandedCode={`import { CoreStack, CoreIcon, CoreIconButton } from "@wrappid/core";

export default function IconButtons() {
  return (
    <CoreStack direction="row" spacing={2} >
      <CoreIconButton aria-label="delete">
        <CoreIcon fontSize="large">delete</CoreIcon>
      </CoreIconButton>

      <CoreIconButton aria-label="delete" disabled color="primary">
        <CoreIcon fontSize="large">delete</CoreIcon>
      </CoreIconButton>

      <CoreIconButton color="secondary" aria-label="add an alarm">
        <CoreIcon fontSize="large">alarm</CoreIcon>
      </CoreIconButton>

      <CoreIconButton color="primary" aria-label="add to shopping cart">
        <CoreIcon fontSize="large">add_shopping_cart</CoreIcon>
      </CoreIconButton>
    </CoreStack>
  );
}`}
              renderElement={
                <>
                  <CoreStack direction="row" spacing={2} >
                    <CoreIconButton aria-label="delete">
                      <CoreIcon fontSize="large">delete</CoreIcon>
                    </CoreIconButton>

                    <CoreIconButton aria-label="delete" disabled color="primary">
                      <CoreIcon fontSize="large">delete</CoreIcon>
                    </CoreIconButton>

                    <CoreIconButton color="secondary" aria-label="add an alarm">
                      <CoreIcon fontSize="large">alarm</CoreIcon>
                    </CoreIconButton>

                    <CoreIconButton color="primary" aria-label="add to shopping cart">
                      <CoreIcon fontSize="large">add_shopping_cart</CoreIcon>
                    </CoreIconButton>
                  </CoreStack>
                </>
              }
            />

            <CodeSample
              title={"Sizes(INCOMPLETE)"}
              description={
                <CoreTypographyBody1>
            For larger or smaller icon buttons, use 
            the <CodeBlock>size</CodeBlock> prop.
                </CoreTypographyBody1>
              }
              code={"PRE-FORMATTED_CODE_GOES_HERE"}
              expandedCode={`import { CoreStack, CoreIcon, CoreIconButton } from "@wrappid/core";

export default function IconButtonSizes() {
  return (
    <CoreStack direction="row" spacing={1} >
      <CoreIconButton aria-label="delete" size="small">
        <CoreIcon fontSize="inherit">delete</CoreIcon>
      </CoreIconButton>

      <CoreIconButton aria-label="delete" size="small" >
        <CoreIcon fontSize="small">delete</CoreIcon>
      </CoreIconButton>


      <CoreIconButton aria-label="delete" size="large">
        <CoreIcon fontSize="inherit">delete</CoreIcon>
      </CoreIconButton>
    </CoreStack>
  );
}`}
              renderElement={
                <>
                  <CoreStack direction="row" spacing={1} >
                    <CoreIconButton aria-label="delete" size="small">
                      <CoreIcon fontSize="inherit" icon="delete" />
                    </CoreIconButton>

                    <CoreIconButton aria-label="delete" size="small" >
                      <CoreIcon fontSize="small" icon="delete" />
                    </CoreIconButton>

                    <CoreIconButton aria-label="delete" size="large">
                      <CoreIcon icon="delete" />
                    </CoreIconButton>

                    <CoreIconButton aria-label="delete" size="large">
                      <CoreIcon fontSize="inherit" icon="delete" />
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
              code={`<CoreIconButton aria-label="fingerprint" color="inherit">
  <CoreIcon fontSize="large" icon="fingerprint" />
</CoreIconButton>

<CoreIconButton aria-label="fingerprint" color="default">
  <CoreIcon fontSize="large" icon="fingerprint" />
</CoreIconButton>

<CoreIconButton aria-label="fingerprint" color="primary">
  <CoreIcon fontSize="large" icon="fingerprint" />
</CoreIconButton>

<CoreIconButton aria-label="fingerprint" color="secondary">
  <CoreIcon fontSize="large" icon="fingerprint" />
</CoreIconButton>

<CoreIconButton aria-label="fingerprint" color="error">
  <CoreIcon fontSize="large" icon="fingerprint" />
</CoreIconButton>

<CoreIconButton aria-label="fingerprint" color="info">
  <CoreIcon fontSize="large" icon="fingerprint" />
</CoreIconButton>

<CoreIconButton aria-label="fingerprint" color="success">
  <CoreIcon fontSize="large" icon="fingerprint" />
</CoreIconButton>

<CoreIconButton aria-label="fingerprint" color="warning">
  <CoreIcon fontSize="large" icon="fingerprint" />
</CoreIconButton>`}
              expandedCode={`import { CoreStack, CoreIcon, CoreIconButton } from "@wrappid/core";

export default function IconButtonColors() {
  return (
   <CoreStack direction="row" spacing={1} >
      <CoreIconButton aria-label="fingerprint" color="inherit">
        <CoreIcon fontSize="large" icon="fingerprint" />
      </CoreIconButton>

      <CoreIconButton aria-label="fingerprint" color="default">
        <CoreIcon fontSize="large" icon="fingerprint" />
      </CoreIconButton>

      <CoreIconButton aria-label="fingerprint" color="primary">
        <CoreIcon fontSize="large" icon="fingerprint" />
      </CoreIconButton>
      
      <CoreIconButton aria-label="fingerprint" color="secondary">
        <CoreIcon fontSize="large" icon="fingerprint" />
      </CoreIconButton>
      
      <CoreIconButton aria-label="fingerprint" color="error">
        <CoreIcon fontSize="large" icon="fingerprint" />
      </CoreIconButton>
      
      <CoreIconButton aria-label="fingerprint" color="info">
        <CoreIcon fontSize="large" icon="fingerprint" />
      </CoreIconButton>
      
      <CoreIconButton aria-label="fingerprint" color="success">
        <CoreIcon fontSize="large" icon="fingerprint" />
      </CoreIconButton>

      <CoreIconButton aria-label="fingerprint" color="warning">
        <CoreIcon fontSize="large" icon="fingerprint" />
      </CoreIconButton>
    </CoreStack>
  );
}`}
              renderElement={
                <>
                  <CoreStack direction="row" spacing={1} >
                    <CoreIconButton aria-label="fingerprint" color="inherit">
                      <CoreIcon fontSize="large" icon="fingerprint" />
                    </CoreIconButton>

                    <CoreIconButton aria-label="fingerprint" color="default">
                      <CoreIcon fontSize="large" icon="fingerprint" />
                    </CoreIconButton>

                    <CoreIconButton aria-label="fingerprint" color="primary">
                      <CoreIcon fontSize="large" icon="fingerprint" />
                    </CoreIconButton>
                    
                    <CoreIconButton aria-label="fingerprint" color="secondary">
                      <CoreIcon fontSize="large" icon="fingerprint" />
                    </CoreIconButton>
                    
                    <CoreIconButton aria-label="fingerprint" color="error">
                      <CoreIcon fontSize="large" icon="fingerprint" />
                    </CoreIconButton>
                    
                    <CoreIconButton aria-label="fingerprint" color="info">
                      <CoreIcon fontSize="large" icon="fingerprint" />
                    </CoreIconButton>
                    
                    <CoreIconButton aria-label="fingerprint" color="success">
                      <CoreIcon fontSize="large" icon="fingerprint" />
                    </CoreIconButton>

                    <CoreIconButton aria-label="fingerprint" color="warning">
                      <CoreIcon fontSize="large" icon="fingerprint" />
                    </CoreIconButton>
                  </CoreStack>
                  
                </>
              }
            />

          </>
        }
      />
    
    </>
  );
}
