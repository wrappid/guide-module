import {
  CoreH4,
  CoreTypographyBody1,
  CoreClasses,
  CoreList,
  CoreListItem,
  CoreListItemText,
  CoreListItemSecondaryAction,
  CoreIconButton,
  CoreIcon
  // CoreListItemSecondaryAction
} from "@wrappid/core";

import CodeImport from "../../CodeImport";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreListItemSecondaryActionDocs() {
  return (
    <>
      <CoreH4>ListItemSecondaryAction</CoreH4>

      <CoreTypographyBody1 styleClasses={[CoreClasses.PADDING.PT2]}>
        CoreListItemSecondaryAction is a component from Wrappid that is used to position elements, typically actions like CoreButtons or CoreIcons, to the far right of a ListItem. It is often used when you want to add an interactive element, such as a delete button, a switch, or any other secondary action, that should be aligned to the end of the CoreListItem.
      </CoreTypographyBody1>

      <CodeImport name="ListItemSecondaryAction" />

      <CodeSample
        title={"Basic"}
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
          </CoreList>
        </>}
        code={`<CoreList styleClasses={[CoreClasses.WIDTH.W_25]}>
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
          </CoreList>`}
        renderElement={<>
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
        </>}
      />
      
      <ComponentProps component={CoreListItemSecondaryAction} />

    </>
  );
}
