import * as React from "react";
import { TwoColumnProps } from "../../../types/cms-types";
import DangerousHtml from "../../dangerous-html/dangerous-html";
import Grid from "../../grid/grid";
import GridItem from "../../grid/grid-item";

const TwoColumn = ({ ...props }: TwoColumnProps) => {
  const handleTitlePlacement = React.useCallback(
    (i: number, titleColumn: string | undefined) => {
      return titleColumn === "both" ? (
        <h2>{props?.title}</h2>
      ) : titleColumn === "left" && i === 0 ? (
        <h2>{props?.title}</h2>
      ) : titleColumn === "right" && i === 1 ? (
        <h2>{props?.title}</h2>
      ) : (
        <></>
      );
    },
    [props?.title]
  );

  return (
    <Grid>
      {props?.column?.map((col, i) => (
        <GridItem key={i} {...col}>
          {handleTitlePlacement(i, props?.titleColumn)}
          <DangerousHtml html={col.content} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TwoColumn;
