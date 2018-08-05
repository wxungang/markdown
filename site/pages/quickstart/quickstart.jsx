import Markdown from '../../libs/markdown/markdown.jsx';


export default class Quickstart extends Markdown {
  document(LOCALE) {
    return require(`../../docs/${LOCALE}/quickstart.md`);
  }
}
