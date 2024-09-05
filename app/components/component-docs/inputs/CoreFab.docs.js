import {
  CoreTypographyBody1,
  CoreFab,
  CoreIcon,
  CoreClasses,
  CoreStack,
  CoreAlert
} from "@wrappid/core";

import CodeBlock from "../../CodeBlock";
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreFabDocs() {
  return (
    <>
      <ComponentDocs
        component={CoreFab}
        description={
          <>
            <CoreTypographyBody1>
        A Core Floating Action Button (FAB) performs the primary, or most
        common, action on a screen.
            </CoreTypographyBody1>

            <CoreTypographyBody1>
        A floating action button appears in front of all screen content,
        typically as a circular shape with an icon in its center. FABs come in
        two types: regular, and extended. Only use a FAB if it is the most
        suitable way to present a screen{"'"}s primary action. Only one
        component is recommended per screen to represent the most common action.
            </CoreTypographyBody1>
          </>
        }
        samples={
          <>
            <CodeSample
              title={"Basic FAB"}
              description={" "}
              code={`<CoreFab color="primary" aria-label="add">
  <CoreIcon icon="add" />
</CoreFab>
<CoreFab color="error" aria-label="edit">
  <CoreIcon icon="edit" />
</CoreFab>
<CoreFab variant="extended">
  <CoreIcon icon="navigation" styleClasses={[CoreClasses.MARGIN.M1] />
  Navigate
</CoreFab>
<CoreFab disabled aria-label="like">
  <CoreIcon fontSize="medium" icon="favorite" />
</CoreFab>`}
              expandedCode={`import {
  CoreFab,
  CoreIcon,
  CoreClasses,
  CoreStack
} from "@wrappid/core";
  
export default function FloatingActionButtons() {
  return(
     <CoreStack spacing={2} direction="row" styleClasses={[CoreClasses.MARGIN.M1] >
      <CoreFab color="primary" aria-label="add">
        <CoreIcon icon="add" />
      </CoreFab>
      <CoreFab color="error" aria-label="edit">
        <CoreIcon icon="edit" />
      </CoreFab>
      <CoreFab variant="extended">
        <CoreIcon icon="navigation" styleClasses={[CoreClasses.MARGIN.M1]} />
        Navigate
      </CoreFab>
      <CoreFab disabled aria-label="like">
        <CoreIcon fontSize="medium" icon="favorite" />
      </CoreFab>
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
                    <CoreFab color="primary" aria-label="add">
                      <CoreIcon icon="add" />
                    </CoreFab>

                    <CoreFab color="error" aria-label="edit">
                      <CoreIcon icon="edit" />
                    </CoreFab>

                    <CoreFab variant="extended">
                      <CoreIcon
                        icon="navigation"
                        styleClasses={[CoreClasses.MARGIN.M1]}
                      />
                      Navigate
                    </CoreFab>

                    <CoreFab disabled aria-label="like">
                      <CoreIcon fontSize="medium" icon="favorite" />
                    </CoreFab>
                  </CoreStack>
                </>
              }
            />

            <CodeSample
              title={"Size"}
              description={
                <CoreTypographyBody1>
            By default, the size is <CodeBlock>large</CodeBlock>. Use the

                  {" "}<CodeBlock>size</CodeBlock> prop for smaller floating action
            buttons.
                </CoreTypographyBody1>
              }
              code={`<CoreFab size="small" color="error" aria-label="add">
  <CoreIcon icon="add" />
</CoreFab>
<CoreFab size="medium" color="error" aria-label="add">
  <CoreIcon icon="add" />
</CoreFab>
<CoreFab color="error" aria-label="add">
  <CoreIcon icon="add" />
</CoreFab>`}
              expandedCode={`import {
  CoreFab,
  CoreIcon,
  CoreClasses,
  CoreStack
} from "@wrappid/core";

export default function FloatingActionButtonSize() {
  return (
    <CoreStack spacing={2} direction="row" styleClasses={[CoreClasses.MARGIN.M1] >
      <CoreFab size="small" color="error" aria-label="add">
        <CoreIcon icon="add" />
      </CoreFab>
      <CoreFab size="medium" color="error" aria-label="add">
        <CoreIcon icon="add" />
      </CoreFab>
      <CoreFab color="error" aria-label="add">
        <CoreIcon icon="add" />
      </CoreFab>
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
                    <CoreFab size="small" color="error" aria-label="add">
                      <CoreIcon icon="add" />
                    </CoreFab>

                    <CoreFab size="medium" color="error" aria-label="add">
                      <CoreIcon icon="add" />
                    </CoreFab>

                    <CoreFab color="error" aria-label="add">
                      <CoreIcon icon="add" />
                    </CoreFab>
                  </CoreStack>
                </>
              }
            />

            <CodeSample
              title={"Extended Variant"}
              description={" "}
              code={`<CoreFab variant="extended" size="small" color="primary">
  <CoreIcon icon="navigation" />
  Extended
</CoreFab>
<CoreFab variant="extended" size="medium" color="primary">
  <CoreIcon icon="navigation" />
  Extended
</CoreFab>
<CoreFab variant="extended" color="primary">
  <CoreIcon icon="navigation" />
  Extended
</CoreFab>`}
              expandedCode={`import {
  CoreFab,
  CoreIcon,
  CoreClasses,
  CoreStack
} from "@wrappid/core";
 
export default function FloatingActionButtonExtendedSize() {
  return (
    <CoreStack spacing={2} direction="row" styleClasses={[CoreClasses.MARGIN.M1]} >
      <CoreFab variant="extended" size="small" color="primary">
      <CoreIcon icon="navigation" />
        Extended
      </CoreFab>
      <CoreFab variant="extended" size="medium" color="primary">
      <CoreIcon icon="navigation" />
        Extended
      </CoreFab>
      <CoreFab variant="extended" color="primary">
      <CoreIcon icon="navigation" />
        Extended
      </CoreFab>
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
                    <CoreFab variant="extended" size="small" color="primary">
                      <CoreIcon icon="navigation" />
                Extended
                    </CoreFab>

                    <CoreFab variant="extended" size="medium" color="primary">
                      <CoreIcon icon="navigation" />
                Extended
                    </CoreFab>

                    <CoreFab variant="extended" color="primary">
                      <CoreIcon icon="navigation" />
                Extended
                    </CoreFab>
                  </CoreStack>
                </>
              }
            />

            <CodeSample
              title={"Animation (NOT WORKING)"}
              description={
                <>
                  <CoreTypographyBody1>
              The floating action button animates onto the screen as an
              expanding piece of material, by default.
                  </CoreTypographyBody1>

                  <CoreTypographyBody1>
              A floating action button that spans multiple lateral screens (such
              as tabbed screens) should briefly disappear, then reappear if its
              action changes.
                  </CoreTypographyBody1>

                  <CoreTypographyBody1>
              The Zoom transition can be used to achieve this. Note that since
              both the exiting and entering animations are triggered at the same
              time, we use <CodeBlock>enterDelay</CodeBlock> to allow the

              outgoing Floating Action Button{"'"}s animation to finish before
              the new one enters.
                  </CoreTypographyBody1>
                </>
              }
              code={" "}
              renderElement={
                <>
                  <CoreAlert severity="error"> Animation Error: SwipeableViews, Zoom etc. Not Implemented</CoreAlert>
                </>
              }
            />
          </>
        }
      />
      
    </>
  );
}
