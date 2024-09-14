import { CoreBox, CoreClasses } from "@wrappid/core";

import CodeBlock from "./CodeBlock";

function CodeImport(props) {
  const getImportStatement = () => {
    if (props?.name) {
      if (Array.isArray(props.name) && props.name.length > 0) {
        return `import { ${props.name.join(", ")} } from "@wrappid/core";`;
      } else {
        return `import { ${props.name} } from "@wrappid/core";`;
      }
    } else {
      return "Not Given";
    }
  };

  return (
    <CoreBox styleClasses={[CoreClasses.MARGIN.MB2]}>
      <CodeBlock block={true}>{getImportStatement()}</CodeBlock>
    </CoreBox>
  );
}

export default CodeImport;