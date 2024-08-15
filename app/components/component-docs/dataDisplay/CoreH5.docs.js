import {
  CoreBox, CoreClasses, CoreH5, CoreH4, CoreStack, CoreTypographyBody1 
} from "@wrappid/core";

import CodeBlock from "../../CodeBlock";
import CodeImport from "../../CodeImport";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreH5Docs() {
  return (
    <>
      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>CoreH5</CoreH4>

      <CoreTypographyBody1>
        CoreH5 helps you to create H5 heading in your design.
      </CoreTypographyBody1>

      <CodeImport name="CoreH5" />

      <CodeSample
        title={"CoreH5 Usage"}
        description={"CoreH5 is used by developers."}
        code={"<CoreH5>h5.Heading</CoreH5>"}
        renderElement={<CoreH5>h5.Heading</CoreH5>}
      />

      <CodeSample
        title={"Alignment"}
        description={"CoreH5 different alignment"}
        code={`<CoreBox styleClasses={[
  CoreClasses.WIDTH.VW_100,
  CoreClasses.BORDER.BORDER,
  CoreClasses.BORDER.BORDER_GREY_400,
  CoreClasses.BORDER.BORDER_ROUNDED_1,
  CoreClasses.PADDING.P2
  ]}>
  <CoreStack direction="column">
    <CoreH5 align="left">h5.Heading</CoreH5>

    <CoreH5 align="center">h5.Heading</CoreH5>

    <CoreH5 align="right">h5.Heading</CoreH5>

    <CoreH5 align="justify">h5.Heading</CoreH5>

    <CoreH5 align="inherit">h5.Heading</CoreH5>
  </CoreStack>
</CoreBox>`}
        renderElement={
          <>
            <CoreBox styleClasses={[
              CoreClasses.WIDTH.VW_100,
              CoreClasses.BORDER.BORDER,
              CoreClasses.BORDER.BORDER_GREY_400,
              CoreClasses.BORDER.BORDER_ROUNDED_1,
              CoreClasses.PADDING.P2
            ]}>
              <CoreStack direction="column">
                <CoreH5 align="left">h5.Heading</CoreH5>

                <CoreH5 align="center">h5.Heading</CoreH5>

                <CoreH5 align="right">h5.Heading</CoreH5>

                <CoreH5 align="justify">h5.Heading</CoreH5>

                <CoreH5 align="inherit">h5.Heading</CoreH5>
              </CoreStack>
            </CoreBox>
          </>
        }
      />

      <CodeSample
        title={"Gutter Bottom"}
        description={"The CoreH5 will have a bottom margin"}
        code={`<CoreBox styleClasses={[CoreClasses.BORDER.BORDER, CoreClasses.BORDER.BORDER_GREY_400, CoreClasses.BORDER.BORDER_ROUNDED_1, CoreClasses.PADDING.P2]}>
  <CoreH5 gutterBottom={true}>h5.Heading</CoreH5>
</CoreBox>`}
        renderElement={
          <>
            <CoreBox styleClasses={[CoreClasses.BORDER.BORDER, CoreClasses.BORDER.BORDER_GREY_400, CoreClasses.BORDER.BORDER_ROUNDED_1, CoreClasses.PADDING.P2]}>
              <CoreH5 gutterBottom={true}>h5.Heading</CoreH5>
            </CoreBox>
          </>
        }
      />

      <CodeSample
        title={"No wrap"}
        description={<>
        This is CoreH5 with <CodeBlock>noWrap</CodeBlock>.
        </>}
        code={`<CoreBox styleClasses={[
  CoreClasses.BORDER.BORDER,
  CoreClasses.BORDER.BORDER_GREY_400,
  CoreClasses.BORDER.BORDER_ROUNDED_1,
  CoreClasses.PADDING.P2,
  CoreClasses.WIDTH.W_25
  ]}>              
  <CoreH5 noWrap={true}>h5.Heading with no wrap true</CoreH5>

  <CoreH5 noWrap={false}>h5.Heading</CoreH5>
</CoreBox>`}
        renderElement={
          <>
            <CoreBox styleClasses={[
              CoreClasses.BORDER.BORDER,
              CoreClasses.BORDER.BORDER_GREY_400,
              CoreClasses.BORDER.BORDER_ROUNDED_1,
              CoreClasses.PADDING.P2,
              CoreClasses.WIDTH.W_25
            ]}>              
              <CoreH5 noWrap={true}>h5.Heading with no wrap true</CoreH5>

              <CoreH5 noWrap={false}>h5.Heading</CoreH5>
            </CoreBox>
          </>
        }
      />

      <CodeSample
        title={"Paragraph"}
        description={"This is CoreH5 with paragraph"}
        code={`<CoreBox styleClasses={[
  CoreClasses.WIDTH.VW_100,
  CoreClasses.BORDER.BORDER,
  CoreClasses.BORDER.BORDER_GREY_400,
  CoreClasses.BORDER.BORDER_ROUNDED_1,
  CoreClasses.PADDING.P2
  ]}>
  <CoreH5 paragraph={true}>h5.Heading</CoreH5>

  <CoreH5 paragraph={false}>h5.Heading</CoreH5>
</CoreBox>`}
        renderElement={
          <>
            <CoreBox styleClasses={[
              CoreClasses.BORDER.BORDER,
              CoreClasses.BORDER.BORDER_GREY_400,
              CoreClasses.BORDER.BORDER_ROUNDED_1,
              CoreClasses.PADDING.P2,
              CoreClasses.WIDTH.VW_25
            ]}>
              <CoreH5 paragraph={true}>h5.Heading</CoreH5>

              <CoreH5 paragraph={false}>h5.Heading</CoreH5>
            </CoreBox>
          </>
        }
      />

      <ComponentProps component={CoreH5} />
    </>
  );
}
