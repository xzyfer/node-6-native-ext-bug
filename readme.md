## Node 6 bug reduced reproduction

I've noticed a minor breaking change in either `child_process.spawn` or `path.resolve` (currently unclear), on Windows with Node 6. This issue appears to crop up when a Node file is execute from a `SUBST` path.

## Summary

Executing a Node file on a "virtual" drive, which then spawn's a `node` child process with a file also on the "virtual" drive. The child process executes the file at it's "real" location.

This was not the case prior to Node 6.

This alone isn't a big problem. However when `path.resolve` is run in the child process the resolved path is on the virtual drive.

This becomes an issue when entry file of child process and the `path.resolve`'d file but require a native extension. This, as expected, causes `Error: Module did not self-register.`.

## Requirements

- Node 6
- Windows

## To reproduce this locally

```
mkdir c:\projects
cd c:\projects
git clone https://github.com/xzyfer/node-6-native-ext-bug.git
cd node-6-native-ext-bug
subst s: c:\projects
npm install
npm test
```

## Error

```
Error: Module did not self-register.
    at Error (native)
    at Object.Module._extensions..node (module.js:568:18)
    at Module.load (module.js:456:32)
    at tryModuleLoad (module.js:415:12)
    at Function.Module._load (module.js:407:3)
    at Module.require (module.js:466:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (s:\node_modules\node-6-native-ext-bug\subloader.js:10:1)
    at Module._compile (module.js:541:32)
    at Object.Module._extensions..js (module.js:550:10)
```

## Notes

I've chosen to use `buffertools` as native module for this reproduction because it's simple and maintained by a Node core developer.

You can see an example of this error in [AppVeyor](https://ci.appveyor.com/project/xzyfer/node-6-native-ext-bug/build/job/g22imklu03vipomt)