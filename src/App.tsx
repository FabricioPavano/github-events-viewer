import { useState } from 'react'
import { fetchRepositoryEvents } from './services/api'
import SearchForm from './components/SearchForm'
import { EventType, GithubEvent } from './types/types'
import EventList from './components/EventList'




function App() {

  const [events, setEvents] = useState<GithubEvent[]>([])

  const handleSearch = async (owner:string, repo: string, eventType: EventType) => {
    try {
      const events = await fetchRepositoryEvents(owner, repo, eventType)
      setEvents(events)
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <>
      <SearchForm onSearch={ handleSearch } />

      <div>
        <EventList events={events} />
      </div>
    </>
  )
}

export default App
