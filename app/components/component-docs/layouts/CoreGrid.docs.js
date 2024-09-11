import { useState } from "react";

import {
  CoreBox,
  CoreClasses,
  CoreGrid,
  CoreImage,
  CorePaper,
  CoreSelect,
  CoreTypographyBody1,
  CoreTypographyCaption
  
} from "@wrappid/core";
  
import CodeBlock from "../../CodeBlock";
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

const spacingValueArray = [
  0,
  0.5,
  1,
  2,
  3,
  4,
  8,
  12
];

const justifyContent = [
  "JUSTIFY_CONTENT_CENTER",
  "JUSTIFY_CONTENT_FLEX_START",
  "JUSTIFY_CONTENT_FLEX_END",
  "JUSTIFY_CONTENT_SPACE_BETWEEN",
  "JUSTIFY_CONTENT_SPACE_AROUND",
  "JUSTIFY_CONTENT_SPACE_EVENLY"
];

const alignItemArray = [
  "ALIGN_ITEMS_START",
  "ALIGN_ITEMS_END",
  "ALIGN_ITEMS_CENTER",
  "ALIGN_ITEMS_BASELINE",
  "ALIGN_ITEMS_STRETCH"
];

const directionArray = ["row", "row-reverse", "column", "column-reverse"];

export default function CoreGridDocs() {
  const [spacingValue, setSpacingValue] = useState(spacingValueArray[0]);
  const handleSelectChange = (event) => {
    setSpacingValue(event.target.value);
  };

  const [justifyContentValue, setJustifyContentValue] = useState(justifyContent[0]);
  const handleJustifyContentSelectChange = (event) => {
    setJustifyContentValue(event.target.value);
  };

  const [directionValue, setdirectionValue] = useState(directionArray[0]);
  const handledirectionValueSelectChange = (event) => {
    setdirectionValue(event.target.value);
  };

  const [alignItemValue, setalignItemValue] = useState(alignItemArray[0]);
  const handlealignItemValueSelectChange = (event) => {
    setalignItemValue(event.target.value);
  };

  return (
    <ComponentDocs  
      component={CoreGrid}
      description={<>
        <CoreTypographyBody1>
      The CoreGrid adapts to screen size and orientation, ensuring consistency across layouts.

        </CoreTypographyBody1>

        <CoreTypographyBody1>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
        The grid creates visual consistency between layouts while allowing flexibility across a wide variety of designs. The responsive UI is based on a 12-column in grid layout.

        </CoreTypographyBody1>
      </>}
      samples={
        <>
          <CodeSample
            title={"Fluid grids"}
            description="Fluid grids use columns that scale and resize content. A fluid grid's layout can use breakpoints to determine if the layout needs to change dramatically."
          />

          <CodeSample
            title={"Basic grid"}
            description={<>
              <CoreTypographyBody1>
                  Column widths are integer values between 1 and 12; they apply at any breakpoint and indicate how many columns are occupied by the component.
              </CoreTypographyBody1>

              <CoreTypographyBody1>
                  A value passed to any given breakpoint also applies to all wider breakpoints (if they have no values explicitly defined). For example, xs={12} sizes a component to occupy the full width of its parent container, regardless of the viewport size.
              </CoreTypographyBody1>
            </>}
            code={`<CoreGrid direction="row">
  <CorePaper
    gridProps={{ gridSize: { md: 8 } }}
    styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
      xs=8
  </CorePaper>
  <CorePaper gridProps={{ gridSize: { md: 4 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
      xs=8
  </CorePaper>
  <CorePaper gridProps={{ gridSize: { md: 4 } }} styleClasses={ [CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>xs=4</CorePaper>
  <CorePaper gridProps={{ gridSize: { md: 8 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
    xs=8
  </CorePaper>
</CoreGrid>`}
            expandedCode={`import { CoreBox, CoreClasses, CorePaper, CoreGrid } from "@wrappid/core";
export default function BasicCoreGrid() {
  return (
    <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
      <CoreGrid direction="row">
        <CorePaper gridProps={{ gridSize: { md: 8 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
          xs=8
        </CorePaper>
        <CorePaper gridProps={{ gridSize: { md: 4 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
          xs=8
        </CorePaper>       
        <CorePaper gridProps={{ gridSize: { md: 4 } }} styleClasses={ [CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
          xs=4
        </CorePaper>       
        <CorePaper gridProps={{ gridSize: { md: 8 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
          xs=8
        </CorePaper>
      </CoreGrid>
    </CoreBox>
  );
}`}
            renderElement={
              <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
                <CoreGrid direction="row">
                   
                  <CorePaper
                    gridProps={{ gridSize: { md: 8 } }}
                    styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
                        xs=8
                  </CorePaper>
                   
                  <CorePaper gridProps={{ gridSize: { md: 4 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
                        xs=8
                  </CorePaper>
                    
                  <CorePaper gridProps={{ gridSize: { md: 4 } }} styleClasses={ [CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>xs=4</CorePaper>
                   
                  <CorePaper gridProps={{ gridSize: { md: 8 } }} styleClasses={ [CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>xs=8</CorePaper>
   
                </CoreGrid>
              </CoreBox>
            }
          />

          <CodeSample
            title={"Grid with multiple breakpoints"}
            description="Components may have multiple widths defined, causing the layout to change at the defined breakpoint. Width values given to larger breakpoints override those given to smaller breakpoints."
            code={`<CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
  <CoreGrid container spacing={2}>
    <CorePaper gridProps={{ gridSize: { md: 4, xs: 6 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>xs=6 md=8</CorePaper>
    <CorePaper gridProps={{ gridSize: { md: 8, xs: 6 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>xs=6 md=4</CorePaper>
    <CorePaper gridProps={{ gridSize: { md: 8, xs: 6 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>xs=6 md=4</CorePaper>
    <CorePaper gridProps={{ gridSize: { md: 4, xs: 6 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>xs=6 md=8</CorePaper>
  </CoreGrid>
</CoreBox>`}
            expandedCode={`import { CoreBox, CoreClasses, CorePaper, CoreGrid } from "@wrappid/core";
export default function BasicCoreGrid() {
  return (
    <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
      <CoreGrid container spacing={2}>
        <CorePaper gridProps={{ gridSize: { md: 4, xs: 6 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>xs=6 md=8</CorePaper>
        <CorePaper gridProps={{ gridSize: { md: 8, xs: 6 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>xs=6 md=4</CorePaper>
        <CorePaper gridProps={{ gridSize: { md: 8, xs: 6 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>xs=6 md=4</CorePaper>
        <CorePaper gridProps={{ gridSize: { md: 4, xs: 6 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>xs=6 md=8</CorePaper>
      </CoreGrid>
    </CoreBox>
  );
}`}
            renderElement={
              <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
                <CoreGrid container spacing={2}>
                  <CorePaper gridProps={{ gridSize: { md: 4, xs: 6 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>xs=6 md=8</CorePaper>

                  <CorePaper gridProps={{ gridSize: { md: 8, xs: 6 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>xs=6 md=4</CorePaper>

                  <CorePaper gridProps={{ gridSize: { md: 8, xs: 6 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>xs=6 md=4</CorePaper>

                  <CorePaper gridProps={{ gridSize: { md: 4, xs: 6 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>xs=6 md=8</CorePaper>
                </CoreGrid>
              </CoreBox>
            }
          />

          <CodeSample
            title={"Spacing"}
            description="To control space between children, use the spacing prop. The spacing value can be any positive number, including decimals and any string. The prop is converted into a CSS property using the theme.spacing() helper."
            code={`<CoreBox>
  <CoreGrid spacing={${spacingValue}} styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
    <CorePaper gridProps={{ enabled: true }} styleClasses={[CoreClasses.HEIGHT.VH_25, CoreClasses.WIDTH.VW_25, CoreClasses.BG.BG_WHITE]}></CorePaper>
    <CorePaper gridProps={{ enabled: true }} styleClasses={[CoreClasses.HEIGHT.VH_25, CoreClasses.WIDTH.VW_25, CoreClasses.BG.BG_WHITE]}></CorePaper>
  </CoreGrid>
</CoreBox>`}
            expandedCode={`import { CoreBox, CoreClasses, CorePaper, CoreGrid } from "@wrappid/core";
export default function BasicCoreGridSpacing() {
  return (
    <CoreBox>
      <CoreGrid spacing={${spacingValue}} styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
        <CorePaper gridProps={{ enabled: true }} styleClasses={[CoreClasses.HEIGHT.VH_25, CoreClasses.WIDTH.VW_25, CoreClasses.BG.BG_WHITE]}></CorePaper>
        <CorePaper gridProps={{ enabled: true }} styleClasses={[CoreClasses.HEIGHT.VH_25, CoreClasses.WIDTH.VW_25, CoreClasses.BG.BG_WHITE]}></CorePaper>
      </CoreGrid>
    </CoreBox>
  );
}`}
            renderElement={
              <CoreGrid styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>

                <CoreBox>
                  <CoreGrid spacing={spacingValue} styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
                    <CorePaper gridProps={{ enabled: true }} styleClasses={[CoreClasses.HEIGHT.VH_25, CoreClasses.WIDTH.VW_25, CoreClasses.BG.BG_WHITE]}></CorePaper>

                    <CorePaper gridProps={{ enabled: true }} styleClasses={[CoreClasses.HEIGHT.VH_25, CoreClasses.WIDTH.VW_25, CoreClasses.BG.BG_WHITE]}></CorePaper>
                  </CoreGrid>
                </CoreBox>

                <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
                  <CoreSelect
                    gridProps={{ gridSize: { md: 6 } }}
                    id="spacingValue"
                    value={spacingValue}
                    handleChange={(event) => handleSelectChange(event)}
                    options={Object.keys(spacingValueArray).map((key) => ({
                      id   : spacingValueArray[key],
                      label: spacingValueArray[key],
                      value: spacingValueArray[key],
                    }))} />
                </CoreBox>

                <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
                  <CoreTypographyBody1>Select spacing values</CoreTypographyBody1>
                </CoreBox>
              </CoreGrid>
            }
          />

          <CodeSample
            title={"Row & column spacing"}
            description="The rowSpacing and columnSpacing props allow for specifying the row and column gaps independently. It's similar to the row-gap and column-gap properties of CSS Grid."
            code={`<CoreGrid rowSpacing={1} columnSpacing={{ md: 3, sm: 2, xs: 1 }}>     
  <CorePaper
    gridProps={{ gridSize: { md: 6, xs: 6 } }}
    styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
      xs=8
  </CorePaper>
  <CorePaper gridProps={{ gridSize: { md: 6, xs: 6 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
      xs=8
  </CorePaper>
  <CorePaper gridProps={{ gridSize: { md: 6, xs: 6 } }} styleClasses={ [CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>xs=4</CorePaper>
  <CorePaper gridProps={{ gridSize: { md: 6, xs: 6 } }} styleClasses={ [CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>xs=8</CorePaper>
</CoreGrid>`}
            expandedCode={`import { CoreBox, CoreClasses, CorePaper, CoreGrid } from "@wrappid/core";
export default function BasicCoreGridRowCol() {
  return (
    <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
      <CoreGrid rowSpacing={1} columnSpacing={{ md: 3, sm: 2, xs: 1 }}>
        <CorePaper gridProps={{ gridSize: { md: 6, xs: 6 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
          xs=8
        </CorePaper>
        <CorePaper gridProps={{ gridSize: { md: 6, xs: 6 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
          xs=8
        </CorePaper>
        <CorePaper gridProps={{ gridSize: { md: 6, xs: 6 } }} styleClasses={ [CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
          xs=4
        </CorePaper>
        <CorePaper gridProps={{ gridSize: { md: 6, xs: 6 } }} styleClasses={ [CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
          xs=8
        </CorePaper>
      </CoreGrid>
    </CoreBox>
  );
}`}
            renderElement={
              <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
                <CoreGrid rowSpacing={1} columnSpacing={{ md: 3, sm: 2, xs: 1 }}>
                   
                  <CorePaper
                    gridProps={{ gridSize: { md: 6, xs: 6 } }}
                    styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
                        xs=8
                  </CorePaper>
                   
                  <CorePaper gridProps={{ gridSize: { md: 6, xs: 6 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
                        xs=8
                  </CorePaper>
                    
                  <CorePaper gridProps={{ gridSize: { md: 6, xs: 6 } }} styleClasses={ [CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>xs=4</CorePaper>
                   
                  <CorePaper gridProps={{ gridSize: { md: 6, xs: 6 } }} styleClasses={ [CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>xs=8</CorePaper>
   
                </CoreGrid>
              </CoreBox>
            }
          />

          <CodeSample
            title={"Responsive values"}
            description="You can switch the props' value based on the active breakpoint. "
            code={`<CoreGrid spacing={{ md: 3, xs: 2 }} columns={{ md: 12, sm: 8, xs: 4 }}>           
  <CorePaper gridProps={{ gridSize: { md: 4, xs: 4 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
    xs=2
  </CorePaper>       
  <CorePaper gridProps={{ gridSize: { md: 4, xs: 4 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
    xs=2
  </CorePaper>         
  <CorePaper gridProps={{ gridSize: { md: 4, xs: 4 } }} styleClasses={ [CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
    xs=2
  </CorePaper>      
  <CorePaper gridProps={{ gridSize: { md: 4, xs: 4 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
    xs=2
  </CorePaper>          
  <CorePaper gridProps={{ gridSize: { md: 4, xs: 4 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
    xs=2
  </CorePaper>   
  <CorePaper gridProps={{ gridSize: { md: 4, xs: 4 } }} styleClasses={ [CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
    xs=2
  </CorePaper>
</CoreGrid>`}
            expandedCode={`import { CoreBox, CoreClasses, CorePaper, CoreGrid } from "@wrappid/core";
export default function BasicCoreGridResponsive() {
  return (
    <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
      <CoreGrid spacing={{ md: 3, xs: 2 }} columns={{ md: 12, sm: 8, xs: 4 }}>           
        <CorePaper gridProps={{ gridSize: { md: 4, xs: 4 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
          xs=2
        </CorePaper>       
        <CorePaper gridProps={{ gridSize: { md: 4, xs: 4 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
          xs=2
        </CorePaper>         
        <CorePaper gridProps={{ gridSize: { md: 4, xs: 4 } }} styleClasses={ [CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
          xs=2
        </CorePaper>      
        <CorePaper gridProps={{ gridSize: { md: 4, xs: 4 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
          xs=2
        </CorePaper>          
        <CorePaper gridProps={{ gridSize: { md: 4, xs: 4 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
          xs=2
        </CorePaper>   
        <CorePaper gridProps={{ gridSize: { md: 4, xs: 4 } }} styleClasses={ [CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
          xs=2
        </CorePaper>
      </CoreGrid>
    </CoreBox>
  );
}`}
            renderElement={
              <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
                <CoreGrid spacing={{ md: 3, xs: 2 }} columns={{ md: 12, sm: 8, xs: 4 }}>
                   
                  <CorePaper
                    gridProps={{ gridSize: { md: 4, xs: 4 } }}
                    styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
                        xs=2
                  </CorePaper>
                   
                  <CorePaper gridProps={{ gridSize: { md: 4, xs: 4 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
                        xs=2
                  </CorePaper>
                    
                  <CorePaper gridProps={{ gridSize: { md: 4, xs: 4 } }} styleClasses={ [CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>xs=2</CorePaper>
                   
                  <CorePaper gridProps={{ gridSize: { md: 4, xs: 4 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>xs=2</CorePaper>
                    
                  <CorePaper gridProps={{ gridSize: { md: 4, xs: 4 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>xs=2</CorePaper>
                    
                  <CorePaper gridProps={{ gridSize: { md: 4, xs: 4 } }} styleClasses={ [CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>xs=2</CorePaper>
   
                </CoreGrid>
              </CoreBox>
            }
          />

          <CodeSample
            title={"Interactive"}
            description="Below is an interactive demo that lets you explore the visual results of the different settings: "
            code={`<CoreGrid direction="${directionValue}" styleClasses={[CoreClasses.ALIGNMENT.${justifyContentValue}, CoreClasses.ALIGNMENT.${alignItemValue}, CoreClasses.WIDTH.W_100, CoreClasses.HEIGHT.VH_50]}>  
  <CorePaper
    gridProps={{ gridSize: { xs: "auto" } }}
    styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
    Cell 1
  </CorePaper>
  <CorePaper gridProps={{ gridSize: { xs: "auto" } }} styleClasses={[CoreClasses.PADDING.P2, CoreClasses.TEXT.TEXT_CENTER]}>
    Cell 2
  </CorePaper>
  <CorePaper gridProps={{ gridSize: { xs: "auto" } }} styleClasses={ [CoreClasses.PADDING.P3, CoreClasses.TEXT.TEXT_CENTER]}>Cell 3</CorePaper>
</CoreGrid>`}
            expandedCode={`import { CoreBox, CoreClasses, CorePaper, CoreGrid } from "@wrappid/core";
export default function BasicCoreGridInteractive() {
  return (
    <CoreBox styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.HEIGHT.VH_50]}>
      <CoreGrid direction="${directionValue}" styleClasses={[CoreClasses.ALIGNMENT.${justifyContentValue}, CoreClasses.ALIGNMENT.${alignItemValue}, CoreClasses.WIDTH.W_100, CoreClasses.HEIGHT.VH_50]}>
        <CorePaper
          gridProps={{ gridSize: { xs: "auto" } }}
          styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
          Cell 1
        </CorePaper>
        <CorePaper gridProps={{ gridSize: { xs: "auto" } }} styleClasses={[CoreClasses.PADDING.P2, CoreClasses.TEXT.TEXT_CENTER]}>
          Cell 2
        </CorePaper>
        <CorePaper gridProps={{ gridSize: { xs: "auto" } }} styleClasses={ [CoreClasses.PADDING.P3, CoreClasses.TEXT.TEXT_CENTER]}>Cell 3</CorePaper>
      </CoreGrid>
    </CoreBox>
  );
}`}
            renderElement={
              <CoreGrid styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
                <CoreBox styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.HEIGHT.VH_50]}>
                  <CoreGrid direction={directionValue} styleClasses={[CoreClasses.ALIGNMENT[justifyContentValue], CoreClasses.ALIGNMENT[alignItemValue], CoreClasses.WIDTH.W_100, CoreClasses.HEIGHT.VH_50]}>
                   
                    <CorePaper
                      gridProps={{ gridSize: { xs: "auto" } }}
                      styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
                        Cell 1
                    </CorePaper>
                   
                    <CorePaper gridProps={{ gridSize: { xs: "auto" } }} styleClasses={[CoreClasses.PADDING.P2, CoreClasses.TEXT.TEXT_CENTER]}>
                        Cell 2
                    </CorePaper>
                    
                    <CorePaper gridProps={{ gridSize: { xs: "auto" } }} styleClasses={ [CoreClasses.PADDING.P3, CoreClasses.TEXT.TEXT_CENTER]}>Cell 3</CorePaper>
   
                  </CoreGrid>
                </CoreBox>

                <CoreBox>
                  <CoreTypographyBody1 styleClasses={[CoreClasses.MARGIN.M0]}>Direction</CoreTypographyBody1>
                </CoreBox>

                <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.MARGIN.M0]}>
                  <CoreSelect
                    gridProps={{ gridSize: { md: 6 } }}
                    id="directionValue"
                    value={directionValue}
                    handleChange={(event) => handledirectionValueSelectChange(event)}
                    options={Object.keys(directionArray).map((key) => ({
                      id   : directionArray[key],
                      label: directionArray[key],
                      value: directionArray[key],
                    }))}
                    styleClasses={[CoreClasses.MARGIN.M0]}
                  />
                </CoreBox>

                <CoreBox>
                  <CoreTypographyBody1 styleClasses={[CoreClasses.PADDING.PT2, CoreClasses.MARGIN.M0]}>Justify Alignment</CoreTypographyBody1>
                </CoreBox>

                <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
                  <CoreSelect
                    gridProps={{ gridSize: { md: 6 } }}
                    id="justifyContentValue"
                    value={justifyContentValue}
                    handleChange={(event) => handleJustifyContentSelectChange(event)}
                    options={Object.keys(justifyContent).map((key) => ({
                      id   : justifyContent[key],
                      label: justifyContent[key],
                      value: justifyContent[key],
                    }))} />
                </CoreBox>

                <CoreBox styleClasses={[CoreClasses.PADDING.PT2, CoreClasses.MARGIN.M0]}>
                  <CoreTypographyBody1>Align Item</CoreTypographyBody1>
                </CoreBox>

                <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.MARGIN.M0]}>
                  <CoreSelect
                    gridProps={{ gridSize: { md: 6 } }}
                    id="alignItemValue"
                    value={alignItemValue}
                    handleChange={(event) => handlealignItemValueSelectChange(event)}
                    options={Object.keys(alignItemArray).map((key) => ({
                      id   : alignItemArray[key],
                      label: alignItemArray[key],
                      value: alignItemArray[key],
                    }))} />
                </CoreBox>

              </CoreGrid>
            }
          />

          <CodeSample
            title={"Auto-layout"}
            description="The Auto-layout makes the items equitably share the available space. That also means you can set the width of one item and the others will automatically resize around it."
            code={`<CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
  <CoreGrid spacing={3}>
    <CorePaper gridProps={{ gridSize: { md: 3, xs: 3 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
      xs
    </CorePaper>
    <CorePaper gridProps={{ gridSize: { md: 6, xs: 6 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
      xs=6
    </CorePaper>
    <CorePaper gridProps={{ gridSize: { md: 3, xs: 3 } }} styleClasses={ [CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
      xs
    </CorePaper>
  </CoreGrid>
</CoreBox>`}
            expandedCode={`import { CoreBox, CoreClasses, CorePaper, CoreGrid } from "@wrappid/core";
export default function BasicCoreGridAutoLayout() {
  return (
    <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
      <CoreGrid spacing={3}>
        <CorePaper gridProps={{ gridSize: { md: 3, xs: 3 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
          xs
        </CorePaper>
        <CorePaper gridProps={{ gridSize: { md: 6, xs: 6 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
          xs=6
        </CorePaper>
        <CorePaper gridProps={{ gridSize: { md: 3, xs: 3 } }} styleClasses={ [CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
          xs
        </CorePaper>
      </CoreGrid>
    </CoreBox>
  );
}`}
            renderElement={
              <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
                <CoreGrid spacing={3}>
                   
                  <CorePaper
                    gridProps={{ gridSize: { md: 3, xs: 3 } }}
                    styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
                        xs
                  </CorePaper>
                   
                  <CorePaper gridProps={{ gridSize: { md: 6, xs: 6 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
                        xs=6
                  </CorePaper>
                    
                  <CorePaper gridProps={{ gridSize: { md: 3, xs: 3 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
                      xs
                  </CorePaper>
   
                </CoreGrid>
              </CoreBox>
            }
          />

          <CodeSample
            title={"Variable width content"}
            description={<><CoreTypographyBody1>Set one of the size breakpoint props to <CodeBlock>{`"${"auto"}"`}</CodeBlock> instead of

              <CodeBlock>true</CodeBlock> / a

              <CodeBlock>number</CodeBlock>
              to size a column based on the natural width of its content.</CoreTypographyBody1></>}
            code={`<CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
  <CoreGrid spacing={3}>
    <CorePaper
      gridProps={{ gridSize: { xs: "auto" } }}
      styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
        variable width content
    </CorePaper>
    <CorePaper gridProps={{ gridSize: { xs: 6 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
        xs=6
    </CorePaper>
    <CorePaper gridProps={{ gridSize: { xs: 3 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
      xs
    </CorePaper>
  </CoreGrid>
</CoreBox>`}
            expandedCode={`import { CoreBox, CoreClasses, CorePaper, CoreGrid } from "@wrappid/core";

export default function BasicCoreGridVariable() {

  return (
    <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
      <CoreGrid spacing={3}>
        <CorePaper
          gridProps={{ gridSize: { xs: "auto" } }}
          styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
            variable width content
        </CorePaper>
        <CorePaper gridProps={{ gridSize: { xs: 6 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
            xs=6
        </CorePaper>
        <CorePaper gridProps={{ gridSize: { xs: 3 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
          xs
        </CorePaper>
      </CoreGrid>
    </CoreBox>
  );
}`}
            renderElement={
              <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
                <CoreGrid spacing={3}>
                   
                  <CorePaper
                    gridProps={{ gridSize: { xs: "auto" } }}
                    styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
                        variable width content
                  </CorePaper>
                   
                  <CorePaper gridProps={{ gridSize: { xs: 6 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
                        xs=6
                  </CorePaper>
                    
                  <CorePaper gridProps={{ gridSize: { xs: 3 } }} styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
                      xs
                  </CorePaper>
   
                </CoreGrid>
              </CoreBox>
            }
          />

          <CodeSample
            title={"Complex Grid"}
            description="The following demo of how the grid can be used to build complex layouts."
            code={`<CoreGrid spacing={2} styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.PADDING.P3]}>
  <CoreGrid gridProps={{ gridSize: { xs: 3 } }}>
    <CoreImage
      width={128}
      height={128}
      alt="complex"
      src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" />
  </CoreGrid>
  <CoreGrid
    gridProps={{ gridSize: { xs: 9 } }}
  >
    <CoreGrid
      direction="row"
      spacing={2}
      styleClasses={[CoreClasses.MARGIN.MB2]}
    >
      <CoreGrid gridProps={{ gridSize: { xs: 9 } }}>
        <CoreTypographyBody1 variant="body2" styleClasses={[CoreClasses.MARGIN.M0]}> 
          Standard license
        </CoreTypographyBody1>
        <CoreTypographyBody1 variant="subtitle1" styleClasses={[CoreClasses.MARGIN.M0]}>
          Full resolution 1920x1080 • JPEG
        </CoreTypographyBody1>
        <CoreTypographyCaption>
          ID: 1030114
        </CoreTypographyCaption>
      </CoreGrid>
      <CoreGrid direction="column" gridProps={{ gridSize: { xs: 3 } }} styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_END]}>
        <CoreTypographyBody1 variant="body2">
          $19.00
        </CoreTypographyBody1>
      </CoreGrid>
    </CoreGrid>
    <CoreGrid>
      <CoreTypographyBody1 variant="subtitle1">
        Remove
      </CoreTypographyBody1>
    </CoreGrid>
  </CoreGrid>
</CoreGrid>`}
            expandedCode={`import { CoreImage, CoreClasses, CorePaper, CoreGrid, CoreTypographyBody1, CoreTypographyCaption } from "@wrappid/core";
export default function BasicCoreGridComplex() {
  return (
    <CorePaper>
      <CoreGrid spacing={2} styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.PADDING.P3]}>
        <CoreGrid gridProps={{ gridSize: { xs: 3 } }}>
          <CoreImage
            width={128}
            height={128}
            alt="complex"
            src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" />
        </CoreGrid>
        <CoreGrid
          gridProps={{ gridSize: { xs: 9 } }}
        >
          <CoreGrid
            direction="row"
            spacing={2}
            styleClasses={[CoreClasses.MARGIN.MB2]}
          >
            <CoreGrid gridProps={{ gridSize: { xs: 9 } }}>
              <CoreTypographyBody1 variant="body2" styleClasses={[CoreClasses.MARGIN.M0]}> 
                Standard license
              </CoreTypographyBody1>
              <CoreTypographyBody1 variant="subtitle1" styleClasses={[CoreClasses.MARGIN.M0]}>
                Full resolution 1920x1080 • JPEG
              </CoreTypographyBody1>
              <CoreTypographyCaption>
                ID: 1030114
              </CoreTypographyCaption>
            </CoreGrid>
            <CoreGrid direction="column" gridProps={{ gridSize: { xs: 3 } }} styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_END]}>
              <CoreTypographyBody1 variant="body2">
                $19.00
              </CoreTypographyBody1>
            </CoreGrid>
          </CoreGrid>
          <CoreGrid>
            <CoreTypographyBody1 variant="subtitle1">
              Remove
            </CoreTypographyBody1>
          </CoreGrid>
        </CoreGrid>
      </CoreGrid>
    </CorePaper>
  );
}`}
            renderElement={
              <CorePaper>
                <CoreGrid spacing={2} styleClasses={[CoreClasses.PADDING.P3]}>
                  <CoreBox gridProps={{ gridSize: { xs: "auto" } }}>
                    <CoreImage
                      width={128}
                      height={128}
                      alt="complex"
                      src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" />
                  </CoreBox>

                  <CoreBox gridProps={{ gridSize: { xs: 9 } }}>
                    <CoreGrid
                      direction="row"
                      spacing={2}
                      styleClasses={[CoreClasses.MARGIN.MB2]}
                    >
                      <CoreGrid gridProps={{ gridSize: { xs: 9 } }}>
                        <CoreTypographyBody1 variant="body2" styleClasses={[CoreClasses.MARGIN.M0]}> 
                            Standard license
                        </CoreTypographyBody1>

                        <CoreTypographyBody1 variant="subtitle1" styleClasses={[CoreClasses.MARGIN.M0]}>
                            Full resolution 1920x1080 • JPEG
                        </CoreTypographyBody1>

                        <CoreTypographyCaption>
                            ID: 1030114
                        </CoreTypographyCaption>
                      </CoreGrid>

                      <CoreGrid direction="column" gridProps={{ gridSize: { xs: 3 } }} styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_END]}>
                        <CoreTypographyBody1 variant="body2">
                            $19.00
                        </CoreTypographyBody1>
                      </CoreGrid>
                    </CoreGrid>

                    <CoreGrid>
                      <CoreTypographyBody1 variant="subtitle1">
                          Remove
                      </CoreTypographyBody1>
                    </CoreGrid>
                  </CoreBox>
                </CoreGrid>
              </CorePaper>
            }
          />

          <CodeSample
            title={"Nested Grid"}
            description="We can make grid nested. Here is the given example"
            code={`<CoreGrid>
  <CoreGrid spacing={{ md: 3, xs: 2 }} columns={{ md: 12, sm: 8, xs: 4 }}>
    <CoreGrid direction="column" gridProps={{ gridSize: { xs: 4 } }}>
      <CorePaper
        styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
        Box 1
      </CorePaper>
      <CorePaper styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
        Box-2
      </CorePaper>
      <CorePaper styleClasses={ [CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
        Box-3
      </CorePaper>
    </CoreGrid>
    <CoreGrid direction="column" gridProps={{ gridSize: { xs: 4 } }}>
      <CorePaper
        styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
        Box-4
      </CorePaper>
      <CorePaper styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
        Box-5
      </CorePaper>
      <CorePaper styleClasses={ [CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
        Box-6
      </CorePaper>
    </CoreGrid>
    <CoreGrid direction="column" gridProps={{ gridSize: { xs: 4 } }}>
      <CorePaper
        styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
        Box-7
      </CorePaper>   
      <CorePaper styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
        Box-8
      </CorePaper>
      <CorePaper styleClasses={ [CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>Box-9</CorePaper>
    </CoreGrid>
  </CoreGrid>
</CoreGrid>`}
            expandedCode={`import { CoreClasses, CorePaper, CoreGrid } from "@wrappid/core";
export default function BasicCoreGridNested() {
  return (
    <CoreGrid>
      <CoreGrid spacing={{ md: 3, xs: 2 }} columns={{ md: 12, sm: 8, xs: 4 }}>
        <CoreGrid direction="column" gridProps={{ gridSize: { xs: 4 } }}>        
          <CorePaper
            styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
            Box 1
          </CorePaper>
          <CorePaper styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
            Box-2
          </CorePaper>       
          <CorePaper styleClasses={ [CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
            Box-3
          </CorePaper>
        </CoreGrid>
        <CoreGrid direction="column" gridProps={{ gridSize: { xs: 4 } }}>
          <CorePaper
            styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
            Box-4
          </CorePaper> 
          <CorePaper styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
            Box-5
          </CorePaper>
          <CorePaper styleClasses={ [CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>Box-6</CorePaper>
        </CoreGrid>
        <CoreGrid direction="column" gridProps={{ gridSize: { xs: 4 } }}>   
          <CorePaper
            styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
            Box-7
          </CorePaper>          
          <CorePaper styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
            Box-8
          </CorePaper>         
          <CorePaper styleClasses={ [CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
            Box-9
          </CorePaper>
        </CoreGrid>
      </CoreGrid>
    </CoreGrid>
  );
}`}
            renderElement={
              <CoreGrid>
                <CoreGrid spacing={{ md: 3, xs: 2 }} columns={{ md: 12, sm: 8, xs: 4 }}>
                  <CoreGrid direction="column" gridProps={{ gridSize: { xs: 4 } }}>
                   
                    <CorePaper
                      styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
                        Box 1
                    </CorePaper>
                   
                    <CorePaper styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
                        Box-2
                    </CorePaper>
                    
                    <CorePaper styleClasses={ [CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>Box-3</CorePaper>
   
                  </CoreGrid>

                  <CoreGrid direction="column" gridProps={{ gridSize: { xs: 4 } }}>
                   
                    <CorePaper
                      styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
                        Box-4
                    </CorePaper>
                   
                    <CorePaper styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
                        Box-5
                    </CorePaper>
                    
                    <CorePaper styleClasses={ [CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>Box-6</CorePaper>
   
                  </CoreGrid>

                  <CoreGrid direction="column" gridProps={{ gridSize: { xs: 4 } }}>
                   
                    <CorePaper
                      styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
                        Box-7
                    </CorePaper>
                   
                    <CorePaper styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
                        Box-8
                    </CorePaper>
                    
                    <CorePaper styleClasses={ [CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>Box-9</CorePaper>
   
                  </CoreGrid>
                </CoreGrid>
              </CoreGrid>
            }
          />

          <CodeSample
            title={"Columns"}
            description="You can change the default number of columns (12) with the columns prop."
            code={`<CoreGrid>
  <CoreGrid spacing={{ md: 3, xs: 2 }} columns={{ md: 12, sm: 8, xs: 4 }}>
    <CoreGrid direction="column" gridProps={{ gridSize: { xs: 4 } }}>
      <CorePaper
        styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
        Box 1
      </CorePaper>
      <CorePaper styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
        Box-2
      </CorePaper>
      <CorePaper styleClasses={ [CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
        Box-3
      </CorePaper>
    </CoreGrid>
    <CoreGrid direction="column" gridProps={{ gridSize: { xs: 4 } }}>
      <CorePaper
        styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
        Box-4
      </CorePaper>
      <CorePaper styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
        Box-5
      </CorePaper>
      <CorePaper styleClasses={ [CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
        Box-6
      </CorePaper>
    </CoreGrid>
    <CoreGrid direction="column" gridProps={{ gridSize: { xs: 4 } }}>
      <CorePaper
        styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
        Box-7
      </CorePaper>
      <CorePaper styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
        Box-8
      </CorePaper>
      <CorePaper styleClasses={ [CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
        Box-9
      </CorePaper>
    </CoreGrid>
  </CoreGrid>
</CoreGrid>`}
            expandedCode={`import { CoreClasses, CorePaper, CoreGrid } from "@wrappid/core";
export default function BasicCoreGridColumns() {
  return (
    <CoreGrid>
      <CoreGrid spacing={{ md: 3, xs: 2 }} columns={{ md: 12, sm: 8, xs: 4 }}>
        <CoreGrid direction="column" gridProps={{ gridSize: { xs: 4 } }}>
          <CorePaper
            styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
            Box 1
          </CorePaper>
          <CorePaper styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
            Box-2
          </CorePaper>   
          <CorePaper styleClasses={ [CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
            Box-3
          </CorePaper>
        </CoreGrid>
        <CoreGrid direction="column" gridProps={{ gridSize: { xs: 4 } }}>     
          <CorePaper
            styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
            Box-4
          </CorePaper> 
          <CorePaper styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
            Box-5
          </CorePaper>        
          <CorePaper styleClasses={ [CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
            Box-6
          </CorePaper>
        </CoreGrid>
        <CoreGrid direction="column" gridProps={{ gridSize: { xs: 4 } }}>
          <CorePaper
            styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
            Box-7
          </CorePaper>  
          <CorePaper styleClasses={[CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
            Box-8
          </CorePaper>
          <CorePaper styleClasses={ [CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>
            Box-9
          </CorePaper>
        </CoreGrid>
      </CoreGrid>
    </CoreGrid>
  );
}`}
            renderElement={
              <CoreBox styleClasses={ [CoreClasses.WIDTH.W_100]}>
                <CoreGrid spacing={2}>
                  <CorePaper gridProps={{ gridSize: { xs: 6 } }} styleClasses={ [CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>xs=8</CorePaper>
                   
                  <CorePaper gridProps={{ gridSize: { xs: 6 } }} styleClasses={ [CoreClasses.PADDING.P1, CoreClasses.TEXT.TEXT_CENTER]}>xs=8</CorePaper>
                </CoreGrid>
              </CoreBox>
            }
          />

        </>
      }
    />
  );
}