const addButton = document.querySelector('.add');

const updateLSD = () =>{
  const textareaData = document.querySelectorAll('textarea');
  const arr = [];
  
  textareaData.forEach((note) =>{
    return arr.push(textareaData.value);
  })

  localStorage.setItem('notes', JSON.stringify('arr'));
}

addButton.addEventListener('click', (text = '') =>{

    const note = document.createElement('div');
    note.classList.add('box');

    const htmlData = `
    <div class="note-icons">
            <i class="fa-solid fa-pen-to-square icon" id="edit"></i>
            <i class="fa-solid fa-trash icon delete" id="delete"></i>
          </div>
          <div class="main ${text ? "":"hidden"}"></div>
          <textarea
            id="note"
            class="${text ? "hidden":""}"
            placeholder="Enter your note......"
          ></textarea>`;

    note.insertAdjacentHTML('afterbegin', htmlData);
    document.querySelector('.input-section').prepend(note);

    const edit = document.querySelector('#edit');
    const trash = document.querySelector('.delete');
    const textarea = document.querySelector('#note');
    const main = document.querySelector('.main');

    trash.addEventListener('click', ()=>{
        note.remove();
    })

    edit.addEventListener('click', ()=>{
      main.classList.toggle('hidden');
      textarea.classList.toggle('hidden');
    })

    textarea.addEventListener('change',()=>{
      updateLSD();
    })
    
}
)