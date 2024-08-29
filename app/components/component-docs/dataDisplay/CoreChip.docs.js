import { useState } from "react";

import {
  CoreClasses,
  CoreH6,
  CoreTypographyBody1,
  CoreChip,
  CoreStack,
  CoreIcon,
  CoreAvatar,
  CoreBox,
  CoreListItem,
  CorePaper
} from "@wrappid/core";

import CodeBlock from "../../CodeBlock";
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

const CORE_COMPONENT = CoreChip;
const CORE_COMPONENT_NAME = (CORE_COMPONENT?.displayName || CORE_COMPONENT?.name);

/**
 * Handles the click event, logging a message to the console.
 * @returns
 */
function handleClick() {
  // eslint-disable-next-line no-console
  console.info("CoreChip clicked! 🎉");
}

function handleDelete() {
  // eslint-disable-next-line no-console
  console.info("Delete icon clicked! 🗑️");
}

/**
 * To handle Subtitles of CodeSamples till a concrete solution is made
 * @param {*} props 
 * @returns 
 */
function Subtitle(props){
  return (<CoreH6 {...props} />);
}

/**
 * To handle Subtitle's descriptions of CodeSample till a concrete solution is made
 * @param {*} props 
 * @returns 
 */
function SubtitleDescription(props){
  return (<CoreTypographyBody1 {...props} styleClasses={[CoreClasses.MARGIN.MY1]} />);

}
export default function CoreChipDocs() {

  const handleDeleteData = (chipToDelete) => () => {
    setCoreChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };
  const [chipData, setCoreChipData] = useState([
    { key: 0, label: "core" },
    { key: 1, label: "native-web" },
    { key: 2, label: "native-mobile" },
    { key: 3, label: "styles" },
    { key: 4, label: "toolkit" },
  ]);

  return (
    <ComponentDocs
      component={CORE_COMPONENT}
      description={
        <>
          <CoreTypographyBody1>
            {CORE_COMPONENT_NAME}s are compact elements that represent an input, attribute, or action.
          </CoreTypographyBody1>

          <CoreTypographyBody1>
            This CoreComponent allow users to enter information, make selections, filter content, or trigger actions.
          </CoreTypographyBody1>

          <CoreTypographyBody1>
          While included here as a standalone component, the most common use will be in some form of input, so some of the behavior demonstrated here is not shown in context.

          </CoreTypographyBody1>
        </>
      }
      samples={
        <>
          <CodeSample
            title={"Basic chip"}
            description={`The ${CORE_COMPONENT_NAME} component supports outlined and filled styling.`}
            code={`<CoreChip label="Chip Filled" />
<CoreChip label="Chip Outlined" variant="outlined" />
`}
            expandedCode={`import { CoreChip, CoreStack } from "@wrappid/core";

  export default function BasicCoreChip() {
    return (
      <CoreStack direction="row" spacing={1}>
        <CoreChip label="CoreChip Filled" />

        <CoreChip label="CoreChip Outlined" variant="outlined" />
      </CoreStack>
    );
  }`}
            renderElement={
              <CoreStack direction="row" spacing={1}>
                <CoreChip label="CoreChip Filled" />

                <CoreChip label="CoreChip Outlined" variant="outlined" />
              </CoreStack>
            }

          />

          <CodeSample
            title="Chip actions"
            description={<><CoreTypographyBody1>You can use the following actions.
              {CORE_COMPONENT_NAME} with the onClick prop defined, changes the appearance on focus, hover, and click.

              {CORE_COMPONENT_NAME} with the onDelete prop defined, will display a delete icon which changes appearance on hover</CoreTypographyBody1>

            <Subtitle> Clickable </Subtitle>

            <SubtitleDescription>
              Since the 
              <CodeBlock>onClick</CodeBlock> 

              prop is used, so the {CORE_COMPONENT_NAME} will change apprearance on focus, hover and click, as mentioned before.
            </SubtitleDescription>
            </>
            }
            code={`<CoreChip label="Clickable" onClick={handleClick} />
<CoreChip label="Clickable" variant="outlined" onClick={handleClick} />`}
            expandedCode={`import { CoreChip, CoreStack } from "@wrappid/core";

function handleClick() {
  console.info("CoreChip clicked! 🎉");
}

export default function ClickableCoreChip() {
  return (
    <CoreStack direction="row" spacing={1}>
      <CoreChip label="Chip Filled" onClick={handleClick} />

      <CoreChip label="Chip Outlined" variant="outlined" onClick={handleClick} />
    </CoreStack>
  );
}`}
            renderElement={
              <CoreStack direction="row" spacing={1}>
                <CoreChip label="Clickable" onClick={handleClick} />

                <CoreChip label="Clickable" variant="outlined" onClick={handleClick} />
              </CoreStack>
            }
          />

          <CodeSample
            title=" "
            description={<>
              <Subtitle> Deletable </Subtitle>

              <SubtitleDescription> onDelete prop can be used to add a delete icon to the {CORE_COMPONENT_NAME}
              </SubtitleDescription></>}
            code={`<CoreChip label="Deletable" onDelete={handleDelete} />
<CoreChip label="Deletable" variant="outlined" onDelete={handleDelete} />
`}
            expandedCode={`import { CoreChip, CoreStack } from "@wrappid/core";

export default function DeletableCoreChip() {
  return (
      <CoreStack direction="row" spacing={1}>
        <CoreChip label="Deletable" onDelete={handleDelete} />

        <CoreChip label="Deletable" variant="outlined" onDelete={handleDelete} />
      </CoreStack>
  );
}`}
            renderElement={
              <CoreStack direction="row" spacing={1}>
                <CoreChip label="Deletable" onDelete={handleDelete} />
            
                <CoreChip label="Deletable" variant="outlined" onDelete={handleDelete} />
              </CoreStack>
            }
          />

          <CodeSample
            title="  "
            description={<>
              <Subtitle> Clickable Deletable </Subtitle>

              <SubtitleDescription> onClick and onDelete props can be used together to make a {CORE_COMPONENT_NAME} both clickable and deletable
              </SubtitleDescription></>}
            code={`<CoreChip
  label="Clickable Deletable"
  onClick={handleClick}
  onDelete={handleDelete}
/>
<CoreChip
  label="Clickable Deletable"
  variant="outlined"
  onClick={handleClick}
  onDelete={handleDelete}
/>`}
            expandedCode={`import { CoreChip, CoreStack } from "@wrappid/core";

function handleClick() {
  console.info("CoreChip clicked! 🎉");
}

function handleDelete() {
  console.info("Delete icon clicked! 🗑️");
}
export default function ClickableDeletableCoreChip() {
  return (
    <CoreStack direction="row" spacing={1}>
      <CoreChip
        label="Clickable Deletable"
        onClick={handleClick}
        onDelete={handleDelete}
      />

      <CoreChip
        label="Clickable Deletable"
        variant="outlined"
        onClick={handleClick}
        onDelete={handleDelete}
      />
    </CoreStack>
  );`}
            renderElement={
              <CoreStack direction="row" spacing={1}>
                <CoreChip
                  label="Clickable Deletable"
                  onClick={handleClick}
                  onDelete={handleDelete}
                />

                <CoreChip
                  label="Clickable Deletable"
                  variant="outlined"
                  onClick={handleClick}
                  onDelete={handleDelete}
                />
              </CoreStack>
            }
          />

          <CodeSample
            title="  "
            description={<>
              <Subtitle>Clickable link</Subtitle>

              <SubtitleDescription> <CodeBlock>component</CodeBlock> prop can be used to link a component.
              </SubtitleDescription></>}
            code={`<CoreChip
  label="Clickable Link"
  component="a"
  href="https://www.wrappid.dev"
  target="_blank"
  clickable />

<CoreChip
  label="Clickable Link"
  component="a"
  href="https://www.wrappid.dev"
  target="_blank"
  variant="outlined"
  clickable
/>`}
            expandedCode={`import { CoreChip, CoreStack } from "@wrappid/core";

export default function ClickableLinkCoreChip() {
  return (
    <CoreStack direction="row" spacing={1}>
      <CoreChip
        label="Clickable Link"
        component="a"
        href="https://www.wrappid.dev"
        target="_blank"
        clickable />

      <CoreChip
        label="Clickable Link"
        component="a"
        href="https://www.wrappid.dev"
        target="_blank"
        variant="outlined"
        clickable
      />
    </CoreStack>
  );
}`}
            renderElement={
              <CoreStack direction="row" spacing={1}>
                <CoreChip
                  label="Clickable Link"
                  component="a"
                  href="https://www.wrappid.dev"
                  target="_blank"
                  clickable />
            
                <CoreChip
                  label="Clickable Link"
                  component="a"
                  href="https://www.wrappid.dev"
                  target="_blank"
                  variant="outlined"
                  clickable
                />
              </CoreStack>
            }
          />

          <CodeSample
            title="  "
            description={<>
              <Subtitle> Custom delete icon </Subtitle>

              <SubtitleDescription> <CodeBlock>deleteIcon</CodeBlock> prop can be used to provide a custom delete icon.
              </SubtitleDescription></>}
            code={`<CoreChip
  label="Custom delete icon"
  onClick={handleClick}
  onDelete={handleDelete}
  deleteIcon={<CoreIcon icon="done" />}
/>
<CoreChip
  label="Custom delete icon"
  onClick={handleClick}
  onDelete={handleDelete}
  deleteIcon={<CoreIcon icon="delete" />}
  variant="outlined"
/>`}
            expandedCode={`import { CoreChip, CoreStack, CoreIcon } from "@wrappid/core";

function handleClick() {
  console.info("CoreChip clicked! 🎉");
}

function handleDelete() {
  console.info("Delete icon clicked! 🗑️");
}

export default function CustomDeleteIconCoreChip() {
  return (
    <CoreStack direction="row" spacing={1}>
      <CoreChip
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<CoreIcon icon="done" />}
      />

      <CoreChip
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<CoreIcon icon="delete" />}
        variant="outlined"
      />
    </CoreStack>
  );
}`}
            renderElement={
              <CoreStack direction="row" spacing={1}>
                <CoreChip
                  label="Custom delete icon"
                  onClick={handleClick}
                  onDelete={handleDelete}
                  deleteIcon={<CoreIcon icon="done" />}
                />

                <CoreChip
                  label="Custom delete icon"
                  onClick={handleClick}
                  onDelete={handleDelete}
                  deleteIcon={<CoreIcon icon="delete" />}
                  variant="outlined"
                />
              </CoreStack>
            }
          />

          <CodeSample
            title={`${CORE_COMPONENT_NAME} adornments`}
            description={
              <>
                <SubtitleDescription>
                It is possible to add ornaments to the beginning of the component.
                The avatar prop and the icon prop can be used to add an avatar or an icon, respectively
                </SubtitleDescription>

                <Subtitle>Avatar Chip</Subtitle>

                <SubtitleDescription>
                  <CodeBlock>avatar</CodeBlock> 

                  prop can be used to add an avatar to the {CORE_COMPONENT_NAME}.
                </SubtitleDescription>
              </>

            }
            code={`<CoreChip avatar={<CoreBox styleClasses={[CoreClasses.PADDING.PL1]}><CoreAvatar styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_SMALL]}>A</CoreAvatar></CoreBox>} label="Avatar" />

<CoreChip
  avatar={<CoreBox styleClasses={[CoreClasses.PADDING.PL1]}><CoreAvatar alt="Ananta" src="https://picsum.photos/200?random=1" styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_SMALL]} /></CoreBox>}
  label="Avatar"
  variant="outlined"
/>`}
            expandedCode={`import { CoreAvatar, CoreBox, CoreChip, CoreClasses, CoreStack } from "@wrappid/core";

export default function AvatarCoreChip() {
  return (
    <CoreStack direction="row" spacing={1}>
      <CoreChip avatar={<CoreBox styleClasses={[CoreClasses.PADDING.PL1]}><CoreAvatar styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_SMALL]}>A</CoreAvatar></CoreBox>} label="Avatar" />
          
      <CoreChip
        avatar={<CoreBox styleClasses={[CoreClasses.PADDING.PL1]}>
          <CoreAvatar alt="Ananta" src="https://picsum.photos/200?random=1" styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_SMALL]} />
        </CoreBox>}
        label="Avatar"
        variant="outlined"
      />
    </CoreStack>

  );
}`}
            renderElement={
              <CoreStack direction="row" spacing={1}>
                <CoreChip avatar={<CoreBox styleClasses={[CoreClasses.PADDING.PL1]}><CoreAvatar styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_SMALL]}>A</CoreAvatar></CoreBox>} label="Avatar" />
                  
                <CoreChip
                  avatar={<CoreBox styleClasses={[CoreClasses.PADDING.PL1]}>
                    <CoreAvatar alt="Ananta" src="https://picsum.photos/200?random=1" styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_SMALL]} />
                  </CoreBox>}
                  label="Avatar"
                  variant="outlined"
                />
              </CoreStack>
            }
          />

          <CodeSample
            title={" "}
            description={<>
              <Subtitle>Icon chip</Subtitle>

              <SubtitleDescription>
                <CodeBlock>icon</CodeBlock> prop to add an icon to the Chip
              </SubtitleDescription>
            </>
            }
            code={`<CoreChip icon={<CoreIcon icon="mood" />} label="With Icon" />
<CoreChip icon={<CoreIcon icon="mood" />} label="With Icon" variant="outlined" />`}
            expandedCode={`import { CoreChip, CoreStack, CoreIcon } from "@wrappid/core";

export default function IconCoreChip() {
  return (
    <CoreStack direction="row" spacing={1}>
      <CoreChip icon={<CoreIcon icon="mood" />} label="With Icon" />

      <CoreChip
        icon={<CoreIcon icon="mood" />}
        label="With Icon"
        variant="outlined" />
    </CoreStack>
  );
}`}
            renderElement={
              <CoreStack direction="row" spacing={1}>
                <CoreChip icon={<CoreIcon icon="mood" />} label="With Icon" />

                <CoreChip
                  icon={<CoreIcon icon="mood" />}
                  label="With Icon"
                  variant="outlined" />
              </CoreStack>
            }
          />

          <CodeSample
            title={`Color ${CORE_COMPONENT_NAME}`}
            description={<><CodeBlock>color</CodeBlock> prop is used to define a color from theme palette.</>}
            code={`
    <CoreChip label="primary" color="primary" />
    <CoreChip label="success" color="success" />
    <CoreChip label="primary" color="primary" variant="outlined" />
    <CoreChip label="success" color="success" variant="outlined" />
        `}
            expandedCode={`import { CoreChip, CoreStack } from "@wrappid/core";

export default function ColorCoreChip() {
  return (
    <CoreStack spacing={1} alignItems="center">
      <CoreStack direction="row" spacing={1}>
        <CoreChip label="primary" color="primary" />
          
        <CoreChip label="success" color="success" />
      </CoreStack>
          
      <CoreStack direction="row" spacing={1}>
        <CoreChip label="primary" color="primary" variant="outlined" />
          
        <CoreChip label="success" color="success" variant="outlined" />
      </CoreStack>
    </CoreStack>
  );
}`}
            renderElement={
              <CoreStack spacing={1} alignItems="center">
                <CoreStack direction="row" spacing={1}>
                  <CoreChip label="primary" color="primary" />
            
                  <CoreChip label="success" color="success" />
                </CoreStack>
            
                <CoreStack direction="row" spacing={1}>
                  <CoreChip label="primary" color="primary" variant="outlined" />
            
                  <CoreChip label="success" color="success" variant="outlined" />
                </CoreStack>
              </CoreStack>
            }
          />

          <CodeSample
            title={`Sizes ${CORE_COMPONENT_NAME}`}
            description={<>
              <CoreTypographyBody1>
                <CodeBlock>size</CodeBlock>

                prop is used to define a small and medium {CORE_COMPONENT_NAME}. Default value is medium.</CoreTypographyBody1>
            </>
            }
            code={`<CoreChip label="Small" size="small" />
<CoreChip label="Small" size="small" variant="outlined" />
<CoreStack direction="row" spacing={1}>
<CoreChip label="Medium" size="medium" />
<CoreChip label="Default" />`}
            expandedCode={`import { CoreChip, CoreStack } from "@wrappid/core";

export default function SizesCoreChip() {
  return (
    <CoreStack spacing={1} alignItems="center">
      <CoreStack direction="row" spacing={1}>
        <CoreChip label="Small" size="small" />

        <CoreChip label="Small" size="small" variant="outlined" />
      </CoreStack>

      <CoreStack direction="row" spacing={1}>
        <CoreChip label="Medium" size="medium" />

        <CoreChip label="Default" />
      </CoreStack>
    </CoreStack>
  );
}`}
            renderElement={
              <CoreStack spacing={1} alignItems="center">
                <CoreStack direction="row" spacing={1}>
                  <CoreChip label="Small" size="small" />
            
                  <CoreChip label="Small" size="small" variant="outlined" />
                </CoreStack>
            
                <CoreStack direction="row" spacing={1}>
                  <CoreChip label="Medium" size="medium" />
            
                  <CoreChip label="Default" />
                </CoreStack>
              </CoreStack>
            }
          />

          <CodeSample
            title={`Multiline ${CORE_COMPONENT_NAME}(NOT WORKING)`}
            description={`By default, ${CORE_COMPONENT_NAME} displays labels only in a single line. To have them support multiline content, use styleClasses to set height to auto to the ${CORE_COMPONENT_NAME} component, and add whiteSpace: normal to the label styles.`}
            code={`<CoreBox /*sx={{ width: 100 }}*/>
  <CoreChip
    // sx={{
    //   height: 'auto',
    //   '& .MuiChip-label': {
    //     display: 'block',
    //     whiteSpace: 'normal',
    //   },
    // }}
    label="This is a chip that has multiple lines."
  />
</CoreBox>
        `}
            expandedCode={""}
            renderElement={
              <>

                <CoreBox /*sx={{ width: 100 }}*/>
                  <CoreChip
                    // sx={{
                    //   height: 'auto',
                    //   '& .MuiChip-label': {
                    //     display: 'block',
                    //     whiteSpace: 'normal',
                    //   },
                    // }}
                    label="This is a chip that has multiple lines."
                  />
                </CoreBox>
              </>
            }
          />

          <CodeSample
            title={`Array ${CORE_COMPONENT_NAME}`}
            description="An example of rendering multiple chips from an array of values. Deleting a chip removes it from the array. Note that since no onClick prop is defined, the Chip can be focused, but does not gain depth while clicked or touched."
            code={`<CorePaper
  styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.PADDING.P1]}
  component="ul"
>
  {chipData.map((data) => {

    return (
      <CoreListItem key={data?.key}>
        <CoreChip
          label={data?.label}
          onDelete={handleDeleteData(data)}
        />
      </CoreListItem>
    );
  })}
</CorePaper>`}
            expandedCode={`import { useState } from "react";
import { CoreChip, CoreClasses, CorePaper, CoreListItem } from "@wrappid/core";

const handleDeleteData = (chipToDelete) => () => {
  setCoreChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
};
const [chipData, setCoreChipData] = useState([
  { key: 0, label: "core" },
  { key: 1, label: "native-web" },
  { key: 2, label: "native-mobile" },
  { key: 3, label: "styles" },
  { key: 4, label: "toolkit" },
]);

export default function ArrayCoreChip() {
  return (
    <CorePaper
      styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.PADDING.P1]}
      component="ul"
    >
      {chipData.map((data) => {

        return (
          <CoreListItem key={data?.key}>
            <CoreChip
              label={data?.label}
              onDelete={handleDeleteData(data)}
            />
          </CoreListItem>
        );
      })}
    </CorePaper>
  );
}`}
            renderElement={
              <CorePaper
                styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.PADDING.P1]}
                component="ul"
              >
                {chipData.map((data) => {

                  return (
                    <CoreListItem key={data?.key}>
                      <CoreChip
                        label={data?.label}
                        onDelete={handleDeleteData(data)}
                      />
                    </CoreListItem>
                  );
                })}
              </CorePaper>
            }
          />

        </>
      }
    />
  );
}
