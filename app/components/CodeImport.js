import { CoreCard, CoreCardContent, CoreCardHeader, CoreClasses } from "@wrappid/core";

import CodeBlock from "./CodeBlock";

function CodeImport(props) {
  const getImportStatement = () => {
    return `import {${props.name}} from "@wrappid/core";`;
  };

  return (
    <CoreCard styleClasses={[CoreClasses.MARGIN.MB2]}>
      <CoreCardHeader
        title="Import" />

      <CoreCardContent>
        <CodeBlock block={true}>{getImportStatement()}</CodeBlock>            
      </CoreCardContent>
    </CoreCard>
  );
}

export default CodeImport;