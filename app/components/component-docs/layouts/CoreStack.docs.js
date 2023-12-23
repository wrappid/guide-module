import {
  CoreH4,
  CoreTypographyBody1, CoreClasses, CoreStack, CoreBox, CorePaper, CoreDivider
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";

const Item = ({ title }) => {
  return (
    <CorePaper styleClasses={[CoreClasses.WIDTH.VW_50]}>
      <CoreTypographyBody1 styleClasses={[CoreClasses.TEXT.TEXT_CENTER]}>{title}</CoreTypographyBody1>
    </CorePaper>
  );
};

export default function CoreStackDocs() {
  return (
    <>
      <CoreH4>CoreStack</CoreH4>
  
      <CoreTypographyBody1>
      Stack is a container component for arranging elements vertically or horizontally.
      </CoreTypographyBody1>
  
      <CodeSample
        title={"Basic"}
        description={"The Stack component acts as a generic container, wrapping around the elements to be arranged."}
        code={`
        const Item = ({ title }) => {
          return (
            <CorePaper styleClasses={[CoreClasses.WIDTH.VW_50]}>
              <CoreTypographyBody1 styleClasses={[CoreClasses.TEXT.TEXT_CENTER]}>{title}</CoreTypographyBody1>
            </CorePaper>
          );
        };
        <CoreBox styleClasses={[CoreClasses.WIDTH.VW_50, CoreClasses.BG.BG_GREY_100, CoreClasses.PADDING.P1]}>
        <CoreStack spacing={2}>
          <Item title={"Item 1"}/>

          <Item title={"Item 2"}/>

          <Item title={"Item 2"}/>
        </CoreStack>
      </CoreBox>
        `}
        renderElement={<>
        <CoreBox styleClasses={[CoreClasses.WIDTH.VW_50, CoreClasses.BG.BG_GREY_100, CoreClasses.PADDING.P1]}>
        <CoreStack spacing={2}>
          <Item title={"Item 1"}/>

          <Item title={"Item 2"}/>

          <Item title={"Item 2"}/>
        </CoreStack>
      </CoreBox>
        </>}
      />

      <CodeSample
        title={"Direction"}
        description={"Stack is concerned with one-dimensional layouts, while Grid handles two-dimensional layouts. The default direction is column which stacks children vertically.By default, Stack arranges items vertically in a column. Use the direction prop to position items horizontally in a row:"}
        code={`<CoreBox styleClasses={[CoreClasses.WIDTH.VW_50, CoreClasses.BG.BG_GREY_100, CoreClasses.PADDING.P1]}>
        <CoreStack spacing={2} direction="row">
          <Item title={"Item 1"}/>

          <Item title={"Item 2"}/>

          <Item title={"Item 2"}/>
        </CoreStack>
      </CoreBox>`}
        renderElement={<>
        <CoreBox styleClasses={[CoreClasses.WIDTH.VW_50, CoreClasses.BG.BG_GREY_100, CoreClasses.PADDING.P1]}>
        <CoreStack spacing={2} direction="row">
          <Item title={"Item 1"}/>

          <Item title={"Item 2"}/>

          <Item title={"Item 2"}/>
        </CoreStack>
      </CoreBox>
        </>}
      />

      <CodeSample
        title={"Dividers"}
        description={"Use the divider prop to insert an element between each child. This works particularly well with the Divider component, as shown below:"}
        code={` <CoreBox styleClasses={[CoreClasses.WIDTH.VW_50, CoreClasses.BG.BG_GREY_100, CoreClasses.PADDING.P1]}>
        <CoreStack
          spacing={2}
          direction="row"
          divider={<CoreDivider orientation="vertical" flexItem />}
        >
          <Item title={"Item 1"}/>

          <Item title={"Item 2"}/>

          <Item title={"Item 2"}/>
        </CoreStack>
      </CoreBox>`}
        renderElement={<>
         <CoreBox styleClasses={[CoreClasses.WIDTH.VW_50, CoreClasses.BG.BG_GREY_100, CoreClasses.PADDING.P1]}>
        <CoreStack
          spacing={2}
          direction="row"
          divider={<CoreDivider orientation="vertical" flexItem />}
        >
          <Item title={"Item 1"}/>

          <Item title={"Item 2"}/>

          <Item title={"Item 2"}/>
        </CoreStack>
      </CoreBox>
        </>}
      />

      <CodeSample
        title={"Responsive values"}
        description={"You can switch the direction or spacing values based on the active breakpoint."}
        code={`<CoreBox styleClasses={[CoreClasses.WIDTH.VW_50, CoreClasses.BG.BG_GREY_100, CoreClasses.PADDING.P1]}>
        <CoreStack
          direction={{ sm: "row", xs: "column" }}
          spacing={{ md: 4, sm: 2, xs: 1 }}
        >
          <Item title={"Item 1"}/>

          <Item title={"Item 2"}/>

          <Item title={"Item 2"}/>
        </CoreStack>
      </CoreBox>`}
        renderElement={<>
        <CoreBox styleClasses={[CoreClasses.WIDTH.VW_50, CoreClasses.BG.BG_GREY_100, CoreClasses.PADDING.P1]}>
        <CoreStack
          direction={{ sm: "row", xs: "column" }}
          spacing={{ md: 4, sm: 2, xs: 1 }}
        >
          <Item title={"Item 1"}/>

          <Item title={"Item 2"}/>

          <Item title={"Item 2"}/>
        </CoreStack>
      </CoreBox>
        </>}
      />

      <CodeSample
        title={"Flexbox gap"}
        description={"To use flexbox gap for the spacing implementation, set the useFlexGap prop to true. It removes the known limitations of the default implementation that uses CSS nested selector. However, CSS flexbox gap is not fully supported in some browsers. We recommend checking the support percentage before using it."}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Interactive demo (NOT_WORKING)"}
        description={"Below is an interactive demo that lets you explore the visual results of the different settings:"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />
        
      {/* <ComponentProps component={CoreStack} /> */}
      
    </>
  );
}