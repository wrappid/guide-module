import {
  CoreAvatar,
  CoreAvatarGroup,
  CoreClasses,
  CoreIcon,
  CoreSpan,
  CoreStack,
  CoreTypographyBody1
} from "@wrappid/core";

import CodeBlock from "../../CodeBlock";
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreAvatarDocs() {
  return (
    <ComponentDocs
      component={CoreAvatar}
      description="Avatars are found throughout material design with uses in everything from tables to dialog menus."
      basicSampleProps={{ src: "https://picsum.photos/200?random=1" }}
      samples={
        <>
          <CodeSample
            title={"Image avatars"}
            description={
              <>
            Image avatars can be created by passing standard <CodeBlock>img</CodeBlock> props
            
                {" "}

                <CodeBlock>src</CodeBlock> or 

                {" "}

                <CodeBlock>srcSet</CodeBlock> to the component.
              </>
            }
            code={`<CoreAvatar src="https://picsum.photos/200?random=1" />
<CoreAvatar src="https://picsum.photos/200?random=2" />
<CoreAvatar src="https://picsum.photos/200?random=3" />`}
            expandedCode={`import { CoreAvatar, CoreClasses, CoreStack } from "@wrappid/core";

export default function Demo() {
  return (
    <CoreStack styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]} spacing={2} direction="row">
      <CoreAvatar src="https://picsum.photos/200?random=1" />
      <CoreAvatar src="https://picsum.photos/200?random=2" />
      <CoreAvatar src="https://picsum.photos/200?random=3" />
    </CoreStack>
  );
}`}
            renderElement={
              <CoreStack
                styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
                spacing={2}
                direction="row"
              >
                <CoreAvatar src="https://picsum.photos/200?random=1" />

                <CoreAvatar src="https://picsum.photos/200?random=2" />

                <CoreAvatar src="https://picsum.photos/200?random=3" />
              </CoreStack>
            }
          />

          <CodeSample
            title={"Letter avatars"}
            description={
              <>
            Avatars containing simple characters can be created by passing a string as
                {" "}

                <CodeBlock>{"children"}</CodeBlock>.
              </>
            }
            code={`<CoreStack styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]} spacing={2} direction="row" >
  <CoreAvatar>W</CoreAvatar>
  <CoreAvatar styleClasses={[CoreClasses.BG.BG_PRIMARY]}>WR</CoreAvatar>
  <CoreAvatar styleClasses={[CoreClasses.BG.BG_SECONDARY]}>OP</CoreAvatar>
</CoreStack>`}
            expandedCode={`import { CoreAvatar, CoreClasses, CoreStack } from "@wrappid/core";
  
export default function LetterAvatars() {
  return (
    <CoreStack styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]} spacing={2} direction="row" >
      <CoreAvatar>W</CoreAvatar>
      <CoreAvatar styleClasses={[CoreClasses.BG.BG_PRIMARY]}>WR</CoreAvatar>
      <CoreAvatar styleClasses={[CoreClasses.BG.BG_SECONDARY]}>OP</CoreAvatar>
    </CoreStack>
  );
}`}
            renderElement={
              <CoreStack
                styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
                spacing={2}
                direction="row"
              >
                <CoreAvatar>W</CoreAvatar>

                <CoreAvatar styleClasses={[CoreClasses.BG.BG_PRIMARY]}>WR</CoreAvatar>

                <CoreAvatar styleClasses={[CoreClasses.BG.BG_SECONDARY]}>OP</CoreAvatar>
              </CoreStack>
            }
          />

          <CodeSample
            title={"Sizes"}
            description={
              <CoreTypographyBody1>
            You can change the size of the avatar with the <CodeBlock>{"height"}</CodeBlock>

                {" and "}

                <CodeBlock>{"width"}</CodeBlock> CSS properties.
              </CoreTypographyBody1>
            }
            code={`<CoreStack styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]} direction="row">
  <CoreAvatar src="https://picsum.photos/200?random=1" />
  <CoreAvatar
    src="https://picsum.photos/200?random=1"
    styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_SMALL]}
  />
  <CoreAvatar src="https://picsum.photos/200?random=2"/>
  <CoreAvatar
    src="https://picsum.photos/200?random=3"
    styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_MEDIUM]}
  />
  <CoreAvatar
    src="https://picsum.photos/200?random=4"
    styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_LARGE]}
  />
  <CoreAvatar
    src="https://picsum.photos/200?random=5"
    styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_XLARGE]}
  />
  <CoreAvatar
    src="https://picsum.photos/200?random=6"
    styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_XXLARGE]}
  />
</CoreStack>`}
            expandedCode={`import { CoreAvatar, CoreClasses, CoreStack } from "@wrappid/core";
  
export default function SizesAvatars() {
  return (
    <CoreStack styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]} direction="row">
      <CoreAvatar src="https://picsum.photos/200?random=1" />
      <CoreAvatar
        src="https://picsum.photos/200?random=1"
        styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_SMALL]}
      />
      <CoreAvatar src="https://picsum.photos/200?random=2"/>
      <CoreAvatar
        src="https://picsum.photos/200?random=3"
        styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_MEDIUM]}
      />
      <CoreAvatar
        src="https://picsum.photos/200?random=4"
        styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_LARGE]}
      />
      <CoreAvatar
        src="https://picsum.photos/200?random=5"
        styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_XLARGE]}
      />
      <CoreAvatar
        src="https://picsum.photos/200?random=6"
        styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_XXLARGE]}
      />
    </CoreStack>
  );
}`}   
            renderElement={
              <CoreStack
                styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
                direction="row"
                spacing={2}
              >
                <CoreAvatar
                  src="https://picsum.photos/200?random=1"
                  styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_SMALL]}
                />

                <CoreAvatar src="https://picsum.photos/200?random=2" />

                <CoreAvatar
                  src="https://picsum.photos/200?random=3"
                  styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_MEDIUM]}
                />

                <CoreAvatar
                  src="https://picsum.photos/200?random=4"
                  styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_LARGE]}
                />

                <CoreAvatar
                  src="https://picsum.photos/200?random=5"
                  styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_XLARGE]}
                />

                <CoreAvatar
                  src="https://picsum.photos/200?random=6"
                  styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_XXLARGE]}
                />
              </CoreStack>
            }
          />

          <CodeSample
            title={"Icon avatars"}
            description={
              <>
            Icon avatars are created by passing an icon as
                {" "}

                <CodeBlock>{" children "}</CodeBlock>.
              </>
            }
            code={`<CoreStack styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]} spacing={2} direction="row">
  <CoreAvatar styleClasses={[CoreClasses.BG.BG_SECONDARY_DARK]}>
    <CoreIcon>folder</CoreIcon>
  </CoreAvatar>
  <CoreAvatar styleClasses={[CoreClasses.BG.BG_PRIMARY_LIGHT]}>
    <CoreIcon>pageview</CoreIcon>
  </CoreAvatar>
  <CoreAvatar styleClasses={[CoreClasses.BG.BG_SUCCESS_LIGHT]}>
    <CoreIcon>assignment</CoreIcon>
  </CoreAvatar>
</CoreStack>`}
            expandedCode={`import { CoreAvatar, CoreClasses, CoreStack, CoreIcon } from "@wrappid/core";
  
export default function IconAvatars() {
  return (
    <CoreStack styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]} spacing={2} direction="row">
      <CoreAvatar styleClasses={[CoreClasses.BG.BG_SECONDARY_DARK]}>
        <CoreIcon>folder</CoreIcon>
      </CoreAvatar>
      <CoreAvatar styleClasses={[CoreClasses.BG.BG_PRIMARY_LIGHT]}>
        <CoreIcon>pageview</CoreIcon>
      </CoreAvatar>
      <CoreAvatar styleClasses={[CoreClasses.BG.BG_SUCCESS_LIGHT]}>
        <CoreIcon>assignment</CoreIcon>
      </CoreAvatar>
    </CoreStack>         
  );
}`}
            renderElement={
              <CoreStack
                styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
                spacing={2}
                direction="row"
              >
                <CoreAvatar styleClasses={[CoreClasses.BG.BG_SECONDARY_DARK]}>
                  <CoreIcon>folder</CoreIcon>
                </CoreAvatar>

                <CoreAvatar styleClasses={[CoreClasses.BG.BG_PRIMARY_LIGHT]}>
                  <CoreIcon>pageview</CoreIcon>
                </CoreAvatar>

                <CoreAvatar styleClasses={[CoreClasses.BG.BG_SUCCESS_LIGHT]}>
                  <CoreIcon>assignment</CoreIcon>
                </CoreAvatar>
              </CoreStack>
            }
          />

          <CodeSample
            title={"Variants"}
            description={
              <>
            If you need square or rounded avatars, use the {" "}<CodeBlock>{"variant"}</CodeBlock>{" "}prop.
              </>
            }
            code={`<CoreStack styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]} spacing={2} direction="row">
  <CoreAvatar styleClasses={[CoreClasses.BG.BG_PRIMARY_LIGHT]} variant="square">N</CoreAvatar>
  <CoreAvatar styleClasses={[CoreClasses.BG.BG_SUCCESS_LIGHT]} variant="rounded">
    <CoreIcon>assignment</CoreIcon>
  </CoreAvatar>
</CoreStack>`}
            expandedCode={`import { CoreAvatar, CoreClasses, CoreStack, CoreIcon } from "@wrappid/core";
  
export default function VariantsAvatar(){
  return(
    <CoreStack styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]} spacing={2} direction="row">
      <CoreAvatar styleClasses={[CoreClasses.BG.BG_PRIMARY_LIGHT]} variant="square">N</CoreAvatar>
      <CoreAvatar styleClasses={[CoreClasses.BG.BG_SUCCESS_LIGHT]} variant="rounded">
        <CoreIcon>assignment</CoreIcon>
      </CoreAvatar>
    </CoreStack>
  );
}`}
            renderElement={
              <CoreStack
                styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
                spacing={2}
                direction="row"
              >
                <CoreAvatar styleClasses={[CoreClasses.BG.BG_PRIMARY_LIGHT]} variant="square">
              N
                </CoreAvatar>

                <CoreAvatar styleClasses={[CoreClasses.BG.BG_SUCCESS_LIGHT]} variant="rounded">
                  <CoreIcon>assignment</CoreIcon>
                </CoreAvatar>
              </CoreStack>
            }
          />

          <CodeSample
            title="Fallbacks"
            description={
              <>
                <CoreTypographyBody1>
                  {
                    "If there is an error loading the avatar image, the component falls back to an alternative in the following order:"
                  }
                </CoreTypographyBody1>

                { /**
            * @todo CoreList need to be fix 
            * the provided children
              the first letter of the alt text
              a generic avatar icon
             */}
              </>
            }
            code={`<CoreStack styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]} direction="row" spacing={2}>
  <CoreAvatar styleClasses={[CoreClasses.BG.BG_PRIMARY]} alt="Remy Sharp" src="/broken-image.jpg">W</CoreAvatar>
  <CoreAvatar styleClasses={[CoreClasses.BG.BG_PRIMARY]} alt="Remy Sharp" src="/broken-image.jpg"/>
  <CoreAvatar src="/broken-image.jpg" />
</CoreStack>`}
            expandedCode={`import { CoreStack, CoreAvatar, CoreClasses } from "@wrappid/core";

export default function FallbacksAvatar(){
  return(
    <CoreStack styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]} direction="row" spacing={2}>
      <CoreAvatar styleClasses={[CoreClasses.BG.BG_PRIMARY]} alt="Remy Sharp" src="/broken-image.jpg">W</CoreAvatar>
      <CoreAvatar styleClasses={[CoreClasses.BG.BG_PRIMARY]} alt="Remy Sharp" src="/broken-image.jpg"/>
      <CoreAvatar src="/broken-image.jpg" />
    </CoreStack>
  );
}`}
            renderElement={
              <CoreStack
                styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
                direction="row"
                spacing={2}
              >
                <CoreAvatar
                  styleClasses={[CoreClasses.BG.BG_PRIMARY]}
                  alt="Remy Sharp"
                  src="/broken-image.jpg"
                >
              W
                </CoreAvatar>

                <CoreAvatar
                  styleClasses={[CoreClasses.BG.BG_PRIMARY]}
                  alt="Remy Sharp"
                  src="/broken-image.jpg"
                />

                <CoreAvatar src="/broken-image.jpg" />
              </CoreStack>
            }
          />

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

          <CodeSample
            title="With badge (NOT IMPLEMENTED)"
            description=""
            code={`
          `}
            renderElement={
              <CoreStack
                styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}
                direction="row"
                spacing={2}
              >
              </CoreStack>
            }
          />
        </>
      }
    />

  );
}
