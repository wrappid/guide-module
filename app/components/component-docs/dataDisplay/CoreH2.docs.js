import { CoreBox, CoreClasses, CoreH2, CoreH4, CoreTypographyBody1 } from "@wrappid/core";

import CodeImport from "../../CodeImport";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreH2Docs() {
  return (
    <>
      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>CoreH2</CoreH4>

      <CoreTypographyBody1>
        CoreH2 helps you to create H2 heading in your design.
      </CoreTypographyBody1>

      <CodeImport name="CoreH2" />

      <CodeSample
        title={"CoreH2 Usage"}
        description={"CoreH2 is used by developers."}
        code={"<CoreH2>h2.Heading</CoreH2>"}
        renderElement={<CoreH2>h2.Heading</CoreH2>}
      />

      <CodeSample
        title={"Alignment"}
        description={"CoreH2 different alignment"}
        code={`<CoreBox styleClasses={[
  CoreClasses.WIDTH.VW_100,
  CoreClasses.BORDER.BORDER,
  CoreClasses.BORDER.BORDER_GREY_400,
  CoreClasses.BORDER.BORDER_ROUNDED_1,
  CoreClasses.PADDING.P2
]}>
  <CoreH2 align="left">h2.Heading</CoreH2>
  <CoreH2 align="center">h2.Heading</CoreH2>
  <CoreH2 align="right">h2.Heading</CoreH2>
  <CoreH2 align="justify">h2.Heading</CoreH2>
  <CoreH2 align="ingerit">h2.Heading</CoreH2>
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

              <CoreH2 align="left">h2.Heading</CoreH2>

              <CoreH2 align="center">h2.Heading</CoreH2>

              <CoreH2 align="right">h2.Heading</CoreH2>

              <CoreH2 align="justify">h2.Heading</CoreH2>

              <CoreH2 align="ingerit">h2.Heading</CoreH2>
            </CoreBox>
          </>
        }
      />

      <CodeSample
        title={"Gutter Bottom"}
        description={"The CoreH2 will have a bottom margin"}
        code={`<CoreBox styleClasses={[CoreClasses.BORDER.BORDER, CoreClasses.BORDER.BORDER_GREY_400, CoreClasses.BORDER.BORDER_ROUNDED_1, CoreClasses.PADDING.P2]}>
  <CoreH2 gutterBottom={true}>h2.Heading</CoreH2>
</CoreBox>`}
        renderElement={
          <>
            <CoreBox styleClasses={[CoreClasses.BORDER.BORDER, CoreClasses.BORDER.BORDER_GREY_400, CoreClasses.BORDER.BORDER_ROUNDED_1, CoreClasses.PADDING.P2]}>
              <CoreH2 gutterBottom={true}>h2.Heading</CoreH2>
            </CoreBox>

          </>
        }
      />

      <CodeSample
        title={"No wrap"}
        description={"This is CoreH2 with nowrap"}
        code={`<CoreBox styleClasses={[
  CoreClasses.BORDER.BORDER,
  CoreClasses.BORDER.BORDER_GREY_400,
  CoreClasses.BORDER.BORDER_ROUNDED_1,
  CoreClasses.PADDING.P2,
  CoreClasses.WIDTH.VW_25
  ]}>   
  <CoreH2 noWrap={true}>h2.Heading with no wrap true</CoreH2>

  <CoreH2 noWrap={false}>h2.Heading</CoreH2>
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
              <CoreH2 noWrap={true}>h2.Heading with no wrap true</CoreH2>

              <CoreH2 noWrap={false}>h2.Heading</CoreH2>
            </CoreBox>
          </>
        }
      />

      <CodeSample
        title={"Paragraph"}
        description={"This is CoreH2 with paragraph"}
        code={`<CoreBox styleClasses={[
  CoreClasses.BORDER.BORDER,
  CoreClasses.BORDER.BORDER_GREY_400,
  CoreClasses.BORDER.BORDER_ROUNDED_1,
  CoreClasses.PADDING.P2,
  CoreClasses.WIDTH.VW_25
  ]}>
  <CoreH2 paragraph={true}>h2.Heading</CoreH2>

  <CoreH2 paragraph={false}>h2.Heading</CoreH2>
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
              <CoreH2 paragraph={true}>h2.Heading</CoreH2>

              <CoreH2 paragraph={false}>h2.Heading</CoreH2>
            </CoreBox>
          </>
        }
      />

      <ComponentProps component={CoreH2} />
    </>
  );
}
