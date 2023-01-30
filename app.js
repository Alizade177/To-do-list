let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');


input.addEventListener('keyup',() =>{
    if(input.value.trim() != 0){
        addBtn.classList.add('active')
    }
    else{
        addBtn.classList.remove('active')
    }
})

addBtn.addEventListener('click',() => {
    if(input.value.trim() != 0) {
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `<p>${input.value} </p>
        <div class="item-btn">
            <i class='bx bxs-edit' ></i>
          <i class='bx bxs-trash' ></i>
        </div>`
        tasks.appendChild(newItem);
        input.value = '';
    }
    else {
      Swal.fire({
        position: '',
       
        title: 'Please enter text',
   
        timer: 1500
      })
        
    }
})


  tasks.addEventListener('click',(event) => {
     if(event.target.classList.contains('bxs-trash')){
       event.target.parentElement.parentElement.remove();
       Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
     }
     
    
  })

  tasks.addEventListener('click',(event) => {
    if(event.target.classList.contains('bxs-edit')){
      event.target.parentElement.parentElement.classList.toggle('completed');
      Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
    }
    
 })
  

//  document.getElementsByClassName(".bxs-trash").addEventListener("click",function(){
//   document.querySelector(".pop").style.display = "none";
// })

// document.querySelector(".close").addEventListener("click",function(){
//   document.querySelector(".pop").style.display = "flex";
// })



 


