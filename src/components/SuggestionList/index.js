import React from "react";

import { Button } from "reactstrap";

const SuggestionList = props => {
  const { suggestListSearch } = props;

  return suggestListSearch.map(item => {
    return (
      <Button onClick={() => props.handleSuggestClick(item.name)} color="info">
        {item.name}
      </Button>
    );
  });
};

export default SuggestionList;
