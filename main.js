Vue.component('card', {
    props: ['card'],
    template: `
    <a :href="card.page" target="_blank">
    <div class="card">
    
    <h5>{{card.tecno}}</h5>
    <h3>{{card.title}}</h3>
     <p>{{card.describe}}</p>
        <a :href="card.link" class="linkgit" target="_blank">Ver repositório</a>
        
        </div>   </a>  
    `
  });

  new Vue({ el: '#app' ,
  data:{
    cardProjects:[
    {
        id: '1',
        tecno: 'Javascript + Vue js',
        title: `To-do App`,
        describe:`A to-do list app with LocalStorage`,
        link:'https://github.com/MrSamwell/To-do-app',
        page:'https://mrsamwell.github.io/To-do-app/'
    },
    {
        id: '2',
        tecno: 'Html + Css + Javascript',
        title: `Don't divide by zero`,
        describe:`Just a calculator. But don't divide by zero, tho`,
        link:'#',
        page:'#'
    },
    {
        id: '3',
        tecno: 'Html + Css + Javascript',
        title: `Don't divide by zero`,
        describe:`Just a calculator. But don't divide by zero, tho`,
        link:'#',
        page:'#'
    }
    ],
    cardBlog:[
        {
            id: '1',
            tecno: 'Html + Css + Javascript',
            title: `Don't divide by zero`,
            describe:`Just a calculator. But don't divide by zero, tho`,
            link:'#',
            page:'#'
        },
        {
            id: '2',
            tecno: 'Html + Css + Javascript',
            title: `Don't divide by zero`,
            describe:`Just a calculator. But don't divide by zero, tho`,
            link:'#',
            page:'#'
        },
        {
            id: '3',
            tecno: 'Html + Css + Javascript',
            title: `Don't divide by zero`,
            describe:`Just a calculator. But don't divide by zero, tho`,
            link:'',
            page:'#'
        }
        ]

}

});
