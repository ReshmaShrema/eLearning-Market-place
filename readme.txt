000
initialize a git repositore by 'git init' command
create client and server folder

001
production means ,it is secure,fast ,seo, and build with solid infrastructure

004
install node
check node version
>node --version
initialize node package manager,-y take all the default option 
>npm init -y 
setup next js,react
>npm install next react react-dom
add the following in package.json,for running the app in production and development
  "scripts": {
    "dev":"next dev",
    "build":"next build",
    "start":"next start"
  },
create pages folder and index.js file
index.js will serve as home page
const Index = ()=>{
    return (
        <>
        <h1>Hello world</h1>
        <p>From next.js...</p>
        </>
    )
}
export default Index

005
