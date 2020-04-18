# react-native-platform-specific-hook-selector
Hook based simple wrapper for actionSheetIOS and native android picker. under the hood on IOS it uses  actionSheetIOS and on android react-native-dialogs(because native android Picker don't have any method for calling it programmatically)

|                                                      Showcase IOS                                                      |                                                    Showcase Android                                                    |
| :--------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------: |
| ![](https://user-images.githubusercontent.com/40486471/79643253-28b06780-81b3-11ea-8cb7-3b2703a2cfe0.gif) | ![](https://user-images.githubusercontent.com/40486471/79643230-0fa7b680-81b3-11ea-9829-1980e5156df6.gif) |

## Installation

```
npm i react-native-platform-specific-hook-selector react-native-dialogs --save
```

### or

```
yarn add react-native-platform-specific-hook-selector react-native-dialogs
```


## Example

```jsx
import React, {useEffect} from 'react';
import {SafeAreaView, Text, StatusBar, Button, Alert} from 'react-native';

import useBaseActionSheetPicker from 'react-native-platform-specific-hook-selector';

const App = () => {
  const {selectedItem, renderPicker} = useBaseActionSheetPicker({
    cancelText: 'Cancel',
    title: 'Choose color',
  });

  useEffect(() => {
    if (selectedItem) {
      Alert.alert(selectedItem);
    }
  }, [selectedItem]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Button
          onPress={() => renderPicker(['green', 'blue', 'red'])}
          title={'Choose color'}
        />
        <Text>{selectedItem}</Text>
      </SafeAreaView>
    </>
  );
};

export default App;

```

#### Predefined hook arguments


| param | type                                                                                                                                                                                              | description   |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| cancelText  | String                                                                                                                                                                                     | Cancel text on IOS      |
| title            | String                                                                                                                                                                                               | title on both platform      |
| onCancel          | callback                                                                                                                                                                                             | return on close event      |


#### hook returned values


| values | type                                                                                                                                                                                              | description   |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| selectedItem  | String or undefined                                                                                                                                                                                     | value that has been selected     |
| renderPicker            | ( params: string[] ) => void                                                                                                                                                                                               | renderer      |






## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/beqramo/react-native-platform-specific-hook-selector/blob/master/LICENSE) file for details


### Credits

[react-native-dialogs](https://github.com/react-native-dialogs/react-native-dialogs)

## Author

Made with ❤️ by [beqramo](https://github.com/beqramo).
