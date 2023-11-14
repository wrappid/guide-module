import { CoreH1, CoreH4, CoreTypographyBody1 } from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreH1Docs() {
  return (
    <>
      <CoreH4>CoreH1</CoreH4>

      <CoreTypographyBody1>
        CoreH1 helps you to create H1 heading in your design.
      </CoreTypographyBody1>

      <CodeSample
        title={"CoreH1 Usage"}
        description={"CoreH1 is used by developers."}
        code={`
          <CoreH1>h1.Heading</CoreH1>
        `}
        renderElement={<CoreH1>h1.Heading</CoreH1>}
      />

      <CodeSample
        title={"Alignment"}
        description={"CoreH1 different alignment"}
        code={`
          <CoreH1 align="left">h1.Heading</CoreH1>
          <CoreH1 align="center">h1.Heading</CoreH1>
          <CoreH1 align="right">h1.Heading</CoreH1>
          <CoreH1 align="justify">h1.Heading</CoreH1>
          <CoreH1 align="ingerit">h1.Heading</CoreH1>
        `}
        renderElement={
          <>
            <CoreH1 align="left">h1.Heading</CoreH1>

            <CoreH1 align="center">h1.Heading</CoreH1>

            <CoreH1 align="right">h1.Heading</CoreH1>

            <CoreH1 align="justify">h1.Heading</CoreH1>

            <CoreH1 align="ingerit">h1.Heading</CoreH1>
          </>
        }
      />

      <CodeSample
        title={"Gutter Bottom"}
        description={"The CoreH1 will have a bottom margin"}
        code={`
          <CoreH1 gutterBottom={true}>h1.Heading</CoreH1>
          
        `}
        renderElement={
          <>
            <CoreH1 gutterBottom={true}>h1.Heading</CoreH1>
          </>
        }
      />

      <CodeSample
        title={"No wrap"}
        description={"This is CoreH1 with nowrap"}
        code={`
        <CoreH1 noWrap={true}>h1.Heading</CoreH1>
        <CoreH1 noWrap={false}>h1.Heading</CoreH1>
          
        `}
        renderElement={
          <>
            <CoreH1 noWrap={true}>h1.Heading</CoreH1>

            <CoreH1 noWrap={false}>h1.Heading</CoreH1>
          </>
        }
      />

      <CodeSample
        title={"Paragraph"}
        description={"This is CoreH1 with paragraph"}
        code={`
        <CoreH1 paragraph={true}>h1.Heading</CoreH1>
        <CoreH1 paragraph={false}>h1.Heading</CoreH1>
          
        `}
        renderElement={
          <>
            <CoreH1 paragraph={true}>h1.Heading</CoreH1>

            <CoreH1 paragraph={false}>h1.Heading</CoreH1>
          </>
        }
      />

      <ComponentProps component={CoreH1} />
    </>
  );
}
