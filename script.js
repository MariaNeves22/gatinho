document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const consulta = document.getElementById('consulta').value;
    const apiURL = `https://api.thecatapi.com/v1/images/search?limit=1`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                const imgURL = data[0].url;
                document.getElementById('result').innerHTML = `<img src="${imgURL}" alt="Imagem de um gato">`;
            } else {
                document.getElementById('result').innerHTML = '<p>Nenhuma imagem encontrada.</p>';
            }
        })
        .catch(error => {
            document.getElementById('result').innerHTML = '<p>Erro ao buscar imagem. Tente novamente.</p>';
            console.error('Erro:', error);
        });
});
