import {PureComponent} from 'react';

import HOME from './home';
import INSTALLATION from  './installation';
import IMAGES from './images';
import LINKS from './links';
import ss from './index.css';


export default class Home extends PureComponent {
  constructor() {
    super();

    this.state = {
      active: 'home'
    }

    this.renderComponent = this.renderComponent.bind(this);
  }

  renderComponent(value) {
    this.setState({
      active: value
    })
  }

  render() {
    const {active} = this.state;
    let comp = <div><HOME /></div>;

    if (active === "images") {
      comp = <IMAGES />;
    } else if(active === "installation") {
      comp = <INSTALLATION />;
    } else if(active === "links") {
      comp = <LINKS />;
    }

    return (
      <div>
        <style dangerouslySetInnerHTML={{__html:ss}}></style>
        <div className="sidenav">
          <button onClick={() => this.renderComponent('home')} >Home</button>
          <button onClick={() => this.renderComponent('installation')} >Installation</button>
          <button onClick={() => this.renderComponent('images')} >Images</button>
          <button >Containers</button>
          <button onClick={() => this.renderComponent('links')} >Useful links</button>
        </div>
        <div className="component">
          {comp}
        </div>
      </div>
    );
  }
}
