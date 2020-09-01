document.addEventListener('turbolinks:load',()=>{
    let form = document.querySelector('form')
    let btn = document.querySelector('[type="submit"]')
    if(btn){
        btn.addEventListener('click',(event)=>{
            event.preventDefault()
    
            Swal.fire({
                title: '新增商品',
                text: "商品明細確認了嗎？",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '已確認',
                cancelButtonText: '我不要'
            }).then((result) => {
                if (result.value) {
                    form.submit()
            }})
        })
    }
})