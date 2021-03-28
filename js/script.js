async function puxarDados(){
	try{
		const response = await fetch("https://radioprotecaonapratica.com.br/wp-json/wp/v2/posts?_embed")
		const api = await response.json()
		Show(api)
	}catch(erro){
		return erro
	}
}
puxarDados()

function Show(blog){
	// Busca o titulo 
	let dadosTitle = ''
	for (let dados of blog) {
		// Data no padão dd/mm/aaaa
		let data = dados.date
		let ano = data.slice(0,4)
		let mes = data.slice(5,7) 
		let dia = data.slice(8,10)
		dadosTitle += `	
		<span>${dia}/${mes}/${ano}</span>
		<div class="cardBody">
			<div class="cardTitle"> 
				<h3>${dados.title.rendered}</h3>
				<p>Autor<span> ${dados._embedded.author[0].name}</span></p>
			</div>
			<img src="${dados._embedded['wp:featuredmedia'][0].source_url}" class="img-response"/>
			<div class="cardText">
				${dados.excerpt.rendered}
				<a href="${dados.link}">Ler+</a>
			</div>
		</div>`
	} 
	document.querySelector('#card').innerHTML = dadosTitle
}

