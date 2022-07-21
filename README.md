 Introduction
Criptic is a Web3 NFT Crypto Dashboard Template built with React , NextJS , TypeScript , and Tailwind CSS .
Navigation
You can find different topics in the table of contents. On desktop, you should see it in the left sidebar. On mobile, you should see it after pressing an icon with Hamberger in the top right corner.
Supported Platforms
Compatible Browsers (Firefox, Safari, Chrome, Edge) Node.js 16.15.1 or later
MacOS, Windows (including WSL), and Linux are supported
Requirements
node(16.15.1 or later)
yarn
editor: VS code (recommended)
Installation
For getting started with the template you have to follow the below procedure: Open project directory and run below command.
This will start the server at http://localhost:3000. Open http://localhost:3000 to view it in the browser.
Available Scripts:
You can run below commands in the root folder for your need.
           yarn yarn dev
     "clean": "rimraf \"{node_modules,.next,out.cache}\"",
"dev": "next dev",
"build": "next build",
"start": "next start",
"lint": "next lint",
"prepare": "husky install"

 tailwind.config.js /public favicon images
/src/components drawer-views
modal-views icons
/src/data
/src/lib
/src/pages
/src/types
          header,
    sidebar, container and etc
     constants, hooks, framer motion & general utils
   functions
     Technologies we used
NextJs Typescript Tailwind CSS Next SEO Jotai Recharts web3modal
For customizing the template's default site settings:
To customize tailwind configuration go to -> file. : To change your app here.
/src/assets : We managed our css & images in this directory.
: This folder contains all the app related components.
: We managed all of our side Drawer's view, context api & drawer UI in : We managed all of our modal's view, context api & modal UI in this
folder.
: Our app's custom svg icons components directory, if you need any then add
your custom svg icon components here.
ui : This folder contains common reusable ui components.
/src/config : This folder contains all necessary configuration related for this app. : It's contain all of our app's static data.
/src/layout : It's contain all layouts and layout's related components like .
: This folder contains
.
For Adding a custom Icon:
To add a custom icon please follow this procedure.
1. Open your custom SVG icon file in the code editor and copy all the code.
2. Then Go to src -> components -> icons folder and create a new .tsx file.
3. Then here create a function component and paste your copied SVG code inside the return
statement.
4. Then covert all the SVG's kebab-cases properties into camelCase format except the data-
name property. For ex. change the stroke-width and fill-color into strokeWidth and fillColor. (for reffernce you can see one of our icon. )
        this folder.
  : All the pages created here which is used by nextjs routing mechanism. : Reusable function & component's types are located in this folder.
 
 5. If your custom SVG code has any single custom color then change them into fillColor.
New Static Page
Out template is built React and NextJS framework. So all the existing pages are available to this location. You can create new pages from:
You can use the NextJS routing feature for the new pages. Check these official NextJS docs for pages and routing,
https://nextjs.org/docs/basic-features/pages https://nextjs.org/docs/routing/introduction
In this template, We have used some custom helper functions which is located in
[your-frontend-project]/src/utils/
You can use or customize these helper fuctions according to your needs.
Vercel Deployment
Check out Next.js deployment documentation for more details. deploy
SEO
For SEO, we use Next SEO packages check Next SEO docs to use SEO on your site, https://github.com/garmeeh/next-seo
We have not used any analytics integration in this template yet. But, you can easily integrate any analytics using Next JS examples.
Support
There are some basic requirements for our application so that support team can help you quick such as,
1. Asking queries regarding feature that is already implemented in the application
2. Following recommended configuration, environments & server which you need to met first
before you proceed with installation, deployment in your server to receive support.
3. Support query need to be within Envato item support policy. (https://themeforest.net/page/i
   criptic/src/pages
           tem_support_policy)
 
 4. You should maintain only one support ticket at a time. Creating multiple ticket can cause unexpected delays.
5. Ticket should provide as much details as possible related to the issue such as screenshot, video explanation, access, how to reproduce, environments, if any changes or customisations are made etc
During working days our ticket response can take 24 hours to 48 hours depending on the volume of tickets pending prior to your ticket . We follow Envato Item support policy https:// themeforest.net/page/item_support_policy to provide standard support for our items
   
