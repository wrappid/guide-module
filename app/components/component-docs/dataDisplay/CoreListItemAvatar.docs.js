import {
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

import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreListItemAvatarDocs() {
  return (
    <>
      <ComponentDocs
        component={CoreListItemAvatar}
        description="CoreListItemAvatar is a subcomponent of CoreListItem designed to display an avatar or icon on the left side of a CoreListItem. It is typically used when you want to associate an CoreAvatar (e.g., a user's profile picture) with a CoreListItem, making the CoreList more visually informative and engaging."
        samples={
          <>
            <CodeSample
              title={"Basic CoreListItemAvatar"}
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
              code={`<CoreListItemAvatar>
  <CoreAvatar alt="Sam" src="/path/to/avatar.jpg" />
</CoreListItemAvatar>
`}
              expandedCode={`import {
  BlankLayout,
  CoreBox,
  CoreClasses,
  CoreListItemAvatar,
  CoreAvatar,
  CoreLayoutItem,
  CorePaper,
  CoreStack,
  CoreDivider,
  CoreList,
  CoreListItem,
  CoreListItemText
} from "@wrappid/core";

export default function BasicCoreListItemAvatar() {
  return (
    <>
      <CoreLayoutItem
        id={BlankLayout.PLACEHOLDER.CONTENT}
        styleClasses={[CoreClasses.FLEX.FLEX, CoreClasses.FLEX.DIRECTION_COLUMN, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.PADDING.P5]}>
        <CoreBox
          styleClasses={[
            CoreClasses.WIDTH.W_100,
            CoreClasses.MARGIN.M4,
            CoreClasses.DISPLAY.FLEX,
            CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
            CoreClasses.BORDER.BORDER_2
          ]}
        >
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
        </CoreBox>
      </CoreLayoutItem>
    </>
  );
}`}
              renderElement={
                <>
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
                </>
              }
            />

          </>
        }
      />
    </>
  );
}
