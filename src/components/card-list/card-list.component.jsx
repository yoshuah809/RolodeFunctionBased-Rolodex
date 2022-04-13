import CardComponent from "../card-component/card.component";
import "./card-list.styles.css";

export const Cardlist = ({ monsters }) => {
  return <CardComponent monsters={monsters} />;
};

export default Cardlist;
