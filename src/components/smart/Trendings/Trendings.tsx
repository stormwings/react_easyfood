import React, { FunctionComponent } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import "./Trendings.scss";

import TitlePanel from "../TitlePanel/TitlePanel";
import ArticleTallRectangle from "../../dumb/ArticleTallRectangle/ArticleTallRectangle";

interface Props {
  trendings: any;
  history: any;
}

const Trendings: FunctionComponent<Props & RouteComponentProps> = ({
  trendings,
  history
}) => {
  const redirect: Function = (_id: string) => history.push(`/article/${_id}`);
  const redirection: any = {
    name: "View All",
    link: "/trendings"
  };

  return (
    <section id="trendings">
      <TitlePanel
        title={"Trendings!"}
        fontFamily={"times"}
        subtitle={"Near you there are +10 stores"}
        redirection={redirection}
        style={{ marginBottom: "7px", marginLeft: "14px", marginRight: "14px" }}
      />
      <div className="trendings__list">
        {trendings &&
          trendings.map((article: any, index: number) => (
            <ArticleTallRectangle
              action={redirect}
              article={article}
              key={index}
            />
          ))}
      </div>
    </section>
  );
};

export default withRouter(Trendings);
