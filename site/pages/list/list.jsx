import Markdown from '../../libs/markdown/markdown.jsx';


export default class List extends Markdown {
  document(LOCALE) {
    return {
      id: 'list',
      md: require(`../../docs/${LOCALE}/list.md`)
    }
  }
}
