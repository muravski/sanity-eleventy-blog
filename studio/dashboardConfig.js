export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec44316848902cb75f45de5',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-4wynqvy4',
                  apiId: '08bd3bb8-a059-4e96-851f-526e04852a8d'
                },
                {
                  buildHookId: '5ec443174ba50b5f3369629c',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-yivss75s',
                  apiId: '53070dae-675b-42f2-86b1-b0033f159e1e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/muravski/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-yivss75s.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
