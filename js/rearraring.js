let contentBlock = document.querySelector('.content');
let contentRight = document.querySelector('.content-right');
let contentLeft = document.querySelector('.content-left');
let contentLeftText = document.querySelector('.content-left .text');

let rearrangingBlocks = function () {
	if (document.documentElement.clientWidth <= 1280) {
		contentLeft.insertBefore(contentRight, contentLeftText);
	} else {
		// contentBlock.insertBefore(contentRight, document.querySelector('.nothing'));
		contentBlock.insertBefore(contentRight, null);
	}
}
rearrangingBlocks();
const resize1 = function () {
	//* перестановка блоков
	rearrangingBlocks();
	//* другие полезные функции
};
resize1();
window.addEventListener('resize', function () {
	resize1();
});
window.addEventListener('orientationchange', function () {
	resize1();
});