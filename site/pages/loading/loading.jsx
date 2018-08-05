import Markdown from '../../libs/markdown/markdown.jsx';


export default class Loading extends Markdown {
  document(LOCALE) {
    return require(`../../docs/${LOCALE}/loading.md`);
  }
}
