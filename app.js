












const fetchApi = new FetchApi('http://localhost:3000')

async function displayPosts() {
  const postsServer = await fetchApi.getPosts();

  const listPost = [];
  for (let i = 0; i < postsServer.length; i++) {
    const postServer = postsServer[i];
    const post = new Post(
      postServer.id,
      postServer.author,
      postServer.date,
      postServer.title,
      postServer.text
    );

    listPost.push(post)
  }

  // afisam posturile in HTML
  for (let i = 0; i < listPost.length; i++) {
    // obtinem reprezentarea postului din HTML
    const postNode = listPost[i].displayShort();
    document.getElementById('listOfPost').appendChild(postNode);
  }
}
displayPosts();



























// const apiurl = new FetchApi('http://localhost:3000');

// console.log('raspuns: ', apiurl);

// async function displayPosts() {
//     const postsServer = await FetchApi.getPosts();


//     const commentList = [];


//     for(i=0; i< postsServer.length; i++) {

//     const serverPosts = postsServer[i];

//     const  post = new Post(
//         serverPosts.id,
//         serverPosts.author,
//         serverPosts.text,
//         serverPosts.date,
//         serverPosts.title

//     );

//     commentList.push(post)
//         console.log(post);

//     }    

//     for(let i = 00; i < commentList.length; i++) {
//         const postNode = commentList[i].displayShort();
//         document.getElementById('listOfPost').appendChild(postNode);
//     }
// };

// displayPosts();











































// /*// post, comment
// // aici cream un obiect cu ajutorul clasei Post
// const post1 = new Post(1, "alex", "12/03/2020", "Titlu 1", "buna, primul post");
// const post2 = new Post(1, "razvan", "12/03/2020", "Titlu 2", " buna, a doi lea post");

// const com1 = new Comment(1, "razvan", "foarte tare")
// const com2 = new Comment(2, "alex", "foarte rau")

// // adaugam comment la un obiect post
// post1.addCommentToList(com1)
// post2.addCommentToList(com2)

// const listPost = [post1, post2]

// // afisam posturile in HTML
// for (let i = 0; i < listPost.length; i++) {
//     // obtinem reprezentarea postului din HTML
//     const postNode = listPost[i].display();
//     document.getElementById('listOfPost').appendChild(postNode);
// }*/
