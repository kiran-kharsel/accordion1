// accordion data
const accordionData = [
  {
    id: 1,
    title: "What is an accordion component?",
    content: "An accordion is a UI pattern that allows users to expand and collapse sections of content, improving readability and saving space.",
  },
  {
    id: 2,
    title: "Why use an accordion?",
    content: "Accordions help organize information into manageable chunks, enhance user experience, and keep layouts clean and responsive.",
  },
  {
    id: 3,
    title: "How do I customize it?",
    content: "You can style the accordion with CSS, add animations for smooth transitions, and configure whether multiple panels can be open at once.",
  },
  {
    id: 4,
    title: "Is it accessible?",
    content: "Yes, when built with semantic HTML and ARIA attributes, accordions can be fully accessible to screen readers and keyboard users.",
  },
];


const listElem = document.querySelector('.list')


// loop through array to create dynamic html

accordionData.forEach((data) => {
    let li = document.createElement('li');
    li.classList.add('item');
    li.id = data.id;
    li.innerHTML = `
    <h3 class="heading">${data.title}</h3>
    <p class="content">${data.content}</p>
    `;
    listElem.appendChild(li)
    li.addEventListener('click', function(){
        showContent(data.id)
    })
})

function showContent(id){
    const allItems = listElem.querySelectorAll('.item');
    Array.from(allItems).forEach((item) => {
        if(+item.id === +id){
            item.lastElementChild.classList.toggle('show')
        }else{
            item.lastElementChild.classList.remove('show')
        }
    })
}