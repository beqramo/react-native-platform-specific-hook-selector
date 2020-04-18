declare module "react-native-dialogs";
declare module "react-native-platform-specific-hook-selector";

type PickerOptions = string[];
type UseBaseActionSheetPicker = {
  selectedItem: string;
  renderPicker: (options: PickerOptions) => void;
};
type useBaseActionSheetPickerProps = {
  cancelText?: string;
  title?: string;
  onCancel?: () => void;
};
