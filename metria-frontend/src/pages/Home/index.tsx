import { HeaderOverview } from './components/HeaderHome'
import { SummaryCards } from './components/SummaryCards'

export function Home() {
    return (
        <div className='flex flex-col gap-6'>
            <HeaderOverview />
            <SummaryCards />
        </div>
    )
}