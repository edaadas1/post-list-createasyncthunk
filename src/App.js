import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./redux/reducers/postSlice";
import PostCard from "./components/PostCard";


function App() {

  const dispatch = useDispatch();

  const {posts} = useSelector(state=>state.posts)

  console.log("posts",posts)

  useEffect(()=>{
    dispatch(getPosts())
  },[dispatch])

  return (
    <div className="App">
        <PostCard posts={posts}></PostCard>
    </div>
  );
}

export default App;
