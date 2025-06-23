const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path');
const app = express();
const PORT = 3000;

// Set Handlebars engine
app.engine('hbs', exphbs.engine({
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, 'views/partials')
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Data context object goes here:
const context = {
  title: "WEBS",
  logo: "assets/logo.png",
  links: [
    { label: "Home", url: "#" },
    { label: "Workshops", url: "#" },
    { label: "Kits", url: "#" },
    { label: "Contact", url: "#" }
  ],
  posts: [
    {
      title: "Post One",
      subtitle: "Welcome to WEBS!",
      author: "Jane Doe",
      date: "June 22, 2025",
      datetime: "2025-06-22",
      image: "/assets/images/post1.jpg",
      url: "#",
      content: "This is the first blog post. It talks about how awesome WEBS is.",
      likes: 15,
      comments: 3,
      category: "General",
      avatar: "/assets/images/avatar.jpg"
    }
  ]
};

// ✅ Use context when rendering the view
app.get('/', (req, res) => {
  res.render('home', context);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
