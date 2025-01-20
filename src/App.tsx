import { useState } from 'react'
import { fetchRepositoryEvents } from './services/api'
import SearchForm from './components/searchForm'
import { EventType, GithubEvent } from './types/types'




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
        {events.map((event) => (
          <div key={event.id}>
            <p>{event.type} by {event.actor.login} in {event.repo.name}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
