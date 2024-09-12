import {
  CoreTypographyBody1, CoreClasses, CoreStack, CoreBox, CorePaper, CoreDivider
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

const Item = ({ title }) => {
  return (
    <CorePaper>
      <CoreTypographyBody1 styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.PADDING.P1, CoreClasses.MARGIN.M0]}>{title}</CoreTypographyBody1>
    </CorePaper>
  );
};

export default function CoreStackDocs() {
  return (
    <>
      <ComponentDocs
        component={CoreStack}
        basicSample={false}
        description={"Stack is a container component for arranging elements vertically or horizontally."}
        samples={
          <>
            <CodeSample
              title={"Basic"} 
              description={"The Stack component acts as a generic container, wrapping around the elements to be arranged."}
              code={`<CoreBox styleClasses={[CoreClasses.PADDING.P2, CoreClasses.WIDTH.VW_100, CoreClasses.BG.BG_GREY_100]}>
  <CoreStack spacing={2}>
    <Item title={"Item 1"}/>
    <Item title={"Item 2"}/>
    <Item title={"Item 3"}/>
  </CoreStack>
</CoreBox>`}
              expandedCode={`import {CoreTypographyBody1, CoreClasses, CoreStack, CoreBox, CorePaper} from "@wrappid/core";

const Item = ({ title }) => {
  return (
    <CorePaper>
      <CoreTypographyBody1 styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.PADDING.P1, CoreClasses.MARGIN.M0]}>{title}</CoreTypographyBody1>
    </CorePaper>
  );
};
                
export default function BasicStack() {
  return (
    <CoreBox styleClasses={[CoreClasses.PADDING.P2, CoreClasses.WIDTH.VW_100, CoreClasses.BG.BG_GREY_100]}>
      <CoreStack spacing={2}>
        <Item title={"Item 1"}/>
        <Item title={"Item 2"}/>
        <Item title={"Item 3"}/>
      </CoreStack>
    </CoreBox>
  );                
}`}
              renderElement={<>
                <CoreBox styleClasses={[CoreClasses.PADDING.P2, CoreClasses.WIDTH.VW_100, CoreClasses.BG.BG_GREY_100]}>
                  <CoreStack spacing={2}>
                    <Item title={"Item 1"}/>

                    <Item title={"Item 2"}/>

                    <Item title={"Item 3"}/>
                  </CoreStack>
                </CoreBox>
              </>}
            />

            <CodeSample
              title={"Direction"}
              description={"Stack is concerned with one-dimensional layouts, while Grid handles two-dimensional layouts. The default direction is column which stacks children vertically.By default, Stack arranges items vertically in a column. Use the direction prop to position items horizontally in a row:"}
              code={`<CoreBox styleClasses={[
  CoreClasses.WIDTH.VW_50,
  CoreClasses.BG.BG_GREY_100,
  CoreClasses.PADDING.P1,
  CoreClasses.DISPLAY.FLEX,
  CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
  CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER
]}>
  <CoreStack styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]} spacing={2} direction="row">
    <Item title={"Item 1"}/>
    <Item title={"Item 2"}/>
    <Item title={"Item 3"}/>
  </CoreStack>
</CoreBox>`}
              expandedCode={`import {CoreTypographyBody1, CoreClasses, CoreStack, CoreBox, CorePaper} from "@wrappid/core";
  

const Item = ({ title }) => {
  return (
    <CorePaper>
      <CoreTypographyBody1 styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.PADDING.P1, CoreClasses.MARGIN.M0]}>{title}</CoreTypographyBody1>
    </CorePaper>
  );
};

export default function DirectionStack() {
  return (
    <CoreBox styleClasses={[
      CoreClasses.WIDTH.VW_50,
      CoreClasses.BG.BG_GREY_100,
      CoreClasses.PADDING.P1,
      CoreClasses.DISPLAY.FLEX,
      CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
      CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER
    ]}>
      <CoreStack styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]} spacing={2} direction="row">
        <Item title={"Item 1"}/>
        <Item title={"Item 2"}/>
        <Item title={"Item 3"}/>
      </CoreStack>
    </CoreBox>
  );        
}`}
              renderElement={<>
                <CoreBox styleClasses={[
                  CoreClasses.WIDTH.VW_50,
                  CoreClasses.BG.BG_GREY_100,
                  CoreClasses.PADDING.P1,
                  CoreClasses.DISPLAY.FLEX,
                  CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
                  CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER
                ]}>
                  <CoreStack styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]} spacing={2} direction="row">
                    <Item title={"Item 1"}/>

                    <Item title={"Item 2"}/>

                    <Item title={"Item 3"}/>
                  </CoreStack>
                </CoreBox>
              </>}
            />

            <CodeSample
              title={"Dividers"}
              description={"Use the divider prop to insert an element between each child. This works particularly well with the Divider component, as shown below:"}
              code={`<CoreBox styleClasses={[
  CoreClasses.WIDTH.VW_50,
  CoreClasses.BG.BG_GREY_100,
  CoreClasses.PADDING.P1,
  CoreClasses.DISPLAY.FLEX,
  CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
  CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER
]}>
  <CoreStack
    spacing={2}
    direction="row"
    divider={<CoreDivider orientation="vertical" flexItem />}
  >
    <Item title={"Item 1"}/>
    <Item title={"Item 2"}/>
    <Item title={"Item 3"}/>
  </CoreStack>
</CoreBox>`}
              expandedCode={`import {
  CoreTypographyBody1,
  CoreClasses,
  CoreStack,
  CoreBox,
  CorePaper,
  CoreDivider
} from "@wrappid/core";
                
const Item = ({ title }) => {
  return (
    <CorePaper>
      <CoreTypographyBody1 styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.PADDING.P1, CoreClasses.MARGIN.M0]}>{title}</CoreTypographyBody1>
    </CorePaper>
  );
};
  
export default function DividerStack() {
  return (
    <CoreBox styleClasses={[
      CoreClasses.WIDTH.VW_50,
      CoreClasses.BG.BG_GREY_100,
      CoreClasses.PADDING.P1,
      CoreClasses.DISPLAY.FLEX,
      CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
      CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER
    ]}>
      <CoreStack
        spacing={2}
        direction="row"
        divider={<CoreDivider orientation="vertical" flexItem />}
      >
        <Item title={"Item 1"}/>
        <Item title={"Item 2"}/>
        <Item title={"Item 3"}/>
      </CoreStack>
    </CoreBox>
  );  
}`}
              renderElement={<>
                <CoreBox styleClasses={[
                  CoreClasses.WIDTH.VW_50,
                  CoreClasses.BG.BG_GREY_100,
                  CoreClasses.PADDING.P1,
                  CoreClasses.DISPLAY.FLEX,
                  CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
                  CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER
                ]}>
                  <CoreStack
                    spacing={2}
                    direction="row"
                    divider={<CoreDivider orientation="vertical" flexItem />}
                  >
                    <Item title={"Item 1"}/>

                    <Item title={"Item 2"}/>

                    <Item title={"Item 3"}/>
                  </CoreStack>
                </CoreBox>
              </>}
            />

            <CodeSample
              title={"Responsive values"}
              description={"You can switch the direction or spacing values based on the active breakpoint."}
              code={`<CoreBox styleClasses={[CoreClasses.WIDTH.VW_50, CoreClasses.PADDING.P1]}>
  <CoreStack
    direction={{ sm: "column", xs: "row" }}
    spacing={{ sm: 2, xs: 1 }}
  >
    <Item title={"Item 1"}/>
    <Item title={"Item 2"}/>
    <Item title={"Item 3"}/>
  </CoreStack>
</CoreBox>`}
              expandedCode={`import {CoreTypographyBody1, CoreClasses, CoreStack, CoreBox, CorePaper} from "@wrappid/core";
  
const Item = ({ title }) => {
  return (
    <CorePaper>
      <CoreTypographyBody1 styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.PADDING.P1, CoreClasses.MARGIN.M0]}>{title}</CoreTypographyBody1>
    </CorePaper>
  );
};

export default function ResponsiveStack() {
  return (
    <CoreBox styleClasses={[CoreClasses.WIDTH.VW_50, CoreClasses.PADDING.P1]}>
      <CoreStack
        direction={{ sm: "column", xs: "row" }}
        spacing={{ sm: 2, xs: 1 }}
      >
        <Item title={"Item 1"}/>
        <Item title={"Item 2"}/>
        <Item title={"Item 3"}/>
      </CoreStack>
    </CoreBox>
  );                
}`}
              renderElement={<>
                <CoreBox styleClasses={[CoreClasses.WIDTH.VW_50, CoreClasses.PADDING.P1]}>
                  <CoreStack
                    direction={{ sm: "column", xs: "row" }}
                    spacing={{ sm: 2, xs: 1 }}
                  >
                    <Item title={"Item 1"}/>

                    <Item title={"Item 2"}/>

                    <Item title={"Item 3"}/>
                  </CoreStack>
                </CoreBox>
              </>}
            />

            <CodeSample
              title={"Flexbox gap"}
              description={"To use flexbox gap for the spacing implementation, set the useFlexGap prop to true. It removes the known limitations of the default implementation that uses CSS nested selector. However, CSS flexbox gap is not fully supported in some browsers. We recommend checking the support percentage before using it."}
              code={`<CoreBox width={200}>
<CoreStack
  spacing={{ sm: 2, xs: 1 }}
  direction="row"
  useFlexGap
  styleClasses={[CoreClasses.FLEX.FLEX_WRAP_WRAP]}
>
  <Item title={"Item 1"}/>
  <Item title={"Item 2"}/>
  <Item title={"Item 3"}/>
</CoreStack>`}
              renderElement={<>
                <CoreBox width={200}>
                  <CoreStack
                    spacing={{ sm: 2, xs: 1 }}
                    direction="row"
                    useFlexGap
                    styleClasses={[CoreClasses.FLEX.FLEX_WRAP_WRAP]}
                  >
                    <Item title={"Item 1"}/>

                    <Item title={"Item 2"}/>

                    <Item title={"Item 3"}/>
                  </CoreStack>
                </CoreBox>
              </>}
            />

            <CodeSample
              title={"Interactive demo (NOT_WORKING)"}
              description={"Below is an interactive demo that lets you explore the visual results of the different settings:"}
              code={"PRE-FORMATTED_CODE_GOES_HERE"}
              renderElement={<></>}
            />
          </>
        }
      />
        
    </>
  );
}