# Linkedin Clone - Course by Sonny Sangha [here](https://www.youtube.com/watch?v=tbvguOj8C-o)
## Node 14.17.6
## Firebase 9.0.1

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

- ## Issues
    - Had a little trouble with this line
    - **timestamp: firebase.firestore.FieldValue.serverTimestamp()** in Feed.js
    - - **Did not realize that line was the problem for some time**
        - Getting error
            ./src/Feed.js
            Module not found: Can't resolve 'firebase' in 'C:\Users\--\Desktop\linkedin-clone\src'
    - **Nothing** to do with the Firebase version installed, Node or installing Firebase in the 'project/src' folder
    - **Solution:** In Feed.js, change
        - import firebase from 'firebase' to
        - **import firebase from 'firebase/app'
        - I believe the problem was I was trying to call getTimestamp() from firebase itself and not my particular app
    

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