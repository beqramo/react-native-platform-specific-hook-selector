import {useState} from 'react'
import {Platform, ActionSheetIOS} from 'react-native'
import DialogAndroid from 'react-native-dialogs'

import {useTranslation} from 'react-i18next'

type PickerOptions = string[]
type UseBaseActionSheetPicker = {
  selectedItem: string
  renderPicker: (options: PickerOptions) => void
}

const useBaseActionSheetPicker = (): UseBaseActionSheetPicker => {
  const [selectedItem, setSelectedItem] = useState('')
  const {t} = useTranslation()

  const renderPicker = (options: PickerOptions): void => {
    if (Platform.OS === 'ios') renderIOSActionSheet(options)
    else if (Platform.OS === 'android') renderAndroidPicker(options)
  }

  const renderIOSActionSheet = (options: PickerOptions): void => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: [t('cancel'), ...options.map(val => t(val))],
        cancelButtonIndex: 0,
        title: t('settings.chooseMapMode'),
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          // cancel action
        } else {
          setSelectedItem(options[buttonIndex - 1])
        }
      },
    )
  }

  const renderAndroidPicker = async (options: PickerOptions): Promise<void> => {
    const result = await DialogAndroid.showPicker(
      t('settings.chooseMapMode'),
      null,
      {
        items: [...options.map(val => ({label: t(val), id: val}))],
      },
    )

    if (result.selectedItem) setSelectedItem(result.selectedItem.id)
  }

  return {
    selectedItem,
    renderPicker,
  }
}

export default useBaseActionSheetPicker
