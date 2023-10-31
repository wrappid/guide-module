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
  CoreAlert
} from "@wrappid/core";

import CodeBlock from "../../CodeBlock";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

// import React from "react";
export default function CoreTextFieldDocs() {
  // const [showPassword, setShowPassword] = React.useState(false);

  // const handleClickShowPassword = () => setShowPassword((show) => !show);

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };
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

  function RedBar() {
    return (
      <CoreStack
        direction="row"
        spacing={2}
        // sx={{
        //   backgroundColor: (theme) =>
        //     theme.palette.mode === "light"
        //       ? "rgba(255, 0, 0, 0.1)"
        //       : "rgb(255 132 132 / 25%)",
        //   height: 20,
        // }}
        styleCLasses={[CoreClasses.HEIGHT.H25, CoreClasses.BG.BG_ERROR_LIGHT]}
      />
    );
  }
  
  return (
    <>
      <CoreH4>CoreTextField</CoreH4>

      <CoreTypographyBody1>
        Text fields allow users to enter text into a UI. They typically appear
        in forms and dialogs.
      </CoreTypographyBody1>

      <CodeSample
        title={"Basic TextField"}
        description={
          <CoreTypographyBody1>
            The <CodeBlock>TextField</CodeBlock> wrapper component is a complete
            form control including a label, input, and help text. It comes with
            three variants: outlined (default), filled, and standard.
          </CoreTypographyBody1>
        }
        code={`<CoreBox
component="form"
styleCLasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W25]}
noValidate
autoComplete="off"
>
<CoreTextField id="outlined-basic" label="Outlined" variant="outlined" />

<CoreTextField id="filled-basic" label="Filled" variant="filled" />

<CoreTextField id="standard-basic" label="Standard" variant="standard" />
</CoreBox>`}
        renderElement={
          <>
            <CoreBox
              component="form"
              styleCLasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W25]}
              noValidate
              autoComplete="off"
            >
              <CoreTextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />

              <CoreTextField
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

            <CodeBlock>required</CodeBlock>, <CodeBlock>disabled</CodeBlock>,{" "}

            <CodeBlock>type</CodeBlock>, etc. as well as a{" "}

            <CodeBlock>helperText</CodeBlock> which is used to give context

            about a field{"'"}s input, such as how the input will be used.
          </CoreTypographyBody1>
        }
        code={`<CoreStack
direction="column"
component="form"
spacing={2}
styleCLasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W25, CoreClasses.PADDING.P3]}
noValidate
autoComplete="off"
>
<CoreBox direction="column">
  <CoreTextField
    required
    id="outlined-required"
    label="Required"
    defaultValue="Hello World"
  />

  <CoreTextField
    disabled
    id="outlined-disabled"
    label="Disabled"
    defaultValue="Hello World"
  />

  <CoreTextField
    id="outlined-password-input"
    label="Password"
    type="password"
    autoComplete="current-password"
  />

  <CoreTextField
    id="outlined-read-only-input"
    label="Read Only"
    defaultValue="Hello World"
    InputProps={{ readOnly: true }}
  />

  <CoreTextField
    id="outlined-number"
    label="Number"
    type="number"
    InputLabelProps={{ shrink: true }}
  />

  <CoreTextField
    id="outlined-search"
    label="Search field"
    type="search"
  />

  <CoreTextField
    id="outlined-helperText"
    label="Helper text"
    defaultValue="Default Value"
    helperText="Some important text"
  />
</CoreBox>

<CoreBox direction="column">
  <CoreTextField
    required
    id="filled-required"
    label="Required"
    defaultValue="Hello World"
    variant="filled"
  />

  <CoreTextField
    disabled
    id="filled-disabled"
    label="Disabled"
    defaultValue="Hello World"
    variant="filled"
  />

  <CoreTextField
    id="filled-password-input"
    label="Password"
    type="password"
    autoComplete="current-password"
    variant="filled"
  />

  <CoreTextField
    id="filled-read-only-input"
    label="Read Only"
    defaultValue="Hello World"
    InputProps={{ readOnly: true }}
    variant="filled"
  />

  <CoreTextField
    id="filled-number"
    label="Number"
    type="number"
    InputLabelProps={{ shrink: true }}
    variant="filled"
  />

  <CoreTextField
    id="filled-search"
    label="Search field"
    type="search"
    variant="filled"
  />

  <CoreTextField
    id="filled-helperText"
    label="Helper text"
    defaultValue="Default Value"
    helperText="Some important text"
    variant="filled"
  />
</CoreBox>

<CoreBox direction="column">
  <CoreTextField
    required
    id="standard-required"
    label="Required"
    defaultValue="Hello World"
    variant="standard"
  />

  <CoreTextField
    disabled
    id="standard-disabled"
    label="Disabled"
    defaultValue="Hello World"
    variant="standard"
  />

  <CoreTextField
    id="standard-password-input"
    label="Password"
    type="password"
    autoComplete="current-password"
    variant="standard"
  />

  <CoreTextField
    id="standard-read-only-input"
    label="Read Only"
    defaultValue="Hello World"
    InputProps={{ readOnly: true }}
    variant="standard"
  />

  <CoreTextField
    id="standard-number"
    label="Number"
    type="number"
    InputLabelProps={{ shrink: true }}
    variant="standard"
  />

  <CoreTextField
    id="standard-search"
    label="Search field"
    type="search"
    variant="standard"
  />

  <CoreTextField
    id="standard-helperText"
    label="Helper text"
    defaultValue="Default Value"
    helperText="Some important text"
    variant="standard"
  />
</CoreBox>
</CoreStack>`}
        renderElement={
          <>
            <CoreStack
              direction="column"
              component="form"
              spacing={2}
              styleCLasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W25, CoreClasses.PADDING.P3]}
              // sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
              noValidate
              autoComplete="off"
            >
              <CoreBox direction="column">
                <CoreTextField
                  required
                  id="outlined-required"
                  label="Required"
                  defaultValue="Hello World"
                />

                <CoreTextField
                  disabled
                  id="outlined-disabled"
                  label="Disabled"
                  defaultValue="Hello World"
                />

                <CoreTextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                />

                <CoreTextField
                  id="outlined-read-only-input"
                  label="Read Only"
                  defaultValue="Hello World"
                  InputProps={{ readOnly: true }}
                />

                <CoreTextField
                  id="outlined-number"
                  label="Number"
                  type="number"
                  InputLabelProps={{ shrink: true }}
                />

                <CoreTextField
                  id="outlined-search"
                  label="Search field"
                  type="search"
                />

                <CoreTextField
                  id="outlined-helperText"
                  label="Helper text"
                  defaultValue="Default Value"
                  helperText="Some important text"
                />
              </CoreBox>

              <CoreBox direction="column">
                <CoreTextField
                  required
                  id="filled-required"
                  label="Required"
                  defaultValue="Hello World"
                  variant="filled"
                />

                <CoreTextField
                  disabled
                  id="filled-disabled"
                  label="Disabled"
                  defaultValue="Hello World"
                  variant="filled"
                />

                <CoreTextField
                  id="filled-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="filled"
                />

                <CoreTextField
                  id="filled-read-only-input"
                  label="Read Only"
                  defaultValue="Hello World"
                  InputProps={{ readOnly: true }}
                  variant="filled"
                />

                <CoreTextField
                  id="filled-number"
                  label="Number"
                  type="number"
                  InputLabelProps={{ shrink: true }}
                  variant="filled"
                />

                <CoreTextField
                  id="filled-search"
                  label="Search field"
                  type="search"
                  variant="filled"
                />

                <CoreTextField
                  id="filled-helperText"
                  label="Helper text"
                  defaultValue="Default Value"
                  helperText="Some important text"
                  variant="filled"
                />
              </CoreBox>

              <CoreBox direction="column">
                <CoreTextField
                  required
                  id="standard-required"
                  label="Required"
                  defaultValue="Hello World"
                  variant="standard"
                />

                <CoreTextField
                  disabled
                  id="standard-disabled"
                  label="Disabled"
                  defaultValue="Hello World"
                  variant="standard"
                />

                <CoreTextField
                  id="standard-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="standard"
                />

                <CoreTextField
                  id="standard-read-only-input"
                  label="Read Only"
                  defaultValue="Hello World"
                  InputProps={{ readOnly: true }}
                  variant="standard"
                />

                <CoreTextField
                  id="standard-number"
                  label="Number"
                  type="number"
                  InputLabelProps={{ shrink: true }}
                  variant="standard"
                />

                <CoreTextField
                  id="standard-search"
                  label="Search field"
                  type="search"
                  variant="standard"
                />

                <CoreTextField
                  id="standard-helperText"
                  label="Helper text"
                  defaultValue="Default Value"
                  helperText="Some important text"
                  variant="standard"
                />
              </CoreBox>
            </CoreStack>
          </>
        }
      />

      <CodeSample
        title={"Validation"}
        description={
          <CoreTypographyBody1>
            The <CodeBlock>error</CodeBlock> prop toggles the error state. The{" "}

            <CodeBlock>helperText</CodeBlock> prop can then be used to provide
            feedback to the user about the error.
          </CoreTypographyBody1>
        }
        code={`<CoreStack
  component="form"
  direction="column"
  styleCLasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W25]}
  noValidate
  autoComplete="off"
>
  <CoreBox direction="column">
    <CoreTextField
      error
      id="outlined-error"
      label="Error"
      defaultValue="Hello World"
    />

    <CoreTextField
      error
      id="outlined-error-helper-text"
      label="Error"
      defaultValue="Hello World"
      helperText="Incorrect entry."
    />
  </CoreBox>

  <CoreBox direction="column">
    <CoreTextField
      error
      id="filled-error"
      label="Error"
      defaultValue="Hello World"
      variant="filled"
    />

    <CoreTextField
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
      error
      id="standard-error"
      label="Error"
      defaultValue="Hello World"
      variant="standard"
    />

    <CoreTextField
      error
      id="standard-error-helper-text"
      label="Error"
      defaultValue="Hello World"
      helperText="Incorrect entry."
      variant="standard"
    />
  </CoreBox>
</CoreStack>`}
        renderElement={
          <>
            <CoreStack
              component="form"
              direction="column"
              styleCLasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W25]}
              // sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
              noValidate
              autoComplete="off"
            >
              <CoreBox direction="column">
                <CoreTextField
                  error
                  id="outlined-error"
                  label="Error"
                  defaultValue="Hello World"
                />

                <CoreTextField
                  error
                  id="outlined-error-helper-text"
                  label="Error"
                  defaultValue="Hello World"
                  helperText="Incorrect entry."
                />
              </CoreBox>

              <CoreBox direction="column">
                <CoreTextField
                  error
                  id="filled-error"
                  label="Error"
                  defaultValue="Hello World"
                  variant="filled"
                />

                <CoreTextField
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
                  error
                  id="standard-error"
                  label="Error"
                  defaultValue="Hello World"
                  variant="standard"
                />

                <CoreTextField
                  error
                  id="standard-error-helper-text"
                  label="Error"
                  defaultValue="Hello World"
                  helperText="Incorrect entry."
                  variant="standard"
                />
              </CoreBox>
            </CoreStack>
          </>
        }
      />

      <CodeSample
        title={"Multiline"}
        description={
          <CoreTypographyBody1>
            The <CodeBlock>multiline</CodeBlock> prop transforms the text field

            into a TextareaAutosize element. Unless the{" "}

            <CodeBlock>rows</CodeBlock> prop is set, the height of the text
            field dynamically matches its content (using TextareaAutosize). You

            can use the <CodeBlock>minRows</CodeBlock> and{" "}

            <CodeBlock>maxRows</CodeBlock> props to bound it.
          </CoreTypographyBody1>
        }
        code={`<CoreStack
  component="form"
  direction="column"
  spacing={2}
  styleCLasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W25]}
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
        renderElement={
          <>
            <CoreStack
              component="form"
              direction="column"
              spacing={2}
              styleCLasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W25]}
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
        title={"Select (NOT_DEFINED)"}
        description={
          <CoreTypographyBody1>
            The <CodeBlock>select</CodeBlock> prop makes the text field use the
            Select component internally.
          </CoreTypographyBody1>
        }
        code={`<CoreStack
  direction="column"
  spacing={2}
  styleCLasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W25]}
  component="form"
  noValidate
  autoComplete="off"
