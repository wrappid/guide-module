import {
  CoreClasses,
  CoreList,
  CoreListItem,
  CoreListItemText,
  CoreListItemSecondaryAction,
  CoreIconButton,
  CoreIcon
  // CoreListItemSecondaryAction
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreListItemSecondaryActionDocs() {
  return (
    <>
      <ComponentDocs
        component={CoreListItemSecondaryAction}
        description="CoreListItemSecondaryAction is used to position elements, typically actions like buttons or icons, to the far right of a list item. It is often used when you want to add an interactive element, such as a delete button, a switch, or any other secondary action, that should be aligned to the end of the list item."
        samples={
          <>
            <CodeSample
              title={"Basics CoreListItemSecondaryAction"}
              description={<>
                <CoreList variant="HTML" listType="DISC">
                  <CoreListItem>
                    <CoreListItemText primary="Purpose: ListItemSecondaryAction is used to place an action (like a button or icon) at the far right of a ListItem."/>
                  </CoreListItem>

                  <CoreListItem>
                    <CoreListItemText primary="Alignment: The component ensures that the secondary action is correctly aligned, even when the list item text is long."/>
                  </CoreListItem>

                  <CoreListItem>
                    <CoreListItemText primary="Usage: Typically used for actions that are secondary to the main content of the list item, such as a delete button, a switch, or an edit icon."/>
                  </CoreListItem>
                </CoreList></>}
              code={`<CoreListItemSecondaryAction>
  <CoreIconButton edge="end" >
    <CoreIcon icon="delete"/>
  </CoreIconButton>
</CoreListItemSecondaryAction>`}
              expandedCode={`import {
  CoreListItemSecondaryAction,
  CoreIconButton,
  CoreClasses,
  CoreList,
  CoreListItem,
  CoreIcon,
  CoreListItemText
} from "@wrappid/core";

export default function BasicCoreListItemSecondaryAction() {
  return (
    <CoreList styleClasses={[CoreClasses.WIDTH.W_25]}>
      <CoreListItem>

        <CoreListItemSecondaryAction>
          <CoreIconButton edge="end" >
            <CoreIcon icon="delete"/>
          </CoreIconButton>
        </CoreListItemSecondaryAction>
        
        <CoreListItemText primary="Item 1"/>

      </CoreListItem>

      <CoreListItem>

        <CoreListItemSecondaryAction>
          <CoreIconButton edge="end" aria-label="delete">
            <CoreIcon icon="delete" />
          </CoreIconButton>
        </CoreListItemSecondaryAction>

        <CoreListItemText primary="Item 2"/>
      </CoreListItem>
    </CoreList>
  );
}`}
              renderElement={
                <CoreList styleClasses={[CoreClasses.WIDTH.W_25]}>
                  <CoreListItem>

                    <CoreListItemSecondaryAction>
                      <CoreIconButton edge="end" >
                        <CoreIcon icon="delete"/>
                      </CoreIconButton>

                    </CoreListItemSecondaryAction>

                    <CoreListItemText primary="Item 1"/>

                  </CoreListItem>

                  <CoreListItem>

                    <CoreListItemSecondaryAction>
                      <CoreIconButton edge="end" aria-label="delete">
                        <CoreIcon icon="delete" />
                      </CoreIconButton>
                    </CoreListItemSecondaryAction>

                    <CoreListItemText primary="Item 2"/>
                  </CoreListItem>
                </CoreList>
              }
            />
          </>
        }
      />

    </>
  );
}
