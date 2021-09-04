# Linkedin Clone - Course by Sonny Sangha [here](https://www.youtube.com/watch?v=tbvguOj8C-o)
## Live site [here](https://linkedin-clone-3645e.web.app/)
### Node 14.17.6
### Firebase ^8.2.0

## **--Notes from Sonny--**
  - ## **-- "React Context API is great, but REDUX is what's used in production. USE REDUX."**


## Tools Used
- **npx create-react-app linkedin-clone --template redux**
- Install Firebase
    - **npm install -g firebase-tools**
- Install Material UI Core and Icons
    - **npm install @material-ui/core**
    - **npm install @material-ui/icons**
        - Search Material UI Icons
            - https://material-ui.com/components/material-icons/
- Install React Flip Move
    - **npm install --save react-flip-move**
        - nice animations for list components (user posts)
        - https://joshwcomeau.github.io/react-flip-move/

## Things I Added
- ### Complete Mobile View Makeover
- ### Added Date & Time to user posts
    - Take the Firebase timestamp property from the user post

    File: Feed.js
        ...
        ...
        function convertTimestamp(timestamp) {

            const newTimestamp = new Date(timestamp.toDate()).toUTCString();
            
            return newTimestamp;
        }
        ...
        ...
        {/* FEED POSTS */}
                {posts.map(({id, data: { name, description, message, photoUrl, timestamp }}) => (
                    

                    <Post  
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                        timestamp={convertTimestamp(timestamp)}
                    />
                ))}

# Screenshot Reference
![linked-in-clone-screenshot](https://github.com/kawgh1/linkedin-clone/blob/main/linkedin-clone-screenshot1.png)

- ## Issues
    - Had a little trouble with this line
    - **timestamp: firebase.firestore.FieldValue.serverTimestamp()** in Feed.js
  
            const sendPost = event => {
                    
                    db.collection('posts').add({
                        ...
                        ...
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    });

            }

        - **Did not realize that line was the problem for some time**
        - Getting error
            **./src/Feed.js
            Module not found: Can't resolve 'firebase' in 'C:\Users\username\Desktop\linkedin-clone\src'**
    - **Nothing** to do with the Firebase version installed, Node or installing Firebase in the 'project/src' folder
    - **Solution:** In Feed.js, change
        - import firebase from 'firebase' to
        - **import firebase from 'firebase/app'**
        - I believe the problem was I was trying to call getTimestamp() from firebase itself and not my particular app
        - [reference](https://stackoverflow.com/questions/65658510/export-firestore-imported-as-firebase-was-not-found-in-firebase-after-up)
    

- ## Code Snippets
    - ### **Grabbing the user posts from Firestore and passing them into State within our app as an array [] of posts**
        - #### Comments
            - useEffect fires code when the Feed Component loads and whenever the Feed Component re-renders, *IF* we don't pass in a second argument
            - if we pass in an empty array [], as second arg, then useEffect only fires on initial load and never again
            - then take those posts as a SNAPSHOT from the firestore database and pass them into our App's state with setPosts()
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
    
    ### - Grabbing user post input and setting to State, while adding the new Post to Firestore database

    File: Feed.js

        function Feed () {

            ...
            const [input, setInput] = setState('');
            ...
            const sendPost = (event) => {
                    event.preventDefault();

                    db.collection('posts').add({
                        name: 'Sonny Sangha',
                        description: 'this is a test',
                        message: input,
                        photoUrl: '',
                        timestamp: firebase.firestore.fieldValue.serverTimestamp()
                    });

            }
            ... 
            <input value={input} onChange={event => setInput(event.target.value)} type='text' />
            ...
        }