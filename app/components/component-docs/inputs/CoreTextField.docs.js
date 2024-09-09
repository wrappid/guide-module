import React from "react";

import {
  CoreH4,
  CoreTypographyBody1,
  CoreTextField,
  CoreClasses,
  CoreBox,
  CoreStack,
  CoreMenuItem,
  CoreFormControl,
  CoreInputLabel,
  CoreInput,
  CoreInputAdornment,
  CoreIcon,
  CoreAlert,
  CoreFormHelperText,
  CoreIconButton
} from "@wrappid/core";

import CodeBlock from "../../CodeBlock";
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

const CORE_COMPONENT = CoreTextField;
const CORE_COMPONENT_NAME = CORE_COMPONENT?.displayName || CORE_COMPONENT?.name;

export default function CoreTextFieldDocs() {
  const currencies = [
    {
      label: "$",
      value: "USD",
    },
    {
      label: "€",
      value: "EUR",
    },
    {
      label: "฿",
      value: "BTC",
    },
    {
      label: "¥",
      value: "JPY",
    },
  ];

  const stringCurrencies = `const currencies = [
    {
      label: "$",
      value: "USD",
    },
    {
      label: "€",
      value: "EUR",
    },
    {
      label: "฿",
      value: "BTC",
    },
    {
      label: "¥",
      value: "JPY",
    },
  ];`;
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const [name, setName] = React.useState("We are Wrappiders!");

  function CustomRedBar() {
    return <CoreBox
      height={20}
      styleClasses={[CoreClasses.WIDTH.W_50, CoreClasses.BG.BG_ERROR]}
    />;
  }

  return (
    <ComponentDocs
      component={CORE_COMPONENT}
      description={`${CORE_COMPONENT_NAME} allow users to enter text into a UI. They typically appear in forms.`}
      basicSample={true}
      samples={
        <>
          <CodeSample
            title={"Basic TextField"}
            description={
              <CoreTypographyBody1>
                The <CodeBlock>TextField</CodeBlock> wrapper component is a
                complete form control including a label, input, and help text.
                It comes with three variants: outlined (default), filled, and
                standard.
              </CoreTypographyBody1>
            }
            code={`<>
<CoreTextField id="outlined-basic" label="Outlined" variant="outlined" />

<CoreTextField id="filled-basic" label="Filled" variant="filled" />

<CoreTextField id="standard-basic" label="Standard" variant="standard" />
</>`}
            expandedCode={`<CoreBox
  component="form"
  styleClasses={[CoreClasses.MARGIN.M1]}
  noValidate
  autoComplete="off"
>
  <CoreTextField
    styleClasses={[CoreClasses.MARGIN.M1]}
    id="outlined-basic"
    label="Outlined"
    variant="outlined"
  />

  <CoreTextField
    styleClasses={[CoreClasses.MARGIN.M1]}
    id="filled-basic"
    label="Filled"
    variant="filled"
  />

  <CoreTextField
    id="standard-basic"
    label="Standard"
    variant="standard"
  />
</CoreBox>`}
            renderElement={
              <>
                <CoreBox
                  component="form"
                  styleClasses={[CoreClasses.MARGIN.M1]}
                  noValidate
                  autoComplete="off"
                >
                  <CoreTextField
                    styleClasses={[CoreClasses.MARGIN.M1]}
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                  />

                  <CoreTextField
                    styleClasses={[CoreClasses.MARGIN.M1]}
                    id="filled-basic"
                    label="Filled"
                    variant="filled"
                  />

                  <CoreTextField
                    id="standard-basic"
                    label="Standard"
                    variant="standard"
                  />
                </CoreBox>
              </>
            }
          />

          <CodeSample
            title={"Form props"}
            description={
              <CoreTypographyBody1>
                Standard form attributes are supported e.g.{" "}

                <CodeBlock>required</CodeBlock>,

                <CodeBlock>disabled</CodeBlock>,

                {" "}

                <CodeBlock>type</CodeBlock>, 

                etc. as well as a{" "}

                <CodeBlock>helperText</CodeBlock> which is used to give context

                about a field{"'"}s input, such as how the input will be used.
              </CoreTypographyBody1>
            }
            code={`<CoreStack
direction="column"
component="form"
spacing={2}
styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_25, CoreClasses.PADDING.P3]}
noValidate
autoComplete="off"
>
<CoreBox direction="column">
  <CoreTextField
    styleClasses={[CoreClasses.MARGIN.M1]}
    required
    id="outlined-required"
    label="Required"
    defaultValue="Hello World"
  />

  <CoreTextField
    styleClasses={[CoreClasses.MARGIN.M1]}
    disabled
    id="outlined-disabled"
    label="Disabled"
    defaultValue="Hello World"
  />

  <CoreTextField
    styleClasses={[CoreClasses.MARGIN.M1]}
    id="outlined-password-input"
    label="Password"
    type="password"
    autoComplete="current-password"
  />

  <CoreTextField
    styleClasses={[CoreClasses.MARGIN.M1]}
    id="outlined-read-only-input"
    label="Read Only"
    defaultValue="Hello World"
    InputProps={{ readOnly: true }}
  />

  <CoreTextField
    styleClasses={[CoreClasses.MARGIN.M1]}
    id="outlined-number"
    label="Number"
    type="number"
    InputLabelProps={{ shrink: true }}
  />

  <CoreTextField
    styleClasses={[CoreClasses.MARGIN.M1]}
    id="outlined-search"
    label="Search field"
    type="search"
  />

  <CoreTextField
    styleClasses={[CoreClasses.MARGIN.M1]}
    id="outlined-helperText"
    label="Helper text"
    defaultValue="Default Value"
    helperText="Some important text"
  />
</CoreBox>

<CoreBox direction="column">
  <CoreTextField
    styleClasses={[CoreClasses.MARGIN.M1]}
    required
    id="filled-required"
    label="Required"
    defaultValue="Hello World"
    variant="filled"
  />

  <CoreTextField
    styleClasses={[CoreClasses.MARGIN.M1]}
    disabled
    id="filled-disabled"
    label="Disabled"
    defaultValue="Hello World"
    variant="filled"
  />

  <CoreTextField
    styleClasses={[CoreClasses.MARGIN.M1]}
    id="filled-password-input"
    label="Password"
    type="password"
    autoComplete="current-password"
    variant="filled"
  />

  <CoreTextField
    styleClasses={[CoreClasses.MARGIN.M1]}
    id="filled-read-only-input"
    label="Read Only"
    defaultValue="Hello World"
    InputProps={{ readOnly: true }}
    variant="filled"
  />

  <CoreTextField
    styleClasses={[CoreClasses.MARGIN.M1]}
    id="filled-number"
    label="Number"
    type="number"
    InputLabelProps={{ shrink: true }}
    variant="filled"
  />

  <CoreTextField
    styleClasses={[CoreClasses.MARGIN.M1]}
    id="filled-search"
    label="Search field"
    type="search"
    variant="filled"
  />

  <CoreTextField
    styleClasses={[CoreClasses.MARGIN.M1]}
    id="filled-helperText"
    label="Helper text"
    defaultValue="Default Value"
    helperText="Some important text"
    variant="filled"
  />
</CoreBox>

<CoreBox direction="column">
  <CoreTextField
    styleClasses={[CoreClasses.MARGIN.M1]}
    required
    id="standard-required"
    label="Required"
    defaultValue="Hello World"
    variant="standard"
  />

  <CoreTextField
    styleClasses={[CoreClasses.MARGIN.M1]}
    disabled
    id="standard-disabled"
    label="Disabled"
    defaultValue="Hello World"
    variant="standard"
  />

  <CoreTextField
    styleClasses={[CoreClasses.MARGIN.M1]}
    id="standard-password-input"
    label="Password"
    type="password"
    autoComplete="current-password"
    variant="standard"
  />

  <CoreTextField
    styleClasses={[CoreClasses.MARGIN.M1]}
    id="standard-read-only-input"
    label="Read Only"
    defaultValue="Hello World"
    InputProps={{ readOnly: true }}
    variant="standard"
  />

  <CoreTextField
    styleClasses={[CoreClasses.MARGIN.M1]}
    id="standard-number"
    label="Number"
    type="number"
    InputLabelProps={{ shrink: true }}
    variant="standard"
  />

  <CoreTextField
    styleClasses={[CoreClasses.MARGIN.M1]}
    id="standard-search"
    label="Search field"
    type="search"
    variant="standard"
  />

  <CoreTextField
    styleClasses={[CoreClasses.MARGIN.M1]}
    id="standard-helperText"
    label="Helper text"
    defaultValue="Default Value"
    helperText="Some important text"
    variant="standard"
  />
</CoreBox>
</CoreStack>`}
            expandedCode={`import { CoreBox, CoreStack, CoreTextField } from "@wrappid/core";

export default function FormPropsCoreTextField() {
  return (
    <CoreStack
      direction="column"
      component="form"
      spacing={2}
      styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_25, CoreClasses.PADDING.P3]}
      noValidate
      autoComplete="off"
>
      <CoreBox direction="column">
      <CoreTextField
      styleClasses={[CoreClasses.MARGIN.M1]}
      required
      id="outlined-required"
      label="Required"
      defaultValue="Hello World"
      />

      <CoreTextField
      styleClasses={[CoreClasses.MARGIN.M1]}
      disabled
      id="outlined-disabled"
      label="Disabled"
      defaultValue="Hello World"
      />

      <CoreTextField
      styleClasses={[CoreClasses.MARGIN.M1]}
      id="outlined-password-input"
      label="Password"
      type="password"
      autoComplete="current-password"
      />

      <CoreTextField
      styleClasses={[CoreClasses.MARGIN.M1]}
      id="outlined-read-only-input"
      label="Read Only"
      defaultValue="Hello World"
      InputProps={{ readOnly: true }}
      />

      <CoreTextField
      styleClasses={[CoreClasses.MARGIN.M1]}
      id="outlined-number"
      label="Number"
      type="number"
      InputLabelProps={{ shrink: true }}
      />

      <CoreTextField
      styleClasses={[CoreClasses.MARGIN.M1]}
      id="outlined-search"
      label="Search field"
      type="search"
      />

      <CoreTextField
      styleClasses={[CoreClasses.MARGIN.M1]}
      id="outlined-helperText"
      label="Helper text"
      defaultValue="Default Value"
      helperText="Some important text"
      />
      </CoreBox>

      <CoreBox direction="column">
      <CoreTextField
      styleClasses={[CoreClasses.MARGIN.M1]}
      required
      id="filled-required"
      label="Required"
      defaultValue="Hello World"
      variant="filled"
      />

      <CoreTextField
      styleClasses={[CoreClasses.MARGIN.M1]}
      disabled
      id="filled-disabled"
      label="Disabled"
      defaultValue="Hello World"
      variant="filled"
      />

      <CoreTextField
      styleClasses={[CoreClasses.MARGIN.M1]}
      id="filled-password-input"
      label="Password"
      type="password"
      autoComplete="current-password"
      variant="filled"
      />

      <CoreTextField
      styleClasses={[CoreClasses.MARGIN.M1]}
      id="filled-read-only-input"
      label="Read Only"
      defaultValue="Hello World"
      InputProps={{ readOnly: true }}
      variant="filled"
      />

      <CoreTextField
      styleClasses={[CoreClasses.MARGIN.M1]}
      id="filled-number"
      label="Number"
      type="number"
      InputLabelProps={{ shrink: true }}
      variant="filled"
      />

      <CoreTextField
      styleClasses={[CoreClasses.MARGIN.M1]}
      id="filled-search"
      label="Search field"
      type="search"
      variant="filled"
      />

      <CoreTextField
      styleClasses={[CoreClasses.MARGIN.M1]}
      id="filled-helperText"
      label="Helper text"
      defaultValue="Default Value"
      helperText="Some important text"
      variant="filled"
      />
      </CoreBox>

      <CoreBox direction="column">
      <CoreTextField
      styleClasses={[CoreClasses.MARGIN.M1]}
      required
      id="standard-required"
      label="Required"
      defaultValue="Hello World"
      variant="standard"
      />

      <CoreTextField
      styleClasses={[CoreClasses.MARGIN.M1]}
      disabled
      id="standard-disabled"
      label="Disabled"
      defaultValue="Hello World"
      variant="standard"
      />

      <CoreTextField
      styleClasses={[CoreClasses.MARGIN.M1]}
      id="standard-password-input"
      label="Password"
      type="password"
      autoComplete="current-password"
      variant="standard"
      />

      <CoreTextField
      styleClasses={[CoreClasses.MARGIN.M1]}
      id="standard-read-only-input"
      label="Read Only"
      defaultValue="Hello World"
      InputProps={{ readOnly: true }}
      variant="standard"
      />

      <CoreTextField
      styleClasses={[CoreClasses.MARGIN.M1]}
      id="standard-number"
      label="Number"
      type="number"
      InputLabelProps={{ shrink: true }}
      variant="standard"
      />

      <CoreTextField
      styleClasses={[CoreClasses.MARGIN.M1]}
      id="standard-search"
      label="Search field"
      type="search"
      variant="standard"
      />

      <CoreTextField
      styleClasses={[CoreClasses.MARGIN.M1]}
      id="standard-helperText"
      label="Helper text"
      defaultValue="Default Value"
      helperText="Some important text"
      variant="standard"
      />
      </CoreBox>
</CoreStack>
  );
}`}
            renderElement={
              <CoreStack
                direction="column"
                component="form"
                spacing={2}
                styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.PADDING.P3]}
                // sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
                noValidate
                autoComplete="off"
              >
                <CoreBox direction="column">
                  <CoreTextField
                    styleClasses={[CoreClasses.MARGIN.M1]}
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Hello World"
                  />

                  <CoreTextField
                    styleClasses={[CoreClasses.MARGIN.M1]}
                    disabled
                    id="outlined-disabled"
                    label="Disabled"
                    defaultValue="Hello World"
                  />

                  <CoreTextField
                    styleClasses={[CoreClasses.MARGIN.M1]}
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                  />

                  <CoreTextField
                    styleClasses={[CoreClasses.MARGIN.M1]}
                    id="outlined-read-only-input"
                    label="Read Only"
                    defaultValue="Hello World"
                    InputProps={{ readOnly: true }}
                  />

                  <CoreTextField
                    styleClasses={[CoreClasses.MARGIN.M1]}
                    id="outlined-number"
                    label="Number"
                    type="number"
                    InputLabelProps={{ shrink: true }}
                  />

                  <CoreTextField
                    styleClasses={[CoreClasses.MARGIN.M1]}
                    id="outlined-search"
                    label="Search field"
                    type="search"
                  />

                  <CoreTextField
                    styleClasses={[CoreClasses.MARGIN.M1]}
                    id="outlined-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                  />
                </CoreBox>

                <CoreBox direction="column">
                  <CoreTextField
                    styleClasses={[CoreClasses.MARGIN.M1]}
                    required
                    id="filled-required"
                    label="Required"
                    defaultValue="Hello World"
                    variant="filled"
                  />

                  <CoreTextField
                    styleClasses={[CoreClasses.MARGIN.M1]}
                    disabled
                    id="filled-disabled"
                    label="Disabled"
                    defaultValue="Hello World"
                    variant="filled"
                  />

                  <CoreTextField
                    styleClasses={[CoreClasses.MARGIN.M1]}
                    id="filled-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="filled"
                  />

                  <CoreTextField
                    styleClasses={[CoreClasses.MARGIN.M1]}
                    id="filled-read-only-input"
                    label="Read Only"
                    defaultValue="Hello World"
                    InputProps={{ readOnly: true }}
                    variant="filled"
                  />

                  <CoreTextField
                    styleClasses={[CoreClasses.MARGIN.M1]}
                    id="filled-number"
                    label="Number"
                    type="number"
                    InputLabelProps={{ shrink: true }}
                    variant="filled"
                  />

                  <CoreTextField
                    styleClasses={[CoreClasses.MARGIN.M1]}
                    id="filled-search"
                    label="Search field"
                    type="search"
                    variant="filled"
                  />

                  <CoreTextField
                    styleClasses={[CoreClasses.MARGIN.M1]}
                    id="filled-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                    variant="filled"
                  />
                </CoreBox>

                <CoreBox direction="column">
                  <CoreTextField
                    styleClasses={[CoreClasses.MARGIN.M1]}
                    required
                    id="standard-required"
                    label="Required"
                    defaultValue="Hello World"
                    variant="standard"
                  />

                  <CoreTextField
                    styleClasses={[CoreClasses.MARGIN.M1]}
                    disabled
                    id="standard-disabled"
                    label="Disabled"
                    defaultValue="Hello World"
                    variant="standard"
                  />

                  <CoreTextField
                    styleClasses={[CoreClasses.MARGIN.M1]}
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                  />

                  <CoreTextField
                    styleClasses={[CoreClasses.MARGIN.M1]}
                    id="standard-read-only-input"
                    label="Read Only"
                    defaultValue="Hello World"
                    InputProps={{ readOnly: true }}
                    variant="standard"
                  />

                  <CoreTextField
                    styleClasses={[CoreClasses.MARGIN.M1]}
                    id="standard-number"
                    label="Number"
                    type="number"
                    InputLabelProps={{ shrink: true }}
                    variant="standard"
                  />

                  <CoreTextField
                    styleClasses={[CoreClasses.MARGIN.M1]}
                    id="standard-search"
                    label="Search field"
                    type="search"
                    variant="standard"
                  />

                  <CoreTextField
                    styleClasses={[CoreClasses.MARGIN.M1]}
                    id="standard-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                    variant="standard"
                  />
                </CoreBox>
              </CoreStack>
            }
          />

          <CodeSample
            title={"Validation"}
            description={
              <CoreTypographyBody1>
                The <CodeBlock>error</CodeBlock> prop toggles the error state.

                The <CodeBlock>helperText</CodeBlock> prop can then be used to
                provide feedback to the user about the error.
              </CoreTypographyBody1>
            }
            code={`<CoreStack
  component="form"
  direction="column"
  styleClasses={[CoreClasses.MARGIN.M1]}
  noValidate
  autoComplete="off"
>
  <CoreBox direction="column">
    <CoreTextField
      styleClasses={[CoreClasses.MARGIN.M1]}
      error
      id="outlined-error"
      label="Error"
      defaultValue="Hello World"
    />

    <CoreTextField
      styleClasses={[CoreClasses.MARGIN.M1]}
      error
      id="outlined-error-helper-text"
      label="Error"
      defaultValue="Hello World"
      helperText="Incorrect entry."
    />
  </CoreBox>

  <CoreBox direction="column">
    <CoreTextField
      styleClasses={[CoreClasses.MARGIN.M1]}
      error
      id="filled-error"
      label="Error"
      defaultValue="Hello World"
      variant="filled"
    />

    <CoreTextField
      styleClasses={[CoreClasses.MARGIN.M1]}
      error
      id="filled-error-helper-text"
      label="Error"
      defaultValue="Hello World"
      helperText="Incorrect entry."
      variant="filled"
    />
  </CoreBox>

  <CoreBox direction="column">
    <CoreTextField
      styleClasses={[CoreClasses.MARGIN.M1]}
      error
      id="standard-error"
      label="Error"
      defaultValue="Hello World"
      variant="standard"
    />

    <CoreTextField
      styleClasses={[CoreClasses.MARGIN.M1]}
      error
      id="standard-error-helper-text"
      label="Error"
      defaultValue="Hello World"
      helperText="Incorrect entry."
      variant="standard"
    />
  </CoreBox>
</CoreStack>`}
            expandedCode={`import { CoreBox, CoreStack, CoreTextField } from "@wrappid/core";

export default function ValidationCoreTextField() {
  return (
    <CoreStack
    component="form"
    direction="column"
    styleClasses={[CoreClasses.MARGIN.M1]}
    noValidate
    autoComplete="off"
  >
    <CoreBox direction="column">
      <CoreTextField
        styleClasses={[CoreClasses.MARGIN.M1]}
        error
        id="outlined-error"
        label="Error"
        defaultValue="Hello World"
      />

      <CoreTextField
        styleClasses={[CoreClasses.MARGIN.M1]}
        error
        id="outlined-error-helper-text"
        label="Error"
        defaultValue="Hello World"
        helperText="Incorrect entry."
      />
    </CoreBox>

    <CoreBox direction="column">
      <CoreTextField
        styleClasses={[CoreClasses.MARGIN.M1]}
        error
        id="filled-error"
        label="Error"
        defaultValue="Hello World"
        variant="filled"
      />

      <CoreTextField
        styleClasses={[CoreClasses.MARGIN.M1]}
        error
        id="filled-error-helper-text"
        label="Error"
        defaultValue="Hello World"
        helperText="Incorrect entry."
        variant="filled"
      />
    </CoreBox>

    <CoreBox direction="column">
      <CoreTextField
        styleClasses={[CoreClasses.MARGIN.M1]}
        error
        id="standard-error"
        label="Error"
        defaultValue="Hello World"
        variant="standard"
      />

      <CoreTextField
        styleClasses={[CoreClasses.MARGIN.M1]}
        error
        id="standard-error-helper-text"
        label="Error"
        defaultValue="Hello World"
        helperText="Incorrect entry."
        variant="standard"
      />
    </CoreBox>
  </CoreStack>

  );
}`}
            renderElement={
              <>
                <CoreBox
                  component="form"
                  direction="column"
                  styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_75]}
                  // sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
                  noValidate
                  autoComplete="off"
                >
                  <CoreBox
                    direction="column"
                    styleClasses={[CoreClasses.MARGIN.M1]}
                  >
                    <CoreTextField
                      styleClasses={[CoreClasses.MARGIN.M1]}
                      error
                      id="outlined-error"
                      label="Error"
                      defaultValue="Hello World"
                    />

                    <CoreTextField
                      styleClasses={[CoreClasses.MARGIN.M1]}
                      error
                      id="outlined-error-helper-text"
                      label="Error"
                      defaultValue="Hello World"
                      helperText="Incorrect entry."
                    />
                  </CoreBox>

                  <CoreBox
                    direction="column"
                    styleClasses={[CoreClasses.MARGIN.M1]}
                  >
                    <CoreTextField
                      styleClasses={[CoreClasses.MARGIN.M1]}
                      error
                      id="filled-error"
                      label="Error"
                      defaultValue="Hello World"
                      variant="filled"
                    />

                    <CoreTextField
                      styleClasses={[CoreClasses.MARGIN.M1]}
                      error
                      id="filled-error-helper-text"
                      label="Error"
                      defaultValue="Hello World"
                      helperText="Incorrect entry."
                      variant="filled"
                    />
                  </CoreBox>

                  <CoreBox
                    direction="column"
                    styleClasses={[CoreClasses.MARGIN.M1]}
                  >
                    <CoreTextField
                      styleClasses={[CoreClasses.MARGIN.M1]}
                      error
                      id="standard-error"
                      label="Error"
                      defaultValue="Hello World"
                      variant="standard"
                    />

                    <CoreTextField
                      styleClasses={[CoreClasses.MARGIN.M1]}
                      error
                      id="standard-error-helper-text"
                      label="Error"
                      defaultValue="Hello World"
                      helperText="Incorrect entry."
                      variant="standard"
                    />
                  </CoreBox>
                </CoreBox>
              </>
            }
          />

          <CodeSample
            title={"Multiline"}
            description={
              <CoreTypographyBody1>
                The <CodeBlock>multiline</CodeBlock> prop transforms the text

                field into a TextareaAutosize element. Unless the{" "}

                <CodeBlock>rows</CodeBlock> prop is set, the height of the text
                field dynamically matches its content (using TextareaAutosize).

                You can use the <CodeBlock>minRows</CodeBlock>

                and <CodeBlock>maxRows</CodeBlock> props to bound it.
              </CoreTypographyBody1>
            }
            code={`<CoreStack
  component="form"
  direction="column"
  spacing={2}
  styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_50]}
  noValidate
  autoComplete="off"
>
  <CoreStack direction="row" spacing={2}>
    <CoreTextField
      id="outlined-multiline-flexible"
      label="Multiline"
      multiline
      maxRows={4}
    />

    <CoreTextField
      id="outlined-textarea"
      label="Multiline Placeholder"
      placeholder="Placeholder"
      multiline
    />

    <CoreTextField
      id="outlined-multiline-static"
      label="Multiline"
      multiline
      rows={4}
      defaultValue="Default Value"
    />
  </CoreStack>

  <CoreStack direction="row" spacing={2}>
    <CoreTextField
      id="filled-multiline-flexible"
      label="Multiline"
      multiline
      maxRows={4}
      variant="filled"
    />

    <CoreTextField
      id="filled-textarea"
      label="Multiline Placeholder"
      placeholder="Placeholder"
      multiline
      variant="filled"
    />

    <CoreTextField
      id="filled-multiline-static"
      label="Multiline"
      multiline
      rows={4}
      defaultValue="Default Value"
      variant="filled"
    />
  </CoreStack>

  <CoreStack direction="row" spacing={2}>
    <CoreTextField
      id="standard-multiline-flexible"
      label="Multiline"
      multiline
      maxRows={4}
      variant="standard"
    />

    <CoreTextField
      id="standard-textarea"
      label="Multiline Placeholder"
      placeholder="Placeholder"
      multiline
      variant="standard"
    />

    <CoreTextField
      id="standard-multiline-static"
      label="Multiline"
      multiline
      rows={4}
      defaultValue="Default Value"
      variant="standard"
    />
  </CoreStack>
</CoreStack>`}
            expandedCode={`import { CoreStack, CoreTextField } from "@wrappid/core";

export default function MultilineCoreTextField() {
  return (
    <CoreStack
      component="form"
      direction="column"
      spacing={2}
      styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_50]}
      // sx={{
      //   '& .MuiTextField-root': { m: 1, width: '25ch' },
      // }}
      noValidate
      autoComplete="off"
    >
      <CoreStack direction="row" spacing={2}>
        <CoreTextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
        />

        <CoreTextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
        />

        <CoreTextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
      </CoreStack>

      <CoreStack direction="row" spacing={2}>
        <CoreTextField
          id="filled-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="filled"
        />

        <CoreTextField
          id="filled-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="filled"
        />

        <CoreTextField
          id="filled-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="filled"
        />
      </CoreStack>

      <CoreStack direction="row" spacing={2}>
        <CoreTextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          variant="standard"
        />

        <CoreTextField
          id="standard-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="standard"
        />

        <CoreTextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="standard"
        />
      </CoreStack>
    </CoreStack>

  );
}`}
            renderElement={
              <>
                <CoreStack
                  component="form"
                  direction="column"
                  spacing={2}
                  styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_50]}
                  // sx={{
                  //   '& .MuiTextField-root': { m: 1, width: '25ch' },
                  // }}
                  noValidate
                  autoComplete="off"
                >
                  <CoreStack direction="row" spacing={2}>
                    <CoreTextField
                      id="outlined-multiline-flexible"
                      label="Multiline"
                      multiline
                      maxRows={4}
                    />

                    <CoreTextField
                      id="outlined-textarea"
                      label="Multiline Placeholder"
                      placeholder="Placeholder"
                      multiline
                    />

                    <CoreTextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      rows={4}
                      defaultValue="Default Value"
                    />
                  </CoreStack>

                  <CoreStack direction="row" spacing={2}>
                    <CoreTextField
                      id="filled-multiline-flexible"
                      label="Multiline"
                      multiline
                      maxRows={4}
                      variant="filled"
                    />

                    <CoreTextField
                      id="filled-textarea"
                      label="Multiline Placeholder"
                      placeholder="Placeholder"
                      multiline
                      variant="filled"
                    />

                    <CoreTextField
                      id="filled-multiline-static"
                      label="Multiline"
                      multiline
                      rows={4}
                      defaultValue="Default Value"
                      variant="filled"
                    />
                  </CoreStack>

                  <CoreStack direction="row" spacing={2}>
                    <CoreTextField
                      id="standard-multiline-flexible"
                      label="Multiline"
                      multiline
                      maxRows={4}
                      variant="standard"
                    />

                    <CoreTextField
                      id="standard-textarea"
                      label="Multiline Placeholder"
                      placeholder="Placeholder"
                      multiline
                      variant="standard"
                    />

                    <CoreTextField
                      id="standard-multiline-static"
                      label="Multiline"
                      multiline
                      rows={4}
                      defaultValue="Default Value"
                      variant="standard"
                    />
                  </CoreStack>
                </CoreStack>
              </>
            }
          />

          <CodeSample
            title={"Select"}
            description={
              <CoreTypographyBody1>
                The <CodeBlock>select</CodeBlock> prop makes the text field use
                the Select component internally.
              </CoreTypographyBody1>
            }
            code={`<CoreStack direction="row" spacing={2}>
  <CoreTextField
    id="filled-select-currency"
    select
    label="Select"
    defaultValue="EUR"
    helperText="Please select your currency"
    variant="filled"
  >
    {currencies.map((option) => (
      <CoreMenuItem key={option.value} value={option.value}>
        {option.label}
      </CoreMenuItem>
    ))}
  </CoreTextField>

  <CoreTextField
    id="filled-select-currency-native"
    select
    label="Native select"
    defaultValue="EUR"
    SelectProps={{ native: true }}
    helperText="Please select your currency"
    variant="filled"
  >
    {currencies.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </CoreTextField>
</CoreStack>

<CoreStack direction="row" spacing={2}>
  <CoreTextField
    id="outlined-select-currency"
    select
    label="Select"
    defaultValue="EUR"
    helperText="Please select your currency"
  >
    {currencies.map((option) => (
      <CoreMenuItem key={option.value} value={option.value}>
        {option.label}
      </CoreMenuItem>
    ))}
  </CoreTextField>

  <CoreTextField
    id="outlined-select-currency-native"
    select
    label="Native select"
    defaultValue="EUR"
    SelectProps={{ native: true }}
    helperText="Please select your currency"
  >
    {currencies.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </CoreTextField>
</CoreStack>

<CoreStack direction="row" spacing={2}>
  <CoreTextField
    id="standard-select-currency"
    select
    label="Select"
    defaultValue="EUR"
    helperText="Please select your currency"
    variant="standard"
  >
    {currencies.map((option) => (
      <CoreMenuItem key={option.value} value={option.value}>
        {option.label}
      </CoreMenuItem>
    ))}
  </CoreTextField>

  <CoreTextField
    id="standard-select-currency-native"
    select
    label="Native select"
    defaultValue="EUR"
    SelectProps={{ native: true }}
    helperText="Please select your currency"
    variant="standard"
  >
    {currencies.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </CoreTextField>
</CoreStack>`}
            expandedCode={`import { CoreStack, CoreTextField } from "@wrappid/core";

${stringCurrencies}

export default function SelectCoreTextField() {
  return (
    <CoreStack
      direction="column"
      spacing={2}
      component="form"
      noValidate
      autoComplete="off"
    >
      <CoreStack direction="row" spacing={2}>
        <CoreTextField
          id="filled-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
          variant="filled"
        >
          {currencies.map((option) => (
            <CoreMenuItem key={option.value} value={option.value}>
              {option.label}
            </CoreMenuItem>
          ))}
        </CoreTextField>

        <CoreTextField
          id="filled-select-currency-native"
          select
          label="Native select"
          defaultValue="EUR"
          SelectProps={{ native: true }}
          helperText="Please select your currency"
          variant="filled"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </CoreTextField>
      </CoreStack>

      <CoreStack direction="row" spacing={2}>
        <CoreTextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <CoreMenuItem key={option.value} value={option.value}>
              {option.label}
            </CoreMenuItem>
          ))}
        </CoreTextField>

        <CoreTextField
          id="outlined-select-currency-native"
          select
          label="Native select"
          defaultValue="EUR"
          SelectProps={{ native: true }}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </CoreTextField>
      </CoreStack>

      <CoreStack direction="row" spacing={2}>
        <CoreTextField
          id="standard-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
          variant="standard"
        >
          {currencies.map((option) => (
            <CoreMenuItem key={option.value} value={option.value}>
              {option.label}
            </CoreMenuItem>
          ))}
        </CoreTextField>

        <CoreTextField
          id="standard-select-currency-native"
          select
          label="Native select"
          defaultValue="EUR"
          SelectProps={{ native: true }}
          helperText="Please select your currency"
          variant="standard"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </CoreTextField>
      </CoreStack>
    </CoreStack>
  );
}
`}
            renderElement={
              <>
                <CoreStack
                  direction="column"
                  spacing={2}
                  component="form"
                  noValidate
                  autoComplete="off"
                >
                  <CoreStack direction="row" spacing={2}>
                    <CoreTextField
                      id="filled-select-currency"
                      select
                      label="Select"
                      defaultValue="EUR"
                      helperText="Please select your currency"
                      variant="filled"
                    >
                      {currencies.map((option) => (
                        <CoreMenuItem key={option.value} value={option.value}>
                          {option.label}
                        </CoreMenuItem>
                      ))}
                    </CoreTextField>

                    <CoreTextField
                      id="filled-select-currency-native"
                      select
                      label="Native select"
                      defaultValue="EUR"
                      SelectProps={{ native: true }}
                      helperText="Please select your currency"
                      variant="filled"
                    >
                      {currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </CoreTextField>
                  </CoreStack>

                  <CoreStack direction="row" spacing={2}>
                    <CoreTextField
                      id="outlined-select-currency"
                      select
                      label="Select"
                      defaultValue="EUR"
                      helperText="Please select your currency"
                    >
                      {currencies.map((option) => (
                        <CoreMenuItem key={option.value} value={option.value}>
                          {option.label}
                        </CoreMenuItem>
                      ))}
                    </CoreTextField>

                    <CoreTextField
                      id="outlined-select-currency-native"
                      select
                      label="Native select"
                      defaultValue="EUR"
                      SelectProps={{ native: true }}
                      helperText="Please select your currency"
                    >
                      {currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </CoreTextField>
                  </CoreStack>

                  <CoreStack direction="row" spacing={2}>
                    <CoreTextField
                      id="standard-select-currency"
                      select
                      label="Select"
                      defaultValue="EUR"
                      helperText="Please select your currency"
                      variant="standard"
                    >
                      {currencies.map((option) => (
                        <CoreMenuItem key={option.value} value={option.value}>
                          {option.label}
                        </CoreMenuItem>
                      ))}
                    </CoreTextField>

                    <CoreTextField
                      id="standard-select-currency-native"
                      select
                      label="Native select"
                      defaultValue="EUR"
                      SelectProps={{ native: true }}
                      helperText="Please select your currency"
                      variant="standard"
                    >
                      {currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </CoreTextField>
                  </CoreStack>
                </CoreStack>
              </>
            }
          />

          <CoreAlert severity="warning">
            Icons warn: slotProps.input not working. Used InputProps instead.
            InputProps is deprecated.
          </CoreAlert>

          <CodeSample
            title={"Icons"}
            description={
              <CoreTypographyBody1>
                There are multiple ways to display an icon with a text field.
              </CoreTypographyBody1>
            }
            code={`<CoreFormControl variant="standard">
  <CoreInputLabel htmlFor="input-with-icon-adornment">
  With a start adornment
  </CoreInputLabel>

  <CoreInput
    id="input-with-icon-adornment"
    startAdornment={
      <CoreInputAdornment position="start">
        <CoreIcon icon="account_circle" />
      </CoreInputAdornment>
    }
  />
</CoreFormControl>

<CoreTextField
  id="input-with-icon-textfield"
  label="TextField"
  InputProps={{
    startAdornment: (
      <CoreInputAdornment position="start">
        <CoreIcon icon="account_circle" />
      </CoreInputAdornment>
    ),
  }}
  variant="standard"
/>`}
            expandedCode={`import {
  CoreBox,
  CoreFormHelperText,
  CoreInput,
  CoreInputLabel,
  CoreTextField
} from "@wrappid/core";

export default function IconsCoreTextField() {
  return (
    <CoreStack styleClasses={[CoreClasses.MARGIN.M1]}>
    <CoreFormControl variant="standard">
      <CoreInputLabel htmlFor="input-with-icon-adornment">
      With a start adornment
      </CoreInputLabel>

      <CoreInput
        id="input-with-icon-adornment"
        startAdornment={
          <CoreInputAdornment position="start">
            <CoreIcon icon="account_circle" />
          </CoreInputAdornment>
        }
      />
    </CoreFormControl>

    <CoreTextField
      id="input-with-icon-textfield"
      label="TextField"
      InputProps={{
        startAdornment: (
          <CoreInputAdornment position="start">
            <CoreIcon icon="account_circle" />
          </CoreInputAdornment>
        ),
      }}
      variant="standard"
    />

  </CoreStack>
  );
}
`}
            renderElement={
              <>
                <CoreBox styleClasses={[CoreClasses.MARGIN.M1]}>
                  <CoreFormControl
                    variant="standard"
                    styleClasses={[CoreClasses.MARGIN.M1]}
                  >
                    <CoreInputLabel htmlFor="input-with-icon-adornment">
                      With a start adornment
                    </CoreInputLabel>

                    <CoreInput
                      id="input-with-icon-adornment"
                      startAdornment={
                        <CoreInputAdornment position="start">
                          <CoreIcon icon="account_circle" />
                        </CoreInputAdornment>
                      }
                    />
                  </CoreFormControl>

                  <CoreTextField
                    styleClasses={[CoreClasses.MARGIN.M1]}
                    id="input-with-icon-textfield"
                    label="TextField"
                    InputProps={{
                      startAdornment: (
                        <CoreInputAdornment position="start">
                          <CoreIcon icon="account_circle" />
                        </CoreInputAdornment>
                      ),
                    }}
                    variant="standard"
                  />

                  <CoreBox
                    styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.ALIGN_ITEMS_END, CoreClasses.MARGIN.M1]}
                  >
                    <CoreIcon icon="account_circle" />

                    <CoreTextField
                      id="input-with-styleClasses"
                      label="With styleClasses"
                      variant="standard"
                    />
                  </CoreBox>
                </CoreBox>
              </>
            }
          />

          <CodeSample
            title={"Input Adornments"}
            description={
              <CoreTypographyBody1>
                The main way is with an{" "}

                <CodeBlock>CoreInputAdornment</CodeBlock>. This can be used to
                add a prefix, a suffix, or an action to an input. For instance,
                you can use an icon button to hide or reveal the password.
              </CoreTypographyBody1>
            }
            code={`<CoreTextField
  label="With normal TextField"
  id="outlined-start-adornment"
  styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_25]}
  InputProps={{ startAdornment: <CoreInputAdornment position="start">kg</CoreInputAdornment> }}
/>

<CoreFormControl styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_25]} variant="outlined">
  <CoreInput
    id="outlined-adornment-weight"
    endAdornment={<CoreInputAdornment position="end">kg</CoreInputAdornment>}
    aria-describedby="outlined-weight-helper-text"
    inputProps={{ "aria-label": "weight" }}
  />

  <CoreFormHelperText id="outlined-weight-helper-text">Weight</CoreFormHelperText>
</CoreFormControl>

<CoreFormControl styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_25]} variant="outlined">
  <CoreInputLabel htmlFor="outlined-adornment-password">Password</CoreInputLabel>

  <CoreInput
    id="outlined-adornment-password"
    type={showPassword ? "text" : "password"}
    endAdornment={
      <CoreInputAdornment position="end">
        <CoreIconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          onMouseUp={handleMouseUpPassword}
          edge="end"
        >
          <CoreIcon>{showPassword ? "visibility_off" : "visibility"}</CoreIcon>

        </CoreIconButton>
      </CoreInputAdornment>
    }
    label="Password"
  />
</CoreFormControl>

<CoreFormControl fullWidth={true} styleClasses={[CoreClasses.MARGIN.M1]}>
  <CoreInputLabel htmlFor="outlined-adornment-amount">Amount</CoreInputLabel>

  <CoreInput
    id="outlined-adornment-amount"
    startAdornment={<CoreInputAdornment position="start">$</CoreInputAdornment>}
    label="Amount"
  />
</CoreFormControl>
</CoreBox>

<CoreBox>
<CoreTextField
  label="With normal TextField"
  id="filled-start-adornment"
  styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_25]}
  InputProps={{ startAdornment: <CoreInputAdornment position="start">kg</CoreInputAdornment> }}
  variant="filled"
/>

<CoreFormControl styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_25]} variant="filled">
  <CoreInput
    id="filled-adornment-weight"
    endAdornment={<CoreInputAdornment position="end">kg</CoreInputAdornment>}
    aria-describedby="filled-weight-helper-text"
    inputProps={{ "aria-label": "weight" }}
  />

  <CoreFormHelperText id="filled-weight-helper-text">Weight</CoreFormHelperText>
</CoreFormControl>

<CoreFormControl styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_25]} variant="filled">
  <CoreInputLabel htmlFor="filled-adornment-password">Password</CoreInputLabel>

  <CoreInput
    id="filled-adornment-password"
    type={showPassword ? "text" : "password"}
    endAdornment={
      <CoreInputAdornment position="end">
        <CoreIconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge="end"
        >
          <CoreIcon>{showPassword ? "visibility_off" : "visibility" }</CoreIcon>
        </CoreIconButton>
      </CoreInputAdornment>
    }
  />
</CoreFormControl>

<CoreFormControl fullWidth={true} styleClasses={[CoreClasses.MARGIN.M1]} variant="filled">
  <CoreInputLabel htmlFor="filled-adornment-amount">Amount</CoreInputLabel>

  <CoreInput
    id="filled-adornment-amount"
    startAdornment={<CoreInputAdornment position="start">$</CoreInputAdornment>}
  />
</CoreFormControl>
</CoreBox>

<CoreBox>
<CoreTextField
  label="With normal TextField"
  id="standard-start-adornment"
  styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_25]}
  InputProps={{ startAdornment: <CoreInputAdornment position="start">kg</CoreInputAdornment> }}
  variant="standard"
/>

<CoreFormControl variant="standard" styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_25]}>
  <CoreInput
    id="standard-adornment-weight"
    endAdornment={<CoreInputAdornment position="end">kg</CoreInputAdornment>}
    aria-describedby="standard-weight-helper-text"
    inputProps={{ "aria-label": "weight" }}
  />

  <CoreFormHelperText id="standard-weight-helper-text">Weight</CoreFormHelperText>
</CoreFormControl>

<CoreFormControl styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_25]} variant="standard">
  <CoreInputLabel htmlFor="standard-adornment-password">Password</CoreInputLabel>

  <CoreInput
    id="standard-adornment-password"
    type={showPassword ? "text" : "password"}
    endAdornment={
      <CoreInputAdornment position="end">
        <CoreIconButton
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
        >
          <CoreIcon>{showPassword ? "visibilityoff" : "visibility" }</CoreIcon>
        </CoreIconButton>
      </CoreInputAdornment>
    }
  />
</CoreFormControl>

<CoreFormControl fullWidth={true} styleClasses={[CoreClasses.MARGIN.M1]} variant="standard">
  <CoreInputLabel htmlFor="standard-adornment-amount">Amount</CoreInputLabel>

  <CoreInput
    id="standard-adornment-amount"
    startAdornment={<CoreInputAdornment position="start">$</CoreInputAdornment>}
  />
</CoreFormControl>`}
            expandedCode={`import {
  CoreBox,
  CoreFormHelperText,
  CoreIconButton,
  CoreInput,
  CoreInputAdornment,
  CoreInputLabel,
  CoreTextField,
} from "@wrappid/core";

export default function InputAdormentCoreTextField() {
  return (
    <CoreBox
      styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.FLEX_WRAP_WRAP]}
    >
      <CoreBox>
        <CoreTextField
          label="With normal TextField"
          id="outlined-start-adornment"
          styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_25]}
          InputProps={{
            startAdornment: (
              <CoreInputAdornment position="start">kg</CoreInputAdornment>
            ),
          }}
        />

        <CoreFormControl
          styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_25]}
          variant="outlined"
        >
          <CoreInput
            id="outlined-adornment-weight"
            endAdornment={
              <CoreInputAdornment position="end">kg</CoreInputAdornment>
            }
            aria-describedby="outlined-weight-helper-text"
            inputProps={{ "aria-label": "weight" }}
          />

          <CoreFormHelperText id="outlined-weight-helper-text">
            Weight
          </CoreFormHelperText>
        </CoreFormControl>

        <CoreFormControl
          styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_25]}
          variant="outlined"
        >
          <CoreInputLabel htmlFor="outlined-adornment-password">
            Password
          </CoreInputLabel>

          <CoreInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <CoreInputAdornment position="end">
                <CoreIconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  <CoreIcon>
                    {showPassword ? "visibility_off" : "visibility"}
                  </CoreIcon>
                </CoreIconButton>
              </CoreInputAdornment>
            }
            label="Password"
          />
        </CoreFormControl>

        <CoreFormControl
          fullWidth={true}
          styleClasses={[CoreClasses.MARGIN.M1]}
        >
          <CoreInputLabel htmlFor="outlined-adornment-amount">
            Amount
          </CoreInputLabel>

          <CoreInput
            id="outlined-adornment-amount"
            startAdornment={
              <CoreInputAdornment position="start">$</CoreInputAdornment>
            }
            label="Amount"
          />
        </CoreFormControl>
      </CoreBox>

      <CoreBox>
        <CoreTextField
          label="With normal TextField"
          id="filled-start-adornment"
          styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_25]}
          InputProps={{
            startAdornment: (
              <CoreInputAdornment position="start">kg</CoreInputAdornment>
            ),
          }}
          variant="filled"
        />

        <CoreFormControl
          styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_25]}
          variant="filled"
        >
          <CoreInput
            id="filled-adornment-weight"
            endAdornment={
              <CoreInputAdornment position="end">kg</CoreInputAdornment>
            }
            aria-describedby="filled-weight-helper-text"
            inputProps={{ "aria-label": "weight" }}
          />

          <CoreFormHelperText id="filled-weight-helper-text">
            Weight
          </CoreFormHelperText>
        </CoreFormControl>

        <CoreFormControl
          styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_25]}
          variant="filled"
        >
          <CoreInputLabel htmlFor="filled-adornment-password">
            Password
          </CoreInputLabel>

          <CoreInput
            id="filled-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <CoreInputAdornment position="end">
                <CoreIconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  <CoreIcon>
                    {showPassword ? "visibility_off" : "visibility"}
                  </CoreIcon>
                </CoreIconButton>
              </CoreInputAdornment>
            }
          />
        </CoreFormControl>

        <CoreFormControl
          fullWidth={true}
          styleClasses={[CoreClasses.MARGIN.M1]}
          variant="filled"
        >
          <CoreInputLabel htmlFor="filled-adornment-amount">
            Amount
          </CoreInputLabel>

          <CoreInput
            id="filled-adornment-amount"
            startAdornment={
              <CoreInputAdornment position="start">$</CoreInputAdornment>
            }
          />
        </CoreFormControl>
      </CoreBox>

      <CoreBox>
        <CoreTextField
          label="With normal TextField"
          id="standard-start-adornment"
          styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_25]}
          InputProps={{
            startAdornment: (
              <CoreInputAdornment position="start">kg</CoreInputAdornment>
            ),
          }}
          variant="standard"
        />

        <CoreFormControl
          variant="standard"
          styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_25]}
        >
          <CoreInput
            id="standard-adornment-weight"
            endAdornment={
              <CoreInputAdornment position="end">kg</CoreInputAdornment>
            }
            aria-describedby="standard-weight-helper-text"
            inputProps={{ "aria-label": "weight" }}
          />

          <CoreFormHelperText id="standard-weight-helper-text">
            Weight
          </CoreFormHelperText>
        </CoreFormControl>

        <CoreFormControl
          styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_25]}
          variant="standard"
        >
          <CoreInputLabel htmlFor="standard-adornment-password">
            Password
          </CoreInputLabel>

          <CoreInput
            id="standard-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <CoreInputAdornment position="end">
                <CoreIconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  <CoreIcon>
                    {showPassword ? "visibilityoff" : "visibility"}
                  </CoreIcon>
                </CoreIconButton>
              </CoreInputAdornment>
            }
          />
        </CoreFormControl>

        <CoreFormControl
          fullWidth={true}
          styleClasses={[CoreClasses.MARGIN.M1]}
          variant="standard"
        >
          <CoreInputLabel htmlFor="standard-adornment-amount">
            Amount
          </CoreInputLabel>

          <CoreInput
            id="standard-adornment-amount"
            startAdornment={
              <CoreInputAdornment position="start">$</CoreInputAdornment>
            }
          />
        </CoreFormControl>
      </CoreBox>
    </CoreBox>
  );
}`}
            renderElement={
              <>
                <CoreBox
                  styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.FLEX_WRAP_WRAP]}
                >
                  <CoreBox>
                    <CoreTextField
                      label="With normal TextField"
                      id="outlined-start-adornment"
                      styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_25]}
                      InputProps={{
                        startAdornment: (
                          <CoreInputAdornment position="start">
                            kg
                          </CoreInputAdornment>
                        ),
                      }}
                    />

                    <CoreFormControl
                      styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_25]}
                      variant="outlined"
                    >
                      <CoreInput
                        id="outlined-adornment-weight"
                        endAdornment={
                          <CoreInputAdornment position="end">
                            kg
                          </CoreInputAdornment>
                        }
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{ "aria-label": "weight" }}
                      />

                      <CoreFormHelperText id="outlined-weight-helper-text">
                        Weight
                      </CoreFormHelperText>
                    </CoreFormControl>

                    <CoreFormControl
                      styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_25]}
                      variant="outlined"
                    >
                      <CoreInputLabel
                        htmlFor="outlined-adornment-password"
                        shrink={true}
                      >
                        Password
                      </CoreInputLabel>

                      <CoreInput
                        id="outlined-adornment-password"
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                          <CoreInputAdornment position="end">
                            <CoreIconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              onMouseUp={handleMouseUpPassword}
                              edge="end"
                            >
                              <CoreIcon>
                                {showPassword ? "visibility_off" : "visibility"}
                              </CoreIcon>
                            </CoreIconButton>
                          </CoreInputAdornment>
                        }
                        label="Password"
                      />
                    </CoreFormControl>

                    <CoreFormControl
                      fullWidth={true}
                      styleClasses={[CoreClasses.MARGIN.M1]}
                    >
                      <CoreInputLabel htmlFor="outlined-adornment-amount">
                        Amount
                      </CoreInputLabel>

                      <CoreInput
                        id="outlined-adornment-amount"
                        startAdornment={
                          <CoreInputAdornment position="start">
                            $
                          </CoreInputAdornment>
                        }
                        label="Amount"
                      />
                    </CoreFormControl>
                  </CoreBox>

                  <CoreBox>
                    <CoreTextField
                      label="With normal TextField"
                      id="filled-start-adornment"
                      styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_25]}
                      InputProps={{
                        startAdornment: (
                          <CoreInputAdornment position="start">
                            kg
                          </CoreInputAdornment>
                        ),
                      }}
                      variant="filled"
                    />

                    <CoreFormControl
                      styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_25]}
                      variant="filled"
                    >
                      <CoreInput
                        id="filled-adornment-weight"
                        endAdornment={
                          <CoreInputAdornment position="end">
                            kg
                          </CoreInputAdornment>
                        }
                        aria-describedby="filled-weight-helper-text"
                        inputProps={{ "aria-label": "weight" }}
                      />

                      <CoreFormHelperText id="filled-weight-helper-text">
                        Weight
                      </CoreFormHelperText>
                    </CoreFormControl>

                    <CoreFormControl
                      styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_25]}
                      variant="filled"
                    >
                      <CoreInputLabel htmlFor="filled-adornment-password">
                        Password
                      </CoreInputLabel>

                      <CoreInput
                        id="filled-adornment-password"
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                          <CoreInputAdornment position="end">
                            <CoreIconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              <CoreIcon>
                                {showPassword ? "visibility_off" : "visibility"}
                              </CoreIcon>
                            </CoreIconButton>
                          </CoreInputAdornment>
                        }
                      />
                    </CoreFormControl>

                    <CoreFormControl
                      fullWidth={true}
                      styleClasses={[CoreClasses.MARGIN.M1]}
                      variant="filled"
                    >
                      <CoreInputLabel htmlFor="filled-adornment-amount">
                        Amount
                      </CoreInputLabel>

                      <CoreInput
                        id="filled-adornment-amount"
                        startAdornment={
                          <CoreInputAdornment position="start">
                            $
                          </CoreInputAdornment>
                        }
                      />
                    </CoreFormControl>
                  </CoreBox>

                  <CoreBox>
                    <CoreTextField
                      label="With normal TextField"
                      id="standard-start-adornment"
                      styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_25]}
                      InputProps={{
                        startAdornment: (
                          <CoreInputAdornment position="start">
                            kg
                          </CoreInputAdornment>
                        ),
                      }}
                      variant="standard"
                    />

                    <CoreFormControl
                      variant="standard"
                      styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_25]}
                    >
                      <CoreInput
                        id="standard-adornment-weight"
                        endAdornment={
                          <CoreInputAdornment position="end">
                            kg
                          </CoreInputAdornment>
                        }
                        aria-describedby="standard-weight-helper-text"
                        inputProps={{ "aria-label": "weight" }}
                      />

                      <CoreFormHelperText id="standard-weight-helper-text">
                        Weight
                      </CoreFormHelperText>
                    </CoreFormControl>

                    <CoreFormControl
                      styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_25]}
                      variant="standard"
                    >
                      <CoreInputLabel htmlFor="standard-adornment-password">
                        Password
                      </CoreInputLabel>

                      <CoreInput
                        id="standard-adornment-password"
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                          <CoreInputAdornment position="end">
                            <CoreIconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              <CoreIcon>
                                {showPassword ? "visibilityoff" : "visibility"}
                              </CoreIcon>
                            </CoreIconButton>
                          </CoreInputAdornment>
                        }
                      />
                    </CoreFormControl>

                    <CoreFormControl
                      fullWidth={true}
                      styleClasses={[CoreClasses.MARGIN.M1]}
                      variant="standard"
                    >
                      <CoreInputLabel htmlFor="standard-adornment-amount">
                        Amount
                      </CoreInputLabel>

                      <CoreInput
                        id="standard-adornment-amount"
                        startAdornment={
                          <CoreInputAdornment position="start">
                            $
                          </CoreInputAdornment>
                        }
                      />
                    </CoreFormControl>
                  </CoreBox>
                </CoreBox>
              </>
            }
          />

          <CodeSample
            title={"Sizes"}
            description={
              <>
                <CoreTypographyBody1>
                  For smaller inputs use the <CodeBlock>size</CodeBlock> prop.
                </CoreTypographyBody1>

                <CoreTypographyBody1>
                  The <CodeBlock>filled</CodeBlock> variant input height can be
                  further reduced by rendering the label outside of it.
                </CoreTypographyBody1>
              </>
            }
            code={`<CoreStack
  direction="column"
  spacing={2}
  component="form"
  styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_50]}
  noValidate
  autoComplete="off"
>
  <CoreStack direction="row" spacing={2}>
    <CoreTextField
      label="Size"
      id="filled-size-small"
      defaultValue="Small"
      variant="filled"
      size="small"
    />

    <CoreTextField
      label="Size"
      id="filled-size-normal"
      defaultValue="Normal"
      variant="filled"
    />
  </CoreStack>

  <CoreStack direction="row" spacing={2}>
    <CoreTextField
      label="Size"
      id="outlined-size-small"
      defaultValue="Small"
      size="small"
    />

    <CoreTextField
      label="Size"
      id="outlined-size-normal"
      defaultValue="Normal"
    />
  </CoreStack>

  <CoreStack direction="row" spacing={2}>
    <CoreTextField
      label="Size"
      id="standard-size-small"
      defaultValue="Small"
      size="small"
      variant="standard"
    />

    <CoreTextField
      label="Size"
      id="standard-size-normal"
      defaultValue="Normal"
      variant="standard"
    />
  </CoreStack>
</CoreStack>`}
            expandedCode={`import {
  CoreStack,
  CoreTextField,
} from "@wrappid/core";

export default function SizesCoreTextField() {
  return (
    <CoreStack
      direction="column"
      spacing={2}
      component="form"
      styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_50]}
      noValidate
      autoComplete="off"
    >
      <CoreStack direction="row" spacing={2}>
        <CoreTextField
          label="Size"
          id="filled-size-small"
          defaultValue="Small"
          variant="filled"
          size="small"
        />

        <CoreTextField
          label="Size"
          id="filled-size-normal"
          defaultValue="Normal"
          variant="filled"
        />
      </CoreStack>

      <CoreStack direction="row" spacing={2}>
        <CoreTextField
          label="Size"
          id="outlined-size-small"
          defaultValue="Small"
          size="small"
        />

        <CoreTextField
          label="Size"
          id="outlined-size-normal"
          defaultValue="Normal"
        />
      </CoreStack>

      <CoreStack direction="row" spacing={2}>
        <CoreTextField
          label="Size"
          id="standard-size-small"
          defaultValue="Small"
          size="small"
          variant="standard"
        />

        <CoreTextField
          label="Size"
          id="standard-size-normal"
          defaultValue="Normal"
          variant="standard"
        />
      </CoreStack>
    </CoreStack>
  );
}`}
            renderElement={
              <CoreStack
                direction="column"
                spacing={2}
                component="form"
                styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_50]}
                noValidate
                autoComplete="off"
              >
                <CoreStack direction="row" spacing={2}>
                  <CoreTextField
                    label="Size"
                    id="filled-size-small"
                    defaultValue="Small"
                    variant="filled"
                    size="small"
                  />

                  <CoreTextField
                    label="Size"
                    id="filled-size-normal"
                    defaultValue="Normal"
                    variant="filled"
                  />
                </CoreStack>

                <CoreStack direction="row" spacing={2}>
                  <CoreTextField
                    label="Size"
                    id="outlined-size-small"
                    defaultValue="Small"
                    size="small"
                  />

                  <CoreTextField
                    label="Size"
                    id="outlined-size-normal"
                    defaultValue="Normal"
                  />
                </CoreStack>

                <CoreStack direction="row" spacing={2}>
                  <CoreTextField
                    label="Size"
                    id="standard-size-small"
                    defaultValue="Small"
                    size="small"
                    variant="standard"
                  />

                  <CoreTextField
                    label="Size"
                    id="standard-size-normal"
                    defaultValue="Normal"
                    variant="standard"
                  />
                </CoreStack>
              </CoreStack>
            }
          />

          <CodeSample
            title={" "}
            description={
              "The filled variant input height can be further reduced by rendering the label outside of it."
            }
            code={`<CoreTextField
  hiddenLabel
  id="filled-hidden-label-small"
  defaultValue="Small"
  variant="filled"
  size="small"
/>

<CoreTextField
  hiddenLabel
  id="filled-hidden-label-normal"
  defaultValue="Normal"
  variant="filled"
/>`}
            expandedCode={`import { CoreStack, CoreTextField } from "@wrappid/core";

export default function SizesInputHeightCoreTextField() {
  return (
    <CoreStack
      component="form"
      styleClasses={[CoreClasses.WIDTH.W_50]}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <CoreTextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Small"
        variant="filled"
        size="small"
      />

      <CoreTextField
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="Normal"
        variant="filled"
      />
    </CoreStack>
  );
}`}
            renderElement={
              <>
                <CoreStack
                  component="form"
                  styleClasses={[CoreClasses.WIDTH.W_50]}
                  spacing={2}
                  noValidate
                  autoComplete="off"
                >
                  <CoreTextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    defaultValue="Small"
                    variant="filled"
                    size="small"
                  />

                  <CoreTextField
                    hiddenLabel
                    id="filled-hidden-label-normal"
                    defaultValue="Normal"
                    variant="filled"
                  />
                </CoreStack>
              </>
            }
          />

          <CodeSample
            title={"Margin"}
            description={
              <CoreTypographyBody1>
                The <CodeBlock>margin</CodeBlock> prop can be used to alter the

                vertical spacing of the text field. Using{" "}

                <CodeBlock>none</CodeBlock> (default) doesn

                {"'"}t apply margins to the

                <CodeBlock>FormControl</CodeBlock> whereas

                <CodeBlock>dense</CodeBlock> and

                <CodeBlock>normal</CodeBlock> do.
              </CoreTypographyBody1>
            }
            code={`<CoreStack
  direction="column"
  spacing={2}
  styleClasses={[CoreClasses.WIDTH.W_25, CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.DIRECTION_COLUMN]}
>
  <CustomRedBar />

  <CoreTextField label={"margin="none""} id="margin-none" />

  <CustomRedBar />

  <CoreTextField label={"margin="dense""} id="margin-dense" margin="dense" />

  <CustomRedBar />

  <CoreTextField label={"margin="normal""} id="margin-normal" margin="normal" />

  <CustomRedBar />
</CoreStack>`}
            expandedCode={""}
            renderElement={
              <>
                <CoreBox
                  styleClasses={[CoreClasses.WIDTH.W_50, CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.DIRECTION_COLUMN]}
                >
                  <CustomRedBar />

                  <CoreTextField
                    label={"margin=\"none\""}
                    id="margin-none"
                    styleClasses={[CoreClasses.WIDTH.W_50]}
                  />

                  <CustomRedBar />

                  <CoreTextField
                    styleClasses={[CoreClasses.WIDTH.W_50]}
                    label={"margin=\"dense\""}
                    id="margin-dense"
                    margin="dense"
                  />

                  <CustomRedBar />

                  <CoreTextField
                    styleClasses={[CoreClasses.WIDTH.W_50]}
                    label={"margin=\"normal\""}
                    id="margin-normal"
                    margin="normal"
                  />

                  <CustomRedBar />
                </CoreBox>
              </>
            }
          />

          <CodeSample
            title={"Full width"}
            description={
              <CoreTypographyBody1>
                <CodeBlock>fullWidth</CodeBlock> can be used to make the input
                take up the full width of its container.
              </CoreTypographyBody1>
            }
            code={`<CoreTextField
  fullWidth={true}
  label="fullWidth:true"
  id="fullWidth"
/>

<CoreTextField
  fullWidth={false}
  label="fullWidth:false"
  id="fullWidth"
/>`}
            expandedCode={`import { CoreBox, CoreTextField, CoreTypographyBody1 } from "@wrappid/core";

export default function fullWidthCoreTextField() {
  return (
  <CoreBox
    width={500}
    styleClasses={[CoreClasses.WIDTH.MAX_W_100]}
  >

    <CoreTextField
      fullWidth={true}
      label="fullWidth:true"
      id="fullWidth"
    />

    <CoreTextField
      fullWidth={false}
      label="fullWidth:false"
      id="fullWidth"
    />
  </CoreBox>
  );
}
`}
            renderElement={
              <CoreBox width={500} styleClasses={[CoreClasses.WIDTH.MAX_W_100]}>
                <CoreTextField
                  fullWidth={true}
                  label="fullWidth true"
                  id="fullWidth"
                />

                <CoreTextField
                  fullWidth={false}
                  label="fullWidth false"
                  id="fullWidth"
                />
              </CoreBox>
            }
          />

          <CodeSample
            title={"Uncontrolled vs. Controlled"}
            description={
              <>
                <CoreTypographyBody1>
                  The component can be controlled or uncontrolled
                </CoreTypographyBody1>

                <CoreTypographyBody1>
                  - A component is controlled when it{"'"}s managed by its
                  parent using props.
                </CoreTypographyBody1>

                <CoreTypographyBody1>
                  - A component is uncontrolled when it{"'"}s managed by its own
                  local state.
                </CoreTypographyBody1>
              </>
            }
            code={`<CoreBox
  component="form"
  styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_50]}
  noValidate
  autoComplete="off"
>
  <CoreTextField
    id="outlined-controlled"
    label="Controlled"
    value={name}
    onChange={(event) => {
      setName(event.target.value);
    }}
  />
  <CoreTextField
    id="outlined-uncontrolled"
    label="Uncontrolled"
    defaultValue="We are Contributors"
  />
</CoreBox>`}
            expandedCode={`import { CoreBox, CoreTextField, CoreClasses } from "@wrappid/core";

const [name, setName] = React.useState("We are Wrappiders!");

export default function fullWidthCoreTextField() {
  return (
    <CoreBox
    component="form"
    styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_50]}
    noValidate
    autoComplete="off"
  >
    <CoreTextField
      id="outlined-controlled"
      label="Controlled"
      value={name}
      onChange={(event) => {
        setName(event.target.value);
      }}
    />
    <CoreTextField
      id="outlined-uncontrolled"
      label="Uncontrolled"
      defaultValue="We are Contributors"
    />
  </CoreBox>
  );
}`}
            renderElement={
              <CoreBox
                component="form"
                styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_50]}
                noValidate
                autoComplete="off"
              >
                <CoreTextField
                  id="outlined-controlled"
                  label="Controlled"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />

                <CoreTextField
                  id="outlined-uncontrolled"
                  label="Uncontrolled"
                  defaultValue="We are Contributors"
                />
              </CoreBox>
            }
          />

          <CoreAlert severity="warning">
            Outlined and Filled CoreInput not available.
          </CoreAlert>

          <CodeSample
            title={"Components (NOT WORKING)(MOVE TO CoreInput)"}
            description={
              <>
                <CoreTypographyBody1>
                  CoreTextField is composed of smaller components 
                  (
                  {" "}

                  <CodeBlock>CoreFormControl</CodeBlock>,

                  {" "}

                  <CodeBlock>CoreInput</CodeBlock>,

                  <CodeBlock>CoreFilledInput</CodeBlock>,

                  {" "}

                  <CodeBlock>CoreInputLabel</CodeBlock>,

                  {" "}

                  <CodeBlock>CoreOutlinedInput</CodeBlock>, and

                  {" "}

                  <CodeBlock>CoreFormHelperText</CodeBlock> ) that you can
                  leverage directly to significantly customize your form inputs.
                </CoreTypographyBody1>

                <CoreTypographyBody1>
                  You might also have noticed that some native HTML input
                  properties are missing from the{" "}

                  <CodeBlock>CoreTextField</CodeBlock> component. This is on
                  purpose. The component takes care of the most used properties.

                  Then, it{"'"}s up to the user to use the underlying component

                  shown in the following demo. Still, you can use{" "}

                  <CodeBlock>inputProps</CodeBlock> 
                  (and

                  {" "}

                  <CodeBlock>InputProps</CodeBlock>,

                  {" "}

                  <CodeBlock>InputLabelProps</CodeBlock> properties) if you want
                  to avoid some boilerplate.
                </CoreTypographyBody1>
              </>
            }
            code={`<CoreBox
  component="form"
  noValidate
  autoComplete="off"
  styleClasses={[CoreClasses.WIDTH.W_75]}
>
  <CoreFormControl variant="standard" styleClasses={[CoreClasses.PADDING.PR1]} >
    <CoreInputLabel htmlFor="component-simple" />

    <CoreInput id="component-simple" label={"Name"} variant={"outlined"} defaultValue="Composed TextField" />
  </CoreFormControl>

  <CoreFormControl variant="standard" styleClasses={[CoreClasses.PADDING.PR1]}>
    <CoreInputLabel htmlFor="component-helper">Name</CoreInputLabel>

    <CoreInput
      id="component-helper"
      defaultValue="Composed TextField"
      aria-describedby="component-helper-text"
    />

    <CoreFormHelperText id="component-helper-text">
      Some important helper text
    </CoreFormHelperText>
  </CoreFormControl>

  <CoreFormControl disabled variant="standard" styleClasses={[CoreClasses.PADDING.PR1]}>
    <CoreInputLabel htmlFor="component-disabled">Name</CoreInputLabel>

    <CoreInput id="component-disabled" defaultValue="Composed TextField" />

    <CoreFormHelperText>Disabled</CoreFormHelperText>
  </CoreFormControl>

  <CoreFormControl error variant="standard" styleClasses={[CoreClasses.PADDING.PR1]}>
    <CoreInputLabel htmlFor="component-error">Name</CoreInputLabel>

    <CoreInput
      id="component-error"
      defaultValue="Composed TextField"
      aria-describedby="component-error-text"
    />

    <CoreFormHelperText id="component-error-text">Error</CoreFormHelperText>
  </CoreFormControl>

  <CoreFormControl styleClasses={[CoreClasses.PADDING.PR1]}>
    <CoreInputLabel htmlFor="component-outlined">Name</CoreInputLabel>

    <CoreInput
      variant={"outlined"}
      id="component-outlined"
      defaultValue="Composed TextField"
      label="Name"
    />
  </CoreFormControl>

  <CoreFormControl variant="filled" styleClasses={[CoreClasses.PADDING.PR1]}>
    <CoreInputLabel htmlFor="component-filled">Name</CoreInputLabel>

    <CoreInput variant={"filled"} id="component-filled" defaultValue="Composed TextField" />
  </CoreFormControl>
</CoreBox>`}
            expandedCode={""}
            renderElement={
              <>
                <CoreBox
                  component="form"
                  noValidate
                  autoComplete="off"
                  styleClasses={[CoreClasses.WIDTH.W_75]}
                >
                  <CoreFormControl
                    variant="standard"
                    styleClasses={[CoreClasses.PADDING.PR1]}
                  >
                    <CoreInputLabel
                      shrink={true}
                      shrikhtmlFor="component-simple"
                    />

                    <CoreInput
                      id="component-simple"
                      label={"Name"}
                      variant={"outlined"}
                      defaultValue="Composed TextField"
                    />
                  </CoreFormControl>

                  <CoreFormControl
                    variant="standard"
                    styleClasses={[CoreClasses.PADDING.PR1]}
                  >
                    <CoreInputLabel shrink={true} htmlFor="component-helper">
                      Name
                    </CoreInputLabel>

                    <CoreInput
                      id="component-helper"
                      defaultValue="Composed TextField"
                      aria-describedby="component-helper-text"
                    />

                    <CoreFormHelperText id="component-helper-text">
                      Some important helper text
                    </CoreFormHelperText>
                  </CoreFormControl>

                  <CoreFormControl
                    disabled
                    variant="standard"
                    styleClasses={[CoreClasses.PADDING.PR1]}
                  >
                    <CoreInputLabel shrink={true} htmlFor="component-disabled">
                      Name
                    </CoreInputLabel>

                    <CoreInput
                      id="component-disabled"
                      defaultValue="Composed TextField"
                    />

                    <CoreFormHelperText>Disabled</CoreFormHelperText>
                  </CoreFormControl>

                  <CoreFormControl
                    error
                    variant="standard"
                    styleClasses={[CoreClasses.PADDING.PR1]}
                  >
                    <CoreInputLabel shrink={true} htmlFor="component-error">
                      Name
                    </CoreInputLabel>

                    <CoreInput
                      id="component-error"
                      defaultValue="Composed TextField"
                      aria-describedby="component-error-text"
                    />

                    <CoreFormHelperText id="component-error-text">
                      Error
                    </CoreFormHelperText>
                  </CoreFormControl>

                  <CoreFormControl styleClasses={[CoreClasses.PADDING.PR1]}>
                    <CoreInputLabel shrink={true} htmlFor="component-outlined">
                      Name
                    </CoreInputLabel>

                    <CoreInput
                      variant={"outlined"}
                      id="component-outlined"
                      defaultValue="Composed TextField"
                      label="Name"
                    />
                  </CoreFormControl>

                  <CoreFormControl
                    variant="filled"
                    styleClasses={[CoreClasses.PADDING.PR1]}
                  >
                    <CoreInputLabel shrink={true} htmlFor="component-filled">
                      Name
                    </CoreInputLabel>

                    <CoreInput
                      variant={"filled"}
                      id="component-filled"
                      defaultValue="Composed TextField"
                    />
                  </CoreFormControl>
                </CoreBox>
              </>
            }
          />

          <CodeSample
            title={"Inputs (MOVE TO CoreInput)"}
            description={<CoreTypographyBody1></CoreTypographyBody1>}
            code={"PRE-FORMATTED_CODE_GOES_HERE"}
            renderElement={<></>}
          />

          <CodeSample
            title={"Color"}
            description={
              <CoreTypographyBody1>
                The <CodeBlock>color</CodeBlock> prop changes the highlight
                color of the text field when focused.
              </CoreTypographyBody1>
            }
            code={`<CoreBox
  component="form"
  noValidate
  autoComplete="off"
  styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_75]}
>
  <CoreTextField 
    label="Outlined secondary"
    color="secondary"
    focused
    styleClasses={[CoreClasses.PADDING.PR1]}/>

  <CoreTextField
    label="Filled success"
    variant="filled"
    color="success"
    focused
    styleClasses={[CoreClasses.PADDING.PR1]}/>

  <CoreTextField
    label="Standard warning"
    variant="standard"
    color="warning"
    focused
    styleClasses={[CoreClasses.PADDING.PR1]}
  />
</CoreBox>`}
            expandedCode={`import { CoreBox, CoreTextField, CoreClasses } from "@wrappid/core";

export default function ColorCoreTextField() {
  return (
    <CoreBox
      component="form"
      noValidate
      autoComplete="off"
      styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_75]}
    >
      <CoreTextField
        label="Outlined secondary"
        color="secondary"
        focused
        styleClasses={[CoreClasses.PADDING.PR1]}
      />

      <CoreTextField
        label="Filled success"
        variant="filled"
        color="success"
        focused
        styleClasses={[CoreClasses.PADDING.PR1]}
      />

      <CoreTextField
        label="Standard warning"
        variant="standard"
        color="warning"
        focused
        styleClasses={[CoreClasses.PADDING.PR1]}
      />
    </CoreBox>
  );
}
`}
            renderElement={
              <CoreBox
                component="form"
                noValidate
                autoComplete="off"
                styleClasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W_75]}
              >
                <CoreTextField
                  label="Outlined secondary"
                  color="secondary"
                  focused
                  styleClasses={[CoreClasses.PADDING.PR1]}
                />

                <CoreTextField
                  label="Filled success"
                  variant="filled"
                  color="success"
                  focused
                  styleClasses={[CoreClasses.PADDING.PR1]}
                />

                <CoreTextField
                  label="Standard warning"
                  variant="standard"
                  color="warning"
                  focused
                  styleClasses={[CoreClasses.PADDING.PR1]}
                />
              </CoreBox>
            }
          />

          <CodeSample
            title={"useFormControl (MOVE TO CoreInput)"}
            description={
              <CoreTypographyBody1>
                For advanced customization use cases, a useFormControl() hook is
                exposed. This hook returns the context value of the parent
                FormControl component.
              </CoreTypographyBody1>
            }
            code={"PRE-FORMATTED_CODE_GOES_HERE"}
            renderElement={<></>}
          />

          <CoreH4>Limitations</CoreH4>

          <CodeSample
            title={"Shrink (NOT_DEFINED)"}
            description={
              <>
                <CoreTypographyBody1>
                  {
                    "The input label \"shrink\" state isn't always correct. The input label is supposed to shrink as soon as the input is displaying something. In some circumstances, we can't determine the \"shrink\" state (number input, datetime input, Stripe input). You might notice an overlap."
                  }
                </CoreTypographyBody1>

                <CoreTypographyBody1>
                  {
                    "To workaround the issue, you can force the \"shrink\" state of the label."
                  }
                </CoreTypographyBody1>
              </>
            }
            code={"<CoreTextField InputLabelProps={{ shrink: true }} />"}
            expandedCode={`import { CoreTextField } from "@wrappid/core";

export default function ShrinkCoreTextField() {
  return <CoreTextField InputLabelProps={{ shrink: true }} />;
}`}
            renderElement={
              <>
                <CoreTextField InputLabelProps={{ shrink: true }} />
              </>
            }
          />

          <CodeSample
            title={"Helper Text"}
            description={<CoreTypographyBody1></CoreTypographyBody1>}
            code={`<CoreTextField
  helperText="Please enter your name"
  id="demo-helper-text-misaligned"
  label="Name"
  styleClasses={[CoreClasses.MARGIN.M1]}
/>

<CoreTextField
  id="demo-helper-text-misaligned-no-helper"
  label="Name"
  styleClasses={[CoreClasses.MARGIN.M1]}
/>`}
            expandedCode={`import { CoreTextField, CoreClasses } from "@wrappid/core";

export default function ShrinkCoreTextField() {
  return (
    <>
      <CoreTextField
        helperText="Please enter your name"
        id="demo-helper-text-misaligned"
        label="Name"
        styleClasses={[CoreClasses.MARGIN.M1]}
      />

      <CoreTextField
        id="demo-helper-text-misaligned-no-helper"
        label="Name"
        styleClasses={[CoreClasses.MARGIN.M1]}
      />
    </>
  );
}
`}
            renderElement={
              <CoreBox
                styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}
              >
                <CoreTextField
                  helperText="Please enter your name"
                  id="demo-helper-text-misaligned"
                  label="Name"
                  styleClasses={[CoreClasses.MARGIN.M1]}
                />

                <CoreTextField
                  id="demo-helper-text-misaligned-no-helper"
                  label="Name"
                  styleClasses={[CoreClasses.MARGIN.M1]}
                />
              </CoreBox>
            }
          />
        </>
      }
    />
  );
}
