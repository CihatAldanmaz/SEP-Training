import React from 'react';

const MyRouteInstances = [];

const pathMatch = (path, exact) => {
  const locationPath = window.location.pathname;
  if (exact) {
    return locationPath === path;
  }
  return locationPath.includes(path);
};

export class MyRoute extends React.Component {
  render() {
    const { path, children, exact = false, component, render } = this.props;
    if (pathMatch(path, exact)) {
      if (component) {
        return React.createElement(component, {}, null);
      }
      if (render) {
        return render();
      }
      if (children) {
        return children;
      }
    }

    return null;
  }

  componentDidMount() {
    MyRouteInstances.push(this);
    window.addEventListener('popstate', () => {
      this.forceUpdate();
    });
  }
}

export class MyLink extends React.Component {
  handleClicked = (e) => {
    e.preventDefault();
    window.history.pushState({}, '', this.props.to);
    MyRouteInstances.forEach((instance) => {
      instance.forceUpdate();
    });
  };

  render() {
    const { to, children } = this.props;
    return (
      <a href={to} onClick={this.handleClicked}>
        {children}
      </a>
    );
  }
}
