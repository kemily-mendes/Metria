import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/transactionHistory')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/transactionHistory"!</div>
}
