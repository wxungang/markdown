import React from 'react';
import ReactDOM from 'react-dom';
import markdown from 'markdown-it';

export default class Markdown extends React.Component {
  constructor(props) {
    super(props);

    this.components = new Map;

  }

  highlight = () => {
    document.getElementById("page").querySelectorAll('code').forEach(function (block, i) {
      hljs.highlightBlock(block);
    });
  }

  componentDidMount() {
    this.renderDOM();
  }

  componentDidUpdate() {
    this.renderDOM();
  }

  renderDOM() {
    this.highlight();
    for (const [id, component] of this.components) {
      const div = document.getElementById(id);

      if (div instanceof HTMLElement) {
        ReactDOM.render(component, div);
      }
    }
  }

  render() {
    const document = this.document(localStorage.getItem('DOCS_LANGUAGE') || 'react');

    if (typeof document.md === 'string') {
      this.components.clear();
      let md = markdown({
        langPrefix: 'language-'
      });
      const html = md.render(document.md);

      return (
        <div className={document.id || 'md'} dangerouslySetInnerHTML={{
          __html: html
        }}/>
      )
    } else {
      return <span/>
    }
  }
}
