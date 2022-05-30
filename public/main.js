const thumbUp = document.getElementsByClassName("fa-thumbs-up")
const trash = document.getElementsByClassName("fa-ban")

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const _id = this.parentNode.parentNode.parentNode.id
        console.log(_id)
        const completeOrder = this.parentNode.parentNode.parentNode.classList.toggle('done')
        fetch('orders', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            '_id': _id,
            'completeOrder': completeOrder
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
        .catch(console.error)
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const _id = this.parentNode.parentNode.id
        console.log(_id)
        fetch('orders', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            '_id': _id
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
