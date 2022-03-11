import react, { Component, component } from "react";
import axios from "axios";

class Ajaxtest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => this.setState({ posts: response.data })
      ).catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Title</td>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((itm, k) => {
              return (
                <tr>
                  <td>{itm.id}</td>
                  <td>{itm.title}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Ajaxtest;
