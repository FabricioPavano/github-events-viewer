import { useState } from 'react'
import { EventType } from '../types/types'

interface SearchFormProps {
  onSearch: (owner: string, repo: string, eventType: EventType) => void;
}

export default function SearchForm({ onSearch }: SearchFormProps) {
  const [owner, setOwner] = useState('')
  const [repo, setRepo] = useState('')
  const [eventType, setEventType] = useState<EventType>('All')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(owner, repo, eventType)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Owner"
        value={owner}
        onChange={(e) => setOwner(e.target.value)}
      />
      <input
        type="text"
        placeholder="Repository"
        value={repo}
        onChange={(e) => setRepo(e.target.value)}
      />
      <select 
        value={eventType} 
        onChange={(e) => setEventType(e.target.value as EventType)}
      >
        <option value="All">All Events</option>
        <option value="PushEvent">Push</option>
        <option value="PullRequestEvent">Pull Request</option>
        <option value="IssuesEvent">Issues</option>
        <option value="CreateEvent">Create</option>
        <option value="DeleteEvent">Delete</option>
      </select>
      <button type="submit">Search</button>
    </form>
  )
}
