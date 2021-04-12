$(() => {
	function register() {
		let messaging = firebase.messaging();
		messaging.getToken({
			vapidKey: 'BJFCgqW_ott5wcl4J4EgKzaSP8nSp8E7pQVAHJgtpUJFfgGw3f7w_5fvSbhJeTvq3tXqQh9NdGKh9A98LNkpD7c'
		});
	}

	$("#regbutton").on("click", () => {
		register();
	});
});