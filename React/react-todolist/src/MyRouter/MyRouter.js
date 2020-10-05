import React from 'react';

const pathMatch = (path, exact) => {
    const locationPath = window.location.pathname;
    if (exact) {
        return locationPath === path;
    }
    return locationPath.includes(path);
}

export class MyRoute extends React.Component {

    render() {
        const { path, children, exact = false, component, render } = this.props;
        // console.log(window.location.pathname)
        // console.log(path)
        if (pathMatch(path, exact)) {
            if (component) {
                // console.log(component)
                return React.createElement(component, {}, null)
            }
            if(render){
                // return React.createElement(render, {}, null)
                return render();
            }
            if(children){
                return children;
            }
            
        } else {
            return null;
        }
    }
}

