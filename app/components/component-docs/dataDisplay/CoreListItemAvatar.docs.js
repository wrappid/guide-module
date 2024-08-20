import {
  CoreH4,
  CoreTypographyBody1,
  CoreListItemAvatar,
  CoreList,
  CoreListItem,
  CoreAvatar,
  CoreDivider,
  CoreListItemText,
  CoreStack,
  CorePaper,
  CoreClasses,
  CoreBox
} from "@wrappid/core";

import CodeImport from "../../CodeImport";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreListItemAvatarDocs() {
  return (
    <>
      <CoreH4>{"CoreListItemAvatar"}</CoreH4>

      <CoreTypographyBody1 styleClasses={[CoreClasses.PADDING.PT2]}>
        CoreListItemAvatar is a subcomponent in Wrappid designed to display an avatar or icon on the left side of a CoreListItem. It is typically used when you want to associate an CoreAvatar (e.g., a {"user's"} profile picture) with a CoreListItem, making the CoreList more visually informative and engaging.
      </CoreTypographyBody1>

      <CodeImport name="CoreListItemAvatar" />

      <CodeSample
        title={"Basic Structure"}
        description={<>
          <CoreBox styleClasses={[CoreClasses.PADDING.SMPL2]}>
            <CoreList variant="HTML" listType="DISC">
              <CoreListItem>
                <CoreListItemText primary="CoreListItemAvatar component is used to include an CoreAvatar, typically from the Avatar component, in a list item. It helps to visually distinguish items by providing an image or icon associated with each item." />
              </CoreListItem>

              <CoreListItem>
                <CoreListItemText primary="CoreListItemAvatar itself doesn't have many props, as it primarily serves as a wrapper for the CoreAvatar component. The primary prop you'll pass is the children prop, which is usually the Avatar component."/>
              </CoreListItem>
            </CoreList>
          </CoreBox>
        </>}
        code={`<CoreStack
  component={CorePaper}
  styleClasses={[CoreClasses.WIDTH.W_25]}
>

  <CoreList>
    <CoreListItem>
      <CoreListItemAvatar>
        <CoreAvatar alt="Sam" src="/path/to/avatar.jpg" />
      </CoreListItemAvatar>

      <CoreListItemText primary="sam" secondary="sam@wrappid.com" />
    </CoreListItem>

    <CoreDivider />

    <CoreListItem>
      <CoreListItemAvatar>
        <CoreAvatar alt="Neel">JS</CoreAvatar>
      </CoreListItemAvatar>

      <CoreListItemText primary="Neel" secondary="neel@wrappid.com" />
    </CoreListItem>
  </CoreList>
</CoreStack>`}
        renderElement={<>
          <CoreStack
            component={CorePaper}
            styleClasses={[CoreClasses.WIDTH.W_25]}
          >

            <CoreList>
              <CoreListItem>
                <CoreListItemAvatar>
                  <CoreAvatar alt="Sam" src="/path/to/avatar.jpg" />
                </CoreListItemAvatar>

                <CoreListItemText primary="sam" secondary="sam@wrappid.com" />
              </CoreListItem>

              <CoreDivider />

              <CoreListItem>
                <CoreListItemAvatar>
                  <CoreAvatar alt="Neel">JS</CoreAvatar>
                </CoreListItemAvatar>

                <CoreListItemText primary="Neel" secondary="neel@wrappid.com" />
              </CoreListItem>
            </CoreList>
          </CoreStack>
        </>}
      />

      <ComponentProps component={CoreListItemAvatar} />
    </>
  );
}
