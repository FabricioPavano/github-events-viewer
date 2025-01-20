import { GithubEvent } from '../types/types'

interface EventListProps {
  events: GithubEvent[]
}

export default function EventList({ events }: EventListProps) {
  return (
    <div>
      {events.map((event) => (
        <div key={event.id}>
          <p>{event.type} by {event.actor.login} at {new Date(event.created_at).toLocaleString()}</p>
        </div>
      ))}
    </div>
  )
}
