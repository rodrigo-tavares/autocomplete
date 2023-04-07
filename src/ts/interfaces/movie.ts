export interface RequestMovie {
  docs: Movie[];
  limit: number;
  offset: number;
  page: number;
  pages: number;
  total: number;
}

export interface Movie {
  academyAwardNominations: number;
  academyAwardWins: number;
  boxOfficeRevenueInMillions: number;
  budgetInMillions: number;
  name: string;
  rottenTomatoesScore: number;
  runtimeInMinutes: number;
  _id: string;
}
