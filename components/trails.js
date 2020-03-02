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
      <TrailTitle value={props.value} />,
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
          <Trail key={trail.id} value={trail.name} description={trail.description} />
        )
      })
    ]
  )
}

export default TrailCollection;
