import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };

  // do not need to use arrow function for lifecycle methods
  componentDidMount() {
    //console.log('componentDidMount...');
    // Generally use for http calls to API or fetching data from within component to state.

    // fetching a json file
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      //.then(data => console.log(data));
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  //Deprecated
  // componentWillMount(){
  //   console.log('componentWillMount...');
  // }

  // componentDidUpdate(){
  //   console.log('componentDidUpdate...');
  // }

  //Deprecated
  // componentWillUpdate(){
  //   console.log('componentWillUpdate...');
  // }

  //Deprecated because React is becoming asynchronous nature -in order to use add UNSAFE_
  //Or use static getDerivedStateFromProps(nextProps, prevState)
  // UNSAFE_componentWillReceiveProps(nextProps, nextState){
  //   console.log('componentWillReceiveProps');
  // }

  // static getDerivedStateFromProps(nextProps, prevState){
  // cannot use this.setState(); Need to return state.
  //   return {
  //     test: 'something'
  //   };
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState){
  //   console.log('getSnapshotBeforeUpdate...');
  // }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
