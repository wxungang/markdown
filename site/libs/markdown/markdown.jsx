import React from 'react';
import ReactDOM from 'react-dom';
import markdown from 'markdown-it';
import highlight from 'highlight.js';

export default class Markdown extends React.Component {
  constructor(props) {
    super(props);

    this.components = new Map;

  }

  componentDidMount() {
    this.renderDOM();
  }

  componentDidUpdate() {
    this.renderDOM();
  }

  renderDOM() {
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
        langPrefix: 'language-',
        highlight: function (str, lang) {
          if (lang && highlight.getLanguage(lang)) {
            try {
              return highlight.highlight(lang, str).value;
            } catch (__) {
            }
          }

          return ''; // use external default escaping
        }
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
