import {
  CoreAvatar,
  CoreAvatarGroup,
  CoreClasses,
  CoreStack,
  CoreSpan,
  CoreTypographyBody1
  // CoreAvatarGroup
} from "@wrappid/core";

import CodeBlock from "../../CodeBlock";
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreAvatarGroupDocs() {
  return (
    <>
      <ComponentDocs
        component={CoreAvatarGroup}
        basicSample={false}
        description={<>
          <CoreTypographyBody1>
        AvatarGroup renders its children as a stack.
          </CoreTypographyBody1>
        </>}
        samples={
          <>
            <CodeSample
              title="Grouped"
              description={
                <>
          AvatarGroup renders its children as a stack. Use the <CodeBlock>max</CodeBlock> prop to limit the number of avatars
          
                </>
              }
              code={`<CoreStack styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]} direction="row" spacing={2}>
  <CoreAvatarGroup max={4}>
    <CoreAvatar alt="Some Photo 1" src="https://picsum.photos/200?random=1" />
    <CoreAvatar alt="Some Photo 2" src="https://picsum.photos/200?random=2" />
    <CoreAvatar alt="Some Photo 3" src="https://picsum.photos/200?random=3" />
    <CoreAvatar alt="Some Photo 4" src="https://picsum.photos/200?random=4" />
    <CoreAvatar alt="Some Photo 5" src="https://picsum.photos/200?random=5" />
  </CoreAvatarGroup>
</CoreStack>`}
              expandedCode={`import { CoreStack, CoreAvatar, CoreClasses, CoreAvatarGroup } from "@wrappid/core";
  
export default function GroupedAvatar (){
  return(
    <CoreStack styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]} direction="row" spacing={2}>
      <CoreAvatarGroup max={4}>
        <CoreAvatar alt="Some Photo 1" src="https://picsum.photos/200?random=1" />
        <CoreAvatar alt="Some Photo 2" src="https://picsum.photos/200?random=2" />
        <CoreAvatar alt="Some Photo 3" src="https://picsum.photos/200?random=3" />
        <CoreAvatar alt="Some Photo 4" src="https://picsum.photos/200?random=4" />
        <CoreAvatar alt="Some Photo 5" src="https://picsum.photos/200?random=5" />
      </CoreAvatarGroup>
    </CoreStack>
  );
}`}
              renderElement={
                <CoreStack
                  styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
                  direction="row"
                  spacing={2}
                >
                  <CoreAvatarGroup max={4}>
                    <CoreAvatar alt="Some Photo 1" src="https://picsum.photos/200?random=1" />

                    <CoreAvatar alt="Some Photo 2" src="https://picsum.photos/200?random=2" />

                    <CoreAvatar alt="Some Photo 3" src="https://picsum.photos/200?random=3" />

                    <CoreAvatar alt="Some Photo 4" src="https://picsum.photos/200?random=4" />

                    <CoreAvatar alt="Some Photo 5" src="https://picsum.photos/200?random=5" />
                  </CoreAvatarGroup>
                </CoreStack>
              }
            />

            <CodeSample
              title="Total avatars"
              description={
                <>
          If you need to control the total number of avatars not shown, you can use the <CodeBlock>total</CodeBlock> prop.
                </>
              }
              code={`<CoreStack styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]} direction="row" spacing={2}>
  <CoreAvatarGroup total={24}>
    <CoreAvatar alt="Some Photo 1" src="https://picsum.photos/200?random=1" />
    <CoreAvatar alt="Some Photo 2" src="https://picsum.photos/200?random=2" />
    <CoreAvatar alt="Some Photo 3" src="https://picsum.photos/200?random=3" />
    <CoreAvatar alt="Some Photo 4" src="https://picsum.photos/200?random=4" />
  </CoreAvatarGroup>
</CoreStack>`}
              expandedCode={`import { CoreStack, CoreAvatar, CoreClasses, CoreAvatarGroup } from "@wrappid/core";
 
export default function TotalAvatars(){
  return(
    <CoreStack styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]} direction="row" spacing={2}>
      <CoreAvatarGroup total={24}>
        <CoreAvatar alt="Some Photo 1" src="https://picsum.photos/200?random=1" />
        <CoreAvatar alt="Some Photo 2" src="https://picsum.photos/200?random=2" />
        <CoreAvatar alt="Some Photo 3" src="https://picsum.photos/200?random=3" />
        <CoreAvatar alt="Some Photo 4" src="https://picsum.photos/200?random=4" />
      </CoreAvatarGroup>
    </CoreStack>
  );
}`}
              renderElement={
                <CoreStack
                  styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
                  direction="row"
                  spacing={2}
                >
                  <CoreAvatarGroup total={24}>
                    <CoreAvatar alt="Some Photo 1" src="https://picsum.photos/200?random=1" />

                    <CoreAvatar alt="Some Photo 2" src="https://picsum.photos/200?random=2" />

                    <CoreAvatar alt="Some Photo 3" src="https://picsum.photos/200?random=3" />

                    <CoreAvatar alt="Some Photo 4" src="https://picsum.photos/200?random=4" />
                  </CoreAvatarGroup>
                </CoreStack>
              }
            />

            <CodeSample
              title="Custom surplus"
              description={
                <>
          Set the <CodeBlock>renderSurplus</CodeBlock> prop as a callback to customize the surplus avatar. The callback will receive the surplus number as an argument based on the children and the 

                  {" "}

                  <CodeBlock>max</CodeBlock> prop, and should return a

                  <CodeBlock>React.ReactNode.</CodeBlock>.

The <CodeBlock>renderSurplus</CodeBlock> prop is useful when you need to render the surplus based on the data sent from the server.
                </>
              }
              code={`<CoreAvatarGroup renderSurplus={(surplus) => <CoreSpan>+{surplus.toString()[0]}k</>}total={4250}>
  <CoreAvatar alt="Some Photo 1" src="https://picsum.photos/200?random=1" />
  <CoreAvatar alt="Some Photo 2" src="https://picsum.photos/200?random=2" />
  <CoreAvatar alt="Some Photo 3" src="https://picsum.photos/200?random=3" />
  <CoreAvatar alt="Some Photo 4" src="https://picsum.photos/200?random=4" />
</CoreAvatarGroup>`}
              expandedCode={`import { CoreStack, CoreAvatar, CoreClasses, CoreSpan, CoreAvatarGroup } from "@wrappid/core";
          
export default function CustomSurplusAvatar (){
  return(
    <CoreStack styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]} direction="row" spacing={2} >
      <CoreAvatarGroup renderSurplus={(surplus) => <CoreSpan>+{surplus.toString()[0]}k</CoreSpan>} total={4251}>
        <CoreAvatar alt="Some Photo 1" src="https://picsum.photos/200?random=1" />
        <CoreAvatar alt="Some Photo 2" src="https://picsum.photos/200?random=2" />
        <CoreAvatar alt="Some Photo 3" src="https://picsum.photos/200?random=3" />
        <CoreAvatar alt="Some Photo 4" src="https://picsum.photos/200?random=4" />
      </CoreAvatarGroup>
    </CoreStack>
  );
}`}
              renderElement={
                <CoreStack
                  styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
                  direction="row"
                  spacing={2}
                >
                  <CoreAvatarGroup
                    renderSurplus={(surplus) => <CoreSpan>+{surplus.toString()[0]}k</CoreSpan>}
                    total={4251}
                  >
                    <CoreAvatar alt="Some Photo 1" src="https://picsum.photos/200?random=1" />

                    <CoreAvatar alt="Some Photo 2" src="https://picsum.photos/200?random=2" />

                    <CoreAvatar alt="Some Photo 3" src="https://picsum.photos/200?random=3" />

                    <CoreAvatar alt="Some Photo 4" src="https://picsum.photos/200?random=4" />
                  </CoreAvatarGroup>
                </CoreStack>
              }
            />
          </>
        }
      />
    </>
  );
}
