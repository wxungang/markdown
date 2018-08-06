import Markdown from '../../libs/markdown/markdown.jsx';
import {Loading} from '../../../components/index';

export default class LoadingPage extends Markdown {
  document(LOCALE) {
    return {
      id: 'loading',
      md: require(`../../docs/${LOCALE}/loading.md`)
    }
  }

  constructor(props) {
    super(props);

    this.state = {}

  }

  componentDidMount() {
    console.log(this.state);
    console.log(Loading);
    for (let prop in Loading.propsTypes) {
      console.log(Loading.propsTypes[prop]);
    }

  }
}
