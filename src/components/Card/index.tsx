import React from "react";
import { Movie } from "../../ts/interfaces/movie";

import { Container, GroupInfo, GroupItem, Label, Title } from "./styles";

type Props = {
  movie: Movie;
};
const CardInfo = ({ movie }: Props) => {
  const {
    academyAwardNominations,
    academyAwardWins,
    boxOfficeRevenueInMillions,
    budgetInMillions,
    name,
    runtimeInMinutes,
  } = movie;

  return (
    <Container>
      <Title>{name}</Title>
      <GroupInfo>
        <GroupItem>
          <Label bold>Awards</Label>
          <Label>
            {academyAwardWins} Wins & {academyAwardNominations} Nominations
          </Label>
        </GroupItem>
        <GroupItem>
          <Label bold>Runtime</Label>
          <Label>{runtimeInMinutes} min</Label>
        </GroupItem>
      </GroupInfo>

      <GroupInfo>
        <GroupItem>
          <Label bold>Budget</Label>
          <Label>${budgetInMillions}M</Label>
        </GroupItem>
        <GroupItem>
          <Label bold>Revenue</Label>
          <Label>${boxOfficeRevenueInMillions}M</Label>
        </GroupItem>
      </GroupInfo>
    </Container>
  );
};

export default CardInfo;
