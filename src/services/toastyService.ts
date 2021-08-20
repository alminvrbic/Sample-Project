import {Options, RNToasty} from 'react-native-toasty';
import res from '../res';

interface FeedbackMessage {
  message: string;
  type: 'error' | 'info' | 'success' | 'warning';
}

const open = (feedback: FeedbackMessage) => {
  const options: Options = {
    title: feedback.message,
    position: 'top',
    withIcon: false,
    titleSize: 14,
    offsetY: 32,
    offsetX: 0,
    fontFamily: res.fonts.regular,
  };

  switch (feedback.type) {
    case 'error':
      RNToasty.Error(options);
      break;
    case 'info':
      RNToasty.Info(options);
      break;
    case 'success':
      RNToasty.Success(options);
      break;
    case 'warning':
      RNToasty.Warn(options);
      break;
    default:
      RNToasty.Normal(options);
      break;
  }
};

export default {open};
