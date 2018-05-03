# [yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/)

## [Workspaces in Yarn](https://yarnpkg.com/blog/2017/08/02/introducing-workspaces/)

https://yarnpkg.com/en/docs/cli/workspace#yarn-workspace-workspace_name-command-

A "workspace" is a package. The containing project/repo is simply the "workspace root."

`yarn` from the project root will install dependencies for all nested packages. When multiple
workspaces rely on the same dependency (and same version), the dependency is installed to the
workspace root's node_modules, eliminating redundant installs.

1.  Enable Yarn Workspaces on your computer.
    `yarn config set workspaces-experimental true`
