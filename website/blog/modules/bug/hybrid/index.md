### 1. 单页应用在Android上面往返title不更新

通过`history`api去解决

```javascript
setTimeout(() => {
  window.history.replaceState({}, title, window.location.href)
}, 0)
```