import { Component } from "react";
import CardComponent from "../card-component/card.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return <CardComponent monsters={monsters} />;
  }
}
export default CardList;
