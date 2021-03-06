import React, { Component } from 'react';
import ImTokenDevice from '../Devices/ImToken';
import Typo from '../../../../../@hzbdesign/typo';

export default class ImImToken extends Component {
  static displayName = 'ImImToken';
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="pt50">
        <div className="row justify-content-center">
          <div className="col-auto d-flex align-items-center" style={{textAlign:'left'}}>
            <div className="text-center">
              <div className="fs40 color-white">Loopr Wallex</div>
              <div className="fs20 color-white-2">a web DEX + a web wallet</div>
              <div hidden className="pt5 pb5 text-left">
                <div className="fs14 pb5 color-grey-500">
                  ☉ Open sourced at 2018.07
                </div>
                <div className="fs14 pb5 color-grey-500">
                  ☉ Easy to customize UI theme
                </div>
                <div className="fs14 pb5 color-grey-500">
                  ☉ Trading without touching you privatekey
                </div>
                <div className="fs14 pb5 color-grey-500">
                  ☉ Walelts Supported: Metamask, Ledger, TREZOR, Loopr, tokenenst
                </div>
              </div>
              <div className="pt10 pb10">
                <Typo.Button href="http://loopr.loopring.io" target="_blank" shape="pill" size="large" className="m5 bg-primary color-white">
                  Try a demo
                </Typo.Button>
                <Typo.Button href="http://loopring.org/developers.html" target="_blank" shape="pill" boder="bordered" size="large" className="m5 bg-primary color-white">
                  Document
                </Typo.Button>
              </div>
            </div>
          </div>
          <div className="col-auto">
            <div className="cd-mac cd-pro cd-center">
              <div className="cd-top"></div>
              <div className="cd-bottom"></div>
              <div className="cd-camera"></div>
              <div className="cd-notch"></div>
              <div className="cd-screen">
                <img src={require('../Devices/products/wallex-loopr/place-order.png')} />
              </div>
            </div>
          </div>

        </div>
        <ImTokenDevice />
      </div>
    );
  }
}

const styles = {
  wrapper: {
    height: "auto",
    backgroundColor: '#fff',
    overflow: 'hidden',
    padding:'100px 0px'
  },
  body: {
    textAlign: 'left',
  },
  title: {
    fontSize: 48,
    color: '#000',
    marginBottom: 20,
    marginTop: 10,
  },
  text: {
    fontSize: 14,
    color: '#666',
    lineHeight: '24px',
    letterSpacing: 2,
  },
  image: {
    margin: '20px auto 0 auto',
    display: 'block',
  },
};
