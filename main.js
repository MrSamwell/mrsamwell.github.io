Vue.component('card', {
    props: ['card'],
    template: `
    <a :href='card.link'>
    <div class="card">
    
    <h5>{{card.tecno}}</h5>
    <h3>{{card.title}}</h3>
     <p>{{card.describe}}</p>
        <a :href="card.link" class="linkgit">Ver no git</a>
        
        </div>   </a>  
    `
  });

  new Vue({ el: '#app' ,
  data:{
    cardProjects:[
    {
        id: '1',
        tecno: 'Html + Css + Javascript',
        title: `Don't divide by zero`,
        describe:`Just a calculator. But don't divide by zero, tho`,
        link:'#'
    },
    {
        id: '2',
        tecno: 'Html + Css + Javascript',
        title: `Don't divide by zero`,
        describe:`Just a calculator. But don't divide by zero, tho`,
        link:'#'
    },
    {
        id: '3',
        tecno: 'Html + Css + Javascript',
        title: `Don't divide by zero`,
        describe:`Just a calculator. But don't divide by zero, tho`,
        link:'#'
    }
    ],
    cardBlog:[
        {
            id: '1',
            tecno: 'Html + Css + Javascript',
            title: `Don't divide by zero`,
            describe:`Just a calculator. But don't divide by zero, tho`,
            link:'#'
        },
        {
            id: '2',
            tecno: 'Html + Css + Javascript',
            title: `Don't divide by zero`,
            describe:`Just a calculator. But don't divide by zero, tho`,
            link:'#'
        },
        {
            id: '3',
            tecno: 'Html + Css + Javascript',
            title: `Don't divide by zero`,
            describe:`Just a calculator. But don't divide by zero, tho`,
            link:''
        }
        ]

}

});
