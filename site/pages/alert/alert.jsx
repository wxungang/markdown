import Markdown from '../../libs/markdown/markdown.jsx';


export default class Alert extends Markdown {
  document(LOCALE) {
    return {
      id: 'alert',
      md: require(`../../docs/${LOCALE}/alert.md`)
    }
  }
}
