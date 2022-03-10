const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');


const posts = [
  {
    title: "EJS",
    body: "EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. No religiousness about how to organize things. No reinvention of iteration and control-flow. It's just plain JavaScript.",
  },
  {
    title: "Node JavaScript",
    body: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.",
  },
  {
    title: "Express JavaScript",
    body: "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
  },
  {
    title: "APIs",
    body: "APIs let your product or service communicate with other products and services without having to know how they are implemented. This can simplify app development, saving time and money. When you are designing new tools and products—or managing existing ones—APIs give you flexibility; simplify design, administration, and use; and provide opportunities for innovation.",
  },
];

const user = {
  firstName: 'Evans',
  lastName: 'Kipngetich',
  admin: true
};

//Home Route
app.get('/',function(req,res) {
  res.render('pages/index', { user, title: 'Home Page'});
});

//About Route
app.get("/about", function (req, res) {
  res.render("pages/about", { user, title: "About" });
});

//Articles Route
app.get('/articles', (req, res) => {
  res.render('pages/articles', {articles:posts, title: 'Articles'});
});


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});