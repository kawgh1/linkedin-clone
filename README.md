# Linkedin Clone - Course by Sonny Sangha [here](https://www.youtube.com/watch?v=tbvguOj8C-o)

- **npx create-react-app linkedin-clone --template redux**
- Install Firebase
    - **npm install -g firebase-tools**
- Install Material UI Core and Icons
    - **npm install @material-ui/core**
    - **npm install @material-ui/icons**
        - Search Material UI Icons
            - https://material-ui.com/components/material-icons/

# Screenshot Reference
![linked-in-clone-screenshot](https://github.com/kawgh1/linkedin-clone/blob/main/linkedin-clone-screenshot1.png)

- ## Code Snippets
    - ### **Grabbing the user posts from Firestore and passing them into State within our app as an array [] of posts**
        - #### Comments
            - useEffect fires code when the Feed Component loads and whenever the Feed Component re-renders, *IF* we don't pass in a second argument
            - if we pass in an empty array [], as second arg, then useEffect only fires on initial load and never again
            - then take those posts as a SNAPSHOT from the database and pass them into our App's state with setPosts()
            - snapshot.docs.map((doc) => ( ...) open parenthesis means implicit return -> return what ever is mapped over


                File: Feed.js

                    function Feed() {

                        const [posts, setPosts] = useState([]);

                        useEffect(() => {
                            
                                db.collection('posts').onSnapshot((snapshot) => 
                                                
                                    setPosts(snapshot.docs.map((doc) => (       
                                        {
                                            id: doc.id,
                                            data: doc.data()
                                        }
                                    ))
                                ));
                        }, []); 

                        ...
                    }