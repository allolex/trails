class TrailTitle extends React.Component {
  render() {
    return(
      <h3>{this.props.value}</h3>
    )
  }
}

class TrailDescription extends React.Component {
  render() {
    return (
      <p>
        {this.props.value}
      </p>
    )
  }
}

class Trail extends React.Component {
  render() {
    return (
      [
        <TrailTitle value={this.props.value} />,
        <TrailDescription value={this.props.description} />
      ]
    )
  }
}

class TrailCollection extends React.Component {
  render() {
    const trails = this.props.trails;

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
}

export default TrailCollection;
