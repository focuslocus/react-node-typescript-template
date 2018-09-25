export const registerServiceWorker = function (): void {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then(registration => {
        console.log('SW registered: ', registration);
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
    });
  }
};

export const enablePushNotifications = function (): void {
  if (!('Notification' in window)) {
    console.error('This browser does not support notifications!');
  } else {
    Notification.requestPermission(status => {
      console.log('Notification permission status:', status);
    });
  }
};
