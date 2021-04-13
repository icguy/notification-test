$(() => {
	let messaging = firebase.messaging();

	async function register() {
		let regs = await navigator.serviceWorker.getRegistrations();
		for (let r of regs) {
			r.unregister();
		}
		let reg = await navigator.serviceWorker.register(
			"noti-sw.js", {
			scope: 'firebase-cloud-messaging-push-scope'
		});
		let token = await messaging.getToken({
			vapidKey: 'BJFCgqW_ott5wcl4J4EgKzaSP8nSp8E7pQVAHJgtpUJFfgGw3f7w_5fvSbhJeTvq3tXqQh9NdGKh9A98LNkpD7c',
			serviceWorkerRegistration: reg
		});
		log("token: " + token);
	}

	$("#regbutton").on("click", () => {
		register();
	});

	function log(s) {
		$("#log").append(`<div>${s}<div>`);
	}

	messaging.onMessage((payload) => {
		log(JSON.stringify(payload));
	})
});