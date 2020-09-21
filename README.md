## Installation

N.B. Checkout our docs for more details.

This section assume that you already **downloaded the picksy file from Themeforest** and open it in your favorite editor.

Before you proceed in this section make sure you completed previous steps that is,

1. Setup Shopify
2. Setup Prismic

Make sure you have provided necessary information in the .env.development and .env.production file.

#### Development

Run below commands for Development,

1. yarn
2. yarn develop

after successful development you should see the url where your local server is running along with the graphql playground,

**Local server url should be:** [http://localhost:8000/](http://localhost:8000/)

**Local graphql server url shoul be:** [http://localhost:8000/\_\_\_graphql](http://localhost:8000/___graphql)

####

#### Production

Run below commands for Production

1. yarn
2. yarn build
3. yarn serve

NB: To clean .cache, public directory run the below command

1. yarn clean

After Yarn Serve command you should be able to see your site in production mode in this url: \*\*[http://localhost:9000/](http://localhost:8000/)
