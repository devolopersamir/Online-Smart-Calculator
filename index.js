      });
    } else if (isOperator.test(this.state.curVal)) {
      this.setState({
        curVal: "0.",
        formula: this.state.formula + "0."
      });
    } else if (!hasDecimal.test(this.state.curVal)) {
      this.setState({
        curVal: this.state.curVal + ".",
        formula: this.state.formula + "."
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="calc-container">
          <div className="header-wrapper">
            {" "}
            <div className="calc-name">       DEVOLOPER SAMIR</div>
            <div className="solar">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="display-wrapper">
            <div className="formula">
              {String(this.state.formula).substring(0, 21)}
            </div>
            <div id="display" className="display">
              {String(this.state.curVal).substring(0, 15)}
            </div>
          </div>
