## Node 6 bug reduced reproduction

Reproduction repo of a Windows Node 6 regression with requiring a native extension. If an extension is loaded twice by two different path i.e. a virtual drive via `subst`, the require errors.

## Requirements

- Node 6
- Windows

## To reproduce this locally

```
mkdir c:\projects
cd c:\projects
git clone https://github.com/xzyfer/node-6-native-ext-bug.git
cd node-6-native-ext-bug
subst s: c:\
npm test
```

## Results

```
requiring C:\projects\node_modules\node-6-native-ext-bug\node_modules\buffertools\build\Release\buffertools.node
requiring s:\projects\node_modules\node-6-native-ext-bug\node_modules\buffertools\build\Release\buffertools.node
Error: Module did not self-register.
    at Error (native)
    at Object.Module._extensions..node (module.js:568:18)
    at Module.load (module.js:456:32)
    at tryModuleLoad (module.js:415:12)
    at Function.Module._load (module.js:407:3)
    at Module.require (module.js:466:17)
    at require (internal/module.js:20:19)
    at Context.<anonymous> (C:\projects\node_modules\node-6-native-ext-bug\test.js:16:7)

```

You can see an example of this error in [AppVeyor](https://ci.appveyor.com/project/xzyfer/node-6-native-ext-bug/build/job/y8omliml5q5ri6f2)