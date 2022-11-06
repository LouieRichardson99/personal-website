import MyComponent from '../../../../slices/Services';

export default {
  title: 'slices/Services'
}


export const _Default = () => <MyComponent slice={{"variation":"default","version":"sktwi1xtmkfgx8626","items":[{"service":{"id":"mock_document_id","link_type":"Document","type":"service","tags":[],"lang":"en-us","slug":null,"first_publication_date":"1970-01-01T00:00:01+0000","last_publication_date":"1970-01-01T01:00:00+0000"}}],"primary":{"title":[{"type":"heading2","text":"Faster","spans":[]}],"description":[{"type":"paragraph","text":"Ullamco aliquip magna ut dolore et ut tempor commodo sunt aliquip ea nulla ipsum cillum.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1498050108023-c5249f4df085"}},"slice_type":"services","id":"_Default"}} />
_Default.storyName = ''

export const _CustomServiceGrid = () => <MyComponent slice={{"variation":"customServiceGrid","version":"sktwi1xtmkfgx8626","items":[{"service_title":[{"type":"heading3","text":"Distant","spans":[]}],"service_description":[{"type":"paragraph","text":"Dolor consequat voluptate magna magna reprehenderit aliquip ut sit elit in incididunt mollit nostrud aliqua. Laboris minim incididunt ex nostrud sunt elit. Labore ad velit eiusmod mollit ullamco pariatur exercitation cillum.","spans":[]}],"service_icon":{"dimensions":{"width":900,"height":500},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1494173853739-c21f58b16055"},"service_link":{"link_type":"Web","url":"http://twitter.com"}}],"primary":{"title":[{"type":"heading2","text":"Known","spans":[]}]},"slice_type":"services","id":"_CustomServiceGrid"}} />
_CustomServiceGrid.storyName = ''
