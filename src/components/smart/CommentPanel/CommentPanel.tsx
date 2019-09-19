import React, { Component } from 'react';
import './CommentPanel.scss';

import TitlePanel from '../TitlePanel/TitlePanel';
import Commentary from '../../dumb/Commentary/Commentary';

interface Props {
  comments: any;
}

class CommentPanel extends Component<Props> {
  render() {
    return (
      <section id="comment-panel">
        <TitlePanel title={'Comments'} fontSize={'size-s'} />
        <div className="comment-panel__list">
          {this.props.comments && this.props.comments.map((comment: any, index: number) => <Commentary comment={comment} key={index} />)}
        </div>
      </section>
    );
  }
}

export default CommentPanel;
