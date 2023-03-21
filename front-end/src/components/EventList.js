import { Link } from 'react-router-dom';
import classes from './EventList.module.css';

const EventList = ({ events }) => {
  return (
    <div className={classes.events}>
      <h1>All Event</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id} className={classes.item}>
            <Link to={event.id}>
            <img src={event.image} alt={event.title} />
            <div className={classes.content}>
              <h2>{event.title}</h2>
              <time>{event.date}</time>
            </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