>
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
</CoreStack>   `}
        renderElement={
          <>
            <CoreStack
              direction="column"
              spacing={2}
              styleCLasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W25]}
              component="form"
              // sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
              noValidate
              autoComplete="off"
            >
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

      <CoreAlert severity="error">
        Icons Error: "With a start adornment" Should be at suffix{" "}
      </CoreAlert>

      <CodeSample
        title={"Icons"}
        description={
          <CoreTypographyBody1>
            There are multiple ways to display an icon with a text field.
          </CoreTypographyBody1>
        }
        code={`<CoreStack styleCLasses={[CoreClasses.MARGIN.M1]}>
    <CoreFormControl variant="standard">
      <CoreInputLabel htmlFor="input-with-icon-adornment">
With a start adornment
      </CoreInputLabel>

      <CoreInput
        id="input-with-icon-adornment"
        startAdornment={
          <CoreInputAdornment position="start">
            <CoreIcon icon="account_circle"/>
          </CoreInputAdornment>
        }
      />
    </CoreFormControl>

    <CoreTextField
      id="input-with-icon-textfield"
      label="TextField"
      InputProps={{
        startAdornment: (
          <CoreInputAdornment position="start" ><CoreIcon icon="account_circle"/></CoreInputAdornment>
        ),
      }}
      variant="standard"
    />

    {/* <CoreStack direction="row" styleCLasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_END, CoreClasses.DISPLAY.FLEX]} sx={{ alignItems: "flex-end", display: "flex" }}> */}
    {/* <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} /> */}

    {/* <CoreIcon icon="account_circle" styleCLasses={[CoreClasses.MARGIN.MR1, CoreClasses.MARGIN.MY1]} /> */}

    {/* <CoreTextField id="input-with-sx" label="With sx" variant="standard" /> */}
    {/* </CoreStack> */}
  </CoreStack>`}
        renderElement={
          <>
            <CoreStack styleCLasses={[CoreClasses.MARGIN.M1]}>
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

              {/* <CoreStack direction="row" styleCLasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_END, CoreClasses.DISPLAY.FLEX]} sx={{ alignItems: "flex-end", display: "flex" }}> */}
              {/* <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} /> */}

              {/* <CoreIcon icon="account_circle" styleCLasses={[CoreClasses.MARGIN.MR1, CoreClasses.MARGIN.MY1]} /> */}

              {/* <CoreTextField id="input-with-sx" label="With sx" variant="standard" /> */}
              {/* </CoreStack> */}
            </CoreStack>
          </>
        }
      />

      <CodeSample
        title={"Input Adornments (NOT_IMPLEMENTED)"}
        description={
          <CoreTypographyBody1>
            The main way is with an <CodeBlock>CoreInputAdornment</CodeBlock>.
            This can be used to add a prefix, a suffix, or an action to an
            input. For instance, you can use an icon button to hide or reveal
            the password.
          </CoreTypographyBody1>
        }
        code={`<CoreStack
  direction="column"
  spacing={2}
  styleCLasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.FLEX_WRAP_WRAP]}
  // sx={{ display: "flex", flexWrap: "wrap" }}
