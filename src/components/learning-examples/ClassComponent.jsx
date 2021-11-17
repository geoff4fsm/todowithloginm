import React, { Component } from "react"

// class component
export default class ClassComponent extends Component {
    render() {
      return (
        <div className="firstComponent">
          Class Component
        </div>
      );
    }
}
export class AnotherComponent extends Component {
    render() {
      return (
        <div className="firstComponent">
          Another Component
        </div>
      )
    }
}
