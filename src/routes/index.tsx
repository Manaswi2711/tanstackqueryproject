import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/')({ component: App })

function App() {
return(
  <div>
     <b><h1 className='text-2xl text-blue-500 text-center m-2 p-2'>WELCOME TO HOME PAGE...</h1></b>
  </div>
)
}
