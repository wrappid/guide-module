# `Wrappid` Module Boilerplate
```
                                    _     _
    __      ___ __ __ _ _ __  _ __ (_) __| |
    \ \ /\ / / '__/ _` | '_ \| '_ \| |/ _` |
     \ V  V /| | | (_| | |_) | |_) | | (_| |
      \_/\_/ |_|  \__,_| .__/| .__/|_|\__,_|
                       |_|   |_|

```
## 1. Introduction   

This is a **module boilerplate** to build wrappid modules which serves specific technical needs or business specific needs.

## Getting Started
This getting started section will help you setup a basic module built using the `Wrappid` framework Wrappid Projects. Follow the below steps to get going.   

2.1. [Verify Pre-requisites]()   
2.2. [Initialize a module `wrappid-module`]()   
2.3 Include or exclude a wrappid-module from `wrappid-[app|service]`

#### 4.3.1. Initialize a wrappid-module
Run the below command to create Module Wrappid Project

```terminal
wrappid init module <wrappid>
```

**Output:**  
![wrappid-module](https://github.com/wrappid/.github/assets/61864488/fc0f4866-43d5-4e3a-92a6-7b3e0aa768ab)


Now you have a `<wrappid-module>` Module Wrappid Project at the directory the command was executed from.

#### 4.3.2. Include or exclude a wrappid-module from `wrappid-[app|service]`

> **_Note:_** _You cannot setup or start a wrappid-module project like wrappid-app and wrappid-service._   

To use Wrappid module projects

- You need to `include` the module into your `wrappid-[app|service]`, from inside of the root of `wrappid-[app|service]`.
- Your module must be located in the parent directory of  `wrappid-[app|service]` project.
- Your `wrappid-[app|service]` should be setup.

Run the below command from the root of the `wrappid-[app|service]` project you wish to include your module.
```terminal
cd wrappid-[app|service]
wrappid include <module-name>
```

Make sure to not write `-module` following your <module-name>

Similarly, to exclude a module from your `wrappid-[app|service]`, run the below command.
```terminal
wrappid exclude <module>-name
```

Make sure to not write `-module` following your <module-name>

Wrappid modules are hot swappable, you can `include` and `exclude` a module while `wrappid-[app|service]` is running.
