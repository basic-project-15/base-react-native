# base-react-native

## Installation

### Android

1. Clone the repository.
2. Run the `yarn install` command.
3. Run the `npx react-native run-android` command.

### iOS

1. Clone the repository.
2. Run the `yarn install` command.
3. Run the `cd ios && pod install && cd ..` command.
4. Run the `npx react-native run-ios` command.

## Plugin for vscode

1. Have EditorConfig for VS Code installed.
   - Enable `Format On Save` in vscode settings.
2. Have Prettier - Code formatter installed.
3. Have Tailwind CSS IntelliSense for VS Code installed.
   - Open vscode configuration in .json file.
   - Add the following line of code:
```
"tailwindCSS.experimental.classRegex": [
      ["tailwind|yourModule\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
  ],
```
