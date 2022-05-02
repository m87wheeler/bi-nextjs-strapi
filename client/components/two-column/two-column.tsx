import * as React from "react";
import { CmsButtonType, IContentColumn } from "../../types";
import DangerousHtml from "../dangerous-html/dangerous-html";
import Grid from "../grid/grid";
import GridItem from "../grid/grid-item";
import { Container } from "./styles";

interface Props {
  button: CmsButtonType;
  title?: string;
  titleAlign?: string;
  titleWidth?: string;
  columns: IContentColumn[];
}

const TwoColumn = ({ ...props }: Props) => {
  return (
    <Grid>
      {props?.columns?.map((col, i) => (
        <GridItem key={i} {...col}>
          <DangerousHtml html={col.content} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TwoColumn;
