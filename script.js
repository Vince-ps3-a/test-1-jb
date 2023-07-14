function showNotification() {
    var notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = 'Notification PS3 : Nouveau message !';
  
    document.body.appendChild(notification);
  
    setTimeout(function() {
      document.body.removeChild(notification);
    }, 5000);
  }
  