# TodoApp

This is a mobile Todo Application made using [React-Native](https://reactnative.dev/) and
[React-Navigation] (https://reactnavigation.org/).
\
\
![****](/App-view.png)

There is a [side-bar(Drawer)](https://reactnavigation.org/docs/drawer-based-navigation/) where you can choose to add a task either by a LocalApp which means the data is not persistent or an ApiApp that allows saving the data. Then there is a [Bottom-Tab](https://reactnavigation.org/docs/bottom-tab-navigator/) where you have 3 screens to create a new task, list the tasks with status **in-progress** which is the default value, and list the tasks with status **done**. In order to use this repository with the ApiApp you should clone and execute the [API-repository](https://github.com/MartinSGL/TodoApp-back) as well.

The structure of this application includes

- api
- components
- context
- navigator
- reducers
- screens
- theme