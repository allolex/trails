function TrailTitle(props) {
  return (
    <h3>{props.value}</h3>
  )
}

function TrailDescription(props) {
  return (
    <p>
      {props.value}
    </p>
  )
}

function Trail(props) {
  return (
    [
      <TrailTitle key={props.id} value={props.value} />,
      <TrailDescription value={props.description} />
    ]
  )
}

function TrailCollection(props) {
  const trails = props.trails;

  return (
    [
      <h1>Trail Collection</h1>,
      trails.map((trail) => {
        return (
          <Trail key={trail.id} value={trail.name} />
        )
      })
    ]
  )
}

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
