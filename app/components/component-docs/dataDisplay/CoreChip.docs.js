import {
  CoreClasses,
  CoreH4,
  CoreTypographyBody1,
  CoreChip,
  CoreStack,
  CoreIcon,
  CoreAvatar,
  CoreBox,
  CoreListItem,
  CorePaper,
  CoreH6
} from "@wrappid/core";

import CodeImport from "../../CodeImport";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

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

export default function CoreChipDocs() {
  return (
    <>
      <CoreH4
        styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}
      >CoreChip</CoreH4>

      <CoreTypographyBody1>
        Chips are compact elements that represent an input, attribute, or action.
      </CoreTypographyBody1>

      <CoreTypographyBody1>
      Chips allow users to enter information, make selections, filter content, or trigger actions.
      </CoreTypographyBody1>

      <CoreTypographyBody1>
While included here as a standalone component, the most common use will be in some form of input, so some of the behavior demonstrated here is not shown in context.
      
      </CoreTypographyBody1>

      <CodeImport name="CoreChip" />

      <CodeSample
        title={"Basic chip"}
        description={"The Chip component supports outlined and filled styling."}
        code={`<CoreChip label="Chip Filled" />
<CoreChip label="Chip Outlined" variant="outlined" />`}
        renderElement={<>
          <CoreChip label="Chip Filled" />

          <CoreChip label="Chip Outlined" variant="outlined" />        
        </>}
      />
      
      <CodeSample
        title="Chip actions"
        description="You can use the following actions.
Chips with the onClick prop defined change appearance on focus, hover, and click.
Chips with the onDelete prop defined will display a delete icon which changes appearance on hover."
        code={`<CoreStack direction="row" spacing={1}>
  <CoreChip label="Clickable" onClick={handleClick} />
  <CoreChip label="Clickable" variant="outlined" onClick={handleClick} />
</CoreStack>
        `}
        renderElement={
          <CoreStack direction="row" spacing={1}>
            <CoreChip label="Clickable" onClick={handleClick} />

            <CoreChip label="Clickable" variant="outlined" onClick={handleClick} />
          </CoreStack>
        }
      />

      <CodeSample
        title="Deletable"
        description="You can use the onDelete prop to add a delete icon to the Chip."
        code={`<CoreStack direction="row" spacing={1}>
  <CoreChip label="Deletable" onDelete={handleDelete} />
  <CoreChip label="Deletable" variant="outlined" onDelete={handleDelete} />
</CoreStack>
        `}
        renderElement={
          <CoreStack direction="row" spacing={1}>
            <CoreChip label="Deletable" onDelete={handleDelete} />
            
            <CoreChip label="Deletable" variant="outlined" onDelete={handleDelete} />
          </CoreStack>
        }
      />

      <CodeSample
        title="Clickable and deletable"
        description="You can use the onClick and onDelete props together to make a Chip both clickable and deletable."
        code={`<CoreStack direction="row" spacing={1}>
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
        `}
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
        title="Clickable link(NOT WORKING)"
        description="You can use the component prop to use a link component."
        code={`<CoreStack direction="row" spacing={1}>
  <CoreChip label="Clickable Link" component="a" href="#basic-chip" clickable />
  <CoreChip
    label="Clickable Link"
    component="a"
    href="#basic-chip"
    variant="outlined"
    clickable
  />
</CoreStack>
        `}
        renderElement={
          <CoreStack direction="row" spacing={1}>
            <CoreChip
              label="Clickable Link"
              component="a"
              href="#basic-chip"
              clickable />
            
            <CoreChip
              label="Clickable Link"
              component="a"
              href="#basic-chip"
              variant="outlined"
              clickable
            />
          </CoreStack>
        }
      />

      <CodeSample
        title="Custom delete icon"
        description="You can use the deleteIcon prop to provide a custom delete icon."
        code={`<CoreStack direction="row" spacing={1}>
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
        `}
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
        title="Chip adornments"
        description={
          <>
            <CoreTypographyBody1>
          You can add ornaments to the beginning of the component.
Use the avatar prop to add an avatar or use the icon prop to add an icon.
            </CoreTypographyBody1>

            <CoreH6>Avatar Chip</CoreH6>

            <CoreTypographyBody1>
  You can use the avatar prop to add an avatar to the Chip.
            </CoreTypographyBody1>
          </>

        }
        code={`<CoreStack direction="row" spacing={1}>
  <CoreChip avatar={<CoreBox styleClasses={[CoreClasses.PADDING.PL1]}><CoreAvatar styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_SMALL]}>A</CoreAvatar></CoreBox>} label="Avatar" />
  
  <CoreChip
    avatar={<CoreBox styleClasses={[CoreClasses.PADDING.PL1]}><CoreAvatar alt="Ananta" src="https://picsum.photos/200?random=1" styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_SMALL]} /></CoreBox>}
    label="Avatar"
    variant="outlined"
  />
</CoreStack>
        `}
        renderElement={
          <CoreStack direction="row" spacing={1}>
            <CoreChip avatar={<CoreBox styleClasses={[CoreClasses.PADDING.PL1]}><CoreAvatar styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_SMALL]}>A</CoreAvatar></CoreBox>} label="Avatar" />
            
            <CoreChip
              avatar={<CoreBox styleClasses={[CoreClasses.PADDING.PL1]}><CoreAvatar alt="Ananta" src="https://picsum.photos/200?random=1" styleClasses={[CoreClasses.DATA_DISPLAY.AVATAR_SMALL]} /></CoreBox>}
              label="Avatar"
              variant="outlined"
            />
          </CoreStack>
        }
      />

      <CodeSample
        title={" "}
        description={<>
          <CoreH6>Icon chip</CoreH6>

          <CoreTypographyBody1>
          You can use the icon prop to add an icon to the Chip
          </CoreTypographyBody1>
        </>
        }
        code={`
<CoreStack direction="row" spacing={1}>
  <CoreChip icon={<CoreIcon icon="mood" />} label="With Icon" />
  <CoreChip icon={<CoreIcon icon="mood" />} label="With Icon" variant="outlined" />
</CoreStack>
        `}
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
        title="Color chip"
        description="You can use the color prop to define a color from theme palette."
        code={`
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
        `}
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
        title="Sizes chip"
        description="You can use the size prop to define a small Chip."
        code={`
<CoreStack direction="row" spacing={1}>
  <CoreChip label="Small" size="small" />
  <CoreChip label="Small" size="small" variant="outlined" />
</CoreStack>
        `}
        renderElement={
          <CoreStack direction="row" spacing={1}>
            <CoreChip label="Small" size="small" />
            
            <CoreChip label="Small" size="small" variant="outlined" />
          </CoreStack>
        }
      />

      <CodeSample
        title="Multiline chip"
        description="By default, Chips displays labels only in a single line. To have them support multiline content, use the sx prop to add height:auto to the Chip component, and whiteSpace: normal to the label styles."
        code={`
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
        `}
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
        title="Chip array"
        description="An example of rendering multiple chips from an array of values. Deleting a chip removes it from the array. Note that since no onClick prop is defined, the Chip can be focused, but does not gain depth while clicked or touched."
        code={`<CorePaper styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.PADDING.P1]}
  component="ul"
>
  {[
    { key: 0, label: "core" },
    { key: 1, label: "native-web" },
    { key: 2, label: "native-mobile" },
    { key: 3, label: "styles" },
    { key: 4, label: "toolkit" },
  ].map((data) => {
    return (
      <CoreListItem key={data.key}>
        <CoreChip
          label={data.label}
          onDelete={handleDelete}
        />
      </CoreListItem>
    );
  })}
</CorePaper>
        `}
        renderElement={
          <CorePaper
            styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.PADDING.P1]}
            component="ul"
          >
            {[
              { key: 0, label: "Angular" },
              { key: 1, label: "jQuery" },
              { key: 2, label: "Polymer" },
              { key: 3, label: "React" },
              { key: 4, label: "Vue.js" },
            ].map((data) => {
              return (
                <CoreListItem key={data.key}>
                  <CoreChip
                    label={data.label}
                    onDelete={handleDelete}
                  />
                </CoreListItem>
              );
            })}
          </CorePaper>
        }
      />

      <ComponentProps component={CoreChip} />
    </>
  );
}
