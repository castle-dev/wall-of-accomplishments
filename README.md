### Getting Started

Install **node.js**.

After that, clone this repo (`git clone https://github.com/castle-dev/wall-of-accomplishments.git`), open the folder (`cd wall-of-accomplishments`), and install the dependencies:

    $ npm install
    $ bower install
    $ grunt serve

You are now ready to go, your application is available at **http://127.0.0.1:9000**.

###Deploying to gh-pages

When you are ready to build a production release there is a task for that:

    $ grunt serve:dist

This task will lint your code, optimize css, js, and images files. After the task has successfully finished, you can find an optimized version of your project inside the  `/dist` folder.

To deploy to gh-pages: move `/dist` outside the repo and checkout the gh-pages branch. Remove all files, and copy `/dist` to root, and push.

The new version of the app will be found at http://wallofaccomplishments.com.
