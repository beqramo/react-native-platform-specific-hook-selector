import { useState } from "react";
import { Platform, ActionSheetIOS } from "react-native";
import DialogAndroid from "react-native-dialogs";

import "../index.d";

const useBaseActionSheetPicker = ({
  cancelText = "Cancel",
  title = "",
  onCancel,
}: useBaseActionSheetPickerProps): UseBaseActionSheetPicker => {
  const [selectedItem, setSelectedItem] = useState("");

  const renderPicker = (options: PickerOptions): void => {
    if (Platform.OS === "ios") renderIOSActionSheet(options);
    else if (Platform.OS === "android") renderAndroidPicker(options);
  };

  const renderIOSActionSheet = (options: PickerOptions): void => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: [cancelText, ...options.map((val) => val)],
        cancelButtonIndex: 0,
        title,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          onCancel && onCancel();
        } else {
          setSelectedItem(options[buttonIndex - 1]);
        }
      }
    );
  };

  const renderAndroidPicker = async (options: PickerOptions): Promise<void> => {
    const result = await DialogAndroid.showPicker(title, null, {
      items: [...options.map((val) => ({ label: val, id: val }))],
    });

    if (result.selectedItem) {
      setSelectedItem(result.selectedItem.id);
    } else {
      onCancel && onCancel();
    }
  };

  return {
    selectedItem,
    renderPicker,
  };
};

export default useBaseActionSheetPicker;
