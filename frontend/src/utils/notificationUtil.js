import { notification } from 'antd';

export const notify = async (title, message) => {

    notification.info({
        message: title,
        description: message
    });

}