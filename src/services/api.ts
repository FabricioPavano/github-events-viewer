import { Event, EventType } from '../types/types';

const BASE_URL = 'https://api.github.com';

export const fetchRepositoryEvents = async (
  owner: string,
  repo: string,
  eventType: EventType
): Promise<Event[]> => {
  try {
    const response = await fetch(`${BASE_URL}/repos/${owner}/${repo}/events`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch events');
    }

    const events: Event[] = await response.json();
    
    return eventType === 'All' 
      ? events 
      : events.filter((event) => event.type === eventType);
      
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};
