export default {
    name: 'Author',
    type: 'document',
      title: 'Author',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'title'
      },
      {
        name: 'description',
        type: 'string',
        title: 'About'
      },
      {
        name: 'image',
        type: 'image',
        title: 'image'
      }
    ]
}