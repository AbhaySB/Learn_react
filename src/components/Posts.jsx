import axios from "axios";
import { useEffect, useState } from "react";
export default function Posts() {
  function getposts() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((data) => {
      setPost(data.data);
    });
  }

  const [posts, setPost] = useState();

  useEffect(() => {
    if (!posts) getposts();
  });

  return (
    <div>
      {posts?.map((e)=> <Post title={e.title} sno={e.id} desc={e.body}/>)}
    </div>
  );

  function Post(props) {
    return (
      <div className="m-3">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
                {props.sno} {props.title}
            </h5>
          </div>

          <div
            id="collapseOne"
            class="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div class="card-body">
              {props.desc}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
