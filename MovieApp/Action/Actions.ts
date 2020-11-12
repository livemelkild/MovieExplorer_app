export const NEXT_PAGE = "NEXT_PAGE";
export const PREV_PAGE = "PREV_PAGE";
export const RESET_PAGE = "RESET_PAGE";

export const SEARCH = "SEARCH";

export const YEAR_ASC = "YEAR_ASC";
export const YEAR_DESC = "YEAR_DESC";
export const YEAR_RESET = "YEAR_RESET";

export const FILTER_DRAMA = "FILTER_DRAMA";
export const FILTER_ROMANCE = "FILTER_ROMANCE";
export const FILTER_HORROR = "FILTER_HORROR";
export const FILTER_THRILLER = "FILTER_THRILLER";
export const FILTER_COMEDY = "FILTER_COMEDY";

export function filterDrama() {
  return {
    type: FILTER_DRAMA,
  };
}

export function filterRomance() {
  return {
    type: FILTER_ROMANCE,
  };
}

export function filterHorror() {
  return {
    type: FILTER_HORROR,
  };
}
export function filterThriller() {
  return {
    type: FILTER_THRILLER,
  };
}

export function filterComedy() {
  return {
    type: FILTER_COMEDY,
  };
}

export function yearAsk() {
  return {
    type: YEAR_ASC,
  };
}
export function yearDesc() {
  return {
    type: YEAR_DESC,
  };
}
export function yearReset() {
  return {
    type: YEAR_RESET,
  };
}

export function searchInput(search: string) {
  return {
    type: "SEARCH",
    payload: search,
  } as const;
}

export function nextPage() {
  return {
    type: "NEXT_PAGE",
  };
}
export function prevPage() {
  return {
    type: "PREV_PAGE",
  };
}

export function resetPage() {
  return {
    type: "RESET_PAGE",
  };
}

export default {
  resetPage,
  prevPage,
  nextPage,
  searchInput,
  yearAsk,
  yearDesc,
  yearReset,
  filterComedy,
  filterDrama,
  filterHorror,
  filterRomance,
  filterThriller,
};

export type Actions = ReturnType<typeof searchInput>;
