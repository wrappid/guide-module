import { CoreH5, CoreH4, CoreTypographyBody1 } from "@wrappid/core";

import CodeSample from "../../../CodeSample";
import ComponentProps from "../../../ComponentProps";

export default function CoreH5Docs() {
  return (
    <>
      <CoreH4>CoreH5 Docs</CoreH4>

      <CoreTypographyBody1>
        CoreH5 helps you to create H5 heading in your design.
      </CoreTypographyBody1>

      <CodeSample
        title={"CoreH5 Usage"}
        description={"CoreH5 is used by developers."}
        code={`
          <CoreH5>h2.Heading</CoreH5>
        `}
        renderElement={<CoreH5>h5.Heading</CoreH5>}
      />

      <CodeSample
        title={"CoreH5 Usage"}
        description={"CoreH5 is used by developers."}
        code={`
          <CoreH5>h5.Heading</CoreH5>
        `}
        renderElement={<CoreH5>h5.Heading</CoreH5>}
      />

      <CodeSample
        title={"Alignment"}
        description={"CoreH5 different alignment"}
        code={`
          <CoreH5 align="left">h5.Heading</CoreH5>
          <CoreH5 align="center">h5.Heading</CoreH5>
          <CoreH5 align="right">h5.Heading</CoreH5>
          <CoreH5 align="justify">h5.Heading</CoreH5>
          <CoreH5 align="ingerit">h5.Heading</CoreH5>
        `}
        renderElement={
          <>
            <CoreH5 align="left">h5.Heading</CoreH5>

            <CoreH5 align="center">h5.Heading</CoreH5>

            <CoreH5 align="right">h5.Heading</CoreH5>

            <CoreH5 align="justify">h5.Heading</CoreH5>

            <CoreH5 align="ingerit">h5.Heading</CoreH5>
          </>
        }
      />

      <CodeSample
        title={"Gutter Bottom"}
        description={"The CoreH5 will have a bottom margin"}
        code={`
          <CoreH5 gutterBottom={true}>h5.Heading</CoreH5>
          
        `}
        renderElement={
          <>
            <CoreH5 gutterBottom={true}>h5.Heading</CoreH5>
          </>
        }
      />

      <CodeSample
        title={"No wrap"}
        description={"This is CoreH5 with nowrap"}
        code={`
        <CoreH5 noWrap={true}>h5.Heading</CoreH5>
        <CoreH5 noWrap={false}>h5.Heading</CoreH5>
          
        `}
        renderElement={
          <>
            <CoreH5 noWrap={true}>h5.Heading</CoreH5>

            <CoreH5 noWrap={false}>h5.Heading</CoreH5>
          </>
        }
      />

      <CodeSample
        title={"Paragraph"}
        description={"This is CoreH5 with paragraph"}
        code={`
        <CoreH5 paragraph={true}>h5.Heading</CoreH5>
        <CoreH5 paragraph={false}>h5.Heading</CoreH5>
          
        `}
        renderElement={
          <>
            <CoreH5 paragraph={true}>h5.Heading</CoreH5>

            <CoreH5 paragraph={false}>h5.Heading</CoreH5>
          </>
        }
      />

      <ComponentProps component={CoreH5} />
    </>
  );
}
