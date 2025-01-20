import { GithubEvent } from '../types/types'
import './EventList.css'
interface EventListProps {
  events: GithubEvent[]
}

export default function EventList({ events }: EventListProps) {
  const getEventDescription = (event: GithubEvent) => {
    switch (event.type) {
      case 'PushEvent':
        return `pushed ${event.payload.commits?.length || 0} commits`
      case 'PullRequestEvent':
        return `${event.payload.action} a pull request`
      case 'IssuesEvent':
        return `${event.payload.action} an issue`
      case 'CreateEvent':
        return `created a ${event.payload.ref_type || 'repository'}`
      case 'DeleteEvent':
        return `deleted a ${event.payload.ref_type}`
      default:
        return `performed a ${event.type}`
    }
  }

  return (
    <div className="event-list">
      {events.map((event) => (
        <div key={event.id} className="event-item">
          <img src={event.actor.avatar_url} alt="" className="avatar" />
          <a 
            href={`https://github.com/${event.actor.login}`} 
            target="_blank"
          >
            <strong>{event.actor.login}</strong>
          </a>
          {' '}{getEventDescription(event)}
          <div className="timestamp">
            on {event.repo.name} at {new Date(event.created_at).toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  )
}
