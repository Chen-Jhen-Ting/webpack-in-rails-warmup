document.addEventListener('turbolinks:load',()=>{
    
    let notice = document.getElementById('notice')

    if(notice.textContent){
        notice.classList.add('alert')
        notice.classList.add('alert-primary')

        let remove = document.createElement('span')
        remove.textContent = 'X'
        remove.id = 'remove'
        
        notice.appendChild(remove)
    }

    let remove = document.querySelector('#remove')
    
    if(remove){
        remove.addEventListener('click',()=>{
            remove.parentElement.remove()
        })
    }
})

