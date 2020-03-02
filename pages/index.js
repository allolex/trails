import TrailCollection from '../components/trails';

class Guide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guides: [
        {id: 1, name: "Local Trail Guide", description: "Some description"},
        {id: 2, name: "AT Guide", description: "Some description"},
        {id: 3, name: "PCT Guide", description: "Some description"},
        {id: 4, name: "John Muir Guide", description: "Some description"},
        {id: 5, name: "Oso Ridge Trail Guide", description: "Some description"}
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
