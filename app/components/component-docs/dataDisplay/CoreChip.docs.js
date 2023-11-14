import {
  CoreH4,
  CoreTypographyBody1,
  CoreChip,
  CoreStack,
  CoreIcon,
  CoreAvatar,
  CoreBox,
  CoreListItem,
  CorePaper
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreChipDocs() {
  return (
    <>
      <CoreH4>CoreChip</CoreH4>

      <CoreTypographyBody1>
      Chips are compact elements that represent an input, attribute, or action.
      Chips allow users to enter information, make selections, filter content, or trigger actions.

While included here as a standalone component, the most common use will be in some form of input, so some of the behavior demonstrated here is not shown in context.
      </CoreTypographyBody1>

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
        code={`
<CoreStack direction="row" spacing={1}>
  <CoreChip label="Clickable" onClick={()=>{}} />
  <CoreChip label="Clickable" variant="outlined" onClick={()=>{}} />
</CoreStack>
        `}
        renderElement={
          <CoreStack direction="row" spacing={1}>
            <CoreChip label="Clickable" onClick={()=>{}} />

            <CoreChip label="Clickable" variant="outlined" onClick={()=>{}} />
          </CoreStack>
        }
      />

      <CodeSample
        title="Deletable"
        description=""
        code={`
<CoreStack direction="row" spacing={1}>
  <CoreChip label="Deletable" onDelete={()=>{}} />
  <CoreChip label="Deletable" variant="outlined" onDelete={()=>{}} />
</CoreStack>
        `}
        renderElement={
          <CoreStack direction="row" spacing={1}>
            <CoreChip label="Deletable" onDelete={()=>{}} />
            
            <CoreChip label="Deletable" variant="outlined" onDelete={()=>{}} />
          </CoreStack>
        }
      />

      <CodeSample
        title="Clickable and deletable"
        description=""
        code={`
<CoreStack direction="row" spacing={1}>
  <CoreChip
    label="Clickable Deletable"
    onClick={()=>{}}
    onDelete={()=>{}}
  />
  <CoreChip
    label="Clickable Deletable"
    variant="outlined"
    onClick={()=>{}}
    onDelete={()=>{}}
  />
</CoreStack>
        `}
        renderElement={
          <CoreStack direction="row" spacing={1}>
            <CoreChip
              label="Clickable Deletable"
              onClick={()=>{}}
              onDelete={()=>{}}
            />

            <CoreChip
              label="Clickable Deletable"
              variant="outlined"
              onClick={()=>{}}
              onDelete={()=>{}}
            />
          </CoreStack>
        }
      />

      <CodeSample
        title="Clickable link"
        description=""
        code={`
<CoreStack direction="row" spacing={1}>
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
        description=""
        code={`
<CoreStack direction="row" spacing={1}>
  <CoreChip
    label="Custom delete icon"
    onClick={()=>{}}
    onDelete={()=>{}}
    deleteIcon={<CoreIcon icon="done" />}
  />
  <CoreChip
    label="Custom delete icon"
    onClick={()=>{}}
    onDelete={()=>{}}
    deleteIcon={<CoreIcon icon="delete" />}
    variant="outlined"
  />
</CoreStack>
        `}
        renderElement={
          <CoreStack direction="row" spacing={1}>
            <CoreChip
              label="Custom delete icon"
              onClick={()=>{}}
              onDelete={()=>{}}
              deleteIcon={<CoreIcon icon="done" />}
            />

            <CoreChip
              label="Custom delete icon"
              onClick={()=>{}}
              onDelete={()=>{}}
              deleteIcon={<CoreIcon icon="delete" />}
              variant="outlined"
            />
          </CoreStack>
        }
      />

      <CodeSample
        title="Chip adornments"
        description="You can add ornaments to the beginning of the component.
Use the avatar prop to add an avatar or use the icon prop to add an icon."
        code={`
<CoreStack direction="row" spacing={1}>
  <CoreChip avatar={<CoreAvatar>M</CoreAvatar>} label="Avatar" />
  <CoreChip
    avatar={<CoreAvatar alt="Natacha" src="https://mui.com/static/images/avatar/1.jpg" />}
    label="Avatar"
    variant="outlined"
  />
</CoreStack>
        `}
        renderElement={
          <CoreStack direction="row" spacing={1}>
            <CoreChip avatar={<CoreAvatar>M</CoreAvatar>} label="Avatar" />
            
            <CoreChip
              avatar={<CoreAvatar alt="Natacha" src="https://mui.com/static/images/avatar/1.jpg" />}
              label="Avatar"
              variant="outlined"
            />
          </CoreStack>
        }
      />

      <CodeSample
        title="Icon chip"
        description=""
        code={`
<CoreStack direction="row" spacing={1}>
  <CoreChip icon={<CoreIcon icon="mail" />} label="With Icon" />
  <CoreChip icon={<CoreIcon icon="mail" />} label="With Icon" variant="outlined" />
</CoreStack>
        `}
        renderElement={
          <CoreStack direction="row" spacing={1}>
            <CoreChip icon={<CoreIcon icon="mail" />} label="With Icon" />
            
            <CoreChip icon={<CoreIcon icon="mail" />} label="With Icon" variant="outlined" />
          </CoreStack>
        }
      />

      <CodeSample
        title="Color chip(NOT WORKING)"
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
            {/* <CoreStack direction="row" spacing={1}>
              <CoreChip label="primary" color="primary" />
            
              <CoreChip label="success" color="success" />
            </CoreStack>
            
            <CoreStack direction="row" spacing={1}>
              <CoreChip label="primary" color="primary" variant="outlined" />
            
              <CoreChip label="success" color="success" variant="outlined" />
            </CoreStack> */}
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
          <CoreBox /*sx={{ width: 100 }}*/>
            <CoreChip
              // sx={{
              //   "& .MuiChip-label": {
              //     display   : "block",
              //     whiteSpace: "normal",
              //   },
              //   height: "auto",
              // }}
              label="This is a chip that has multiple lines."
            />
          </CoreBox>
        }
      />

      <CodeSample
        title="Chip array"
        description="An example of rendering multiple chips from an array of values. Deleting a chip removes it from the array. Note that since no onClick prop is defined, the Chip can be focused, but does not gain depth while clicked or touched."
        code={`
<CorePaper
  // sx={{
  //   display: 'flex',
  //   justifyContent: 'center',
  //   flexWrap: 'wrap',
  //   listStyle: 'none',
  //   p: 0.5,
  //   m: 0,
  // }}
  component="ul"
>
  {[
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' },
  ].map((data) => {
    return (
      <CoreListItem key={data.key}>
        <CoreChip
          label={data.label}
          onDelete={}
        />
      </CoreListItem>
    );
  })}
</CorePaper>
        `}
        renderElement={
          <CorePaper
            // sx={{
            //   display       : "flex",
            //   flexWrap      : "wrap",
            //   justifyContent: "center",
            //   listStyle     : "none",
            //   m             : 0,
            //   p             : 0.5,
            // }}
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
                    onDelete={()=>{}}
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
