import { createFileRoute } from '@tanstack/react-router'
import Todolist from './Todolist'

export const Route = createFileRoute('/Todolist/')({
  component: Todolist,
})


