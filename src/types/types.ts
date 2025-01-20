export type EventType =
  | 'PushEvent'
  | 'PullRequestEvent'
  | 'IssuesEvent'
  | 'CreateEvent'
  | 'DeleteEvent'
  | 'All';

export interface Event {
  id: string;
  type: EventType;
  actor: {
    login: string;
    avatar_url: string;
  };
  repo: {
    name: string;
  };
  created_at: string;
  payload: any;
}
