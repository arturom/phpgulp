displayNotifications = (permission) =>
    if permission is 'granted'
        createNotification message for message in window.messages
    permission

createNotification = (message) =>
    notification = new window.Notification message
    window.setTimeout notification.close.bind(notification), 4000
    notification

window.Notification.requestPermission(displayNotifications)
