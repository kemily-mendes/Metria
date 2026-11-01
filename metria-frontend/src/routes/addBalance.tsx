import { createFileRoute } from '@tanstack/react-router'
import { AddBalance } from '../pages/Add Balance'

export const Route = createFileRoute('/addBalance')({
  component: AddBalance,
})
