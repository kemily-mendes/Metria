import { HeaderOverview } from './components/Header'
import { SummaryCards } from './components/SummaryCards'

export function Home() {
    return (
        <div className='flex flex-col gap-6'>
            <HeaderOverview />
            <SummaryCards />
        </div>
    )
}