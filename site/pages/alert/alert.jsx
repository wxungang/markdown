import Markdown from '../../libs/markdown';


export default class Alert extends Markdown {
  document(LOCALE) {
    return require(`../../docs/${LOCALE}/alert.md`);
  }
}
