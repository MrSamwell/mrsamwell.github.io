Vue.component('card', {
    props: ['card'],
    template: `
    <a :href="card.page" target="_blank">
    <div class="card">
    
    <h5>{{card.tecno}}</h5>
    <h3>{{card.title}}</h3>
     <p>{{card.describe}}</p>
        <a :href="card.link" class="linkgit" target="_blank">Ver repositório <svg class="iconopen" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg></a>
        
        </div>   </a>  
    `
  });

  new Vue({ el: '#app' ,
  data:{
    cardProjects:[
    {
        id: '1',
        tecno: 'Javascript +Vue js',
        title: `To-do App`,
        describe:`Uma ferramenta que permite a criação de uma lista de tarefas. Os dados são armazenados em localStorage.`,
        link:'https://github.com/MrSamwell/To-do-app',
        page:'https://mrsamwell.github.io/To-do-app/'
    },
    {
        id: '2',
        tecno: 'Javascript + Vue js',
        title: `Gerador de Border-radius`,
        describe:`Ferramenta para desenvolvedores e designers. Previsualize a propriedade de arredondamento de bordas.`,
        link:'https://github.com/MrSamwell/borderradius-generator',
        page:'https://mrsamwell.github.io/borderradius-generator/'
    },
    {
        id: '3',
        tecno: 'Javascript',
        title: `Editor de Texto WYSIWYG`,
        describe:`Editor de texto Rich Text. Permite ao usuário a adição e formatação do contéudo de uma div.`,
        link:'https://github.com/MrSamwell/note-app',
        page:'https://mrsamwell.github.io/note-app/'
    }
    ],
    cardBlog:[
        {
            id: '1',
            tecno: '...',
            title: `Em breve.`,
            describe:`Aguarde.`,
            link:'#',
            page:'#'
        },
        {
            id: '2',
            tecno: '...',
            title: `Em breve.`,
            describe:`Aguarde.`,
            link:'#',
            page:'#'
        },
        {
            id: '3',
            tecno: '...',
            title: `Em breve.`,
            describe:`Aguarde.`,
            link:'',
            page:'#'
        }
        ]

}

});
