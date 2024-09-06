import { useState, useEffect } from "react";

import {
  CoreBox,
  CoreClasses,
  CoreH4,
  CoreTypographyBody1
} from "@wrappid/core";

import CodeBlock from "../CodeBlock";
import CodeImport from "../CodeImport";
import CodeSample from "../CodeSample";
import ComponentProps from "../ComponentProps";

const DynamicComponent = ({ componentName, ...props }) => {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const loadComponent = async () => {
      try {
        const module = await import("@wrappid/core");

        if (isMounted && module[componentName]) {
          setComponent(() => module[componentName]);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(`Failed to load component ${componentName}:`, error);
      }
    };

    loadComponent();
    return () => {
      isMounted = false;
    };
  }, [componentName]);

  if (!Component) {
    return <CoreBox>Loading...</CoreBox>;
  }

  return <Component {...props} />;
};

/**
 * @description Component to render component documentation.
 * @todo handle styleClasses props
 * @param {*} props 
 * @returns 
 */
function ComponentDocs(props) {
  // eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
  const { component = null, description = null, samples = [], basicSample = true, basicSampleProps = {} } = props;

  const renderPropsString = (props) => {
    return Object.entries(props)
      .map(([key, value]) => `${key}=${typeof value === "string" ? `"${value}"` : `{${JSON.stringify(value)}}`}`)
      .join(" ");
  };

  return (
    <>
      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>
        {component?.name || "Name not provided in the component."}
      </CoreH4>

      <CoreTypographyBody1>{description || "Description not provided."}</CoreTypographyBody1>

      <CodeImport name={component?.name} />

      {basicSample && (
        <CodeSample
          title={`Basic ${component?.name}`}
          description={
            <CoreTypographyBody1>
              Basic representation of <CodeBlock>{component?.name}</CodeBlock> component.
            </CoreTypographyBody1>
          }
          code={`<${component?.name} ${renderPropsString(basicSampleProps)} />`}
          expandedCode={`import { ${component?.name} } from "@wrappid/core";

export default function Basic${component?.name}() {
  return <${component?.name} ${renderPropsString(basicSampleProps)} />;
}`}
          renderElement={
            <DynamicComponent componentName={component?.name} {...basicSampleProps} />
          }
        />
      )}

      {/**
       * @todo code samples must have
       * 1. expand/collapse code
       * 2. copy code
       * 3. codesandbox link
       * 4. code editor
       * 5. code reset
       */}
      {samples}

      <ComponentProps component={component} />
    </>
  );
}

export default ComponentDocs;