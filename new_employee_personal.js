function openArticle(articleID) {
	let lista = document.getElementsByClassName("what_we_do_article");
	let i;
	for (i = 0; i < lista.length; i++) {
		if (lista[i].classList.contains('what_we_do_article_open')) {
			lista[i].classList.toggle('what_we_do_article_open')
		}
	};
	document.getElementById(articleID).classList.toggle('what_we_do_article_open');
}