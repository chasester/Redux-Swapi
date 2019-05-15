import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getCharacters} from "../actions/index"
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getCharacters();
  }

  render() {
    if (this.props.isfetching) {
      // return something here to indicate that you are fetching data
      return <div style={{background: "#22222222", padding: "20px"}}>Loading....</div>
    }
    else if(this.props.error !== "")
    {
      console.log(this.props.error);
      return <div style={{background: "red", padding: "20px"}}>{this.props.error.message}</div>
    }
    return ( 
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state =>
{
  return {
    characters: state.charsReducer.characters,
    isfetching: state.charsReducer.isfetching,
    error: state.charsReducer.error
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    getCharacters
  }
)(CharacterListView);
