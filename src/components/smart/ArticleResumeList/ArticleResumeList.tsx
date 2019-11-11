import React, { FunctionComponent } from "react";
import "./ArticleResumeList.scss";

import TitlePanel from "../TitlePanel/TitlePanel";
import CellColumnItem from "../../dumb/CellColumnItem/CellColumnItem";
import CellColumnPrice from "../../dumb/CellColumnPrice/CellColumnPrice";

interface Props {
  articles: any;
  onDelete: any;
  onAdd: any;
  onRest: any;
}

const ArticleResumeList: FunctionComponent<Props> = props => {
  const { articles, onDelete, onAdd, onRest } = props;

  return (
    <section id="article-resume-list">
      <TitlePanel
        title={"Resume"}
        subtitle={"Items"}
        fontBold={true}
        fontSize={"size-s"}
      />
      {articles &&
        articles.map((article: any, index: number) => (
          <div className="article-resume-list__article" key={index}>
            <CellColumnItem article={article} onDelete={onDelete} />
            <CellColumnPrice article={article} onAdd={onAdd} onRest={onRest} />
          </div>
        ))}
    </section>
  );
};

export default ArticleResumeList;
