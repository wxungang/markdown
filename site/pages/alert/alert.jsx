import Markdown from '../../libs/markdown/markdown.jsx';


export default class Alert extends Markdown {
  document(LOCALE) {
    return require(`../../docs/${LOCALE}/alert.md`);
  }
}
