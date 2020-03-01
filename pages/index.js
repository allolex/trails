import TrailCollection from '../components/trails';

class Guide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guides: [
        {id: 1, name: "Local Trail Guide"},
        {id: 2, name: "AT Guide"},
        {id: 3, name: "PCT Guide"},
        {id: 4, name: "John Muir Guide"},
        {id: 5, name: "Oso Ridge Trail Guide"}
      ]
    }
  }

  render() {
    const guides = this.state.guides;

    return (
      <TrailCollection trails={guides} />
    )
  }
}

export default Guide;