>
  <CoreStack direction="row" spacing={2}>
    <CoreTextField
      label="With normal TextField"
      id="outlined-start-adornment"
      styleCLasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W25]}
      // styleCLasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W25]}
      InputProps={{ startAdornment: <CoreInputAdornment position="start">kg</CoreInputAdornment> }}
    />

    <CoreFormControl styleCLasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W25]} variant="outlined">
      <CoreOutlinedInput
        id="outlined-adornment-weight"
        endAdornment={<CoreInputAdornment position="end">kg</CoreInputAdornment>}
        aria-describedby="outlined-weight-helper-text"
        inputProps={{ "aria-label": "weight" }}
      />

      <CoreFormHelperText id="outlined-weight-helper-text">Weight</CoreFormHelperText>
    </CoreFormControl>

    <CoreFormControl styleCLasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W25]} variant="outlined">
      <CoreInputLabel htmlFor="outlined-adornment-password">Password</CoreInputLabel>

      <CoreOutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        endAdornment={
          <CoreInputAdornment position="end">
            <CoreIconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? "visibility_off" : "visibility"}
            </CoreIconButton>
          </CoreInputAdornment>
        }
        label="Password"
      />
    </CoreFormControl>

    <CoreFormControl fullWidth styleCLasses={[CoreClasses.MARGIN.M1]}>
      <CoreInputLabel htmlFor="outlined-adornment-amount">Amount</CoreInputLabel>

      <CoreOutlinedInput
        id="outlined-adornment-amount"
        startAdornment={<CoreInputAdornment position="start">$</CoreInputAdornment>}
        label="Amount"
      />
    </CoreFormControl>
  </CoreStack>

  <CoreStack direction="row" spacing={2}>
    <CoreTextField
      label="With normal TextField"
      id="filled-start-adornment"
      // styleCLasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W25]}
      styleCLasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W25]}
      InputProps={{ startAdornment: <CoreInputAdornment position="start">kg</CoreInputAdornment> }}
      variant="filled"
    />

    <CoreFormControl styleCLasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W25]} variant="filled">
      <CoreFilledInput
        id="filled-adornment-weight"
        endAdornment={<CoreInputAdornment position="end">kg</CoreInputAdornment>}
        aria-describedby="filled-weight-helper-text"
        inputProps={{ "aria-label": "weight" }}
      />

      <CoreFormHelperText id="filled-weight-helper-text">Weight</CoreFormHelperText>
    </CoreFormControl>

    <CoreFormControl styleCLasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W25]} variant="filled">
      <CoreInputLabel htmlFor="filled-adornment-password">Password</CoreInputLabel>

      <CoreFilledInput
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
              {showPassword ? "visibility_off" : "visibility" }
            </CoreIconButton>
          </CoreInputAdornment>
        }
      />
    </CoreFormControl>

    <CoreFormControl fullWidth styleCLasses={[CoreClasses.MARGIN.M1]} variant="filled">
      <CoreInputLabel htmlFor="filled-adornment-amount">Amount</CoreInputLabel>

      <CoreFilledInput
        id="filled-adornment-amount"
        startAdornment={<CoreInputAdornment position="start">$</CoreInputAdornment>}
      />
    </CoreFormControl>
  </CoreStack>

  <CoreStack direction="row" spacing={2}>
    <CoreTextField
      label="With normal TextField"
      id="standard-start-adornment"
      styleCLasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W25]}
      InputProps={{ startAdornment: <CoreInputAdornment position="start">kg</CoreInputAdornment> }}
      variant="standard"
    />

    <CoreFormControl variant="standard" styleCLasses={[CoreClasses.MARGIN.M1, CoreClasses.MARGIN.MT3, CoreClasses.WIDTH.W25]}>
      <CoreInput
        id="standard-adornment-weight"
        endAdornment={<CoreInputAdornment position="end">kg</CoreInputAdornment>}
        aria-describedby="standard-weight-helper-text"
        inputProps={{ "aria-label": "weight" }}
      />

      <CoreFormHelperText id="standard-weight-helper-text">Weight</CoreFormHelperText>
    </CoreFormControl>

    <CoreFormControl styleCLasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W25]} variant="standard">
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
              {showPassword ? "visibilityoff" : "visibility" }
            </CoreIconButton>
          </CoreInputAdornment>
        }
      />
    </CoreFormControl>

    <CoreFormControl fullWidth styleCLasses={[CoreClasses.MARGIN.M1]} variant="standard">
      <CoreInputLabel htmlFor="standard-adornment-amount">Amount</CoreInputLabel>

      <CoreInput
        id="standard-adornment-amount"
        startAdornment={<CoreInputAdornment position="start">$</CoreInputAdornment>}
      />
    </CoreFormControl>
  </CoreStack>
