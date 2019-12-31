/**
 * This archive is dedicated to manage session in Localstorage
 * 
 * @version 0.0.1
 * @author Fe Oliveira<fe.get@outlook.com>
 */

import { notification } from 'antd';

/**
 * Show a notifiction on screen
 * 
 * @param {String} title 
 * @param {String} message 
 */
export const notify = async (title, message) => {

    notification.info({
        message     : title,
        description : message
    });

}