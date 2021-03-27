async function puxarDados(){
	try{
		const response = await fetch("https://radioprotecaonapratica.com.br/wp-json/wp/v2/posts?_embed")
		const api = await response.json()

		show(api)
	
	}catch(erro){
		return erro
	}
}
puxarDados()

function show(blog){
	console.log(blog)
	// Busca o titulo 
	let src = ''
	let dadosTitle = ' '
	for (let dados of blog) {
		
		dadosTitle += `<h3>${dados.title.rendered}</h3>
						   ${dados.excerpt.rendered}
						<span>${dados.date}</span>
						<span>${dados._embedded.author[0].name}</span>	
						<img src="${dados._embedded['wp:featuredmedia'][0].source_url}" /> `
					  
	
	}
	document.querySelector('#card').innerHTML = dadosTitle
}
