
document.addEventListener('turbolinks:load',()=>{
    
    $('[name="product[tag_list][]"]').select2({
        tags: true,
        tokenSeparators: [',', ' ']
    })
})

