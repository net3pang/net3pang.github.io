var posts=["2025/06/10/hello-world/","2025/06/10/初见hexo/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };