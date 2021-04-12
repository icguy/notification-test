import firebase from "firebase";

// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.3.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.3/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
	apiKey: "AIzaSyAtp4h3dXidtBaSy57Ss0u7lVA6THRVnrw",
	authDomain: "noti-test-a8f0d.firebaseapp.com",
	projectId: "noti-test-a8f0d",
	storageBucket: "noti-test-a8f0d.appspot.com",
	messagingSenderId: "84854799604",
	appId: "1:84854799604:web:bc88605e0cf4cf5952b2a1"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
	console.log('[firebase-messaging-sw.js] Received background message ', payload);
	// Customize notification here
	const notificationTitle = payload.notification?.title;
	const notificationOptions = {
		body: payload.notification?.body,
		icon: '/firebase-logo.png'
	};

	(self as any).registration.showNotification(notificationTitle, notificationOptions);
});