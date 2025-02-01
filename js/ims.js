window.addEventListener('load', function () {
	//*@ замена адресов для ссылок поделиться

	let addressURL = window.location.href;
	let siteName = `Туристическое агенство 'Удачный отпуск'`;
	let siteTitle = 'Туры, по всему миру, на любой бюджет';



	let socialVk = document.querySelector('a.social-vk');
	let socialTg = document.querySelector('a.social-tg');
	let socialOk = document.querySelector('a.social-ok');
	let socialWts = document.querySelector('a.social-wts');
	// let socialFb = document.querySelector('a.social-fb');
	// let socialTwit = document.querySelector('a.social-twit');


	socialVk.setAttribute('href', `https://vk.com/share.php?url=${addressURL}`);
	socialTg.setAttribute('href', `https://telegram.me/share/url?url=${addressURL}&text=${siteName}`);
	socialOk.setAttribute('href', `https://connect.ok.ru/offer?url=${addressURL}`);
	socialWts.setAttribute('href', `https://api.whatsapp.com/send?text=${addressURL}`);
	// socialFb.setAttribute('href', `https://www.facebook.com/sharer/sharer.php?u=${addressURL}`);
	// socialTwit.setAttribute('href', `https://twitter.com/intent/tweet?text=${siteName}&url=${addressURL}&via=${siteTitle}`);



	let imagesHidden = document.querySelectorAll('.img-hidden');

	imagesHidden.forEach(i => {
		i.style.display = 'block';
	});
});