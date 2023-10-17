function nuevaCancion(event) {
    const cancionData = {
      title: document.getElementById('cancion').value,
      artista: document.getElementById('artista').value,
      tono: document.getElementById('tono').value
    }
    fetch("/canciones",{  
      method:'POST',  //envia los datos, en este caso las canciones
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(cancionData)
    })
      .then(response => response.JSON())
      .then(data=>{
        console.log(data);
        alert('canción agregada con exito') 
        }) 
        .catch(error=>{
        console.log(error)
        alert('error')
      })
  }