</CoreStack>`}
        renderElement={<></>}
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
        code={`            <CoreStack
        direction="column"
        spacing={2}
        component="form"
        styleCLasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W25]}
        noValidate
        autoComplete="off"
      >
        <CoreStack
          direction="row"
          spacing={2}>
          <CoreTextField
            label="Size"
            id="outlined-size-small"
            defaultValue="Small"
            size="small"
          />

          <CoreTextField label="Size" id="outlined-size-normal" defaultValue="Normal" />
        </CoreStack>

        <CoreStack
          direction="row"
          spacing={2}>
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

        <CoreStack
          direction="row"
          spacing={2}>
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
        renderElement={
          <>
            <CoreStack
              direction="column"
              spacing={2}
              component="form"
              // sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
              styleCLasses={[CoreClasses.MARGIN.M1, CoreClasses.WIDTH.W25]}
              noValidate
              autoComplete="off"
            >
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
          </>
        }
      />

      <CodeSample
        title={"TITLE_NOT_DEFINED"}
        description={"The filled variant input height can be further reduced by rendering the label outside of it."}
        code={`<CoreStack
  component="form"
  styleCLasses={[CoreClasses.WIDTH.W25]}
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
</CoreStack>`}
        renderElement={
          <>
            <CoreStack
              component="form"
              // sx={{ width: "25ch" }}
              styleCLasses={[CoreClasses.WIDTH.W25]}
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

      <CoreAlert severity="warning">Margin Warning: Bar Not showing (RedBar Custom function)</CoreAlert>

      <CodeSample
        title={"Margin"}
        description={
          <CoreTypographyBody1>
            The <CodeBlock>argin</CodeBlock> prop can be used to alter the

            vertical spacing of the text field. Using{" "}

            <CodeBlock>none</CodeBlock> (default) doesn{"'"}t apply margins to

            the <CodeBlock>FormControl</CodeBlock> whereas{" "}

            <CodeBlock>dense</CodeBlock> and <CodeBlock>normal</CodeBlock> do.
          </CoreTypographyBody1>
        }
        code={`<CoreStack
  direction="column"
  spacing={2}
  styleCLasses={[CoreClasses.WIDTH.W25, CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.DIRECTION_COLUMN]}
>
  <RedBar />

  <CoreTextField label={"margin=\"none\""} id="margin-none" />

  <RedBar />

  <CoreTextField label={"margin=\"dense\""} id="margin-dense" margin="dense" />

  <RedBar />

  <CoreTextField label={"margin=\"normal\""} id="margin-normal" margin="normal" />

  <RedBar />
</CoreStack>`}
        renderElement={
          <>
            <CoreStack
              // sx={{
              //   "& .MuiTextField-root": { width: "25ch" },
              //   display               : "flex",
              //   flexDirection         : "column",
              // }}
              direction="column"
              spacing={2}
              styleCLasses={[CoreClasses.WIDTH.W25, CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.DIRECTION_COLUMN]}
            >
              <RedBar />

              <CoreTextField label={"margin=\"none\""} id="margin-none" />

              <RedBar />

              <CoreTextField label={"margin=\"dense\""} id="margin-dense" margin="dense" />

              <RedBar />

              <CoreTextField label={"margin=\"normal\""} id="margin-normal" margin="normal" />

              <RedBar />
            </CoreStack>
          </>
        }
      />

      <CodeSample
        title={"Full width (NOT_DEFINED)"}
        description={
          <CoreTypographyBody1>
            <CodeBlock>fullWidth</CodeBlock> can be used to make the input take
            up the full width of its container.
          </CoreTypographyBody1>
        }
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={
          <>
            <CoreBox
              // sx={{
              //   maxWidth: "100%",
              //   width   : 500,
              // }}
              styleCLasses={[CoreClasses.WIDTH.W]}
            >
              <CoreTextField fullWidth label="fullWidth" id="fullWidth" />
            </CoreBox>
          </>}
      />

      <CodeSample
        title={"Uncontrolled vs. Controlled (NOT_DEFINED)"}
        description={
          <>
            <CoreTypographyBody1>
              The component can be controlled or uncontrolled
            </CoreTypographyBody1>

            <CoreTypographyBody1>
              - A component is controlled when it{"'"}s managed by its parent
              using props.
            </CoreTypographyBody1>

            <CoreTypographyBody1>
              - A component is uncontrolled when it{"'"}s managed by its own
              local state.
            </CoreTypographyBody1>
          </>
        }
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Components (NOT_DEFINED)"}
        description={
          <>
            <CoreTypographyBody1>
              <CodeBlock>CoreTextField</CodeBlock> is composed of smaller

              components ( <CodeBlock>FormControl</CodeBlock>,{" "}

              <CodeBlock>Input</CodeBlock>,<CodeBlock>FilledInput</CodeBlock>,{" "}

              <CodeBlock>InputLabel</CodeBlock>,{" "}

              <CodeBlock>OutlinedInput</CodeBlock>, and{" "}

              <CodeBlock>FormHelperText</CodeBlock> ) that you can leverage
              directly to significantly customize your form inputs.
            </CoreTypographyBody1>

            <CoreTypographyBody1>
              You might also have noticed that some native HTML input properties
              are missing from the <CodeBlock>CoreTextField</CodeBlock>{" "}
              component. This is on purpose. The component takes care of the

              most used properties. Then, it{"'"}s up to the user to use the
              underlying component shown in the following demo. Still, you can

              use <CodeBlock>inputProps</CodeBlock> (and{" "}

              <CodeBlock>InputProps</CodeBlock>,{" "}

              <CodeBlock>InputLabelProps</CodeBlock> properties) if you want to
              avoid some boilerplate.
            </CoreTypographyBody1>
          </>
        }
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Inputs (NOT_DEFINED)"}
        description={<CoreTypographyBody1></CoreTypographyBody1>}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Color (NOT_DEFINED)"}
        description={
          <CoreTypographyBody1>
            The <CodeBlock>color</CodeBlock> prop changes the highlight color of
            the text field when focused.
          </CoreTypographyBody1>
        }
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CoreH4>Customization</CoreH4>

      <CoreTypographyBody1>
        Here are some examples of customizing the component.{" "}
      </CoreTypographyBody1>

      <CodeSample
        title={"Using the styled API (NOT_DEFINED)"}
        description={
          <CoreTypographyBody1>
            Here are some examples of customizing the component.
          </CoreTypographyBody1>
        }
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"Using the theme style overrides API (NOT_DEFINED)"}
        description={
          <CoreTypographyBody1>
            Use the <CodeBlock>styleOverrides</CodeBlock> key to change any
            style injected by Material UI into the DOM
          </CoreTypographyBody1>
        }
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"useFormControl (NOT_DEFINED)"}
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
              The input label "shrink" state isn't always correct. The input
              label is supposed to shrink as soon as the input is displaying
              something. In some circumstances, we can't determine the "shrink"
              state (number input, datetime input, Stripe input). You might
              notice an overlap.
            </CoreTypographyBody1>

            <CoreTypographyBody1>
              To workaround the issue, you can force the "shrink" state of the
              label.
            </CoreTypographyBody1>
          </>
        }
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"TITLE_OF_THE_SAMPLE"}
        description={<CoreTypographyBody1></CoreTypographyBody1>}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"TITLE_OF_THE_SAMPLE"}
        description={<CoreTypographyBody1></CoreTypographyBody1>}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"TITLE_OF_THE_SAMPLE"}
        description={<CoreTypographyBody1></CoreTypographyBody1>}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"TITLE_OF_THE_SAMPLE"}
        description={<CoreTypographyBody1></CoreTypographyBody1>}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"TITLE_OF_THE_SAMPLE"}
        description={<CoreTypographyBody1></CoreTypographyBody1>}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <CodeSample
        title={"TITLE_OF_THE_SAMPLE"}
        description={<CoreTypographyBody1></CoreTypographyBody1>}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<></>}
      />

      <ComponentProps component={CoreTextField} />
    </>
  );
}
