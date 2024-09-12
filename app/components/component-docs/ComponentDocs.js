import React, { useState, useEffect, useMemo } from "react";

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

/**
 * @description Dynamic component to load component dynamically.
 * @param {*} param
 * @returns 
 */
const DynamicComponent = ({ componentName, children, ...props }) => {
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

  return <Component {...props}>{children}</Component>;
};

/**
 * @description Render props as string.
 * @param {*} props 
 * @returns 
 */
const renderPropsString = (props) => {
  return Object.entries(props)
    .filter(([key]) => key !== "children")
    .map(([key, value]) => {
      if (React.isValidElement(value)) {
        return `${key}={${renderReactElementAsString(value)}}`;
      }
      return `${key}=${typeof value === "string" ? `"${value}"` : `{${JSON.stringify(value)}}`}`;
    })
    .join(" ");
};

/**
 * @description Render react element as string.
 * @param {*} element 
 * @param {*} indent 
 * @returns 
 */
const renderReactElementAsString = (element, indent = 0) => {
  const indentString = "  ".repeat(indent);

  if (typeof element.type === "string") {
    const props = renderPropsString(element.props);
    const children = renderChildrenAsString(element.props.children, indent + 1);

    if (children) {
      return `${indentString}<${element.type} ${props}>\n${children}\n${indentString}</${element.type}>`;
    }
    return `${indentString}<${element.type} ${props} />`;
  }
  if (typeof element.type === "function") {
    const props = renderPropsString(element.props);
    const children = renderChildrenAsString(element.props.children, indent + 1);

    if (children) {
      return `${indentString}<${element.type.name} ${props}>\n${children}\n${indentString}</${element.type.name}>`;
    }
    return `${indentString}<${element.type.name} ${props} />`;
  }
  return `${indentString}${element}`;
};

/**
 * @description Render children as string.
 * @param {*} children 
 * @param {*} indent 
 * @returns 
 */
const renderChildrenAsString = (children, indent = 0) => {
  if (children === undefined || children === null) {
    return "";
  }
  if (typeof children === "string") {
    return `${"  ".repeat(indent)}${children}`;
  }
  if (React.isValidElement(children)) {
    return renderReactElementAsString(children, indent);
  }
  if (Array.isArray(children)) {
    return children.map(child => renderChildrenAsString(child, indent)).join("\n");
  }
  return `${"  ".repeat(indent)}${children}`;
};

/**
 * @description Render component code.
 * @param {*} component 
 * @param { Boolean } hasChildren 
 * @param {*} otherProps 
 * @returns 
 */
const renderComponentCode = (component, children, otherProps) => {
  const hasChildren = children !== undefined;
  const propsString = renderPropsString(otherProps);

  if (hasChildren) {
    return `<${component?.name} ${propsString}>\n${renderChildrenAsString(children, 1)}\n</${component?.name}>`;
  } else {
    return `<${component?.name} ${propsString} />`;
  }
};

/**
 * @description Component to render component documentation.
 * @todo handle styleClasses props
 * @param {*} props
 * @returns
 */
function ComponentDocs(props) {
  const { component = null, description = null, samples = [], basicSample = true, basicSampleProps = {} } = props;

  const { children, ...otherProps } = basicSampleProps;

  const renderedComponentCode = useMemo(() => {
    return renderComponentCode(component, children, otherProps);
  }, [component, children, otherProps]);

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
          code={renderedComponentCode}
          expandedCode={`import { ${component?.name} } from "@wrappid/core";

export default function Basic${component?.name}() {
  return (
${renderedComponentCode.split("\n").map(line => "    " + line).join("\n")}
  );
}`}
          renderElement={
            <DynamicComponent componentName={component?.name} {...otherProps}>
              {children}
            </DynamicComponent>
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