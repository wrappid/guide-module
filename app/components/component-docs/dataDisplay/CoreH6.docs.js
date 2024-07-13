import { CoreClasses, CoreH6, CoreH4, CoreTypographyBody1 } from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";
import CodeImport from "../../CodeImport";

export default function CoreH6Docs() {
  return (
    <>
      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>CoreH6 Docs</CoreH4>

      <CoreTypographyBody1>
        CoreH6 helps you to create H6 heading in your design.
      </CoreTypographyBody1>
<CodeImport name="CoreH6" />
      <CodeSample
        title={"CoreH6 Usage"}
        description={"CoreH6 is used by developers."}
        code={`
          <CoreH6>h6.Heading</CoreH6>
        `}
        renderElement={<CoreH6>h6.Heading</CoreH6>}
      />

      <CodeSample
        title={"CoreH6 Usage"}
        description={"CoreH6 is used by developers."}
        code={`
          <CoreH6>h6.Heading</CoreH6>
        `}
        renderElement={<CoreH6>h6.Heading</CoreH6>}
      />

      <CodeSample
        title={"Alignment"}
        description={"CoreH6 different alignment"}
        code={`
          <CoreH6 align="left">h6.Heading</CoreH6>
          <CoreH6 align="center">h6.Heading</CoreH6>
          <CoreH6 align="right">h6.Heading</CoreH6>
          <CoreH6 align="justify">h6.Heading</CoreH6>
          <CoreH6 align="ingerit">h6.Heading</CoreH6>
        `}
        renderElement={
          <>
            <CoreH6 align="left">h6.Heading</CoreH6>

            <CoreH6 align="center">h6.Heading</CoreH6>

            <CoreH6 align="right">h6.Heading</CoreH6>

            <CoreH6 align="justify">h6.Heading</CoreH6>

            <CoreH6 align="ingerit">h6.Heading</CoreH6>
          </>
        }
      />

      <CodeSample
        title={"Gutter Bottom"}
        description={"The CoreH6 will have a bottom margin"}
        code={`
          <CoreH6 gutterBottom={true}>h6.Heading</CoreH6>
          
        `}
        renderElement={
          <>
            <CoreH6 gutterBottom={true}>h6.Heading</CoreH6>
          </>
        }
      />

      <CodeSample
        title={"No wrap"}
        description={"This is CoreH6 with nowrap"}
        code={`
        <CoreH6 noWrap={true}>h6.Heading</CoreH6>
        <CoreH6 noWrap={false}>h6.Heading</CoreH6>
          
        `}
        renderElement={
          <>
            <CoreH6 noWrap={true}>h6.Heading</CoreH6>

            <CoreH6 noWrap={false}>h6.Heading</CoreH6>
          </>
        }
      />

      <CodeSample
        title={"Paragraph"}
        description={"This is CoreH6 with paragraph"}
        code={`
        <CoreH6 paragraph={true}>h6.Heading</CoreH6>
        <CoreH6 paragraph={false}>h6.Heading</CoreH6>
          
        `}
        renderElement={
          <>
            <CoreH6 paragraph={true}>h6.Heading</CoreH6>

            <CoreH6 paragraph={false}>h6.Heading</CoreH6>
          </>
        }
      />

      <ComponentProps component={CoreH6} />
    </>
  );
}
