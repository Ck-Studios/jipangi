import * as React from "react";
import Card from "main/components/card/Card";

export const CardList = (id) => (
  <ul className="card-list">
    {/*{cardData.map(card => (*/}
    {/*  <Card*/}
    {/*    key={card.id}*/}
    {/*    isSelected={parseInt(id) === 1}*/}
    {/*    {...card}*/}
    {/*  />*/}
    {/*))}*/}
  </ul>
);

export default CardList;

// export const CardList = () => (
//   <Router>
//     <Route path={["/:id", "/"]} component={List} />
//   </Router>
// );
