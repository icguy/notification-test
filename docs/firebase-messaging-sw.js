"use strict";
exports.__esModule = true;
var firebase_1 = require("firebase");
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.3.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.3/firebase-messaging.js');
// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase_1["default"].initializeApp({
    apiKey: "AIzaSyAtp4h3dXidtBaSy57Ss0u7lVA6THRVnrw",
    authDomain: "noti-test-a8f0d.firebaseapp.com",
    projectId: "noti-test-a8f0d",
    storageBucket: "noti-test-a8f0d.appspot.com",
    messagingSenderId: "84854799604",
    appId: "1:84854799604:web:bc88605e0cf4cf5952b2a1"
});
// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
var messaging = firebase_1["default"].messaging();
messaging.onBackgroundMessage(function (payload) {
    var _a, _b;
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    var notificationTitle = (_a = payload.notification) === null || _a === void 0 ? void 0 : _a.title;
    var notificationOptions = {
        body: (_b = payload.notification) === null || _b === void 0 ? void 0 : _b.body,
        icon: '/firebase-logo.png'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
