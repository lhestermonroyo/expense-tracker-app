import { notification } from 'antd';

const setNotification = (notifParams: INotification) => {
  const { type, message, description } = notifParams;

  notification[type]({
    message,
    description,
  });
};

export default setNotification;
