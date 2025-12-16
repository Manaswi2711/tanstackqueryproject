import { Counter } from '@/components/Counter'
import Products from '@/components/products'
import Todolist from '@/components/Todolist'
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/')({ component: App })

function App() {
return(
  <div>
    <Counter></Counter>
    <Todolist></Todolist>
    <Products></Products>
  </div>
)
}
