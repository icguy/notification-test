$(() => {
	async function register() {
		let reg = await navigator.serviceWorker.register(
			"noti-sw.js", {
			scope: 'firebase-cloud-messaging-push-scope'
		});
		let messaging = firebase.messaging();
		let token = await messaging.getToken({
			vapidKey: 'BJFCgqW_ott5wcl4J4EgKzaSP8nSp8E7pQVAHJgtpUJFfgGw3f7w_5fvSbhJeTvq3tXqQh9NdGKh9A98LNkpD7c',
			serviceWorkerRegistration: reg
		});
		console.log(token);
	}

	$("#regbutton").on("click", () => {
		register();
	});
});