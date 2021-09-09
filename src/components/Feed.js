import React, { useState,useEffect } from "react";
import "./css/Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "./Post";
import {db} from '../firebase/firebase'
import { collection, addDoc,serverTimestamp,orderBy,query,onSnapshot } from "firebase/firestore"; 
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move'

function Feed() {
  const [input,setInput] = useState('')
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);
  // Function to Get Data from Firestore
  const getData = async ()=>{
    const q = await query(collection(db, "posts"), orderBy("timeStamp",'desc'));
    onSnapshot(q, (querySnapshot) => {
        setPosts(querySnapshot.docs.map((doc)=>{
            return {
                id: doc.id,
                data:doc.data()
            }
        }))
        
      });
  }

  useEffect(()=>{
    getData()
  },[])


  const sendPost = async (e) =>{
    e.preventDefault();
    // Send data to firestore
    try {
        const docRef = await addDoc(collection(db, "posts"), {
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timeStamp: serverTimestamp()
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input value={input} onChange={(e)=> setInput(e.target.value)} type="text" />
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0C8CD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>


      <FlipMove>
      {/* Posts */}
      {posts.map(({id,data: {name,description,message,photoUrl} })=>(
          <Post 
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
          
          ))}
          </FlipMove>
    </div>
  );
}

export default Feed;
