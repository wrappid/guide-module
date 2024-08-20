# Guide Module - `Wrappid` Module
```
                                    _     _
    __      ___ __ __ _ _ __  _ __ (_) __| |
    \ \ /\ / / '__/ _` | '_ \| '_ \| |/ _` |
     \ V  V /| | | (_| | |_) | |_) | | (_| |
      \_/\_/ |_|  \__,_| .__/| .__/|_|\__,_|
                       |_|   |_|

```

**This is a guide module which provide developer documentation.**

- [Guide Module - `Wrappid` Module](#guide-module---wrappid-module)
  - [1. Introduction](#1-introduction)
  - [2. Documentation Guide](#2-documentation-guide)
    - [2.1 Styles Documentation Guide](#21-styles-documentation-guide)
    - [2.1 Component Documentation Guide](#21-component-documentation-guide)
  - [3 How to Use Modules?](#3-how-to-use-modules)
    - [3.1 Include module in `wrappid-app`](#31-include-module-in-wrappid-app)
    - [3.2 Exclude module from `wrappid-app`](#32-exclude-module-from-wrappid-app)

## 1. Introduction   

This is a guide module created by the `Wrappid` framework's `wrappid-module` template. This module will help you understand the usage of the wrappid's components and styles etc.

## 2. Documentation Guide

This Documentation Guide section will help you to write documentation for wrappid users in guide module.
Follow the below steps to start your contribution through documentation.   

### 2.1 Styles Documentation Guide

The documentation guide for styles usage will be provided by @samhere17 soon.

### 2.1 Component Documentation Guide

This section will help you write documentation for core components with ease.
Follow the below steps to write proper documentation:
> eg. Let us write it for CoreComponent
1. Create the `CoreComponent.docs.js` in the folder(in guide-module) same as it present in [`@wrappid/core`]('//github.com/wrappid/core') package.
2. Then add the file reference in the `DocsRegistry.js` available in the following location:
   ```
   app\components\component-docs\DocsRegistry.js
   ```
3. Inside your newly created file `CoreComponent.docs.js` add the following snippet as per your requirements:
   ```
   import { ...(related components) } from "@wrappid/core";

   import CodeSample from "../../CodeSample";
   import ComponentDocs from "../ComponentDocs";

   export default function CoreComponentDocs() {
     return (
       <ComponentDocs
         component={CoreComponent}
         description="Please provide your component description to describe what is it used for."
         samples={
           <>
              <CodeSample
                title={"Please provide the title within 4 words max"}
                description={"Please provide description about this code sample within 1000 characters."}
                code={`
    <CoreComponent {...(related props)} />
                `}
                expandedCode={`
    import {CoreComponent} from '@wrappid/core';

    function TestCoreComponent() {
      (... state, hooks and custom functions can go here)
      return <CoreComponent {...(related props)} />;
    }
                `}
                renderElement={
                  <CoreComponent {...(related props)} />
                }
              />
           </>
         }
       />
     )
   }
   ```
4. Include guide module in your project and test how it looks.
5. Follow the [wrappid contribution guideline](https://github.com/wrappid/.github/blob/main/profile/CONTRIBUTING.md) to share your contribution with the wrappid community.

## 3 How to Use Modules?

### 3.1 Include module in `wrappid-app`

> **_Note:_** _You cannot setup or start a wrappid-module project like wrappid-app._   

To use Wrappid module projects

- You need to `include` the module into your `wrappid-app`, from inside of the root of `wrappid-app`.   
- Your module must be located in the parent directory of  `wrappid-app` project.   
- Your `wrappid-app` should be setup.   

Run the below command from the root of the `wrappid-app` project you wish to include your module.   

```terminal
cd wrappid-app
wrappid include <module-name>
```

Wrappid modules are hot swappable, you can `include` and `exclude` a module while `wrappid-app` is running.



### 3.2 Exclude module from `wrappid-app`   
To exclude a wrappid module

- You need to be inside at the root of `wrappid-app`,
- Your module must be located in the parent directory of  `wrappid-app` project.
- Your `wrappid-app` should be setup.

Run the below command from the root of the `wrappid-app` project you wish to exclude your module.

```terminal
wrappid exclude <module-name>
```

Make sure to not write `-module` following your <module-name>
<br />
Wrappid modules are hot swappable, you can `include` and `exclude` a module while `wrappid-app` is running.



Then put an import of your code's function in components.registry.js
```js
import portfolioPage from "./components/portfolioPage"

//Add component page object   
export default function ComponentRegistry
{
PortfolioPage: {comp: portfolioPage}
}
```

To know more about frontend wrappid app, [click here](https://github.com/wrappid/wrappid-app)
