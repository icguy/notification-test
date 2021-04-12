import firebase from "firebase";

var firebaseConfig = {
	apiKey: "AIzaSyAtp4h3dXidtBaSy57Ss0u7lVA6THRVnrw",
	authDomain: "noti-test-a8f0d.firebaseapp.com",
	projectId: "noti-test-a8f0d",
	storageBucket: "noti-test-a8f0d.appspot.com",
	messagingSenderId: "84854799604",
	appId: "1:84854799604:web:bc88605e0cf4cf5952b2a1"
};

firebase.initializeApp(firebaseConfig);

async function register(): Promise<void> {
	let messaging = firebase.messaging();
	await messaging.getToken({
		vapidKey: 'BJFCgqW_ott5wcl4J4EgKzaSP8nSp8E7pQVAHJgtpUJFfgGw3f7w_5fvSbhJeTvq3tXqQh9NdGKh9A98LNkpD7c'
	});
}

$("button").on("click", () => {
	register();
});